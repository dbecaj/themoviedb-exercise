import React from "react"

export default function SearchButton(props) {
  return (
    <button
      type="button"
      class={`
        w-full 
        p-2 
        bg-blue-500 
        text-white 
        font-bold 
        text-xl 
        rounded-lg
        ${props.class}
      `}
      onClick={() => props.onClick()}
    >Search</button>
  )
}