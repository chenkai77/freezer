import { Command } from "commander";
import buildVueComponent from './scripts/build-vue-component'

const program = new Command();

program.name("freezer-ui-build").usage("command [options]");

program
  .command("test")
  .description("commander test")
  .action(() => {
    console.log("hello world");
  });

program
  .command("build:vue:component")
  .action(() => {
    buildVueComponent()
  });  

program.parse(process.argv);
