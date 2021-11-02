import { BrowserRouter, Route, Switch } from "react-router-dom";
import ProductList from "../ProductList/ProductList";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import AuthPage from "../AuthPage/AuthPage";
import RegPage from "../RegPage/RegPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/header" component={Header}></Route>
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
        <Route exact path="/ProductList" component={ProductList}></Route>
        <Route exact path="/Footer" component={Footer}></Route>
        <Route exact path="/auth" component={AuthPage}></Route>
        <Route exact path="/reg" component={RegPage}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
