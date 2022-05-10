import { mkdir } from "fs/promises";
import { buildDist } from "../../utils/paths";

const markOutputDir = () => mkdir(buildDist, { recursive: true });

export default markOutputDir;
