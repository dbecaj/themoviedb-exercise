import React from "react"

function GenreItem(props) {
  return (
    <div class={`border border-black rounded-2xl p-1.5 justify-center ${props.class}`}>
      <p class="text-sm">{props.name}</p>
    </div>
  )
}

export default function Genres(props) {
  return (
    <ul>
      {props.genres.map(genreName => {
        return (
          <li class="inline-flex mr-3 mt-3">
            <GenreItem name={genreName} />
          </li>
        )
      })}
    </ul>
  )
}