import React, { useState } from "react"
import "./UserScore.css"

export default function UserScore(props) {
  const [minScore, setMinScore] = useState(props.score*100)

  return (
    <div class={`flex flex-col items-center ${props.class}`}>
      <p class="font-bold mb-3">{minScore}%</p>
      <input 
        type="range" 
        class="slider" 
        min="0" 
        max="100" 
        step="5"
        value={minScore}
        onChange={(event) => { 
          const value = event.target.value
          setMinScore(value)

          props.onChange(value/100)
        }} ></input>
    </div>
  )
}