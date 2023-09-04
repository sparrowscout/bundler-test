// build.js
import esbuild from "esbuild";

const onStartPlugin = {
  name: "start",
  setup(build) {
    build.onStart(() => {
      const startDate = new Date();
      console.log(`build started ${startDate}`);
    });
  },
};

const onEndPlugin = {
  name: "end",
  setup(build) {
    build.onEnd((result) => {
      const endDate = new Date();
      console.log(`build ended with ${result.errors.length} errors`);
      console.log(`build ended ${endDate}`);
    });
  },
};

// 공통으로 사용할 옵션들
// https://esbuild.github.io/api/#build 에서 다양한 옵션들을 확인할 수 있다.
const baseConfig = {
  entryPoints: ["src/index.ts"], // 컴파일할 파일
  outdir: "dist", // 컴파일된 파일이 저장될 경로
  bundle: true, // 번들링 여부
  sourcemap: true, // 소스맵 생성 여부
  minify: true,
  mangleQuoted: true,
  minifySyntax: true,
  treeShaking: true,
  plugins: [onStartPlugin, onEndPlugin],
};
Promise.all([
  // 한 번은 cjs
  esbuild.build({
    ...baseConfig,
    format: "cjs",
    outExtension: {
      ".js": ".cjs",
    },
  }),

  // 한 번은 esm
  esbuild.build({
    ...baseConfig,
    format: "esm",
  }),
]).catch(() => {
  console.log("Build failed");
  process.exit(1);
});

let envPlugin = {
  name: "env",
  setup(build) {
    // Intercept import paths called "env" so esbuild doesn't attempt
    // to map them to a file system location. Tag them with the "env-ns"
    // namespace to reserve them for this plugin.
    build.onResolve({ filter: /^env$/ }, (args) => ({
      path: args.path,
      namespace: "env-ns",
    }));

    // Load paths tagged with the "env-ns" namespace and behave as if
    // they point to a JSON file containing the environment variables.
    build.onLoad({ filter: /.*/, namespace: "env-ns" }, () => ({
      contents: JSON.stringify(process.env),
      loader: "json",
    }));
  },
};
