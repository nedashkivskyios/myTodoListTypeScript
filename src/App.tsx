import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import ToDoList from "./ToDoList";

export type FilterType = 'all' | 'done' | 'notdone'
export type TaskType = {
  id: string
  title: string
  isDone: boolean
}
export type TodoListType = {
  id: string,
  title: string,
  filter: FilterType
}
export type TasksType = {
  [key: string]: Array<TaskType>
}
const todoListIDOne = v1()
const todoListIDTwo = v1()

function App() {

  let [todolist, setTodolist] = useState<Array<TodoListType>>([
    {
      id: todoListIDOne,
      title: 'What to learn',
      filter: 'all'
    },
    {
      id: todoListIDTwo,
      title: 'What to buy',
      filter: 'all'
    },
  ])


  let [tasks, setTasks] = useState<TasksType>({
    [todoListIDOne]: [
      {id: v1(), title: "HTML&CSS", isDone: true},
      {id: v1(), title: "JS", isDone: true},
      {id: v1(), title: "React", isDone: false},
      {id: v1(), title: "rest api", isDone: false},
      {id: v1(), title: "graphQL", isDone: false}
    ],
    [todoListIDTwo]: [
      {id: v1(), title: "Beer", isDone: false},
      {id: v1(), title: "Milk", isDone: false},
      {id: v1(), title: "Bread", isDone: false}
    ],
  })
  let [error, setError] = useState<string | null>(null)

  const changeFilter = (value: FilterType, todolistID: string) => {
    const todo = todolist.find(tl => tl.id === todolistID)
    if (todo) {
      todo.filter = value
      setTodolist([...todolist])
    }
  }

  const removeTask = (todolistID: string, taskId: string) => {
    const task = tasks[todolistID]
    tasks[todolistID] = task.filter(el => el.id !== taskId)
    setTasks({...tasks})
    }
const removeTodolist = (todolistID: string) => {
  const newTodolist = todolist.filter(tl => tl.id !== todolistID)
  setTodolist(newTodolist)
  delete tasks[todolistID]
}
  const addTask = (todolistID: string, title: string) => {
  const task = tasks[todolistID]
    if (title.trim().length === 0) {
      setError('Title is required')
    } else {
      let newTask = {id: v1(), title: title, isDone: false}
      tasks[todolistID] = [...task, newTask]
      setTasks({...tasks})
    }
  }
  const changeStatus = (todolistID: string, id: string, checked: boolean) => {
    const task = tasks[todolistID]
    const findTask = task.find(el => el.id === id)
    if (findTask) {
      findTask.isDone = checked
    }
    setTasks({...tasks})
  }


  return (
    <div className="App">
      {
        todolist.map(tl => {
          let filteringTasks = tasks[tl.id]
          if (tl.filter === 'done') {
            filteringTasks = filteringTasks.filter(el => el.isDone)
          }
          if (tl.filter === 'notdone') {
            filteringTasks = filteringTasks.filter(el => !el.isDone)
          }
          return <ToDoList key={tl.id}
                           removeTodolist={removeTodolist}
                           todolistID={tl.id}
                           addTask={addTask}
                           title={tl.title}
                           error={error}
                           task={filteringTasks}
                           changeStatus={changeStatus}
                           removeTask={removeTask}
                           changeFilter={changeFilter}
                           setError={setError}
                           filter={tl.filter}
          />
        })
      }
    </div>
  );
}

export default App;
