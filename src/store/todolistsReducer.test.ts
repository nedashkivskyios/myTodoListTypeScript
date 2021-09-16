import {
  AddTodolistActionCreator,
  ChangeTodolistFilterActionCreator,
  ChangeTodolistTitleActionCreator,
  RemoveTodolistActionCreator,
  todolistsReducer
} from './todolistsReducer';
import {v1} from 'uuid';
import {FilterType, TodoListType} from "../App";

test('correct todolist should be removed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  const startState: Array<TodoListType> = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
  ]

  const endState = todolistsReducer(startState, RemoveTodolistActionCreator(todolistId1))

  expect(endState.length).toBe(1);
  expect(endState[0].id).toBe(todolistId2);
});
test('correct todolist should be added', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newTodolistTitle = "New Todolist";

  const startState: Array<TodoListType> = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
  ]

  const endState = todolistsReducer(startState, AddTodolistActionCreator(newTodolistTitle))

  expect(endState.length).toBe(3);
  expect(endState[2].title).toBe(newTodolistTitle);
});
test('correct todolist should change its name', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newTodolistTitle = "New Todolist";

  const startState: Array<TodoListType> = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
  ]

  const action = ChangeTodolistTitleActionCreator(todolistId2, newTodolistTitle)

  const endState = todolistsReducer(startState, action);

  expect(endState[0].title).toBe("What to learn");
  expect(endState[1].title).toBe(newTodolistTitle);
});
test('correct filter of todolist should be changed', () => {
  let todolistId1 = v1();
  let todolistId2 = v1();

  let newFilter: FilterType = 'notdone';

  const startState: Array<TodoListType> = [
    {id: todolistId1, title: "What to learn", filter: "all"},
    {id: todolistId2, title: "What to buy", filter: "all"}
  ]

  const action = ChangeTodolistFilterActionCreator(todolistId2, newFilter)

  const endState = todolistsReducer(startState, action);

  expect(endState[0].filter).toBe("all");
  expect(endState[1].filter).toBe(newFilter);
});



