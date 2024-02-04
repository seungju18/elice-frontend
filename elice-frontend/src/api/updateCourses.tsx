import { GetCourse } from './getCourses'
import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CourseType } from '../types/filterType'

export const UpdateCourse = (offset: number) => {
  const [courses, setCourses] = useState<CourseType[]>([])
  const [course_count, setCourse_count] = useState<number>(0)
  const [searchParams, setSearchParams] = useSearchParams()
  useEffect(() => {
    const title = searchParams.get('keyword')
    const isFree = searchParams.getAll('price')
    GetCourse({ title: title, isFree: isFree })
      .then((response) => {
        const { courses, course_count } = response
        setCourses(courses)
        setCourse_count(course_count)
      })
      .catch((error) => {
        console.error(error)
      })
  }, [offset, searchParams])

  return { courses, course_count }
}
