import { BrowserRouter, Route, Switch } from "react-router-dom";
import CardProduct from "../CardProduct/CardProduct";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
        <Route exact path="/CardProduct" component={CardProduct}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
