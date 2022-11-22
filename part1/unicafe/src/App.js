import React, { useState } from "react";

// A button component for all buttons in the app
const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

// A statistics Line component
const StatisticsLine = ({ text, value }) => {
  return (
    <>
      <tr>
        <td>{text} </td>
        <td>{value}</td>
      </tr>
    </>
  );
};
const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    );
  }
  return (
    <div>
      <table>
        <tbody>
          <StatisticsLine text="good" value={good} />
          <StatisticsLine text="neutral" value={neutral} />
          <StatisticsLine text="bad" value={bad} />
          <StatisticsLine text="all" value={good + neutral + bad} />
          <StatisticsLine
            text="average"
            value={(good - bad) / (good + neutral + bad)}
          />
          <StatisticsLine
            text="positive"
            value={(good / (good + neutral + bad)) * 100 + " %"}
          />
        </tbody>
      </table>
    </div>
  );
};
function App() {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      {/* We print 3 button components for all the 3 states */}
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />

      <h2>Statistics</h2>

      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App;
