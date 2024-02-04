import { useState } from 'react'
import CourseFilter from '../components/CourseFilter'
import { CoursesList } from '../components/CourseList'
import SearchArea from '../components/SearchArea'
import { PageContext } from '../PageContext'

export default function MainPage() {
  const [page, setPage] = useState<number>(1)
  return (
    <PageContext.Provider value={{ page, setPage }}>
      <SearchArea />
      <CourseFilter />
      <CoursesList />
    </PageContext.Provider>
  )
}
