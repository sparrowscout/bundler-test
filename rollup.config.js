import babel from "@rollup/plugin-babel";
import commonjs from "@rollup/plugin-commonjs";
import terser from "@rollup/plugin-terser";
const FORMAT = {
  umd: "umd",
  esm: "esm",
  iife: "iife",
  cjs: "cjs",
};

const inputSrc = [
  ["./src/index.ts", FORMAT.esm],
  ["./src/index.ts", FORMAT.cjs],
];

export default inputSrc.map(([input, format]) => {
  const extension = format === FORMAT.esm ? "mjs" : "js";

  return {
    input,
    output: {
      file: `dist/index.${extension}`,
      format,
      sourcemap: true,
    },

    plugins: [
      babel({
        babelHelpers: "bundled",
        exclude: "node_modules/**",
      }),
      commonjs({}),
      terser(),
    ],
  };
});
