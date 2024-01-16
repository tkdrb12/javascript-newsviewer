## 환경 변수를 안전하게 저장하고 관리하기
### 1. dotenv-webpack 설치하기
webpack에서 .env 파일의 환경 변수를 로드하기 위한 도구인 dontenv-webpack 패키지를 설치합니다.
```
npm install dotenv-webpack
```
### 2. Webpack 설정에 dotenv-webpack 추가하기
프로젝트의 webpack 설정 파일에 dotenv-webpack를 추가합니다.
```
const Dotenv = require('dotenv-webpack');

module.exports = {
  // 기존의 webpack 설정

  plugins: [
    new Dotenv(),
    // 기타 플러그인들
  ],
};
```
### 3. .env 파일 생성
프로젝트 루트 디렉토리에 .env 파일을 생성하고 필요한 환경 변수를 설정합니다. 
```
API_KEY=yapi_key
DEBUG=true
```
### 4. 환경 변수 사용
```
const apiKey = process.env.API_KEY;
const isDebug = process.env.DEBUG === 'true';
```
### 5. .env 파일 외부 유출 막기
.gitignore 목록에 .env 를 추가하여 깃허브 저장소에 들어가는 것을 방지합니다.
```
/node_modules
/dist
.env
```
## OpenAPI 사용하기
### URL 이해하기
![image](https://github.com/LIN-KHU/javascript-newsviewer/assets/75254185/ce38b5a5-030e-4c85-800b-46ba12e77a99)

### 네트워크 요청 URL 확인하기
![image](https://github.com/LIN-KHU/javascript-newsviewer/assets/75254185/e5cab950-7603-4516-8d09-5fbd8e4325ea)
![image](https://github.com/LIN-KHU/javascript-newsviewer/assets/75254185/14c08783-97c5-455e-9dc8-0923d67d2c71)
![image](https://github.com/LIN-KHU/javascript-newsviewer/assets/75254185/5012934a-4498-4068-8381-982429954dc5)

