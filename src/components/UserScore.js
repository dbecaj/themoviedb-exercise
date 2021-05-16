import React from "react"
import "./UserScore.css"

export default function UserScore(props) {
  return (
    <div class={`flex flex-col items-center ${props.class}`}>
      <p class="font-bold mb-3">50%</p>
      <input type="range" class="slider" min="0" max="100" step="5" ></input>
    </div>
  )
}