import React, { useState } from "react"

function GenreItem(props) {
  const buttonStyle = `
  border
  border-black 
  rounded-2xl 
  p-1.5 
  justify-center
  ${props.isSelected ? 'bg-blue-500 text-white' : ''} 
  ${props.class}
  `

  return (
    <button class={buttonStyle} onClick={props.onClick}>
      <p class="text-sm">{props.name}</p>
    </button >
  )
}

export default function Genres(props) {
  const [selected, setSelected] = useState(props.selected)

  function handleSelect(genre) {
    const newSelected = selected.filter(value => value !== genre.id)
    if (newSelected.length === selected.length) {
      newSelected.push(genre.id)
    }
    setSelected(newSelected)

    // Propagate event to parent
    props.onChange(newSelected)
  }

  return (
    <ul>
      {props.genres.map(genre => {
        return (
          <li class="inline-flex mr-3 mt-3">
            <GenreItem
              name={genre.name}
              isSelected={selected.includes(genre.id)}
              onClick={() => { handleSelect(genre) }}
            />
          </li>
        )
      })}
    </ul>
  )
}