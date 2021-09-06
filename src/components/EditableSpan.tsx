import React, {ChangeEvent, useState} from 'react';

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
      <input onChange={onChangeHandler}
             value={text}
             onBlur={onBlurHandler}
             type="text"
             autoFocus
      />
    )
  } else {
    return (
      <span onDoubleClick={onDoubleClickHandler}>{props.title}</span>
    )
  }
};

