import { CourseType } from '../types/filterType'
import {
  CardInnerDiv,
  CardInfoDiv,
  CourseCardDiv,
  CardPriceDiv,
  CardImageDiv,
  Title,
  Description,
  FreePrice,
  Price,
} from '../styles/CourseCard.style'
interface CardProps {
  course: CourseType
}
export default function CourseCard({ course }: CardProps) {
  return (
    <CourseCardDiv>
      <CardImageDiv>
        <img
          src={course.logo_file_url}
          alt="course logo"
          style={{ width: '100%', height: '145px' }}
        />
      </CardImageDiv>
      <CardInnerDiv>
        <CardInfoDiv>
          <Title>{course.title}</Title>
          {course.short_description ? (
            <Description>{course.short_description}</Description>
          ) : (
            '설명이 없습니다!'
          )}
        </CardInfoDiv>
        <CardPriceDiv>
          <div>
            {course.price === '0' ? (
              <FreePrice>무료</FreePrice>
            ) : (
              <>
                <Price>{course.price}원</Price>
              </>
            )}
          </div>
        </CardPriceDiv>
      </CardInnerDiv>
    </CourseCardDiv>
  )
}
