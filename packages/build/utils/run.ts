import { spawn } from "child_process";
import { projectRoot } from "../../../utils/paths";

const run = (command: string, cwd: string = projectRoot) =>
  new Promise<void>((resolve, reject) => {
    const [cmd, ...args] = command.split(" ");
    console.log(process.platform);
    const runProcess = spawn(cmd, args, {
      cwd,
      stdio: "inherit",
      shell: process.platform === "win32",
    });

    const killRunProcessSighup = () => runProcess.kill("SIGHUP");
    runProcess.addListener("exit", killRunProcessSighup);
    runProcess.on("close", (code) => {
      process.removeListener("exit", killRunProcessSighup);

      if (code === 0) resolve();
      else
        reject(new Error(`Command failed. Command: ${command} Code: ${code}`));
    });
  });

export default run;
