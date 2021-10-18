import "./module.header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAddressCard, faIdBadge } from "@fortawesome/free-solid-svg-icons";
import logo from "../Header/logo.png";
import { Link } from "react-router-dom";

function Header() {
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
      {/* <!-- HEADER --> */}
      <div id="header">
        {/* <!-- container --> */}
        <div className="appContainer">
          {/* <!-- row --> */}
          <div className="row ">
            {/* <!-- LOGO --> */}
            <div className="col-md-3">
              <div className="header-logo">
                <Link to="/" className="logo">
                  <img src={logo} alt=""></img>
                </Link>
              </div>
            </div>
            {/* <!-- /LOGO --> */}

            {/* <!-- SEARCH BAR --> */}
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
            {/* <!-- /SEARCH BAR --> */}

            {/* <!-- /REG/AUTH --> */}
            <div className="col-md-3">
              <div className="header-btns">
                {/* <i class="fas fa-address-card">Регистрация</i> */}
                <button className="reg-btn">
                  <FontAwesomeIcon icon={faAddressCard} size="lg" />
                  <span>Регистрация</span>
                </button>
                <button className="reg-btn">
                  <FontAwesomeIcon icon={faIdBadge} size="lg" />
                  <span>Авторизация </span>
                </button>
              </div>
            </div>
            {/* <!-- /REG/AUTH --> */}
          </div>
          {/* <!-- row --> */}
        </div>
        {/* <!-- container --> */}
      </div>
      {/* <!-- HEADER --> */}
    </header>
  );
}

export default Header;
