import { resolve } from "path";

export const projectRoot = resolve(__dirname, "..");
export const packagesRoot = resolve(projectRoot, "packages");

// output
export const buildDist = resolve(projectRoot, "dist");
