// Dotted world map for the hero, resolved at BUILD time from Natural Earth's 110m land
// polygons. None of these packages reach the browser: the page gets a static SVG.
// Kept in a module so the point-in-polygon pass runs once per build, not per page.
import { geoContains } from 'd3-geo';
import { feature } from 'topojson-client';
import type { GeometryCollection, Topology } from 'topojson-specification';
import land110 from 'world-atlas/land-110m.json';

/** Equirectangular frame: x = lon + 180, y = 90 - lat. Antarctica and the far north are cropped. */
export const MAP = { step: 2, north: 82, south: -58 } as const;
export const MAP_VIEWBOX = { x: 0, y: 90 - MAP.north, width: 360, height: MAP.north - MAP.south };

export const project = (lat: number, lon: number) => ({ x: lon + 180, y: 90 - lat });

const topology = land110 as unknown as Topology<{ land: GeometryCollection }>;
const land = feature(topology, topology.objects.land);

const points: { x: number; y: number }[] = [];
for (let lat = MAP.north; lat >= MAP.south; lat -= MAP.step) {
  for (let lon = -180 + MAP.step / 2; lon < 180; lon += MAP.step) {
    if (geoContains(land, [lon, lat])) points.push(project(lat, lon));
  }
}

/** One path of zero-length segments; round caps turn each into a dot. */
export const worldDotsPath = points.map(({ x, y }) => `M${x} ${y}h0`).join('');
