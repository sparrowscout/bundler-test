// build.js
import esbuild from "esbuild";
import { umdWrapper } from "esbuild-plugin-umd-wrapper";
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

const umdWrapperOptions = {
  libraryName: "dummy", // default is unset
  external: "inherit", // <= default
  amdLoaderName: "define", // <= default
};

// 공통으로 사용할 옵션들
// https://esbuild.github.io/api/#build 에서 다양한 옵션들을 확인할 수 있다.
const baseConfig = {
  entryPoints: ["src/index.ts"], // 컴파일할 파일
  outdir: "dist", // 컴파일된 파일이 저장될 경로
  bundle: true, // 번들링 여부
  minify: true,
  plugins: [onStartPlugin, onEndPlugin, umdWrapper(umdWrapperOptions)],
};

Promise.all([
  // 한 번은 umd
  esbuild.build({
    ...baseConfig,
    format: "umd",
    outExtension: {
      ".js": ".cjs",
    },
  }),
  // 한 번은 esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
]).catch((error) => {
  console.log("Build failed", error);
  process.exit(1);
});
