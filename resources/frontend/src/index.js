import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux";
import {store} from './store'
import "./index.css";
import App from "./App.js";
import "bootstrap/dist/css/bootstrap.min.css"; // стили бутстрап


ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById("root")
);
