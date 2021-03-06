import { BrowserRouter, Route, Switch } from "react-router-dom";
import AnnouncementPage from "../AnnouncementPage/AnnouncementPage";
import FilteredAnnouncements from "../FilteredAnnouncements/FilteredAnnouncements";
import MainPage from "../MainPage/MainPage";
import NewAnnouncement from "../NewAnnouncement/NewAnnouncement";
import Profile from "../Profile/Profile";


function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={MainPage}></Route>
        <Route exact path="/filter" component={FilteredAnnouncements}></Route>
        <Route
          exact
          path="/announcement/:id"
          component={AnnouncementPage}
        ></Route>
        <Route exact path="/newAnnouncement" component={NewAnnouncement}></Route>
        <Route exact path="/profile" component={Profile}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Router;
