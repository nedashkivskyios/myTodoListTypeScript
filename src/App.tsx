import React, {useState} from 'react';
import {v1} from 'uuid';
import './App.css';
import ToDoList from "./ToDoList";
import {AddItemForm} from "./components/AddItemForm";
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {Container, Grid, Paper} from "@material-ui/core";

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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}))

function App() {
  const classes = useStyles();
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
  const addTodolist = (title: string) => {
    const newTodolistID = v1()
    const newTodolist = {
      id: newTodolistID,
      title: title,
      filter: 'all' as FilterType
    }
    setTodolist([newTodolist, ...todolist])
    tasks[newTodolistID] = []

  }
  const changeStatus = (todolistID: string, id: string, checked: boolean) => {
    const task = tasks[todolistID]
    const findTask = task.find(el => el.id === id)
    if (findTask) {
      findTask.isDone = checked
    }
    setTasks({...tasks})
  }
  const changeTaskTitle = (todolistID: string, title: string, taskID: string) => {
    let ourTodolistTasks = tasks[todolistID]
    let ourTask = ourTodolistTasks.find(t => t.id === taskID)
    if (ourTask) {
      ourTask.title = title
    }
    setTasks({...tasks})
  }


  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container style={{padding: '30px'}}>
          <AddItemForm
            callback={addTodolist}
          />
        </Grid>
        <Grid container spacing={3}>
          {
            todolist.map(tl => {
              let filteringTasks = tasks[tl.id]
              if (tl.filter === 'done') {
                filteringTasks = filteringTasks.filter(el => el.isDone)
              }
              if (tl.filter === 'notdone') {
                filteringTasks = filteringTasks.filter(el => !el.isDone)
              }
              const changeTodolistTitle = (title: string) => {
                let TL = todolist.find(el => el.id === tl.id)
                if (TL) {
                  TL.title = title
                }
                setTodolist([...todolist])
              }

              const addTask = (title: string) => {
                const task = tasks[tl.id]
                let newTask = {id: v1(), title: title, isDone: false}
                tasks[tl.id] = [...task, newTask]
                setTasks({...tasks})
              }
              return (
                <Grid item key={tl.id}>
                  <Paper style={{padding: '20px'}}>
                    <ToDoList key={tl.id}
                              todolistID={tl.id}
                              title={tl.title}
                              filter={tl.filter}
                              task={filteringTasks}
                              addTask={addTask}
                              changeStatus={changeStatus}
                              removeTask={removeTask}
                              changeFilter={changeFilter}
                              removeTodolist={removeTodolist}
                              changeTodolistTitle={changeTodolistTitle}
                              changeTaskTitle={changeTaskTitle}
                    />
                  </Paper>
                </Grid>)
            })
          }
        </Grid>
      </Container>
    </div>
  );
}

export default App;
