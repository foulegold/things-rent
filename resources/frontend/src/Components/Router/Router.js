import { BrowserRouter, Route, Switch } from "react-router-dom";
import FilteredAnnouncements from "../FilteredAnnouncements/FilteredAnnouncements";
import MainPage from "../MainPage/MainPage";

function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/filter" component={FilteredAnnouncements}></Route>
        {/* ваши роуты или приватРоуты*/}
        {/* ваши роуты или приватРоуты*/}
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
