import React from "react";

// The Header Component
const Header = (props) => {
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  );
};

// The Content component
const Content = (props) => {
  return (
    <div>
      <p>
        {props.part1} {props.exercises1}
      </p>
      <p>
        {props.part2} {props.exercises2}
      </p>
      <p>
        {props.part3} {props.exercises3}
      </p>
    </div>
  );
};

// The Total component
const Total = (props) => {
  return (
    <div>
      <p>
        Number of exercises{" "}
        {props.exercises1 + props.exercises2 + props.exercises3}
      </p>
    </div>
  );
};
const App = () => {
  // Defining our course object which is used by child components
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises1: 10,
      },
      {
        name: "Using props to pass data",
        exercises2: 7,
      },
      {
        name: "State of a component",
        exercises3: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course.name} />
      <Content
        part1={course.parts[0]["name"]}
        exercises1={course.parts[0]["exercises1"]}
        part2={course.parts[1]["name"]}
        exercises2={course.parts[1]["exercises2"]}
        part3={course.parts[2]["name"]}
        exercises3={course.parts[2]["exercises3"]}
      />
      <Total
        exercises1={course.parts[0]["exercises1"]}
        exercises2={course.parts[1]["exercises2"]}
        exercises3={course.parts[2]["exercises3"]}
      />
    </div>
  );
};

export default App;
