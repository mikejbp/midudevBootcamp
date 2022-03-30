import React, {useState} from 'react';

//Header component
const Header = ( {text} ) => <h1>{text}</h1>;

//Buttons component
const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>;

//Statistic component
const Stat = ({text, value}) => {
  return (
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr>
  );
};

//Stats component to get the total number in the sum of good, neutral and bad coffees
const Stats = ({good, neutral, bad}) => { 
  const total = good + neutral + bad;

//Conditional which tell us what would happen if total value is 0
  if (total === 0) return <div>No feedback given!</div>

//Result of the average of clicks
  const average = () => (good - bad) / total;

//% of Positive reviews
const positive = () => (good / total) * 100 + " %";

//Return the body of a table to put an order to the Statistics
  return (
    <table>
      <tbody>
        <Stat text="Good: " value={good} />
        <Stat text="Neutral: " value={neutral} />
        <Stat text="Bad:" value={bad} />
        <Stat text="All: " value={total} />
        <Stat text="Average: " value={average()} />
        <Stat text="Positive: " value={positive()} />
      </tbody>
    </table>
  );
};

//App functions
const App = () => {
    const [good, setGood] = useState(0);
    const [neutral, setNeutral] = useState(0);
    const [bad, setBad] = useState(0);

    const handleGoodClick = () => setGood(good + 1);
    const handleNeutralClick = () => setNeutral(neutral + 1);
    const handleBadClick = () => setBad(bad + 1);
    
  return (
    <div>
      <Header text={"Give Feedback!"} />
      <Button handleClick={handleGoodClick} text="Good" />
      <Button handleClick={handleNeutralClick} text="Neutral" />
      <Button handleClick={handleBadClick} text="Bad" />
      <Header text={"Statistics"} />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;