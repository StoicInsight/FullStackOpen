import { useState } from 'react'
import './App.css';

const Good = (props) => {
  return (
    <div className='button'>
      <button
      className='good' 
      onClick={() => props.setGood(props.good + 1)}>
        Good
      </button>
    </div>
  )
}

const Bad = (props) => {
  return (
    <div className='button'>
      <button className='bad' onClick={() => props.setBad(props.bad + 1)}>
        Bad
      </button>
    </div>
  )
}

const Neutral = (props) => {
  return (
    <div className='button'>
      <button 
      className='neutral'
      onClick={() => props.setNeutral(props.neutral + 1)}>
        Neutral
      </button>
    </div>
  )
}

const Display = ({good, neutral, bad}) => {
  return (
    <div className='display'>
      Good{good}
      Neutral{neutral}
      Bad{bad}
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
      
        <div class="btn-wrap">
          <Good good= {good} setGood={setGood}/>
          <Bad bad= {bad} setBad={setBad}/>
          <Neutral neutral= {neutral} setNeutral={setNeutral}/>
        </div>
        <Display
        good={good}
        bad={bad}
        neutral={neutral}
        />
      </div>
    </div>
  )
}

export default App;
