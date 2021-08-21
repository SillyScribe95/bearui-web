import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import css from "rollup-plugin-import-css";
// import scss from "rollup-plugin-scss"
import postcss from "rollup-plugin-postcss";

const isjfera = postcss({
  config: {
    path: "./postcss.config.js",
  },
  extensions: [".css"],
  minimize: true,
  inject: {
    insertAt: "top",
  },
  // extract: true,
});

const dfijgret = css({
  include: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
  output: "bearui.css",
  failOnError: true,
});

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs", sourcemap: true },
    { file: pkg.module, format: "esm", sourcemap: true },
  ],
  plugins: [
    // dfijgret,
    external(),
    babel(),
    // del({ targets: ["build/*"] }),
    isjfera,
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
