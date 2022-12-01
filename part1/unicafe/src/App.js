import logo from './logo.svg';
import useState from 'react'
import './App.css';

const Good = (props) => {
  return (
    <div className='button'>
      <button onClick={() => props.setGood(props.good + 1)}>
        Good
      </button>
    </div>
  )
}

const Display = ({good, neutral, bad}) => {
  return (
    <div className=' Display'>
      {good}
    </div>
  )
}

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  
  return(
    <div className='container'>
      <Good good= {good} setGood={setGood}/>
      <Display good={good}/>
    </div>
  )
}

export default App;
