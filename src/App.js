import { useState } from 'react'

const Button = (props) => {
  return(
    <button onClick={props.handleClick}>
      {props.text}
    </button>
  )
}


const Statistics = ({good, neutral, bad, allClicks, averageOfClicks, positivePercentage}) => {

      if(allClicks.length > 0) {
          return(
            <div>
                 <h1>Statistics are here</h1>
                <StatisticLine text="good" value = {good} />
                <StatisticLine text="neutral" value = {neutral} />
                <StatisticLine text="bad" value = {bad} />
                <StatisticLine text="Total nmber of feedbacks" value = {allClicks.length} />
                <StatisticLine text = "Average" value = {averageOfClicks(allClicks)} />
                <StatisticLine text = "Positive" value = {positivePercentage(good, neutral, bad) + "%"} />
            </div>
          )

      }

      else {
        return (
          <div>
            <h1>Statistics</h1>
              <p>No feedback given</p>
          </div>
        )
      }

}

const StatisticLine = ({value, text}) => {
  return(
    <div>
      <p>{text}: {value}</p>
    </div>
  )
}



const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAll] = useState([])
  
  const handleGoodClick = () => {
    setAll(allClicks.concat(1))
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setAll(allClicks.concat(0))
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setAll(allClicks.concat(-1))
    setBad(bad + 1)
  }

  const averageOfClicks = function(allClicks) {
    let sum = 0;
    for (let index = 0; index < allClicks.length; index++) {
      sum += allClicks[index]/allClicks.length;
      
    }
    return sum.toFixed(2);
  }

  const positivePercentage = (good, neutral, bad) => {
    console.log(good,neutral,bad)
      
      let positiveFeedbackPercentage = good / (good +neutral + bad) * 100;
      return positiveFeedbackPercentage.toFixed(0);
  }
  


  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={handleGoodClick} text="good" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />
      <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks} averageOfClicks={averageOfClicks} positivePercentage={positivePercentage} />
    </div>
  )
}

export default App