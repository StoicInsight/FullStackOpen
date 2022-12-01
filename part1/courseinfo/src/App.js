import React from 'react'
import { useState } from 'react'


const App = () => {
  const [value, setValue] = useState(10)

  const setToValue = (val) => () => {
    console.log('This Value is ', value)  
    setValue(val)
  }

  return(
    <div>
      {value}
      <button onClick={setToValue(value + 1)}>
        Increase
      </button>
      <button onClick={setToValue(0)}>
        Reset
      </button>
      <button onClick={setToValue(1000)}>
        Change to 0 ?
      </button>
    </div>
  )
}

export default App
