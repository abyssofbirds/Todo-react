import React from "react";

function InputTodo(props) {
  return (
    <div className='input-form'>
    <form onChange={props.handleChangeInput} onSubmit={props.submitChange}>
      <input
        className='input-todo'
        placeholder="Введите название задачи"
        value={props.inputValue}
      ></input>
      <button className='add-todo'>+</button>
    </form>
    </div>
  );
}

export default InputTodo;
