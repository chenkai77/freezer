import fs from "fs-extra";
import path from "path";
import rollupBuild from "./rollup-build";
import generateTsType from "./ts-type";
import styleBuild from "./style-build";

async function buildVueComponent() {
  await fs.emptyDir(path.resolve(process.cwd(), "es"));
  await fs.emptyDir(path.resolve(process.cwd(), "lib"));
  await fs.emptyDir(path.resolve(process.cwd(), "types"));
  try {
    await rollupBuild();
    await generateTsType();
    await styleBuild();
  } catch (error) {
    console.log(error);
  }
}

export default buildVueComponent;
