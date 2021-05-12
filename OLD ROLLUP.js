import babel from "@rollup/plugin-babel";
import external from "rollup-plugin-peer-deps-external";
import del from "rollup-plugin-delete";
import pkg from "./package.json";
import resolve from "@rollup/plugin-node-resolve";
import css from "rollup-plugin-import-css";
// import scss from "rollup-plugin-scss"

export default {
  input: pkg.source,
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],

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
    resolve(),
    external(),
    babel({
      exclude: "node_modules/**",
    }),
    del({ targets: ["dist/*"] }),
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
