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

function selectGenre(allSelected, genreName) {
  if (allSelected.includes(genreName)) {
    return allSelected.filter(value => value !== genreName)
  }

  return allSelected.concat(genreName)
}

export default function Genres(props) {
  const [allSelected, setAllSelected] = useState(props.allSelected)

  return (
    <ul>
      {props.genres.map(genreName => {
        return (
          <li class="inline-flex mr-3 mt-3">
            <GenreItem name={genreName} selected={allSelected.includes(genreName)} onClick={() => {
              setAllSelected(selectGenre(allSelected, genreName)) 
            }} />
          </li>
        )
      })}
    </ul>
  )
}