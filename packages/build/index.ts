import { Command } from "commander";

const program = new Command();

program.name("freezer-ui-build");

program
  .command("test")
  .description("commander test")
  .action(() => {
    console.log("hello world");
  });
