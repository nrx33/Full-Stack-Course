const Header = (props) => {
  console.log(props)
  return (
    <h1>
      {props.title.name}
    </h1>
  )
}

const Content = (props) => {
  console.log(props)
  return (
    <div>
      {props.content.parts[0].name} {props.content.parts[0].exercises}<br />
      {props.content.parts[1].name} {props.content.parts[1].exercises}<br />
      {props.content.parts[2].name} {props.content.parts[2].exercises}<br />
    </div>
  )
}

const Total = (props) => {
  console.log(props)
  return (
    <div>
      Number of exercises {
        props.value.parts[0].exercises + props.value.parts[1].exercises + props.value.parts[2].exercises
      }    
    </div>
  );
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header title={course} />
      <Content content={course} />
      <Total value={course} />
    </div>
  )
}

export default App