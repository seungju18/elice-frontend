import Filter from "./Filter";

export default function CourseFilter() {
  return (
    <>
      <Filter chipName="유형" chipCondition="courseType" />
      <Filter chipName="진행 방식" chipCondition="format" />
      <Filter chipName="분야" chipCondition="category" />
      <Filter chipName="난이도" chipCondition="level" />
      <Filter chipName="언어" chipCondition="programmingLanguage" />
      <Filter chipName="가격" chipCondition="price" />
    </>
  );
}
