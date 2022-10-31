import React from 'react'

export const Search = ({handleSearchData, search}) => {
  return (
    <input type="text" onChange={handleSearchData} value={search} />
  )
}
