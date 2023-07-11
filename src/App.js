import { NavLink, Route } from "react-router-dom";
import { Redirect, Switch } from "react-router-dom/cjs/react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import AlbumFeature from "./features/Album";
import TodoFeature from "./features/Todo";
import { useEffect } from "react";
import productApi from "./api/productApi";

function App() {
  useEffect(() => {
    const data = async () => {
      const params = {
        _limit: 10,
      };
      const productList = await productApi.getAll(params);
      console.log(productList);
    };
    data();
  }, []);

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
          Albumssss
        </NavLink>
      </div>
      <Switch>
        <Redirect from="/home" to="/" exact />
        <Redirect from="/post-list/:postId" to="/post/:postId" exact />

        <Route path="/" component={TodoFeature} exact />
        <Route path="/todos" component={TodoFeature} />
        <Route path="/albums" component={AlbumFeature} />

        <Route component={NotFound} />
      </Switch>
      Footer
    </div>
  );
}

export default App;
