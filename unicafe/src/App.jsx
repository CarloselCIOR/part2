import { useState } from 'react'

const Statistics = (props) => {
  let total = props.good + props.neutral + props.bad;
  let average = (props.good - props.bad) / total;
  let positive = props.good / total * 100;

  if (total == 0) {
    return (
      <div>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <table>
      <thead></thead>
      <tbody>
      <StaticLine text='good' value={props.good} />
      <StaticLine text='neutral' value={props.neutral} />
      <StaticLine text='bad' value={props.bad} />
      <StaticLine text='all' value={total} />
      <StaticLine text='average' value={average} />
      <StaticLine text='positive' value={positive + ' %'} />
      </tbody>
      <tfoot></tfoot>
    </table>
  )
}

const Header = ({ text }) => <h1>{text}</h1>

const StaticLine = ({ text, value }) => <tr><td>{text}</td><td>{value}</td></tr>

const Button = ({ handleClick, text }) => <button onClick={handleClick}>{text}</button>

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <Header text='give feedback' />
      <Button handleClick={() => setGood(good + 1)} text='good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='bad' />
      <Header text='statistics' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App