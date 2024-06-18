import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad
  const average = (good - bad) / total
  const positive = (good / total) * 100

  const handleClick = (type) => () => {
    if (type === 'good') {
      setGood(good + 1)
      console.log('good is now', good+1)
    } else if (type === 'neutral') {
      setNeutral(neutral + 1)
      console.log('neutral is now:', neutral+1)
    } else {
      setBad(bad + 1)
      console.log('bad is now:', bad+1)
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={handleClick('good')}>good</button>
      <button onClick={handleClick('neutral')}>neutral</button>
      <button onClick={handleClick('bad')}>bad</button><br></br>

      <h1>Statistics</h1>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Average: {average || 0}</p>
      <p>Positive: {positive || 0}%</p>
    </div>
  )
}

export default App