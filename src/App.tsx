import React, {useState} from 'react';
import { v1 } from 'uuid';
import './App.css';
import ToDoList, {TasksPropsType} from "./ToDoList";

export type FilterType = 'all' | 'done' | 'notdone'

function App() {
  let [tasks, setTasks] = useState([
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "React", isDone: false},
    {id: v1(), title: "rest api", isDone: false},
    {id: v1(), title: "graphQL", isDone: false}
  ])

  const removeTask = (taskId: string) => {
    const removedTasks = tasks.filter(el => el.id !== taskId)
    setTasks(removedTasks)
  }
  let filteringTasks = tasks
  let [filter, setFilter] = useState<FilterType>('all')

  const addTask = (title: string) => {
   let  newTask = {id: v1(), title: title, isDone: false}
    let taskForToDoList = [...tasks, newTask]
    setTasks(taskForToDoList)
  }

  if (filter === 'done') {
    filteringTasks = filteringTasks.filter(el => el.isDone)
  }
  if (filter === 'notdone') {
    filteringTasks = filteringTasks.filter(el => !el.isDone)
  }

  return (
    <div className="App">
      <ToDoList addTask={addTask} title={"How to learn"} task={filteringTasks} removeTask={removeTask} setFilter={setFilter}/>
    </div>
  );
}

export default App;
