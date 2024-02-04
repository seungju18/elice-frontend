import { HiOutlineSearch } from 'react-icons/hi'
import { SearchDiv, SearchInput } from '../styles/SearchArea.style'
import { useState } from 'react'

export default function SearchArea() {
  const [searchData, setSearchData] = useState(' ')
  return (
    <SearchDiv>
      <HiOutlineSearch size={16} />
      <SearchInput
        type="text"
        placeholder="배우고 싶은 언어, 기술을 검색해보세요"
        onChange={(e: any) => setSearchData(e.target.value)}
      ></SearchInput>
    </SearchDiv>
  )
}
