import React from "react"

export default function SideBar(props) {
  return (
    <div class={`w-64 ${props.class}`}>
      {props.children}
    </div>
  )
}