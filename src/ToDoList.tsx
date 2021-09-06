import React, {ChangeEvent} from "react";
import {FilterType} from "./App";
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";

export type TasksPropsType = {
  id: string,
  title: string,
  isDone: boolean
}
export type ToDoListPropsType = {
  title: string
  todolistID: string
  filter: FilterType
  task: Array<TasksPropsType>
  removeTodolist: (todolistID: string) => void
  addTask: (title: string) => void
  removeTask: (todolistID: string, taskId: string) => void
  changeFilter: (value: FilterType, todolistID: string) => void
  changeStatus: (todolistID: string, id: string, checked: boolean) => void
  changeTodolistTitle: (title: string) => void
  changeTaskTitle: (todolistID: string, title: string, taskID: string) => void
}

const ToDoList = (props: ToDoListPropsType) => {


  const changeTodolistTitle = (title: string) => {
    props.changeTodolistTitle( title)
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
        <EditableSpan onChange={changeTodolistTitle} title={props.title}/>
      <button onClick={removeTodolistHandler}>x</button>
      </div>
      <div>
        <AddItemForm callback={props.addTask} />
      </div>
      <ul>
        {
          props.task.map(el => {

            const onChangeTaskTitleHandler = (title: string) => {
              props.changeTaskTitle(props.todolistID, title, el.id)
            }


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
              <EditableSpan title={el.title} onChange={onChangeTaskTitleHandler} />
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
