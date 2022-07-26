import path from 'path'
import { rollup } from "rollup";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import typescript from 'rollup-plugin-typescript2';
import nodeResolve from '@rollup/plugin-node-resolve'

const commonWriteOption = {
  sourcemap: true,
  entryFileNames: `[name].js`,
  preserveModules: true,
  preserveModulesRoot: path.resolve(process.cwd(), 'components'),
}


export default async function rollupBuild(){
  const bundle = await rollup({
    input: path.resolve(process.cwd(), 'components', 'index.ts'),
    plugins: [nodeResolve(), typescript(), vue({isProduction: true,}), vueJsx()],
    external: ['vue'],
    onwarn(warning) {
      if(warning.code === 'PREFER_NAMED_EXPORTS'){
        return
      }
      console.warn(warning.message);
    },
  })

  await bundle.write({
    ...commonWriteOption,
    format: "esm",
    dir: 'es',
  })
  await bundle.write({
    ...commonWriteOption,
    format: "commonjs",
    dir: 'lib',
  })
}