import logo from "./logo.svg";
import "./App.css";
import TodoFeature from "./features/Todo";
import AlbumFeature from "./features/Album";
import { Route, Link, NavLink } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom";

function App() {
  return (
    <div className="App">
      Header
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "16px 0",
          gap: "8px",
        }}
      >
        <NavLink to="/todos">Todo</NavLink>
        <NavLink to="/albums" activeClassName="active-menu">
          Albums
        </NavLink>
      </div>
      <Switch>
        <Redirect from="/home" to="/" exact/>
        <Redirect from="/post-list/:postId" to="/post/:postId" exact/>

        <Route path="/" component={TodoFeature} exact/>
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
