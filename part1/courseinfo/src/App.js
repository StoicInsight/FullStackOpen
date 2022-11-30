import React from 'react'
import { useState } from 'react'



const App = () => {
  const [clicks, setClicks] = useState({
    left: 0, right: 0
  })

  const HandleClicks = () => {
    const handle = {
      left: clicks.left += 1,
      right: clicks.right 
    }
    setClicks(handle)
  }

  return(
    <div>
      {clicks.left}
      <button onClick={HandleClicks}>
        Left
      </button>
      {clicks.right}
      
    </div>
  )
}

export default App
