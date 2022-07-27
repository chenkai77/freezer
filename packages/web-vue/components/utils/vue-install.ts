import type { Plugin, App, Component } from "vue";
import { componentPrefix } from './config'

export const withInstall = <T extends { name:string }>(
  main: T
) => {
  let plugin: T & Plugin = Object.assign(main, {
    install: (app: App): void => {
      app.component(componentPrefix + main.name, main);
    }
  })
 return plugin;
};
