import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, input } from "react-bootstrap";
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
    <Container>
      <div className="wrapper">
        <h3>Регистрация</h3>

        <Form className="form">
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Почта"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Пароль</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Пароль"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Повторите пароль</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Пароль"
            />
          </div>

          <Button type="submit" class="btn btn-dark">
            Отправить
          </Button>
        </Form>
      </div>
    </Container>
  );
};

export default Signup;
