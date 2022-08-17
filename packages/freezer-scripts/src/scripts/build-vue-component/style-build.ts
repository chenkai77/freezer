import sass from "sass";
import glob from "fast-glob";
import path from "path";
import fs from "fs-extra";

export default async function styleBuild() {
  await fs.emptyDir(path.resolve(process.cwd(), "style/dist"));
  const processCwd = process.cwd();
  const filePathList = await glob(["**/*.scss"], {
    cwd: path.resolve(processCwd, "style"),
    onlyFiles: true,
    ignore: ["common/*.scss"],
  });
  fs.ensureDirSync(path.resolve(processCwd, "style/dist"));
  for (const filename of filePathList) {
    const fileAbsolutePath = path.resolve(processCwd, `style/${filename}`);
    const result = await sass.compileAsync(fileAbsolutePath);
    const cssFilename = filename.replace(".scss", ".css");
    fs.ensureFileSync(path.resolve(processCwd, `style/dist/${cssFilename}`));
    fs.writeFileSync(
      path.resolve(processCwd, `style/dist/${cssFilename}`),
      result.css
    );
  }
}
