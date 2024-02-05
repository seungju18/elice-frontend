# elice-frontend

</br>

### 프로젝트 목표
엘리스 웹 일부 구현을 통한 엘리스의 API spec 기술을 학습합니다.

### 실행방법 
```sh
git clone https://github.com/seungju18/elice-frontend.git
npm install
npm start
```

### 사용된 기술
- React, Typescript, styled-components, Context API

### git 규칙
- 각 기능마다 다른 branch를 사용(Filter, CousreCard, SearchArea, Pagination)
- 기능 구현 이후 main으로 pull request(rebase and merge 방식)
- feat : 새로운 기능 구현, hotfix : 버그 수정, refac : 리팩토링

### 1. UI 구현
- 요구사항에 맞춰 UI를 구현하였습니다
- SearchArea, Filter, CourseList, Pagination으로 이루어져 있습니다
- CourseCard는 image, title, description, price, discount_rate, discounted_price에 맞춰서 구현했습니다.

### 2. 기능 구현
- 무료와 유료 버튼을 눌렀을 때 필터링이 작동하여 무료 강의와 유료 강의 필터
- Page 번호를 누를 시 Page 값이 변경되며 수정된 데이터를 받아옴
- Pagination 기능은 작동하지만 몇몇 에러를 수정하지 못함

### 3. 상태 관리
- 전역적으로 사용해야 하는 변수는 Context API를 이용하였습니다
- 로컬 변수들은 useState를 이용하여 관리하였습니다.

### 4. 파일 구조
```
├── App.css
├── App.test.tsx
├── App.tsx
├── PageContext.ts
├── api
│   ├── getCourses.tsx
│   └── updateCourses.tsx
├── components
│   ├── CourseCard.tsx
│   ├── CourseFilter.tsx
│   ├── CourseList.tsx
│   ├── Filter.tsx
│   ├── FilterButton.tsx
│   ├── Pagination.tsx
│   └── SearchArea.tsx
├── index.css
├── index.tsx
├── logo.svg
├── pages
│   └── MainPage.tsx
├── react-app-env.d.ts
├── setupTests.ts
├── styles
│   ├── CourseCard.style.ts
│   ├── CourseList.style.ts
│   ├── Filter.style.ts
│   ├── FilterButton.style.ts
│   ├── Pagination.style.ts
│   └── SearchArea.style.ts

└── types
    ├── ChipType.ts
    └── filterType.ts
```
    
### 5. 결과물
-초기 화면
<img width="1920" alt="스크린샷 2024-02-05 오후 3 56 51" src="https://github.com/seungju18/elice-frontend/assets/43843214/267251ea-cb4a-4220-b57d-b74af6c15564">

</br>

-무료 필터 적용
<img width="1920" alt="스크린샷 2024-02-05 오후 4 00 44" src="https://github.com/seungju18/elice-frontend/assets/43843214/2eb387c7-2b34-4e13-acce-783796753519">


</br>

-유료 필터 직용
<img width="1920" alt="스크린샷 2024-02-05 오후 4 00 52" src="https://github.com/seungju18/elice-frontend/assets/43843214/aaf887a8-5e08-499d-9811-328c80ad681c">


</br>

-무료,유료 필터 적용
<img width="1920" alt="스크린샷 2024-02-05 오후 4 00 58" src="https://github.com/seungju18/elice-frontend/assets/43843214/441bdb60-b8f3-407a-ab70-cd801568ec13">





