'use client'
import styled from 'styled-components'

export const SearchDiv = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 12px;
  background-color: #ffffff;
  border: 1px solid rgb(201, 202, 204);
  border-radius: 4px;
  box-sizing: border-box;
  margin: 12px 0;
`

export const SearchInput = styled.input`
  margin: 0 12px;
  width: 100%;
  border: none;
  ::placeholder {
    color: gray;
  }
`
