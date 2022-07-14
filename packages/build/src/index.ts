import { Command } from "commander";

const program = new Command();

program.version("1.0.0").name("freezer-ui-build").usage("command [options]");

program
  .command("test")
  .description("commander test")
  .action(() => {
    console.log("hello world");
  });

program.parse(process.argv);
