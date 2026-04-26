import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
);

// Cache wrapper - falls back to memory if no Redis
class CacheManager {
  private cache = new Map<string, { data: any; expiry: number }>();

  async fetch<T>(key: string, fetcher: () => Promise<T>, ttl: number = 1800): Promise<T> {
    // Check memory cache first
    const cached = this.cache.get(key);
    if (cached && cached.expiry > Date.now()) {
      return cached.data as T;
    }

    // Try to fetch from database
    try {
      const data = await fetcher();

      // Store in memory cache
      this.cache.set(key, {
        data,
        expiry: Date.now() + ttl * 1000,
      });

      return data;
    } catch (error) {
      // Return stale cache if available
      if (cached) {
        return cached.data as T;
      }
      throw error;
    }
  }

  async invalidate(pattern: string): Promise<void> {
    // Simple pattern matching - would be more sophisticated with Redis
    const regex = new RegExp(pattern.replace("*", ".*"));
    for (const key of this.cache.keys()) {
      if (regex.test(key)) {
        this.cache.delete(key);
      }
    }
  }

  clear(): void {
    this.cache.clear();
  }
}

export const cache = new CacheManager();

// Type for cached data
export type CachedData = any;