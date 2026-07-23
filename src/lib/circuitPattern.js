// Circuit-board tile (diagonal traces + glowing node dots) used by the
// site-wide SiteBackground overlay.
export const CIRCUIT_TILE = 100;

function buildTile(strokeOpacity, dotOpacity) {
  const t = CIRCUIT_TILE;
  const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${t}" height="${t}" viewBox="0 0 ${t} ${t}">
  <g stroke="#5AC8FA" stroke-opacity="${strokeOpacity}" stroke-width="1">
    <line x1="0" y1="0" x2="${t}" y2="${t}"/>
    <line x1="${t}" y1="0" x2="0" y2="${t}"/>
    <line x1="${t/2}" y1="0" x2="${t}" y2="${t/2}"/>
    <line x1="0" y1="${t/2}" x2="${t/2}" y2="${t}"/>
  </g>
  <g fill="#7DD3FC">
    <circle cx="${t/2}" cy="${t/2}" r="1.8" fill-opacity="${dotOpacity}"/>
    <circle cx="0" cy="0" r="1.4" fill-opacity="${dotOpacity * 0.8}"/>
    <circle cx="${t}" cy="0" r="1.4" fill-opacity="${dotOpacity * 0.8}"/>
    <circle cx="0" cy="${t}" r="1.4" fill-opacity="${dotOpacity * 0.8}"/>
    <circle cx="${t}" cy="${t}" r="1.4" fill-opacity="${dotOpacity * 0.8}"/>
  </g>
</svg>`;
  return encodeURIComponent(svg);
}

export const circuitTileOverlay = buildTile(0.1, 0.22);
