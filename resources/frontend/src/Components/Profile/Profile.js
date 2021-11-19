import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./module.profile.css";
import "../../globalCss/globalCss.css";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAt
} from "@fortawesome/free-solid-svg-icons";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'

function Profile() {
  const { name, email } = useSelector((state) => state.user)
  const userAnnouncements = []

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
        </div>

        <div className="userRent">
          <Tabs defaultActiveKey="userAnnouncements" id="uncontrolled-tab-example" >
            <Tab eventKey="userAnnouncements" title="Мои объявления">
              1111
            </Tab>
            <Tab eventKey="userRent" title="Мои аренды">
              2222
            </Tab>
          </Tabs>
        </div>

      </div>
      <Footer />
    </>
  )
}

export default Profile