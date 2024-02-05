export interface CourseType {
  course_count: number
  title: string
  short_description: string
  image_file_url: string | null
  logo_file_url: string | undefined
  price: string
  is_discounted: boolean
  discount_rate: string | null
  discounted_price: string | null
}
