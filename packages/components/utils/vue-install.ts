import type { Plugin } from "vue";
type SFCWithInstall<T> = T & Plugin;
type IComponent = { name: string };

export const withInstall = <T extends IComponent>(
  main: T
): SFCWithInstall<T> => {
  (main as SFCWithInstall<T>).install = (app): void => {
    app.component(main.name, main);
  };
  return main as SFCWithInstall<T>;
};
