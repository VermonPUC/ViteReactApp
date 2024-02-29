const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>
        {props.content}
      </h1>
    </div>
  )
};

const Part = (props) => {
  return (
    <div>
      <p>
        {props.txt} {props.value}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part txt = {props.parts[0].txt} value = {props.parts[0].value}/>
        <Part txt = {props.parts[1].txt} value = {props.parts[1].value}/>
        <Part txt = {props.parts[2].txt} value = {props.parts[2].value}/>
    </div>
  )
};

const Total = (props) => {
  return (
    <div>
      <p>
      Number of exercises {props.parts[0].value + props.parts[1].value + props.parts[2].value}
      </p>
    </div>
  )
}

const App = () => {
  const header = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  const course = {
    name: 'Half Stack application development',
    parts: [
      {txt: part1, value: exercises1},
      {txt: part2, value: exercises2},
      {txt: part3, value: exercises3}],
  }

  return (
    <div>
      <Header content = {course.name} />
      <Content parts = {course.parts}/>
      <Total parts = {course.parts}/>
    </div>
  )
}

export default App