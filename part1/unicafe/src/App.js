import { useState } from 'react'
import './App.css';



const Statistics = ({good, bad, neutral}) => {

  function avarage () {
    const sum = good + bad + neutral
    return sum / 3
  }

  function positive () {
    const sum = good + bad + neutral
    const res = good / sum
    return res.toFixed(2) * 100
  }

  function all() {
    const sum = good + bad + neutral
    return sum
  }

  if(good === 0  && bad === 0 && neutral === 0) {
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

      <h3>All: {all()}</h3>
      <h3>Avarage: {avarage()}</h3>
      <h3>Positive: {positive()}%</h3>
    </>
  )
}

const Button = (props) => {
  return (
    <div className='button'>
     <button onClick={props.click}>
      {props.name}
     </button>
      {props.value}
    </div>
  
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return(
    <div class="wrap">
      <div className='container'>
        <h1>Give FeedBack</h1>
          <div class="btn-wrap">
            <Button
            name={'Good'}
            value={good}
            click={() => setGood(good + 1)}
            />
            <Button
            name={'Neutral'}
            value={neutral}
            click={() => setNeutral(neutral + 1)}
            />
            <Button
            name={'Bad'}
            value={bad}
            click={() => setBad(bad + 1)}
            />
          </div>
          <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          />
      </div>
    </div>
  )
}

export default App;
