import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@material-ui/core";

type PropsType = {
  title: string
  onChange: (title: string) => void
}

export const EditableSpan: React.FC<PropsType> = (props) => {
  const [editMode, setEditMode] = useState<boolean>(false)
  const [text, setText] = useState<string>(props.title)
  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setText(e.currentTarget.value)
  }
  const onBlurHandler = () => {
    props.onChange(text)
    setEditMode(false)
  }
  const onDoubleClickHandler = () => {
    setEditMode(true)
  }
  if (editMode) {
    return (
      <TextField variant={'outlined'}
                 onChange={onChangeHandler}
                 value={text}
                 onBlur={onBlurHandler}
                 type="text"
                 autoFocus
                 onKeyPress={(e) => {
                   if (e.ctrlKey && e.charCode === 13) {
                     props.onChange(text)
                     setEditMode(false)
                   }
                 }}
      />
    )
  } else {
    return (
      <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
  }
};

