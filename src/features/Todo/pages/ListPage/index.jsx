import React, { useEffect, useState } from "react";
import PropsType from "prop-types";
import TodoList from "../../TodoList";
import { useLocation, useHistory, useRouteMatch } from "react-router-dom";
import queryString from "query-string";
function ListPage(props) {
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
  const location = useLocation();
  const history = useHistory()
  const match = useRouteMatch()
  const [todoList, setTodoList] = useState(initToodoList);
  const [filterState, setFilterState] = useState(() => {
    const params = queryString.parse(location.search);
    return params.status || "all";
  });
  const handleClickTodoList = (item, idx) => {
    const newTodoList = [...todoList];

    newTodoList[idx] = {
      ...newTodoList[idx],
      status: newTodoList[idx].status === "new" ? "complete" : "new",
    };
    setTodoList(newTodoList);
  };

  const handleClickShowAll = () => {
    // setFilterState("all");
    const queryParams = {status: 'all'}
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams)
    })
  };
  const handleClickShowComplete = () => {
    const queryParams = {status: 'complete'}
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams)
    })
    // setFilterState("complete");
  };
  const handleClickShowNew = () => {
    const queryParams = {status: 'new'}
    history.push({
        pathname: match.path,
        search: queryString.stringify(queryParams)
    })
    setFilterState("new");
  };
  useEffect(()=> {
    const params = queryString.parse(location.search);
    setFilterState(params.status || "all")
  },[location.search])
  const renderListFilter = todoList.filter(
    (todo) => filterState === "all" || filterState === todo.status
  );

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
export default ListPage;
