import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = (props) => {
  return (
    <p>{props.text}: {props.value || 0}</p>
  )
}

const Statistics = (props) =>{
  return (    
    <div>
      <StatisticLine text='Good' value={props.good}/>
      <StatisticLine text='Neutral' value={props.neutral}/>
      <StatisticLine text='Bad' value={props.bad}/>
      <StatisticLine text='Total' value={props.good + props.neutral + props.bad}/>
      <StatisticLine text='Average' value={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
      <StatisticLine text='Positive' value={(props.good / (props.good + props.neutral + props.bad)) * 100}/>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  let stats 

  if ((good + neutral + bad) == 0){
    stats = <p>No Feedback Given</p>
  } else {
    stats = <Statistics good={good} neutral={neutral} bad={bad}/>
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button handleClick={() => setGood(good + 1)} text='Good'/>
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral'/>
      <Button handleClick={() => setBad(bad + 1)} text='Bad'/><br></br>
      {stats}
    </div>
  )
}

export default App