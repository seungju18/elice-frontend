import CourseCard from './CourseCard'
import { UpdateCourse } from '../api/updateCourses'
import { useContext, useEffect } from 'react'
import {
  Count,
  CourseCountDiv,
  CourseListDiv,
} from '../styles/CourseList.style'
import Pagination from './Pagination'
import { PageContext } from '../PageContext'

export const CoursesList = () => {
  const { page } = useContext(PageContext)
  const { courses, course_count } = UpdateCourse((page - 1) * 20)

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
      <Pagination />
    </>
  )
}
