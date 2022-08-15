import sass from "sass";
import glob from "fast-glob";
import path from "path";
import fs from "fs-extra";

export default async function styleBuild() {
  const processCwd = process.cwd();
  const filePathList = await glob(["**/*.scss"], {
    cwd: path.resolve(processCwd, "components"),
    onlyFiles: true,
  });
  console.log(filePathList);
  for (const filename of filePathList) {
    const fileAbsolutePath = path.resolve(processCwd, `components/${filename}`);
    const result = await sass.compileAsync(fileAbsolutePath);
    console.log(result);
  }
}
