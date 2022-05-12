import { parallel, series } from "gulp";

import clean from "./series/clean";
import markOutputDir from "./series/markOutputDir";
import packageBuild from "./series/packageBuild";

export default series(clean, markOutputDir, packageBuild);
