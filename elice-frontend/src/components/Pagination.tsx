import { useContext, useState } from 'react'
import { IconDiv, PageDiv, PageNum } from '../styles/Pagination.style'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PageContext } from '../PageContext'

type PaginationProps = {
  maxPageNum: number
}

export default function Pagination({ maxPageNum }: PaginationProps) {
  const { page, setPage } = useContext(PageContext)
  const [selectedPage, setSelectedPage] = useState<number>(1)
  const [index, setIndex] = useState<number>(1)
  const handleButtonLeft = () => {
    if (page > 1) {
      setPage(page - 1)
      setIndex(page - 1)
    }
  }
  const handleButtonRight = () => {
    setPage(page + 1)
    setIndex(page + 1)
  }
  return (
    <PageDiv>
      <IconDiv onClick={handleButtonLeft}>
        <FaChevronLeft color={page === 1 ? 'gray' : 'unset'} />
      </IconDiv>
      {Array.from({ length: 5 }, (_, i) => index + i).map((num, index) => (
        <PageNum
          key={index}
          onClick={() => {
            setSelectedPage(num)
            setPage(num)
          }}
          style={{ fontWeight: num === selectedPage ? 'bold' : 'normal' }}
        >
          {num}
        </PageNum>
      ))}
      <IconDiv onClick={handleButtonRight}>
        <FaChevronRight />
      </IconDiv>
    </PageDiv>
  )
}
