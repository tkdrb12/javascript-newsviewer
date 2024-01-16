# 📰뉴스 뷰어 페이지 1단계

뉴스 뷰어 페이지 제작을 위한 저장소

# 미션 - 뉴스 뷰어 페이지 제작

## 🔑 이번 미션에서 학습할 내용

- 자바스크립트의 비동기
- openAPI 및 query 사용법
- 환경변수 및 .gitignore

## 🔍 진행방식

- 미션은 **기능 요구사항, 프로그래밍 요구사항, 과제 진행 요구사항** 세 가지로 구성되어 있습니다.
- 세 개의 요구사항을 만족하기 위해 노력합니다. 기능을 완성시키지 못해도, 요구 사항을 만족시키지 못해도 괜찮습니다. 하지만 과제 진행 요구사항을 만족시키지 못하면 리뷰어께서 PR을 보지 못할 수도 있기 때문에 리뷰가 불가능할 수도 있습니다. 꼭! 제출 전에 확인 부탁드립니다😊

## ✉️ 미션 제출 방법

- 미션 구현을 완료한 후 GitHub을 통해 Pull Request를 올립니다.

## ✔️ 미션 제출 전 체크리스트

- 미션 기능을 구현하고 아래 테스트를 통과하는지 확인해주세요.

```
npm install

npm run test
```

---

## 🚀 기능 요구사항

1. element 별로 분리하여 header, nav, section을 구분한다.
2. css를 사용해 각 요소를 커스텀한다.([linkhu-news-viewer – Figma](https://www.figma.com/file/YKjKZl4pVAn0xOi3GtJT8h/linkhu-news-viewer?type=design&mode=design&t=LmfV7QOjSAKZ2pe0-0))
3. tabName을 사용하여 nav를 구성하며, nav의 tagName을 section에 전달한다.
4. api 키를 발급받은 후 환경변수 파일에 넣는다.
    1. [News API – Search News and Blog Articles on the Web](https://newsapi.org/)
5. api 키와 tagName을 활용하여 fetch 요청을 보낸다.
6. 응답값을 화면에 보여주며, tagName이 변경될때마다 초기화 후 다시 fetch 요청을 보낸다.

### 프로그램 실행 결과

![image](https://github.com/LIN-KHU/javascript-newsviewer/assets/75254185/5f546069-bb86-4b30-b6f4-510843b6494b)


🎱 프로그래밍 요구사항

- 주어진 html 파일을 활용하여 코드를 작성한다. 임의로 id를 수정하지 않는다.
- 모든 예외 발생 상황은 alert메서드를 이용하여 처리한다.
- 외부 라이브러리(jQuery, Lodash 등)를 사용하지 않고, 순수 Vanilla JS로만 구현한다.

---

## 📈 과제 진행 요구사항

- 미션은 뉴스 뷰어 미션 저장소를 Fork/Clone해 시작한다.
- 리뷰이분들도 미리 구현할 것에 대해 생각해볼 수 있기 때문에 기능 목록을 작성하지 않는 것보다 꼼꼼하고 단계적으로 코드를 작성하실 수 있을 것 같습니다.

---

피드백은 언제나 환영합니다 언제든 이상한 점이 있다면 바로 문의해주세요
