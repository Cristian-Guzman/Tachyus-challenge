import React from 'react'
import { InputSearchSC, LabelSearchSC, WrapperSearchSC } from './styles'

export const Search = ({handleSearchData, search}) => {
  return (
    <>
      <WrapperSearchSC>
        <LabelSearchSC htmlFor='search'>Search through wellName value</LabelSearchSC>
        <InputSearchSC placeholder='search' id='search' name='search' type="text" onChange={handleSearchData} value={search} />
      </WrapperSearchSC>
    </>
  )
}
