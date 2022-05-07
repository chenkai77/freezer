import type { Plugin } from "vue";
declare type SFCWithInstall<T> = T & Plugin;
declare type IComponent = {
    name: string;
};
export declare const withInstall: <T extends IComponent>(main: T) => SFCWithInstall<T>;
export {};
