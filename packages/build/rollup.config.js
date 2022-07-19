
import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';

export default {
  input: './src/index.ts',
  output: {
    file: './dist/index.js',
    format: 'cjs'
  },
  external: [
    "@vitejs/plugin-vue",
    "@vitejs/plugin-vue-jsx",
    "commander",
    "rollup",
    "rollup-plugin-typescript2",
    "rollup-plugin-vue",
  ],
  plugins: [
    json(),
    typescript(),
    nodeResolve(),
    commonjs()
  ]
};