import { readdirSync, readFileSync, writeFileSync } from 'node:fs';
import { join, parse } from 'node:path';
import { parse as nodeParser } from 'node-html-parser';
import { optimize } from 'svgo';

const srcDir = './src/icons';
const outFile = './src/scss/_icons.scss';
const iconFiles = readdirSync(srcDir).filter(f => f.endsWith('.svg'));

let scss = `// auto generated\n\n$icons: (\n`;

const optimizeSvg = (svgCode: string, srcPath: string) => {
  return optimize(svgCode, {
    path: srcPath,
    plugins: [
      'removeUselessDefs',
      'removeDimensions',
      'removeXMLProcInst',
      'removeComments',
      'removeMetadata',
      'collapseGroups',
      'sortAttrs',
      'convertShapeToPath',
      'convertColors',
      'convertPathData',
      {
        name: 'removeAttrs',
        params: {
          attrs: 'svg:fill:none',
        },
      },
      {
        name: 'cleanupIds',
        params: {
          remove: true,
          minify: true,
          preserve: [],
          preservePrefixes: [],
          force: false,
        },
      },
      {
        name: 'removeUnknownsAndDefaults',
        params: {
          keepDataAttrs: true,
        },
      },
      {
        name: 'inlineStyles',
        params: {
          onlyMatchedOnce: true,
          removeMatchedSelectors: true,
        },
      },
    ],
  });
};

for (const icon of iconFiles) {
  const srcPath = join(srcDir, icon);
  const svgCode = readFileSync(srcPath, 'utf8');

  let data: string = '';

  try {
    const optimized = optimizeSvg(svgCode, icon);
    if (!optimized.data) throw new Error('SVGO failed');
    data = optimized.data;
  } catch (e) {
    console.error(`[SVGO ERROR] ${icon}`, e);
    continue;
  }

  try {
    const { name: iconName } = parse(icon);
    const base64 = Buffer.from(data).toString('base64');
    const perseSvg = nodeParser(data);
    const svgElm = perseSvg.querySelector('svg');

    const viewBox = svgElm?.getAttribute('viewBox');
    if (!viewBox) throw new Error('viewBox is missing in the SVG');
    const [, , w, h] = viewBox?.split(/\s+/).map(Number) ?? [];

    scss += `  ${iconName}: (\n`;
    scss += `    url: "data:image/svg+xml;base64,${base64}",\n`;
    scss += `    w: ${w},\n`;
    scss += `    h: ${h},\n`;
    scss += `  ),\n`;
  } catch (e) {
    console.error(`[SVG PARSE ERROR] ${icon}`, e);
    continue;
  }

  writeFileSync(srcPath, data);
}

scss += `);\n`;
writeFileSync(outFile, scss);
