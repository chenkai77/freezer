import fs from 'fs-extra';
import path from 'path'
import { rollup } from "rollup";
import { webVueRoot } from "../../../../utils/paths";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";

async function buildVueComponent() {
  const bundle = await rollup({
    input: path.resolve(webVueRoot, 'components', 'index.js'),
    plugins: [vue(), vueJsx()]
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

export default buildVueComponent;