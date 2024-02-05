import CourseCard from './CourseCard'
import { UpdateCourse } from '../api/updateCourses'
import {
  Count,
  CourseCountDiv,
  CourseListDiv,
} from '../styles/CourseList.style'
import Pagination from './Pagination'
import { PageContext } from '../PageContext'

export const CoursesList = () => {
  const { courses, course_count } = UpdateCourse()
  const maxPageNum = course_count / 20
  return (
    <>
      <CourseCountDiv>
        <Count>전체 {course_count}개</Count>
      </CourseCountDiv>
      <CourseListDiv>
        {course_count !== 0 ? (
          <>
            {courses?.map((course: any) => {
              return <CourseCard key={course.id} course={course} />
            })}
          </>
        ) : (
          <span>No Results!</span>
        )}
      </CourseListDiv>
      <Pagination maxPageNum={maxPageNum} />
    </>
  )
}
