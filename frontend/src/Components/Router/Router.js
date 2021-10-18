import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../Header/Header";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/header" component={Header}></Route>
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
