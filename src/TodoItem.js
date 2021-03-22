import React from "react";


const TodoItem = (props) => {
  const todoItems = props.tasks.map((task) => (
    <div
      className={task.completed === false ? "todo-item" : "todo-item completed"}
    >
      <div
      className='todo-text'
        key={task.id}
        completed={task.completed}
        id={task.id}
        isOpenInput={task.isOpenInput}
      >{task.name}</div>
      <div>
        
        <button className='btn-change' onClick={() => props.handleChangeCompleted(task.name)}>
          &#9745;
        </button>
        <button className='btn-change' onClick={() => props.removingTodo(task.name)}>&#9746;</button>
        <button className='btn-change' onClick={() => props.handleChangePositionUp(task.name)}>
          &uArr;
        </button>
        <button className='btn-change' onClick={() => props.handleChangePositionDown(task.name)}>
          &dArr;
        </button>
      </div>
    </div>
  ));
  return <div>{todoItems}</div>;
};

export default TodoItem;
