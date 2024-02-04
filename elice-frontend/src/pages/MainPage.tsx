import CourseFilter from '../components/CourseFilter'
import { CoursesList } from '../components/CourseList'
import SearchArea from '../components/SearchArea'

export default function MainPage() {
  return (
    <>
      <SearchArea />
      <CourseFilter />
      <CoursesList />
    </>
  )
}
