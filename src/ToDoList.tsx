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
  changeStatus: (id: string, checked: boolean) => void
  error: string | null
  setError: (setError: string | null) => void
  filter: FilterType
}

const ToDoList = (props: ToDoListPropsType) => {

  const [todoTitle, setTodoTitle] = useState<string>('')

  const todoTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value)
    props.setError(null)
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
        <input className={props.error ? 'errorInput' : ''} value={todoTitle} onChange={todoTitleHandler}/>
        <button onClick={addTaskButtonHandler}>+</button>
        <div className={'error'}>
          {props.error ? props.error : ''}
        </div>
      </div>
      <ul>
        {
          props.task.map(el => {

            const changeStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
              const newStatusValue = e.currentTarget.checked
              props.changeStatus(el.id, newStatusValue)
            }
            const removeTaskHandler = () => {
              props.removeTask(el.id)
            }

            return <li className={el.isDone ? 'isDone' : ''} key={el.id}>
                <button onClick={removeTaskHandler}>
                  x
                </button>
                <input onChange={changeStatusHandler} type="checkbox" checked={el.isDone}/>
                <span>{el.title}</span>
              </li>
          })
        }
      </ul>
      <div>
        <button className={props.filter === 'all' ? 'activeButton' : ''} onClick={allButtonHandler}>All</button>
        <button className={props.filter === 'notdone' ? 'activeButton' : ''} onClick={activeButtonHandler}>Active</button>
        <button className={props.filter === 'done' ? 'activeButton' : ''} onClick={completedButtonHandler}>Completed</button>
      </div>
    </div>
  )
}

export default ToDoList;
