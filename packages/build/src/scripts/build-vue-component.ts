// import fs from 'fs-extra';
import path from 'path'
import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import typescript from 'rollup-plugin-typescript2';
import vuePlugin from 'rollup-plugin-vue'

async function buildVueComponent() {
  const inputPath = path.resolve(process.cwd(), 'components', 'index.ts')
  try {
    const bundle = await rollup({
      input: inputPath,
      plugins: [typescript(), vuePlugin()],
      external: ['vue']
    })
  
    await bundle.write({
      format: "esm",
      dir: 'es',
      sourcemap: true,
      entryFileNames: `[name].js`,
      preserveModules: true,
      preserveModulesRoot: path.resolve(process.cwd(), 'components'),
    })
  } catch (error) {
    console.log(error) 
  }
}

export default buildVueComponent;