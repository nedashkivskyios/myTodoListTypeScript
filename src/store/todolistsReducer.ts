
import {v1} from "uuid";
import {FilterType, TodoListType} from "../App";


type ActionTypes =
  ReturnType<typeof RemoveTodolistActionCreator> |
  ReturnType<typeof AddTodolistActionCreator> |
  ReturnType<typeof ChangeTodolistTitleActionCreator> |
  ReturnType<typeof ChangeTodolistFilterActionCreator>


export const RemoveTodolistActionCreator = (todolistID: string) => {
  return {
    type: 'REMOVE-TODOLIST',
    id: todolistID
  } as const
}
export const AddTodolistActionCreator = (title: string) => {
  return {
    type: 'ADD-TODOLIST',
    title,
    todolistId: v1()
  } as const
}
export const ChangeTodolistTitleActionCreator = (id: string, title: string) => {
  return {
    type: 'CHANGE-TODO-LIST-TITLE',
    id,
    title
  } as const
}
export const ChangeTodolistFilterActionCreator = (todolistId: string, value: FilterType) => {
  return {
    type: 'CHANGE-TODOLIST-FILTER',
    todolistId,
    value
  } as const
}

export const todolistsReducer = (todolists: Array<TodoListType>, action: ActionTypes): Array<TodoListType> => {
  switch (action.type) {
    case "REMOVE-TODOLIST":
      return todolists.filter(tl => tl.id !== action.id);
    case "ADD-TODOLIST":
      return [...todolists, {id: action.todolistId, title: action.title, filter: 'all'}];
    case "CHANGE-TODO-LIST-TITLE":
      let todolist = todolists.find(tl => tl.id === action.id)
      if (todolist) {
        todolist.title = action.title
      }
      return [...todolists]
    case "CHANGE-TODOLIST-FILTER":
      let todolist1 = todolists.find(tl => tl.id === action.todolistId);
      if (todolist1) {
        todolist1.filter = action.value;
      }
      return [...todolists]
    default:
      return todolists
  }
}

