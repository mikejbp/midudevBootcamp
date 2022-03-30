import React from 'react'

//Header components
const Header = ({course}) => <h1>{course}</h1>;
/*const Title = (props) => {
  return <h1>{props.course}</h1>
}*/

//Content components
  const Part = ({part, exercise}) => <p>{part} {exercise}</p>;


const Content = (props) => {
  console.log("console: Content: " + props);
  return (
    <div>
      <Part part={props.parts[0].name} exercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} exercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} exercise={props.parts[2].exercises} />
    </div>
  )
};

//Total componetns
const Total = (props) => <div><p>Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p></div>
  /*return (
    <div>
      <p>
        Number of exercises: {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises} </p>
    </div>
  )*/


const App = () => {
const course = {
  name: 'Half Stack application development',
  parts: [
    {
      name: 'Fundamentals of React:',
      exercises: 10
    },
    {
      name: 'Using props to pass data:',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]
};

  return (
    <div>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>
  )
};

export default App;

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://
