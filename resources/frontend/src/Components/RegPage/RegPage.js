import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";
import "./module.regPage.css";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useState } from "react";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [name, setName] = useState("");
  // const [surName, setSurName] = useState("");
  // const [error, setError] = useState("");
  // const history = useHistory();
  // const dispatch = useDispatch();

  return (
    <>
      <div className="reg-wrapper">
        <h3>Регистрация</h3>

        <Form className="form">
          <div className="form-group">
            <label htmlFor="exampleInputEmail2">Email address</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail2"
              aria-describedby="emailHelp"
              placeholder="Почта"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword2">Пароль</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              placeholder="Пароль"
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
            />
          </div>

          <Button type="submit" className="btn btn-dark">
            Отправить
          </Button>
        </Form>
      </div>
    </>
  );
};

export default Signup;
