npm i -D webpack webpack-cli webpack-dev-server@next

## webpack
 - 번들러 동작 핵심 페키지
## webpack-cli
 - 번들러 실행 관련 command line interface 지원

 ## webpack-dev-server
 - 핫디플로이 지원 페키지


webpack.config.js 생성

```javascript
  //node.js 제공 객체
  const path = require('path')
  module.exports = {
    //파일 진입점(상대경로)
    entry: './js/main.js',
    //결과물을 반환하는 설정
    output : {
      //default setting임( path : cur_dir + dist , filename : main.js)
      // path:path.resolve(__dirname, 'dist'),
      // filename:'main.js',
      //설정후 빌드시 기존 빌드 제거 후 빌드

      clean: true
    },

  }
```

## babel 설치
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-runtime