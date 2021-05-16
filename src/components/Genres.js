import React, { useState } from "react"

function GenreItem(props) {
  const buttonStyle = `
  border
  border-black 
    rounded-2xl 
    p-1.5 
    justify-center
    ${props.selected ? 'bg-blue-500 text-white' : ''} 
    ${props.class}
    `

  return (
    <button class={buttonStyle} onClick={props.onClick}>
      <p class="text-sm">{props.name}</p>
    </button >
  )
}

function selectGenre(allSelected, genreId) {
  if (allSelected.includes(genreId)) {
    return allSelected.filter(value => value !== genreId)
  }

  return allSelected.concat(genreId)
}

export default function Genres(props) {
  const [allSelected, setAllSelected] = useState(props.allSelected)

  return (
    <ul>
      {props.genres.map(genre => {
        return (
          <li class="inline-flex mr-3 mt-3">
            <GenreItem name={genre.name} selected={allSelected.includes(genre.id.toString())} onClick={() => {
              const newSelected = selectGenre(allSelected, genre.id.toString())
              setAllSelected(newSelected)

              // Propagate event to parent
              props.onChange(newSelected)
            }} />
          </li>
        )
      })}
    </ul>
  )
}