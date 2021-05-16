import React from "react"

export default function Layout(props) {
  return (
    <div class="
    mx-auto 
    max-w-7xl 
    pt-16 pb-24 
    px-4
  ">
      { props.children }
    </div>
  )
}