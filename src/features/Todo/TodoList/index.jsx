import React from "react";
import PropsType from "prop-types";
import classnames from "classnames";
import './styles.scss'
TodoList.propTypes = {
  todoList: PropsType.array,
  onTodoClick: PropsType.func
};
 TodoList.defaultProps = {
  todoList: [],
  onTodoClick: null
 }

function TodoList({todoList, onTodoClick}) {

  const handleTodoClick = (item, index) => {
    if(!onTodoClick) return;
    onTodoClick(item, index)
  }
  return (
    <ul className="todo-list">
      {todoList.map((item, idx) => (
        <li
          key={item.id}
          className={classnames({ 
            'todo-item': true,
            complete: item.status === "complete" })}
            onClick={() => handleTodoClick(item, idx)}
        >
          {item.title}
        </li>
      ))}
    </ul>
  );
}
export default TodoList;
