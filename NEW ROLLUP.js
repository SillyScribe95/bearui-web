import peerDepsExternal from "rollup-plugin-peer-deps-external";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import postcss from "rollup-plugin-postcss";
import copy from "rollup-plugin-copy";
import css from "rollup-plugin-import-css";
import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import pkg from "./package.json";

const packageJson = require("./package.json");

export default {
  input: "src/index.js",
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    //
    css(),
    peerDepsExternal(),
    resolve(),
    external(),
    commonjs(),
    babel(),
    copy({
      targets: [
        {
          src: "src/variables.scss",
          dest: "build",
          rename: "variables.scss",
        },
        {
          src: "src/typography.scss",
          dest: "build",
          rename: "typography.scss",
        },
      ],
    }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
