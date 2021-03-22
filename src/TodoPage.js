import React, { useState } from "react";
import InputTodo from "./InputTodo"; 
import TodoList from "./Todo-List";

function TodoPage() {
  const [inputValue, setInputValue] = useState("");
  const [tasks, addTodo] = useState([]);
  const [, changeCompleted] = useState(tasks);
  const [, deleteTodo] = useState(tasks);
  const [, changePosition] = useState(tasks);
  

  const handleChangeInput = (event) => {
    setInputValue(event.target.value);
    console.log(event.target.value);
  };
  const submitChange = (event) => {
    event.preventDefault();
    if (inputValue !== "") {
      addTodo([
        ...tasks,
        {
          name: inputValue,
          id: tasks.length + 1,
          completed: false,
    
        }
      ]);
      setInputValue("");
    }
    console.log(tasks);
  };
  const handleChangeCompleted = (name) => {
    let thisTaskIndex = tasks.indexOf(tasks.find((item) => item.name === name));
    changeCompleted(
      (tasks[thisTaskIndex].completed = !tasks[thisTaskIndex].completed)
    );
    console.log(tasks[thisTaskIndex]);
  };
  const removingTodo = (name) => {
    let thisTaskIndex = tasks.indexOf(tasks.find((item) => item.name == name));
    deleteTodo(tasks.splice(thisTaskIndex, 1));
  };
  const handleChangePositionUp = (name) => {
    let thisTaskIndex = tasks.indexOf(tasks.find((item) => item.name == name));
    changePosition( (thisTaskIndex===0)?([tasks[0], tasks[tasks.length-1]]=[tasks[tasks.length-1], tasks[0]]):
      ([tasks[thisTaskIndex - 1], tasks[thisTaskIndex]] = [
        tasks[thisTaskIndex],
        tasks[thisTaskIndex - 1]
      ])
    );
  };
  const handleChangePositionDown = (name) => {
    let thisTaskIndex = tasks.indexOf(tasks.find((item) => item.name == name));
    changePosition( (thisTaskIndex===tasks.length-1)?
    ([tasks[tasks.length-1], tasks[0]]=[tasks[0], tasks[tasks.length-1]]):
      ([tasks[thisTaskIndex], tasks[thisTaskIndex + 1]] = [
        tasks[thisTaskIndex + 1],
        tasks[thisTaskIndex]
      ])
    );
  };
  

  return (
    <div className='todo-page'> 
    <div className='todo-name'>Todo List</div>     
      <TodoList
        handleChangeInput={handleChangeInput}
        handleChangeCompleted={handleChangeCompleted}
        tasks={tasks}
        removingTodo={removingTodo}
        handleChangePositionUp={handleChangePositionUp}
        handleChangePositionDown={handleChangePositionDown}
      />
      <InputTodo
        handleChangeInput={handleChangeInput}
        submitChange={submitChange}
        inputValue={inputValue}
      />
    </div>
  );
}

export default TodoPage;
