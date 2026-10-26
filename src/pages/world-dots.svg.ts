import type { APIRoute } from 'astro';
import { MAP_VIEWBOX, worldDotsPath } from '@/data/worldDots';

// Used as a CSS mask, so the dots take whatever color the theme paints through it.
export const GET: APIRoute = () => {
  const { x, y, width, height } = MAP_VIEWBOX;
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${x} ${y} ${width} ${height}"><path d="${worldDotsPath}" stroke="#000" stroke-width="0.85" stroke-linecap="round"/></svg>`;
  return new Response(svg, { headers: { 'Content-Type': 'image/svg+xml' } });
};
