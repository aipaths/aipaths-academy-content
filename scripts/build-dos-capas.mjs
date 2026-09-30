/**
 * Genera el diagrama "las dos capas" (GON-125) en dos variantes themeables.
 *
 *   dos-capas-landscape.svg  1600x900   — guía web, YouTube, newsletter
 *   dos-capas-vertical.svg   1080x1350  — mobile, Discord
 *
 * Sin logos ni iconos de herramientas. Las capas se distinguen por peso y
 * relleno (contorno arriba, sólido abajo), no por color: sobrevive a grayscale.
 */

import { writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const OUT = process.argv[2] ?? join(dirname(fileURLToPath(import.meta.url)), "out");

// ---------------------------------------------------------------- contenido

const CAPA_ARRIBA = "CAPA DE CONSTRUCCIÓN Y OPERACIÓN";
const CAPA_ABAJO = "CAPA DE EJECUCIÓN · LAS PIEZAS";
const VERBOS = "construye · corrige · supervisa · recuerda";
const VERBOS_2L = ["construye · corrige", "supervisa · recuerda"];

const BLOQUES = [
  { id: "bloque-1", n: "1", corto: "Contexto", lineas: ["Contexto"] },
  { id: "bloque-2", n: "2", corto: "Capacidades", lineas: ["Capacidades"] },
  { id: "bloque-3", n: "3", corto: "División del trabajo", lineas: ["División del", "trabajo"] },
  { id: "bloque-4", n: "4", corto: "Disparadores y control", lineas: ["Disparadores", "y control"] },
];

const PIEZAS = [
  { id: "pieza-whatsapp", corto: "Bot de WhatsApp", lineas: ["Bot de", "WhatsApp"], unaLinea: ["Bot de WhatsApp"], proxima: false },
  { id: "pieza-n8n", corto: "Automatización n8n", lineas: ["Automatización", "n8n"], unaLinea: ["Automatización n8n"], proxima: false },
  { id: "pieza-recordatorios", corto: "Recordatorios de turno", lineas: ["Recordatorios", "de turno"], unaLinea: ["Recordatorios", "de turno"], proxima: false },
  { id: "pieza-proxima", corto: "la próxima pieza", lineas: ["la próxima", "pieza"], unaLinea: ["la próxima pieza"], proxima: true },
];

const TITULO = "Las dos capas: la capa de construcción y operación sostiene a la capa de ejecución";
const DESCRIPCION =
  "Diagrama de dos bandas. Arriba, la capa de construcción y operación con cuatro bloques numerados: " +
  "1 Contexto, 2 Capacidades, 3 División del trabajo, 4 Disparadores y control. " +
  "Una flecha ancha desciende hacia la banda inferior con los verbos construye, corrige, supervisa y recuerda. " +
  "Abajo, la capa de ejecución con tres piezas sólidas — Bot de WhatsApp, Automatización n8n y Recordatorios de turno — " +
  "más una cuarta caja punteada, la próxima pieza, que muestra que cada pieza nueva ya sale barata.";

// ------------------------------------------------------------------ tokens

const SANS = "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif";
const MONO = "ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', monospace";

const LIGHT = {
  canvas: "#ffffff",
  ink: "#0f172a",
  muted: "#64748b",
  line: "#cbd5e1",
  surface: "#f8fafc",
  arrow: "#e2e8f0",
  solid: "#0f172a",
  onSolid: "#f8fafc",
};

const DARK = {
  canvas: "#020817",
  ink: "#f8fafc",
  muted: "#94a3b8",
  line: "#334155",
  surface: "#0f172a",
  arrow: "#1e293b",
  solid: "#e2e8f0",
  onSolid: "#020817",
};

/** `color` alimenta a currentColor: el tema se cambia en un solo lugar. */
const vars = (t) =>
  `color: ${t.ink}; ` +
  Object.entries(t)
    .map(([k, v]) => `--${k}: ${v};`)
    .join(" ");

/** Estilos scopeados al id raíz: no se filtran al documento si el SVG va inline. */
const style = (rootId) => `
    #${rootId} { ${vars(LIGHT)} }
    @media (prefers-color-scheme: dark) { #${rootId} { ${vars(DARK)} } }
    :where(html.dark, .dark) #${rootId} { ${vars(DARK)} }
    :where(html.light, .light) #${rootId} { ${vars(LIGHT)} }

    #${rootId} .canvas   { fill: var(--canvas); }
    #${rootId} .banda    { fill: var(--surface); stroke: var(--line); stroke-width: 2; }
    #${rootId} .banda-b  { fill: none;          stroke: var(--line); stroke-width: 2; }
    #${rootId} .eyebrow  { fill: var(--muted); font-family: ${MONO}; font-weight: 500; letter-spacing: 0.12em; }
    #${rootId} .bloque   { fill: var(--canvas); stroke: currentColor; stroke-width: 3; }
    #${rootId} .num      { fill: currentColor; font-family: ${SANS}; font-weight: 700; font-variant-numeric: tabular-nums; }
    #${rootId} .num-rule { stroke: currentColor; stroke-width: 4; stroke-linecap: square; }
    #${rootId} .rotulo   { fill: currentColor; font-family: ${SANS}; font-weight: 600; }
    #${rootId} .flecha   { fill: var(--arrow); }
    #${rootId} .verbos   { fill: currentColor; font-family: ${MONO}; font-weight: 500; letter-spacing: 0.04em; }
    #${rootId} .pieza    { fill: var(--solid); }
    #${rootId} .pieza-t  { fill: var(--onSolid); font-family: ${SANS}; font-weight: 600; }
    #${rootId} .proxima  { fill: none; stroke: var(--muted); stroke-width: 3; stroke-dasharray: 14 12; stroke-linecap: round; }
    #${rootId} .proxima-t{ fill: var(--muted); font-family: ${SANS}; font-weight: 600; }
`;

// ------------------------------------------------------------------ helpers

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** Bloque de <text> multilínea con line-height fijo, centrado en `y` si se pide. */
function lineas(txt, { x, y, size, lh, cls, anchor = "start", center = false }) {
  const n = txt.length;
  const y0 = center ? y - ((n - 1) * lh) / 2 + size * 0.34 : y;
  return txt
    .map(
      (l, i) =>
        `<text class="${cls}" x="${x}" y="${round(y0 + i * lh)}" font-size="${size}" text-anchor="${anchor}">${esc(l)}</text>`,
    )
    .join("\n      ");
}

const round = (n) => Math.round(n * 100) / 100;

/** Flecha ancha descendente: cuerpo rectangular + punta triangular. */
function flecha({ cx, top, shaftW, shaftH, headW, headH }) {
  const x0 = cx - shaftW / 2;
  const x1 = cx + shaftW / 2;
  const hy = top + shaftH;
  return `<path class="flecha" d="M ${x0} ${top} H ${x1} V ${hy} H ${cx + headW / 2} L ${cx} ${hy + headH} L ${cx - headW / 2} ${hy} H ${x0} Z" />`;
}

function documento({ id, w, h, cuerpo }) {
  return `<svg id="${id}" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" width="${w}" height="${h}" role="img" aria-labelledby="${id}-t ${id}-d">
  <title id="${id}-t">${esc(TITULO)}</title>
  <desc id="${id}-d">${esc(DESCRIPCION)}</desc>
  <style>${style(id)}  </style>
  <rect class="canvas" x="0" y="0" width="${w}" height="${h}" />
${cuerpo}
</svg>
`;
}

// --------------------------------------------------------------- landscape

function landscape() {
  const id = "dos-capas-landscape";
  const W = 1600;
  const H = 900;

  const M = 48; // margen exterior
  const P = 40; // padding interior de banda
  const bandX = M;
  const bandW = W - M * 2;
  const innerX = bandX + P;
  const innerW = bandW - P * 2;

  // banda superior
  const aY = 44;
  const aH = 318;
  const boxY = aY + 84;
  const boxH = 200;
  const gap = 28;
  const boxW = (innerW - gap * 3) / 4;

  const bloques = BLOQUES.map((b, i) => {
    const x = innerX + i * (boxW + gap);
    return `    <g id="${b.id}">
      <rect class="bloque" x="${x}" y="${boxY}" width="${round(boxW)}" height="${boxH}" rx="16" />
      <text class="num" x="${x + 28}" y="${boxY + 74}" font-size="62">${b.n}</text>
      <line class="num-rule" x1="${x + 28}" y1="${boxY + 96}" x2="${x + 84}" y2="${boxY + 96}" />
      ${lineas(b.lineas, { x: x + 28, y: boxY + 146, size: 38, lh: 46, cls: "rotulo" })}
    </g>`;
  }).join("\n");

  // flecha
  const arrowTop = 378;
  const arrow = flecha({ cx: W / 2, top: arrowTop, shaftW: 940, shaftH: 80, headW: 1060, headH: 76 });

  // banda inferior
  const bY = 542;
  const bH = 314;
  const pieceY = bY + 84;
  const pieceH = 190;

  const piezas = PIEZAS.map((p, i) => {
    const x = innerX + i * (boxW + gap);
    const cx = x + boxW / 2;
    const cy = pieceY + pieceH / 2;
    const forma = p.proxima
      ? `<rect class="proxima" x="${x + 1.5}" y="${pieceY + 1.5}" width="${round(boxW - 3)}" height="${pieceH - 3}" rx="16" />`
      : `<rect class="pieza" x="${x}" y="${pieceY}" width="${round(boxW)}" height="${pieceH}" rx="16" />`;
    return `    <g id="${p.id}">
      ${forma}
      ${lineas(p.lineas, { x: round(cx), y: cy, size: 36, lh: 44, cls: p.proxima ? "proxima-t" : "pieza-t", anchor: "middle", center: true })}
    </g>`;
  }).join("\n");

  const cuerpo = `  <g id="capa-construccion">
    <rect class="banda" x="${bandX}" y="${aY}" width="${bandW}" height="${aH}" rx="24" />
    <text class="eyebrow" x="${innerX}" y="${aY + 52}" font-size="30">${esc(CAPA_ARRIBA)}</text>
${bloques}
  </g>

  <g id="flecha-construye">
    ${arrow}
    <text class="verbos" x="${W / 2}" y="${arrowTop + 52}" font-size="32" text-anchor="middle">${esc(VERBOS)}</text>
  </g>

  <g id="capa-ejecucion">
    <rect class="banda-b" x="${bandX}" y="${bY}" width="${bandW}" height="${bH}" rx="24" />
    <text class="eyebrow" x="${innerX}" y="${bY + 52}" font-size="30">${esc(CAPA_ABAJO)}</text>
${piezas}
  </g>`;

  return documento({ id, w: W, h: H, cuerpo });
}

// ---------------------------------------------------------------- vertical

function vertical() {
  const id = "dos-capas-vertical";
  const W = 1080;
  const H = 1350;

  const M = 40;
  const P = 36;
  const bandX = M;
  const bandW = W - M * 2;
  const innerX = bandX + P;
  const innerW = bandW - P * 2;

  // banda superior: cuatro filas apiladas (el orden se lee de arriba a abajo)
  const aY = 40;
  const rowH = 120;
  const rowGap = 16;
  const rowsY = aY + 92;
  const aH = 92 + rowH * 4 + rowGap * 3 + 32;

  const numCol = 104;
  const bloques = BLOQUES.map((b, i) => {
    const y = rowsY + i * (rowH + rowGap);
    return `    <g id="${b.id}">
      <rect class="bloque" x="${innerX}" y="${y}" width="${innerW}" height="${rowH}" rx="16" />
      <text class="num" x="${innerX + numCol / 2}" y="${y + 78}" font-size="54" text-anchor="middle">${b.n}</text>
      <line class="num-rule" x1="${innerX + numCol}" y1="${y + 24}" x2="${innerX + numCol}" y2="${y + rowH - 24}" />
      <text class="rotulo" x="${innerX + numCol + 32}" y="${y + 74}" font-size="42">${esc(b.corto)}</text>
    </g>`;
  }).join("\n");

  // flecha
  const arrowTop = aY + aH + 36;
  const arrow = flecha({ cx: W / 2, top: arrowTop, shaftW: 560, shaftH: 102, headW: 688, headH: 56 });

  // banda inferior: 2x2 (las piezas no tienen orden)
  const bH = 92 + 150 * 2 + 24 + 32;
  const bY = H - M - bH;
  const pieceW = (innerW - 24) / 2;
  const pieceH = 150;

  const piezas = PIEZAS.map((p, i) => {
    const x = innerX + (i % 2) * (pieceW + 24);
    const y = bY + 92 + Math.floor(i / 2) * (pieceH + 24);
    const cx = x + pieceW / 2;
    const cy = y + pieceH / 2;
    const forma = p.proxima
      ? `<rect class="proxima" x="${round(x + 1.5)}" y="${y + 1.5}" width="${round(pieceW - 3)}" height="${pieceH - 3}" rx="16" />`
      : `<rect class="pieza" x="${round(x)}" y="${y}" width="${round(pieceW)}" height="${pieceH}" rx="16" />`;
    return `    <g id="${p.id}">
      ${forma}
      ${lineas(p.unaLinea, { x: round(cx), y: cy, size: 38, lh: 46, cls: p.proxima ? "proxima-t" : "pieza-t", anchor: "middle", center: true })}
    </g>`;
  }).join("\n");

  const cuerpo = `  <g id="capa-construccion">
    <rect class="banda" x="${bandX}" y="${aY}" width="${bandW}" height="${aH}" rx="24" />
    <text class="eyebrow" x="${innerX}" y="${aY + 56}" font-size="30">${esc(CAPA_ARRIBA)}</text>
${bloques}
  </g>

  <g id="flecha-construye">
    ${arrow}
    ${lineas(VERBOS_2L, { x: W / 2, y: arrowTop + 44, size: 30, lh: 40, cls: "verbos", anchor: "middle" })}
  </g>

  <g id="capa-ejecucion">
    <rect class="banda-b" x="${bandX}" y="${bY}" width="${bandW}" height="${bH}" rx="24" />
    <text class="eyebrow" x="${innerX}" y="${bY + 56}" font-size="30">${esc(CAPA_ABAJO)}</text>
${piezas}
  </g>`;

  return documento({ id, w: W, h: H, cuerpo });
}

// -------------------------------------------------------------------- main

mkdirSync(OUT, { recursive: true });
writeFileSync(join(OUT, "dos-capas-landscape.svg"), landscape());
writeFileSync(join(OUT, "dos-capas-vertical.svg"), vertical());
console.log("ok →", OUT);
