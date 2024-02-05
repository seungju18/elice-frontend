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
- CourseCard는 image, title, description, price에 맞춰서 구현했습니다.

### 2. 기능 구현
- 무료와 유료 버튼을 눌렀을 때 필터링이 작동하여 무료 강의와 유료 강의 필터
- Page 번호를 누를 시 Page 값이 변경되지만 새로운 정보를 받아오지 못하고 있음(추가 수정 예정)

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
<img width="1898" alt="스크린샷 2024-02-05 오전 1 43 59" src="https://github.com/seungju18/elice-frontend/assets/43843214/653b7c86-837e-4172-a9ed-911543ba63be">
