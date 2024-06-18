import { useState } from 'react'

const Statistics = (props) =>{
  return (    
    <div>
      <h1>Statistics</h1>
      <p>Good: {props.good}</p>
      <p>Neutral: {props.neutral}</p>
      <p>Bad: {props.bad}</p>
      <p>Total: {props.good + props.neutral + props.bad}</p>
      <p>Average: {(props.good - props.bad) / (props.good + props.neutral + props.bad) || 0}</p>
      <p>Positive: {(props.good / (props.good + props.neutral + props.bad)) * 100 || 0}%</p> 
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button><br></br>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App