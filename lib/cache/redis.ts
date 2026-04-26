import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

// Use a mock/dummy client if env vars are missing to avoid crashes
const isRedisConfigured = !!process.env.UPSTASH_REDIS_REST_URL && !!process.env.UPSTASH_REDIS_REST_TOKEN;

export const redis = isRedisConfigured 
  ? new Redis({
      url: process.env.UPSTASH_REDIS_REST_URL!,
      token: process.env.UPSTASH_REDIS_REST_TOKEN!,
    })
  : null as any; // Cast to any to avoid type errors in other places, we'll guard it

export const ratelimit = isRedisConfigured 
  ? new Ratelimit({
      redis: redis,
      limiter: Ratelimit.slidingWindow(10, "10 s"),
    })
  : null;

export async function getCached<T>(
  key: string,
  fetcher: () => Promise<T>,
  ttl: number = 3600
): Promise<T> {
  if (!isRedisConfigured) {
    return fetcher();
  }

  try {
    const cached = await redis.get<T>(key);
    
    if (cached) {
      return cached;
    }
    
    const data = await fetcher();
    
    if (data) {
      await redis.set(key, JSON.stringify(data), { ex: ttl });
    }
    
    return data;
  } catch (error) {
    console.warn("Redis cache error:", error);
    return fetcher(); // Fallback to direct fetch on Redis error
  }
}

export async function invalidateCache(pattern: string): Promise<void> {
  if (!isRedisConfigured) return;
  
  try {
    const keys = await redis.keys(pattern);
    if (keys.length > 0) {
      await redis.del(...keys);
    }
  } catch (error) {
    console.warn("Redis invalidate error:", error);
  }
}