import path from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

let config = [];

const moduleArray = [
  { name: "iife", format: ".js" },
  { name: "module", format: ".mjs" },
];

function generateConfig(module) {
  const config = {
    mode: "production",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: "ts-loader",
          exclude: /node_modules/,
        },
      ],
    },
    experiments: {
      outputModule: true,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      iife: module.name === "iife" ? true : false,
      filename: "index" + module.format,
      path: path.resolve(__dirname, "dist"),
      library: {
        type: "module",
      },
      clean: true,
    },
  };
  return config;
}

for (const module of moduleArray) {
  config.push(generateConfig(module));
}

export default config;
