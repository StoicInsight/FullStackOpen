import React from 'react'
import { useState } from 'react'

function ButtonOne() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <button
      onClick={() => setCount(count + 1)}
      />
    </div>

  )
}

const App = () => {

  return (
    <div></div>
  )
}

export default App
