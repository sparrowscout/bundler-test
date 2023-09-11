// build.js
import esbuild from "esbuild";
import babel from "esbuild-plugin-babel";

const onStartPlugin = {
  name: "onStart",
  setup(build) {
    build.onStart(() => {
      const date = new Date();
      const s = date.getSeconds();
      const ms = date.getMilliseconds();
      console.log("start", s, ms);
    });
  },
};

const onEndPlugin = {
  name: "onEnd",
  setup(build) {
    build.onEnd(() => {
      const date = new Date();
      const s = date.getSeconds();
      const ms = date.getMilliseconds();
      console.log("end", s, ms);
    });
  },
};

const babelTsWithPresetEnvTargets = ({ targets }) => {
  babel({
    extensions,
    babelHelpers: "bundled",
    exclude: "node_modules/**",
    assumptions: {
      noDocumentAll: true,
      noClassCalls: true,
    },
    presets: [
      [
        "@babel/preset-typescript",
        {
          optimizeConstEnums: true,
        },
      ],
      [
        "@babel/preset-env",
        {
          loose: true,
          targets,
          bugfixes: true,
        },
      ],
    ],
  });
};

const buildBabelLegacyBrowsers = () =>
  babelTsWithPresetEnvTargets({ targets: babelPresetEnvTargets });

const buildBabelEsm = () =>
  babelTsWithPresetEnvTargets({ targets: { esmodules: true } });

const babelPresetEnvTargets = {
  chrome: "47",
  firefox: "51",
  safari: "8",
  ios: "8",
  android: "4",
  samsung: "5",
  edge: "14",
};

const extensions = [".ts", ".js"];

// 공통으로 사용할 옵션들
// https://esbuild.github.io/api/#build 에서 다양한 옵션들을 확인할 수 있다.
const baseConfig = {
  entryPoints: ["src/index.ts"], // 컴파일할 파일
  outdir: "dist", // 컴파일된 파일이 저장될 경로
  bundle: true, // 번들링 여부
  sourcemap: true, // 소스맵 생성 여부
  minify: true,
  plugins: [onStartPlugin, onEndPlugin],
};

Promise.all([
  // 한 번은 iife
  esbuild.build({
    ...baseConfig,
    format: "iife",
    plugins: [buildBabelLegacyBrowsers()],
  }),
  // 한 번은 esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
    outExtension: {
      ".js": ".mjs",
    },
    plugins: [buildBabelEsm()],
  }),
]).catch(() => {
  console.log("Build failed");
  process.exit(1);
});
