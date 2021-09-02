import React, {ChangeEvent, useState} from "react";
import {FilterType} from "./App";

export type TasksPropsType = {
  id: string,
  title: string,
  isDone: boolean
}
export type ToDoListPropsType = {
  title: string
  todolistID: string
  filter: FilterType
  error: string | null
  task: Array<TasksPropsType>
  setError: (setError: string | null) => void
  removeTodolist: (todolistID: string) => void
  addTask: (todolistID: string, title: string) => void
  removeTask: (todolistID: string, taskId: string) => void
  changeFilter: (value: FilterType, todolistID: string) => void
  changeStatus: (todolistID: string, id: string, checked: boolean) => void
}

const ToDoList = (props: ToDoListPropsType) => {

  const [todoTitle, setTodoTitle] = useState<string>('')


  const todoTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value)
    props.setError(null)
  }
  const addTaskButtonHandler = () => {
    props.addTask(props.todolistID, todoTitle)
    setTodoTitle('')
  }
  const removeTodolistHandler = () => {
    props.removeTodolist(props.todolistID)
  }
  const allButtonHandler = () => {
    props.changeFilter( 'all', props.todolistID)
  }
  const activeButtonHandler = () => {
    props.changeFilter( 'notdone', props.todolistID)
  }
  const completedButtonHandler = () => {
    props.changeFilter( 'done', props.todolistID)
  }
  return (
    <div className="ToDoList">
      <div>
        <h3>{props.title}</h3>
      <button onClick={removeTodolistHandler}>x</button>
      </div>
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
              props.changeStatus(props.todolistID, el.id, newStatusValue)
            }
            const removeTaskHandler = () => {
              props.removeTask(props.todolistID, el.id)
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
        <button className={props.filter === 'notdone' ? 'activeButton' : ''} onClick={activeButtonHandler}>Active
        </button>
        <button className={props.filter === 'done' ? 'activeButton' : ''} onClick={completedButtonHandler}>Completed
        </button>
      </div>
    </div>
  )
}

export default ToDoList;
