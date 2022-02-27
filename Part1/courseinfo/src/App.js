  const Header = (course) => {
    return (<h1>{course}</h1>)
  }

  const Content = (part) => {
    return (<p>{part} {excercise}</p>)
  }

  const Total = (props) => {
    return (<p>Number of exercies {props.ex1+props.ex2+props.ex3}</p>)
  }
  const App = () => {
    const course = 'Half Stack application development'
    const part1 = 'Fundamentals of React'
    const exercises1 = 10
    const part2 = 'Using props to pass data'
    const exercises2 = 7
    const part3 = 'State of a component'
    const exercises3 = 14



    return (
      <div>
        <Header course={course} />
        <Content part = {part1} excercise = {exercises1} />
        <Content part = {part2} excercise = {exercises2} />
        <Content part = {part3} excercise = {exercises3} />
        <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      </div>
    )
  }
export default App
