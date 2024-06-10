const Header = (props) => {
  console.log(props)
  return (
    <h1>{props.course}</h1>
  )
}

const Content = () => {
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  console.log(part1, exercises1, part2, exercises2, part3, exercises3)
  return (
    <div>
      {part1} {exercises1}<br></br>
      {part2} {exercises2}<br></br>
      {part3} {exercises3}
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return(
    <p>
      Number of exercises {props.value}
    </p>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const exercises1 = 10
  const exercises2 = 7
  const exercises3 = 14
  const total = exercises1 + exercises2 + exercises3

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total value = {total} />
    </div>
  )
}

export default App