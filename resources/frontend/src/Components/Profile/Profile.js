import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./module.profile.css";
import "../../globalCss/globalCss.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt
} from "@fortawesome/free-solid-svg-icons";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { useEffect } from "react";
import { getUserAnnouncements } from "../../store/actions/userAnnouncementsAction";
import AnnouncementMiniCard from "../AnnouncementMiniCard/AnnouncementMiniCard"
import { Spinner, Button } from "react-bootstrap"
import { logout } from "../../store/actions/authAction";
import { useHistory } from "react-router";

function Profile() {
  const { name, email } = useSelector((state) => state.user)
  const userAnnouncements = useSelector((state) => state.userAnnouncements)
  const loading = useSelector((state) => state.loading, shallowEqual)
  const dispatch = useDispatch()
  const history = useHistory()

  useEffect(() => {
    dispatch(getUserAnnouncements())
  }, [])

  function handleLogout() {
    dispatch(logout())
    history.push("/")
  }

  return (
    <>
      <Header />
      <div className="profile__wrapper appContainer">
        <div className="profile__user">
          <div className="profile__user-info">
            <img className="profile__user-photo" src="https://doshlorg.ru/assets/noavatar_2x.jpg"></img>
            <p>{name}</p>
          </div>
          <p><span className="profile__user-icon"><FontAwesomeIcon icon={faAt} size="lg" /></span> {` ${email}`}</p>
          <Button variant="danger" onClick={handleLogout}>Выход</Button>
        </div>

        <div className="userRent">
          <Tabs defaultActiveKey="userAnnouncements" id="uncontrolled-tab-example" >
            <Tab eventKey="userAnnouncements" title="Мои объявления" >
              <div className="userAnnouncementsTab">
                {userAnnouncements.length ? userAnnouncements.map((el) => <AnnouncementMiniCard title={el.title} price={el.price} id={el.id} key={el.id} />) : <span >У вас нет активных объявлений</span>}
              </div>
            </Tab>
            <Tab eventKey="userRent" title="Мои аренды">
              Нет активных аренд
            </Tab>
          </Tabs>
        </div>
        {/* {loading && <div className="spinnerWrapper"><Spinner animation="border" /></div>} */}
      </div>
      <Footer />
    </>
  )
}

export default Profile