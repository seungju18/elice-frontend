import { styled } from 'styled-components'

export const CourseCardDiv = styled.div`
  background-color: white;
  width: 294px;
  margin: 12px;
  height: 400px;
  border-radius: 8px;
  border: 1px solid rgba(225, 226, 228, 0.75);
`

export const CardImageDiv = styled.div``

export const CardInnerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 237px;
`
export const CardInfoDiv = styled.div`
  margin: 5px 20px;
  display: flex;
  height: calc() (237px - 61px);
  flex-direction: column;
  text-align: left;
  justify-content: center;
`
export const CardPriceDiv = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  gap: 0.375rem;
  border-top: 1px solid rgb(240, 241, 243);
  padding-top: 1rem;
`

export const Label = styled.a`
  font-size: 14px;
  font-weight: bold;
  color: #9568a1;
  margin-top: 2px;
`
export const Title = styled.a`
  font-size: 18px;
  font-weight: bold;
  color: #333;
  line-height: 1.6;
  overflow: hidden;
  display: -webkit-box;
  margin: 5px 0;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`

export const Description = styled.a`
  font-size: 14px;
  line-height: 1.6;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`
export const FreePrice = styled.a`
  margin: 0 10px;
  font-size: 18px;
  font-weight: 600;
  color: #42b069;
`

export const Price = styled.a`
  &.discounted_price {
    margin: 0 10px;
    font-size: 18px;
    font-weight: bold;
    color: #222222;
  }
  &.original {
    margin: 0 5px;
    color: #7d7e80;
    text-decoration: line-through;
  }
  &.discount_rate {
    font-weight: bold;
    margin: 0 5px;
    color: #fa4c87;
  }
`
