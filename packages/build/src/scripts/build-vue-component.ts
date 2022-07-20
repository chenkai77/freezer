// import fs from 'fs-extra';
import path from 'path'
import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import typescript from 'rollup-plugin-typescript2';

async function buildVueComponent() {
  


  const inputPath = path.resolve(process.cwd(), 'components', 'index.ts')
  try {
    const bundle = await rollup({
      input: inputPath,
      plugins: [typescript(), vue({isProduction: true,}), vueJsx()],
      external: ['vue'],
    })
  
    await bundle.write({
      format: "esm",
      dir: 'es',
      sourcemap: true,
      entryFileNames: `[name].js`,
      preserveModules: true,
      preserveModulesRoot: path.resolve(process.cwd(), 'components'),
      globals: {
        vue: "Vue" 
      }
    })
  } catch (error) {
    console.log(error) 
  }
}

export default buildVueComponent;