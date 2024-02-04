import CourseCard from './CourseCard'
import { UpdateCourse } from '../api/updateCourses'
import { useState } from 'react'
import {
  Count,
  CourseCountDiv,
  CourseListDiv,
} from '../styles/CourseList.style'

export const CoursesList = () => {
  const [page, setPage] = useState<number>(0)
  const { courses, course_count } = UpdateCourse(0)
  return (
    <>
      <CourseCountDiv>
        <Count>전체 {course_count}개</Count>
      </CourseCountDiv>
      <CourseListDiv>
        {course_count > 0 ? (
          <>
            {courses?.map((course: any) => {
              return <CourseCard key={course.id} course={course} />
            })}
          </>
        ) : (
          <div>검색 결과가 없습니다.</div>
        )}
      </CourseListDiv>
    </>
  )
}
