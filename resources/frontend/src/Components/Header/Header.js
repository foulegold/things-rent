import "./module.header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faIdBadge,
  faFolderPlus,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";

function Header() {
  const user = false;
  const categories = [
    "Все категории",
    "Автотранспорт",
    "Одежда",
    "Электроника",
    "Украшения",
    "Животные",
    "Мебель",
  ];

  return (
    <header>
      {/*  #header  */}
      <div id="header">
        {/*  container  */}
        <div className="appContainer">
          {/*  row  */}
          <div className="row ">
            {/*  logo  */}
            <div className="col-md-3">
              <div className="header-logo">
                <Link to="/" className="logo">
                  <img src={logo} alt="header-logo"></img>
                </Link>
              </div>
            </div>
            {/*  /logo  */}

            {/*  search  */}
            <div className="col-md-6">
              <div className="header-search">
                <form>
                  <select className="input-select">
                    {categories.map((el, index) => (
                      <option value={index}>{el}</option>
                    ))}
                  </select>
                  <input className="input" placeholder="Поиск"></input>
                  <button className="search-btn">Искать</button>
                </form>
              </div>
            </div>
            {/*  /search  */}

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
          {/* /row */}
        </div>
        {/*  /container */}
      </div>
      {/*  /#header  */}
    </header>
  );
}

export default Header;
