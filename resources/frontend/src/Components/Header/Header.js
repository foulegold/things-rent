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
import { useState } from "react";
import AuthPage from "../AuthPage/AuthPage";
import RegPage from "../RegPage/RegPage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../store/actions/categoriesAction";
import ModalWarning from "../ModalWarning/ModalWarning";

function Header() {
  const user = useSelector((state) => state.user);
  const warning = useSelector((state) => state.warning)
  const [regFlg, setRegFlg] = useState(false);
  const [authFlg, setAuthFlg] = useState(false);


  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  return (
    <header>
      <div id="header">
        <div className="appContainer posRel">
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
                  <button
                    className="entry-btn"
                    onClick={() => {
                      setRegFlg(!regFlg);
                      setAuthFlg(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faAddressCard} size="lg" />
                    <span>Регистрация</span>
                  </button>
                  <button
                    className="entry-btn"
                    onClick={() => {
                      setAuthFlg(!authFlg);
                      setRegFlg(false);
                    }}
                  >
                    <FontAwesomeIcon icon={faIdBadge} size="lg" />
                    <span>Авторизация </span>
                  </button>
                </div>
              </div>
            ) : (
              <div className="col-md-3">
                <div className="header-links">
                  <Link className="link" to="/newAnnouncement">
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
          {regFlg && <RegPage />}
          {authFlg && (
            <AuthPage setRegFlg={setRegFlg} setAuthFlg={setAuthFlg} />
          )}
          {warning && (<ModalWarning text={warning} />)}
        </div>
      </div>
    </header>
  );
}

export default Header;
