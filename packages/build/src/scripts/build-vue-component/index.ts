import fs from "fs-extra";
import path from "path";
import rollupBuild from "./rollup-build";
import generateTsType from "./ts-type";
import styleBuild from "./style-build";

async function buildVueComponent() {
  try {
    await rollupBuild();
    await generateTsType();
    await styleBuild();
  } catch (error) {
    console.log(error);
  }
}

export default buildVueComponent;
