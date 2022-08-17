import { Command } from "commander";
import buildVueComponent from "./scripts/build-vue-component/index";
import buildVueStyle from "./scripts/build-vue-component/style-build";

const program = new Command();

program.name("freezer-ui-build").usage("command [options]");

program.command("build:vue:style").action(() => {
  buildVueStyle();
});

program.command("build:vue:component").action(() => {
  buildVueComponent();
});

program.parse(process.argv);
