import React from "react"

export default function Pagination(props) {

  const aClass = "mx-1.5 px-3 py-1"

  return (
    <div class={`flex justify-center ${props.class}`}>
      <ul class="flex">
        <li>
          <a class={aClass} href={`/?page=0`}>&laquo;</a>
        </li>

        {Array.from(Array(9)).map((v, index) => {
          const offsetIndex = props.currentPage + index

          return (
            <li>
              <a class={`
                ${aClass} 
                active:rounded-md active:bg-green-500 active:text-white 
                hover:rounded-md hover:bg-gray-200`}

                href={`/?page=${offsetIndex}`}>{offsetIndex + 1}</a>
            </li>
          )
        })}

        <li>
          <a class={aClass} href={`/?page=0`}>&raquo;</a>
        </li>
      </ul>
    </div>
  )
}