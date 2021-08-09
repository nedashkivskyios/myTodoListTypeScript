import React, {ChangeEvent, useState} from "react";
import {FilterType} from "./App";

export type TasksPropsType = {
  id: string,
  title: string,
  isDone: boolean
}
export type ToDoListPropsType = {
  title: string
  task: Array<TasksPropsType>
  removeTask: (taskId: string) => void
  setFilter: (setFilter: FilterType) => void
  addTask: (title: string) => void
}

const ToDoList = (props: ToDoListPropsType) => {

  const [todoTitle, setTodoTitle] = useState<string>('')

  const todoTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value)
  }
  const addTaskButtonHandler = () => {
    props.addTask(todoTitle)
    setTodoTitle('')
  }
  const allButtonHandler = () => {
    props.setFilter('all')
  }
  const activeButtonHandler = () => {
    props.setFilter('notdone')
  }
  const completedButtonHandler = () => {
    props.setFilter('done')
  }

  return (
    <div className="ToDoList">
      <h3>{props.title}</h3>
      <div>
        <input value={todoTitle} onChange={todoTitleHandler}/>
        <button onClick={addTaskButtonHandler}>+</button>
      </div>
      <ul>
        {props.task.map(el =>
          <li key={el.id}>
            <button onClick={() => props.removeTask(el.id)}>
              x
            </button>
            <input type="checkbox" checked={el.isDone}/>
            <span>{el.title}</span>
          </li>
        )}
      </ul>
      <div>
        <button onClick={allButtonHandler}>All</button>
        <button onClick={activeButtonHandler}>Active</button>
        <button onClick={completedButtonHandler}>Completed</button>
      </div>
    </div>
  )
}

export default ToDoList;
