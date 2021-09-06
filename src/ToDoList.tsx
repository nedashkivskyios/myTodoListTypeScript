import React, {ChangeEvent} from "react";
import {FilterType} from "./App";
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {Button, Checkbox, IconButton} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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
    props.changeTodolistTitle(title)
  }

  const removeTodolistHandler = () => {
    props.removeTodolist(props.todolistID)
  }
  const allButtonHandler = () => {
    props.changeFilter('all', props.todolistID)
  }
  const activeButtonHandler = () => {
    props.changeFilter('notdone', props.todolistID)
  }
  const completedButtonHandler = () => {
    props.changeFilter('done', props.todolistID)
  }
  return (
    <div className="ToDoList">
      <div>
        <EditableSpan onChange={changeTodolistTitle} title={props.title}/>
        <IconButton onClick={removeTodolistHandler}>
          <Delete/>
        </IconButton>
      </div>
      <div>
        <AddItemForm callback={props.addTask}/>
      </div>
      <div>
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

            return <div className={el.isDone ? 'isDone' : ''} key={el.id}>
              <Checkbox onChange={changeStatusHandler} checked={el.isDone}/>
              <EditableSpan title={el.title} onChange={onChangeTaskTitleHandler}/>
              <IconButton onClick={removeTaskHandler}>
                <Delete/>
              </IconButton>
            </div>
          })
        }
      </div>
      <div>
        <Button
          variant={props.filter === 'all' ? 'outlined' : 'text'}
          onClick={allButtonHandler}
        >
          All
        </Button>
        <Button
          color={'primary'}
          variant={props.filter === 'notdone' ? 'outlined' : 'text'}
          onClick={activeButtonHandler}
        >
          Active
        </Button>
        <Button
          color={'secondary'}
          variant={props.filter === 'done' ? 'outlined' : 'text'}
          onClick={completedButtonHandler}
        >
          Completed
        </Button>
      </div>
    </div>
  )
}

export default ToDoList;
