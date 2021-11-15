import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./module.authPage.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";
import { login } from "../../store/actions/authAction";


const Login = ({ setRegFlg, setAuthFlg }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(0)
  // const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  function handleAuth(e) {
    e.preventDefault();
    dispatch(login(email, password, remember))
    setAuthFlg(false)
  }


  return (
    <>
      <div className="auth-wrapper">
        <h3>Авторизация</h3>

        <Form
          className="form"

        >
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Почта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div className="form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              onChange={function () {
                if (remember === 0) {
                  setRemember(1)
                } else setRemember(0)
              }}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              Запомнить меня
            </label>
          </div>
          <Button type="submit" onClick={(e) => handleAuth(e)} className="btn btn-dark">
            Войти
          </Button>
        </Form>
        <div className="form-login">
          <small className="form-text text-muted">Нет аккаунта?</small>
          <Link
            to="#"
            className="breadcrumb-item"
            onClick={() => {
              setRegFlg(true);
              setAuthFlg(false);
            }}
          >
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
