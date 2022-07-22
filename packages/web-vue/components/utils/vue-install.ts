import type { Plugin, App, Component } from "vue";
import { componentPrefix } from './config'
type IComponent = Component & { name: string };

export const withInstall:(p:IComponent)=>IComponent = (
  main
) => {
  main = Object.assign(main, {
    install: (app: App): void => {
      app.component(componentPrefix + main.name, main);
    }
  })
 return main;
};
