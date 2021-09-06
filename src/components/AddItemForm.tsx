import React, {ChangeEvent, useState} from 'react';

type PropsType = {
  callback: ( title: string) => void

}


export const AddItemForm: React.FC<PropsType> = (props) => {
  const [todoTitle, setTodoTitle] = useState<string>('')
  let [error, setError] = useState<string | null>(null)
  const todoTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoTitle(e.currentTarget.value)
    setError(null)
  }
  const callbackHandler = () => {
    if (todoTitle.trim().length === 0) {
      setError('Title is required')
    } else {
    props.callback(todoTitle)
    setTodoTitle('')
  }}
  return (
    <div>
      <input className={error ? 'errorInput' : ''} value={todoTitle} onChange={todoTitleHandler}/>
      <button onClick={callbackHandler}>+</button>
      <div className={'error'}>
        {error ? error : ''}
      </div>
    </div>
  );
};