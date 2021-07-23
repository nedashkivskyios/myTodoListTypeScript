import React from "react";

type TasksPropsType = {
  id: number,
  title: string,
  isDone: boolean
}

type ToDoListPropsType = {
  title: string
  task: Array<TasksPropsType>
}


const ToDoList = (props: ToDoListPropsType) => {
  return (
    <div className="ToDoList">
      <h3>{props.title}</h3>
      <div>
        <input/>
        <button>+</button>
      </div>
      <ul>
        {props.task.map(el => <li><input type="checkbox" checked={el.isDone}/> <span>{el.title}</span></li>)}
      </ul>
      <div>
        <button>All</button>
        <button>Active</button>
        <button>Completed</button>
      </div>
    </div>
  )
}

export default ToDoList;
