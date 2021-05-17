import React, { useEffect } from "react"

function isBottom(ele) {
  return ele.getBoundingClientRect().bottom <= window.innerHeight;
}

export default function Scrollable(props) {
  function handleScrolling() {
    const wrappedElement = document.getElementById('scrollable');
    if (isBottom(wrappedElement)) {
      document.removeEventListener("scroll", handleScrolling)

      props.onBottom()
    }
  }

  useEffect(() => {
    document.addEventListener("scroll", handleScrolling, { passive: true })

    return function cleanup() {
      document.removeEventListener("scroll", handleScrolling)
    }
  })

  return (
    <div id="scrollable" class={`${props.class}`}>
      { props.children}
    </div>
  )
}