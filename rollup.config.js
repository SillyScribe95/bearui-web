import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import css from "rollup-plugin-import-css";
// import scss from "rollup-plugin-scss"

export default {
  input: pkg.source,
  output: [
    { file: pkg.main, format: "cjs" },
    { file: pkg.module, format: "esm" },
  ],
  plugins: [
    // css(
    //   include.: ["/**/*.css", "/**/*.scss", "/**/*.sass"],
    //   output: "css/style.css",
    //   failOnError: true,

    // ),
    css(),
    external(),
    babel(),
    del({ targets: ["dist/*"] }),
  ],
  external: Object.keys(pkg.peerDependencies || {}),
};
