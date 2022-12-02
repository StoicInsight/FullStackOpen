import { useState } from 'react'
import './App.css';



const Statistics = ({good, bad, neutral}) => {
  return (
    <>

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
          onClick={() => setGood(good + 1)}
          />
          <Button
          name={'Bad'}
          onClick={() => setGood(good + 1)}
          />

        </div>
      </div>
    </div>
  )
}

export default App;
