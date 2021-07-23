import React from 'react';
import './App.css';
import ToDoList from "./ToDoList";

function App() {

  const firstTask = [
    {id: 0, title: "HTML&CSS", isDone: true},
    {id: 1, title: "JS", isDone: true},
    {id: 2, title: "React", isDone: false}
  ]

  const secondTask = [
    {id: 0, title: "ReactJS", isDone: true},
    {id: 1, title: "Vue", isDone: false},
    {id: 2, title: "Angular", isDone: false}
  ]


  return (
    <div className="App">
      <ToDoList title={"How to learn"} task={firstTask}/>
      <ToDoList title={"Frameworks"} task={secondTask}/>
    </div>
  );
}

export default App;
