export interface FilterCondition {
  title: string | null
  price: string[]
}

export interface CourseType {
  course_count: number
  title: string
  short_description: string
  logo_file_url: string
  price: string
}
