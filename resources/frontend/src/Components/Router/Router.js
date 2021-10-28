import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/header" component={Header}></Route>
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
        <Route exact path="/ProductList" component={ProductList}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
