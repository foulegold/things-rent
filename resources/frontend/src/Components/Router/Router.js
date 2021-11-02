import { BrowserRouter, Route, Switch } from "react-router-dom";
import AuthPage from "../AuthPage/AuthPage";
import RegPage from "../RegPage/RegPage";
import MainPage from "../MainPage/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>

        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}

        <Route exact path="/auth" component={AuthPage}></Route>
        <Route exact path="/reg" component={RegPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
