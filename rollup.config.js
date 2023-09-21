import typescript from "@rollup/plugin-typescript";
import terser from "@rollup/plugin-terser";

const FORMAT = {
  umd: "umd",
  esm: "esm",
  iife: "iife",
  cjs: "cjs",
};

const inputSrc = [
  ["./src/index.ts", FORMAT.umd],
  ["./src/index.ts", FORMAT.esm],
];

export default inputSrc.map(([input, format]) => {
  const extension = format === FORMAT.umd ? "cjs" : "js";

  return {
    input,
    output: {
      file: `dist/index.${extension}`,
      format,
      name: "dummy",
    },

    plugins: [typescript(), terser()],
  };
});
