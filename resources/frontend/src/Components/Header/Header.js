import "./module.header.css";
import "../../globalCss/globalCss.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faIdBadge,
  faFolderPlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";
import Search from "../Search/Search";

function Header() {
  const user = false;

  return (
    <header>
      <div id="header">
        <div className="appContainer">
          <div className="row ">
            <div className="col-md-3">
              <div className="header-logo">
                <Link to="/" className="logo">
                  <img src={logo} alt="header-logo"></img>
                </Link>
              </div>
            </div>

            {/* поиск */}
            <Search />

            {/* если user=true показываются профиль и добавление объявления, иначе рег./авт.        */}
            {!user ? (
              <div className="col-md-3">
                <div className="header-entry">
                  <button className="entry-btn">
                    <FontAwesomeIcon icon={faAddressCard} size="lg" />
                    <span>Регистрация</span>
                  </button>
                  <button className="entry-btn">
                    <FontAwesomeIcon icon={faIdBadge} size="lg" />
                    <span>Авторизация </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="col-md-3">
                <div className="header-links">
                  <Link className="link" to="/announcement">
                    <button className="links-btn">
                      <FontAwesomeIcon icon={faFolderPlus} size="lg" />
                      <span>Новое объявление</span>
                    </button>
                  </Link>
                  <Link className="link" to="/profile">
                    <button className="links-btn">
                      <FontAwesomeIcon icon={faUserCircle} size="lg" />
                      <span>Профиль</span>
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
