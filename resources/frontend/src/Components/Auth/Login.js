import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container, input, a } from "react-bootstrap";
import "./style.css";
// import { useDispatch } from "react-redux";
// import { useState } from "react";
// import { useHistory } from "react-router-dom";

const Login = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [error, setError] = useState("");
  // const dispatch = useDispatch();
  // const history = useHistory();
  // const handlePassChange = (e) => {
  //   setPassword(e.target.value);
  // };

  // const handleEmailChange = (e) => {
  //   setEmail(e.target.value);
  // };
  return (
    <Container className="container">
      <h3 align="center">Авторизация</h3>

      <Form className="form">
        <div class="form-group">
          <label for="exampleInputEmail1">Email address</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Почта"
          />
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1">Пароль</label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            placeholder="Пароль"
          />
        </div>

        <div class="form-check">
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1">
            Запомнить меня
          </label>
        </div>
        <Button type="submit" class="btn btn-dark">
          Войти
        </Button>
      </Form>
      <div className="form-login">
        <small class="form-text text-muted">Нет аккаунта?</small>
        <a href="/register" class="breadcrumb-item">
          Зарегистрироваться
        </a>
      </div>
    </Container>
  );
};

export default Login;
