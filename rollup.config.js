// import terser from "@rollup/plugin-terser";
const babel = require("@rollup/plugin-babel");

const FORMAT = {
  umd: "umd",
  esm: "esm",
};

const inputSrc = [
  ["./src/index.ts", FORMAT.umd],
  ["./src/index.ts", FORMAT.esm],
];

const extensions = [".ts", ".js"];

export default inputSrc.map(([input, format]) => {
  const extension = format === FORMAT.umd ? "cjs" : "js";

  return {
    input,
    output: {
      file: `dist/index.${extension}`,
      format,
      name: "dummy",
    },

    plugins: [
      babel({
        extensions,
        babelHelpers: "bundled",
        exclude: "node_modules/**",
        presets: [["@babel/preset-typescript"]],
        plugins: [],
      }),
    ],
  };
});
