import React from 'react'
import { useState } from 'react'



const App = () => {
  const [left, setLeft] = useState(0)
  const [right, setRight] = useState(0)
  const [allClicks, setClicks] = useState([])

  function handleLeftClick() {
    setClicks(allClicks.concat('L'))
    setLeft(left + 1)
  }
  function handleRightClick() {
    setClicks(allClicks.concat('R'))
    setLeft(right + 1)
  }

  return(
    <div>
      {left}
      <button onClick={handleLeftClick}>
        Left
      </button>
      <button onClick={handleRightClick}>
        Right
      </button>
      <h1>{allClicks.join('')}</h1>
      {right}
      
    </div>
  )
}

export default App
