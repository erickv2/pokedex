import React from 'react'

export const PaginationSelector = ({pokemonsPerPage, setPokemonsPerPage}) => {
  return (
    <div>
    <select value={pokemonsPerPage} onChange={(e) => setPokemonsPerPage(Number(e.target.value))}>
      <option value={5}>5</option>
      <option value={10}>10</option>
      <option value={15}>15</option>
      <option value={20}>20</option>
      <option value={25}>25</option>
    </select>
  </div>
  )
}
