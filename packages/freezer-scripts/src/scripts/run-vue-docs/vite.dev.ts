import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import path from "path";

const root = process.cwd();

const devConfig = defineConfig({
  mode: "development",
  server: {
    open: true,
    host: "0.0.0.0",
    port: 7788,
    fs: {
      strict: true,
      allow: [".."], // 可以为项目根目录的上一级提供服务
    },
  },
  resolve: {
    alias: [
      {
        find: /^@freezer-ui-web-vue\/(.*)/,
        replacement: path.resolve(root, "../web-vue/$1"),
      },
    ],
  },
  plugins: [vue(), vueJsx()],
});

export default devConfig;
