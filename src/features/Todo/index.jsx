import React, { useState } from "react";
import PropsType from "prop-types";
import TodoList from "./TodoList";

function TodoFeature(props) {
  const initToodoList = [
    {
      id: 1,
      title: "Eat",
      status: "new",
    },
    {
      id: 2,
      title: "Sleep",
      status: "complete",
    },
    {
      id: 3,
      title: "Code",
      status: "new",
    },
  ];
  const [todoList, setTodoList] = useState(initToodoList); 
  const [filterState, setFilterState] = useState('all')
  const handleClickTodoList = (item, idx) => {
    const newTodoList = [...todoList];

     newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "complete" : "new",
    };
    setTodoList(newTodoList);
  };

const handleClickShowAll = () => {
    setFilterState('all')
}
const handleClickShowComplete = () => {
    setFilterState('complete')
}
const handleClickShowNew = () => {
    setFilterState('new')
}
const renderListFilter = todoList.filter(todo => filterState === 'all' || filterState === todo.status)
console.log(renderListFilter);
  return (
    <div>
      <h3>Todo List</h3>
      <TodoList todoList={renderListFilter} onTodoClick={handleClickTodoList} />
    <div>
    <button onClick={handleClickShowAll}>Show All</button>
    <button onClick={handleClickShowComplete}>Show Complete</button>
    <button onClick={handleClickShowNew}>Show New</button>

    </div>
    </div>
  );
}
export default TodoFeature;
