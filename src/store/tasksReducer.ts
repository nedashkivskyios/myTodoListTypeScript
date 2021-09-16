
import {v1} from "uuid";
import {AddTodolistActionCreator, RemoveTodolistActionCreator} from "./todolistsReducer";
import {TasksType} from "../App";



type ActionTypes =
  ReturnType<typeof changeTaskStatusAC> |
  ReturnType<typeof addTaskAC> |
  ReturnType<typeof removeTaskAC> |
  ReturnType<typeof changeTaskTitleAC> |
  ReturnType<typeof AddTodolistActionCreator> |
  ReturnType<typeof RemoveTodolistActionCreator>


export const removeTaskAC = (taskID: string, todolistID: string) => {
  return {
    type: 'REMOVE_TASK',
    taskID,
    todolistID
  } as const
}
export const addTaskAC = (title: string, todolistId: string) => {
  return {
    type: 'ADD_TASK',
    title,
    todolistId
  } as const
}
export const changeTaskStatusAC = (taskID: string, todolistId: string, isDone: boolean) => {
  return {
    type: 'CHANGE_TASK_STATUS',
    taskID,
    todolistId,
    isDone
  } as const
}
export const changeTaskTitleAC = (taskID: string, newTitle: string, todolistId: string) => {
  return {
    type: 'CHANGE_TASK_TITLE',
    taskID, newTitle, todolistId
  } as const
}


export const tasksReducer = (state: TasksType, action: ActionTypes): TasksType => {
  switch (action.type) {
    case 'REMOVE_TASK':
      return {...state, [action.todolistID]: state[action.todolistID].filter(t => t.id !== action.taskID)}
    case 'ADD_TASK':
      let task = {id: v1(), title: action.title, isDone: false}
      return {...state, [action.todolistId]: [task, ...state[action.todolistId]]}
    case "CHANGE_TASK_STATUS":
      return {...state, [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskID ? {...el, isDone: action.isDone } : el)}
    case 'CHANGE_TASK_TITLE':
      return {...state, [action.todolistId]: state[action.todolistId].map(el => el.id === action.taskID ? {...el, title: action.newTitle } : el)}
    case "ADD-TODOLIST":
      return {...state, [action.todolistId]: []}
    case "REMOVE-TODOLIST":
      let copy = {...state}
      delete copy[action.id]
      return copy
    //  const { [action.id]: remove, ...rest} = state
    // return rest
    default:
      return state
  }
}

