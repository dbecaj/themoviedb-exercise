import React from "react"

export default function Movie(props) {
  return (
    <div class={`shadow-md border rounded-md overflow-hidden ${props.class}`} style={{ width: 220 }}>
      <img src={props.imgSrc} alt={props.imgAlt} />

      <div class="mx-2 my-2">
        <div class="flex">
          <h3 class="text-lg font-bold">{props.title}</h3>
          <p class="ml-auto font-bold">{props.userScore}%</p>
        </div>

        <p class="text-gray-500">{props.releaseDate}</p>
      </div>
    </div>
  )
}