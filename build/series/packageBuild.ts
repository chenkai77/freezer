import { rollup } from "rollup";
import { excludeFiles } from "../utils";
import { packagesRoot, buildDistEsm } from "../../utils/paths";
import fg from "fast-glob";

import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import commonjs from "@rollup/plugin-commonjs";
import resolve from "@rollup/plugin-node-resolve";
import esbuild from "rollup-plugin-esbuild";

const packageBuild = async () => {
  const input = excludeFiles(
    await fg("**/*.{js,ts,vue}", {
      cwd: packagesRoot,
      absolute: true,
      onlyFiles: true,
    })
  );
  const bundle = await rollup({
    input,
    plugins: [
      vue(),
      vueJsx(),
      resolve({
        extensions: [".mjs", ".js", ".json", ".ts"],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target: "es2016",
        loaders: {
          ".vue": "ts",
        },
      }),
    ],
  });
  await bundle.write({
    format: "esm",
    dir: buildDistEsm,
    sourcemap: true,
    entryFileNames: `[name].mjs`,
    preserveModules: true,
    preserveModulesRoot: packagesRoot,
  });
};

export default packageBuild;
