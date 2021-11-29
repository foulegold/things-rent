import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./module.regPage.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { registration } from "../../store/actions/regAction";

const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConf] = useState("");
  const dispatch = useDispatch()

  function handlerReg(e) {
    e.preventDefault();
    dispatch(registration(name, email, password, passwordConfirm))
  }

  return (
    <>
      <div className="reg-wrapper">
        <h3>Регистрация</h3>

        <Form className="form">
          <div className="form-group">
            <label htmlFor="nameInput">Имя</label>
            <input
              type="text"
              className="form-control"
              id="nameInput"
              aria-describedby="nameHelp"
              placeholder="Имя"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail2">Эл.почта</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="example@example.ru"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Минимум 8 символов"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword3">Повторите пароль</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword3"
              placeholder="Пароль"
              value={passwordConfirm}
              onChange={(e) => setPasswordConf(e.target.value)}
            />
          </div>

          <Button type="submit" className="btn btn-dark" onClick={(e) => handlerReg(e)}>
            Зарегистрироваться
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
