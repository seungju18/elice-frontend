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
  Label,
} from '../styles/CourseCard.style'
interface CardProps {
  course: CourseType
}
export default function CourseCard({ course }: CardProps) {
  const discounted_percentage = Math.round(Number(course.discount_rate) * 100)
  return (
    <CourseCardDiv>
      <CardImageDiv>
        {course.image_file_url != null ? (
          <img
            src={course.image_file_url}
            alt="course logo"
            style={{ width: '100%', height: '145px' }}
          />
        ) : course.logo_file_url != null ? (
          <img
            src={course.logo_file_url}
            alt="course image"
            style={{ width: '100%', height: '145px' }}
          />
        ) : (
          <div
            style={{
              width: '100%',
              height: '145px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            Image
          </div>
        )}
      </CardImageDiv>
      <CardInnerDiv>
        <CardInfoDiv>
          <Label>미분류</Label>
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
                <Price className="discounted_price">
                  ₩{course.discounted_price}원
                </Price>
                {course.is_discounted ? (
                  <>
                    <Price className="original">${course.price}원</Price>{' '}
                    <Price className="discount_rate">
                      {discounted_percentage}%
                    </Price>
                  </>
                ) : null}
              </>
            )}
          </div>
        </CardPriceDiv>
      </CardInnerDiv>
    </CourseCardDiv>
  )
}
