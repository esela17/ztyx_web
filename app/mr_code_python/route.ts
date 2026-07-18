import { readFileSync } from 'fs';
import { join } from 'path';
import { NextResponse } from 'next/server';

export async function GET() {
  const htmlPath = join(process.cwd(), 'public', 'mr_code_python', 'index.html');
  const html = readFileSync(htmlPath, 'utf-8');
  
  return new NextResponse(html, {
    headers: {
      'Content-Type': 'text/html; charset=utf-8',
      'Cache-Control': 'no-cache, no-store, must-revalidate',
    },
  });
}
