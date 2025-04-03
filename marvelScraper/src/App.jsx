import { useState } from 'react'

const Button = ({ onClick, text }) => {

  //Needs to increase the counter for whether it is good, bad or neutral
  //When the button is clicked, pass in variable to manipulate
  return (
    <button onClick={onClick}>
      {text}
    </button>
  )
}








const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const increaseGood = () => {

    console.log('increasing, value before', { good })
    setGood(good + 1)
  }

  const increaseNeutral = () => {

    console.log('increasing, value before', { neutral })
    setNeutral(neutral + 1)
  }

  const increaseBad = () => {

    console.log('increasing, value before', { bad })
    setBad(bad + 1)
  }

  return (
    <div>
      <h1>Click the buttons below</h1>
      <Button onClick={increaseGood} text="current rank" />
      <Button onClick={increaseGood} text="peak rank" />
      <h1>statistics</h1>

    </div>
  )
}



export default App