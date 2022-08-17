import { Command } from "commander";
import buildVueComponent from "./scripts/build-vue-component/index";
import buildVueStyle from "./scripts/build-vue-component/style-build";
import runVueDocs from "./scripts/run-vue-docs/index";

const program = new Command();

program.name("freezer-scripts").usage("command [options]");

program.command("build:vue:style").action(() => {
  buildVueStyle();
});

program.command("build:vue:component").action(() => {
  buildVueComponent();
});

program.command("dev:vue:docs").action(() => {
  runVueDocs();
});

program.parse(process.argv);
