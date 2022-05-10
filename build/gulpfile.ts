import { parallel, series } from "gulp";

import clean from "./series/clean";
import markOutputDir from "./series/markOutputDir";

export default series(clean, markOutputDir);
