import React, { useState } from "react";
import PropsType from "prop-types";
import TodoList from "./TodoList";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import ListPage from "./pages/ListPage";
import DetailPage from "./pages/DetailPage";
import NotFound from "../../components/NotFound";
function TodoFeature(props) {
const match = useRouteMatch()
  return (
    <div>
      TODO SHARED UI
      <Switch>
        <Route path={match.path} component={ListPage} exact/>
        <Route path={`${match.path}/:todoId`} component={DetailPage} exact/>
        <Route component={NotFound} />
      
      </Switch>
    </div>
  );
}
export default TodoFeature;
