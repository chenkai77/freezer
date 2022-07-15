import fs from 'fs-extra';
import path from 'path'
import { rollup } from "rollup";
import { webVueRoot } from "../../../../utils/paths";

async function vueBuild() {
  const bundle = await rollup({
    input: path.resolve(webVueRoot, 'components'),
    plugins: []
  })

  await bundle.write({
    format: "esm",
    dir: 'es',
    sourcemap: true,
    entryFileNames: `[name].js`,
    preserveModules: true,
    preserveModulesRoot: webVueRoot,
  })

}

export default vueBuild;