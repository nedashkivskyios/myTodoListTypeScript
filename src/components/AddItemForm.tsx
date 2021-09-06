import React, {ChangeEvent, useState} from 'react';
import {IconButton, TextField} from "@material-ui/core";
import {AddBox} from "@material-ui/icons";

type PropsType = {
  callback: (title: string) => void

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
    }
  }
  return (
    <div>
      <TextField
        error={!!error}
        variant={'outlined'}
        className={error ? 'errorInput' : ''}
        value={todoTitle}
        onChange={todoTitleHandler}
        label={'Title'}
        helperText={error}
        onKeyPress={(e) => {
          if (todoTitle.trim().length === 0) {
            setError('Title is required')
          } else {
            if (e.ctrlKey && e.charCode === 13) {
              props.callback(todoTitle)
              setTodoTitle('')
            }
          }
        }}
      />
      <IconButton onClick={callbackHandler} color={'primary'}>
        <AddBox/>
      </IconButton>
    </div>
  );
};