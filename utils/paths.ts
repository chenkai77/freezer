import { resolve } from "path";

export const projectRoot = resolve(__dirname, ".."); // 根目录
export const packagesRoot = resolve(projectRoot, "packages");
export const webVueRoot = resolve(packagesRoot, "web-vue");

// output
export const buildDist = resolve(projectRoot, "dist");
export const buildDistEsm = resolve(buildDist, "es");
