const Header = (props) => {
  console.log(props)
  return(
    <div>
      <h1>
        {props}
      </h1>
    </div>
  )
};

const Content = () => {

};

const Total = () => {
  <p>Number of exercises {exercises1 + exercises2 + exercises3}</p>
}

const App = () => {
  const header = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header hh = {header} />
      <Content />
      <Total />
    </div>
  )
}

export default App