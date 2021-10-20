import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import pkg from "./package.json";
import babel from "@rollup/plugin-babel";

const isjfera = postcss({
  config: {
    path: "./postcss.config.js",
  },
  extensions: ["css", ".scss"],
  minimize: true,
  inject: {
    insertAt: "top",
  },
  // extract: true,
});

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [peerDepsExternal(), babel(), resolve(), commonjs(), isjfera],
};
