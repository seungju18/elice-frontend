import { useContext, useState } from 'react'
import { IconDiv, PageDiv, PageNum } from '../styles/Pagination.style'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'
import { PageContext } from '../PageContext'

export default function Pagination() {
  const { page, setPage } = useContext(PageContext)
  const [selectedPage, setSelectedPage] = useState<number>(page)
  const handleButtonLeft = () => {
    if (page > 1) setPage(page - 1)
  }
  const handleButtonRight = () => {
    setPage(page + 1)
  }
  const startPage = page
  return (
    <PageDiv>
      <IconDiv onClick={handleButtonLeft}>
        <FaChevronLeft color={page === 1 ? 'gray' : 'unset'} />
      </IconDiv>
      {Array.from({ length: 5 }, (_, i) => startPage + i).map((num, index) => (
        <PageNum
          key={index}
          onClick={() => setSelectedPage(num)}
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
