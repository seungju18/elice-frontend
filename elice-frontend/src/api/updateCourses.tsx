import { GetCourse } from './getCourses'
import { useContext, useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { CourseType } from '../types/filterType'
import { PageContext } from '../PageContext'

export function UpdateCourse() {
  const [courses, setCourses] = useState<CourseType[]>([])
  const [course_count, setCourse_count] = useState<number>(0)
  const [searchParams, setSearchParams] = useSearchParams()
  const { page } = useContext(PageContext)

  useEffect(() => {
    const fetchData = async () => {
      const title = searchParams.get('keyword')
      const price = searchParams.getAll('price')

      try {
        const response = await GetCourse(title, price, page, 20)
        const { courses, course_count } = response
        setCourses(courses)
        setCourse_count(course_count)
      } catch (error) {
        console.error(error)
      }
    }
    fetchData()
  }, [page, searchParams])
  console.log(courses)
  return { courses, course_count }
}
