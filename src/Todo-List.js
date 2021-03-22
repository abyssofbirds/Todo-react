import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className='todo-list'>
      <TodoItem
        tasks={props.tasks}
        handleChangeCompleted={props.handleChangeCompleted}
        removingTodo={props.removingTodo}
        handleChangePositionUp={props.handleChangePositionUp}
        handleChangePositionDown={props.handleChangePositionDown}
        togleInput={props.togleInput}
        handleChangeInput={props.handleChangeInput}
      />
    </div>
  );
}

export default TodoList;
