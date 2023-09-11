import path from "path";
import TerserPlugin from "terser-webpack-plugin";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

let config = [];

const moduleArray = [
  { name: "umd", format: ".js" },
  { name: "module", format: ".mjs" },
];

function generateConfig(module) {
  const config = {
    mode: "production",
    entry: "./src/index.ts",
    devtool: "inline-source-map",
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
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
      outputModule: module.name === "module" ? true : false,
    },
    resolve: {
      extensions: [".tsx", ".ts", ".js"],
    },
    output: {
      filename: "index" + module.format,
      path: path.resolve(__dirname, "dist"),
      library: {
        type: module.name,
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
