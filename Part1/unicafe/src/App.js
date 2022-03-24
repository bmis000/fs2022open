import { useState } from 'react'

const Button = ({clickHandler,text}) => (
  <button onClick ={clickHandler}>{text}</button>
)

const StatisticLine = ({text, count}) => (
  <tr>
    <td>{text}</td>
    <td>{count}</td>
  </tr>
)

const Statistics = ({votes}) => {
  // console.log(votes);
  if (Total(votes) > 0) {
    return (
      <table>
        <tbody>
          <StatisticLine text='good' count={votes[0]}/>
          <StatisticLine text='neutral' count={votes[1]}/>
          <StatisticLine text='bad' count={votes[2]}/>
          <StatisticLine text='all' count={Total(votes)}/>
          <StatisticLine text='average' count={Avg(votes)}/>
          <StatisticLine text='positive' count={PositivePercentage(votes)}/>
        </tbody>
      </table>
    )
  }
  return <p>No feedback given</p>
}

const Total = (votes) => {
  let sum = 0
  votes.forEach(element => {
    sum = sum + element
  });
  return sum
}

const Avg = (votes) => {
  let sum = 0
  sum = votes[0] - votes[2]
  return sum/Total(votes)
}

const PositivePercentage = (votes) => (100*votes[0]/Total(votes))

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => setGood(good + 1)
  const increaseNeutral = () => setNeutral(neutral + 1)
  const increaseBad = () => setBad(bad + 1)

  const votes = [good, neutral, bad]

  return (
    <div>
      <h1>give feedback</h1>
      <Button clickHandler={increaseGood} text='good'/>
      <Button clickHandler={increaseNeutral} text='neutral'/>
      <Button clickHandler={increaseBad} text='bad'/>
      <h1>statistics</h1>
      <Statistics votes={votes}/>
    </div>
  )
}

export default App