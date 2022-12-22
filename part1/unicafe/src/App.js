import { useState } from "react";
import Controls from "./Controls";
import Statistics from "./Statistics";

function App() {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const onControlClick = (eventName) => {
    switch (eventName) {
      case 'good':
        setGood(good+1)
        break;
      case 'neutral':
        setNeutral(neutral+1)
        break;
      case 'bad':
        setBad(bad+1)
        break;
      default:
        break;
    }
  }

  return (
    <div>
      <h1>Give Feedback</h1>
      <Controls controlClick={onControlClick}></Controls>
      <Statistics good={good} neutral={neutral} bad={bad}></Statistics>
    </div>
  )
}

export default App;
