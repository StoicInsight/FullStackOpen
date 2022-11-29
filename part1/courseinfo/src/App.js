import React from 'react'
import { useState } from 'react'

// function ButtonOne() {
//   const [count, setCount] = useState(0)
//   return (
//     <div>
//       <button
//       onClick={() => setCount(count + 1)}
//       > {count}
//       </button>
//     </div>

//   )
// }

const Display = (props) => {
  return (
    <div>
      {props.counter}
    </div>
  )
}

const Button = (props) => {
  return (
    <div>
      <button onClick={props.onClick}>
        {props.text}
      </button>
    </div>
  )
}

const App = (propsd) => {
  const [counter, setCounter] = useState(0)

  const increaseOne = setCounter(counter + 1)
  const setZero = () => setCounter(0)

  return (
    <div>
      <Display counter={counter}/>
      <Button
        onClick={increaseOne}
        text = 'Increase'
      />
      <Button
        onClick={setZero}
        text = 'Zero'
      />
      {/* <ButtonOne /> */}
    </div>
  )
}

export default App
