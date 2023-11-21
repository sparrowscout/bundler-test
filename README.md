# bundler-test
번들링 / 컴파일 도구 별 빌드 속도 테스트

SDK 패키징을 위해 번들러 툴과 컴파일 툴을 비교했습니다. 동일한 요구사항 내에서 번들러들끼리 비교한 이후, 제일 빠른 툴과 제일 느린 툴의 loader, plugin 등을 변경해서 환경 안에서 최적의 방식을 찾아내려고 했습니다.


# 1. 번들러 목록 (각각의 브랜치에 config) <br/>

|번들러|비교이유|
|------|------|
|Rollup|오픈소스 라이브러리 HLS.js가 사용하고 있는 번들러, 라이브러리 패키징에 적절한 툴|
|Web Pack|클래식이라고 생각되어서 목록에 넣음|
|ESBuild|LATEST이기도하고, 굉장히 빠르다고 들어서 비교군에 넣음|

 <br/>

# 2. 번들 요구사항 <br/>

|config key|value|
|------|------|
|input|index.ts|
|output|index.cjs(UMD), index.js(ESM), index.d.ts<br/> (Typescript로 작성된 원본 소스 1개로 node 기반 모듈과 브라우저 기반 모듈을 포괄적으로 지원 하기 위해 UMD, ESM 라이브러리로 번들 + 타입스크립트 사용자를 지원하기 위해 .d.ts 파일 emit) <br/>|
|minify|true|

> ## UMD와 ESM을 선택한 이유?  <br/>
> ### Javascript module  <br/>
> CommonJS : 맨 처음 자바스크립트를 웹 이외 환경, node 기반에서 사용하려고 했고, 모듈화를 맨 처음 시작함. 자바스크립트 V8엔진 이후에 CommonJS 모듈 발표함. 서버사이드 환경에 더 적합함.
> AMD : CommonJS보다 브라우저 환경에 더 적합함.
> UMD : CommonJS와 AMD를 동시에 호환하기 위해 만들어짐. 사용자의 모듈 로더를 확인해서 CommonJS, AMD, Window 방식으로 분기함
> ESM : ECMAScript Module. 자바스크립트 ES6에서부터 사용 가능한 모듈


>## 📚 → <br/>
>라이브러리 패키징을 위한 빌드 테스트였기 때문에, 사용자의 환경을 최대한 포괄하기 위해 다양한 스펙트럼의 모듈을 제공하기위해서 UMD와 ESM을 선택함

 <br/>

# 3. 테스트 환경
macOS Ventura 13.5.1 <br/>

 <br/>

# 4. 테스트 방식
각 비교군 번들 5회 실행, 최장 시간과 최저 시간을 제외하고 빌드 시간의 산술평균 비교 <br/>

script에 대한 총 시간을 구하기 위해서 yarn 명령어 사용 <br/>
WebPack, RollUp은 빌드 완료 시 측정된 시간 log가 내장되어있는데 ESBuild는 아니었음. <br/>
그래서 `build.onEnd((result) => {})` `build.onStart(() => {})` API 사용 <br/>
`metafile: true;` config로 각각 파일 별 빌드 시작 시점과 종료 시점 구함 <br/>

 <br/>

# [5. 번들러 테스트 결과 ↗︎ ](https://sparrowscout.github.io/build-time-test.html#5-%EB%B2%88%EB%93%A4%EB%9F%AC-%ED%85%8C%EC%8A%A4%ED%8A%B8-%EA%B2%B0%EA%B3%BC)
