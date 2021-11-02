import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button, Container } from "react-bootstrap";
import "./module.authPage.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { useHistory, Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();

  // const handleSubmit = async (e) => {
  //     e.preventDefault();
  //     setError("");
  //     try {
  //         await firebase.auth().signInWithEmailAndPassword(email, password);
  //         // await firebase.auth().signOut()
  //         dispatch(changeIsAuth(true));
  //         history.push("/home");
  //     } catch (error) {
  //         setError(error.message);
  //     }
  // };
  return (
    <Container>
      <div className="wrapper">
        <h3>Авторизация</h3>

        <Form
          className="form"
          //  onSubmit={handleSubmit}
        >
          <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Почта"
              value={email}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <div class="form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="exampleCheck1"
            />
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
          <Link to="/reg" class="breadcrumb-item">
            Зарегистрироваться
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Login;
