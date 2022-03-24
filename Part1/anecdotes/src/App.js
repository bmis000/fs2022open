import { useState } from 'react'

const Button = ({clickHandler, text}) => (
  <button onClick={clickHandler}>{text}</button>
)

const getRandomIntInclusive = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}

const MostVoteAnecdoteIndex = (arr) => {
  var indexOfHighest = 0;
  var maxValue = arr[0];

  for (var i = 1; i < arr.length; i++){
    if (arr[i] > maxValue){
      maxValue = arr[i];
      indexOfHighest = i
    }
  }
  return indexOfHighest;
}

const MostVoteAnecdote = ({arrAnecdote, arrIndex}) =>{
  return (<p>{arrAnecdote[MostVoteAnecdoteIndex(arrIndex)]}</p>)
}

const App = () => {
  const anecdotes = [ //anecdote will stay in this order and the index of this will relate to the arr array in the hook (selected.arr)
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
   
  const [selected, setSelected] = useState({ //hook has 2 properties to keep track of
    anecdoteIndex:0, //the current index (or anecdote position)
    arr: new Array(anecdotes.length).fill(0) //create an array filled with 0 of the same length of the anecdotes
  })

  const changeAnecdote = () => {
    const newSelected = {
      ...selected,
      anecdoteIndex: getRandomIntInclusive(0,anecdotes.length - 1)
    }
    setSelected(newSelected)
  }

  const incrementVote = () => {
    const arr2 = [...selected.arr]; //copy the array
    arr2[selected.anecdoteIndex] = selected.arr[selected.anecdoteIndex] + 1; //increase the count at that index
    const newSelected = { //create a new selected object to assign selected to
      ...selected,
      arr: arr2
    }
    setSelected(newSelected) //assign the modified copy of selected to selected throught the setSelected function
  }

  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>{anecdotes[selected.anecdoteIndex]}<br/>
      has {selected.arr[selected.anecdoteIndex]} votes</p>
      <Button clickHandler={incrementVote} text='vote'/>
      <Button clickHandler={changeAnecdote} text='next anecdote'/>
      <h1>Anecdote with most votes</h1>
      <MostVoteAnecdote arrAnecdote={anecdotes} arrIndex={selected.arr}/>
    </div>
  )
}

export default App