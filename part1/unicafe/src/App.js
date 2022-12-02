import { useState } from 'react'
import './App.css';



const Statistics = ({good, bad, neutral}) => {

  function avarage () {
    const sum = (good + bad + neutral)
    return sum 
  }

  function positive () {
    const sum = (good + bad + neutral)
    return sum 
  }

  if(good && bad && neutral === 0) {
    return(
      <>
        <h1>
          Must leave a review to see avarage
        </h1>
      </>
    )
  }

  return (
    <>
      <h1>Avarage: {avarage()}</h1>
      <h1>Positive: {positive()}</h1>
    </>
  )
}

const Button = (props) => {
  return (
    <button onClick={props.click}>
      {props.name}
    </button>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return(
    <div class="wrap">
      <div className='container'>
      
        <div class="btn-wrap">
          <Button
          name={'Good'}
          onClick={() => setGood(good + 1)}
          />
          <Button
          name={'Neutral'}
          onClick={() => setNeutral(neutral + 1)}
          />
          <Button
          name={'Bad'}
          onClick={() => setBad(bad + 1)}
          />

        </div>
      </div>
    </div>
  )
}

export default App;
