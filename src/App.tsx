import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import ToDoList from "./ToDoList";

export type FilterType = 'all' | 'done' | 'notdone'

function App() {
  let [tasks, setTasks] = useState([
    {id: v1(), title: "HTML&CSS", isDone: true},
    {id: v1(), title: "JS", isDone: true},
    {id: v1(), title: "React", isDone: false},
    {id: v1(), title: "rest api", isDone: false},
    {id: v1(), title: "graphQL", isDone: false}
  ])
  let [error, setError] = useState<string | null>(null)

  const removeTask = (taskId: string) => {
    const removedTasks = tasks.filter(el => el.id !== taskId)
    setTasks(removedTasks)
  }
  const addTask = (title: string) => {
    if (title.trim().length === 0) {
      setError('Title is required')
    } else {
      let newTask = {id: v1(), title: title, isDone: false}
      let taskForToDoList = [...tasks, newTask]
      setTasks(taskForToDoList)
    }
  }
  const changeStatus = (id: string, checked: boolean) => {
    const findTask = tasks.find(el => el.id === id)
    if (findTask) {
      findTask.isDone = checked
    }
    setTasks([...tasks])
  }

  let [filter, setFilter] = useState<FilterType>('all')
  let filteringTasks = tasks

  if (filter === 'done') {
    filteringTasks = filteringTasks.filter(el => el.isDone)
  }
  if (filter === 'notdone') {
    filteringTasks = filteringTasks.filter(el => !el.isDone)
  }

  return (
    <div className="App">
      <ToDoList addTask={addTask}
                title={"How to learn"}
                error={error}
                task={filteringTasks}
                changeStatus={changeStatus}
                removeTask={removeTask}
                setFilter={setFilter}
                setError={setError}
                filter={filter}
      />
    </div>
  );
}

export default App;
