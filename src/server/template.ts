// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore as it's an expected error
import manifest from '#/.vite/manifest.json';

const isDev = Bun.env.BUN_ENV === 'development';

type TManifestFile = Record<string, { file: string; imports?: string[] }>;

function renderHeadScripts(bundleName: string) {
  if (isDev) {
    return `
    <script type="module">
              import RefreshRuntime from 'http://localhost:5173/@react-refresh'
              RefreshRuntime.injectIntoGlobalHook(window)
              window.$RefreshReg$ = () => {}
              window.$RefreshSig$ = () => (type) => type
              window.__vite_plugin_react_preamble_installed__ = true
    </script>
    <script type="module" src="http://localhost:5173/@vite/client"></script>
    <script type="module" src="http://localhost:5173/src/client/entries/${bundleName}.ts"></script>
    <link rel="stylesheet" href="http://localhost:5173/src/client/entries/global.css" />
  `;
  } else {
    const cssFile = (manifest as TManifestFile)[`src/client/entries/global.css`]?.file;

    /**
     * Module preloads resolving from manifest file
     * */
    const imports: string[] = [];
    const bundleModule = (manifest as TManifestFile)[`src/client/entries/${bundleName}.ts`];

    if (bundleModule.imports && bundleModule.imports.length > 0) {
      bundleModule.imports.forEach((importedModule: string) => {
        const importedModuleFile = (manifest as TManifestFile)[importedModule]?.file;
        imports.push(`<link rel="modulepreload" crossorigin href="/dist/${importedModuleFile}">`);
      });
    }

    return `
      <link rel="stylesheet" href="/dist/${cssFile}" />
    `.concat(imports.join(''));
  }
}

function renderBodyScripts(bundleName: string) {
  const module = (manifest as TManifestFile)[`src/client/entries/${bundleName}.ts`];

  return `
    <script type="module" src="/dist/${module?.file}"></script>
  `;
}

export default function getTemplate(title: string, bundleName: string) {
  return `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${title}</title>
        ${renderHeadScripts(bundleName)}
        <script>
          <!-- Don't remove preloaded state comment, used for SSR props sharing -->
          // preloaded-state
        </script>
      </head>
      <body>
        <!-- Don't remove react comment, used for SSR props sharing -->
        <div id="root"><!-- react --></div>
        ${!isDev ? renderBodyScripts(bundleName) : ''}
      </body>
    </html>
  `;
}
