  const Header = (course) => {
    return (<h1>{course}</h1>)
  }


  const Content = (props) =>{
    return (
      <div>
      <Part part={props.p1} excercise ={props.e1}/>
      <Part part={props.p2} excercise ={props.e2}/>
      <Part part={props.p3} excercise ={props.e3}/>
      </div>
    )
  }

  const Part = (part) => {
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
        <Content p1={part1} p2={part1} p3={part1} e1={exercises1} e2={exercises1} e3={exercises1}/>
        <Total ex1={exercises1} ex2={exercises2} ex3={exercises3}/>
      </div>
    )
  }
export default App
