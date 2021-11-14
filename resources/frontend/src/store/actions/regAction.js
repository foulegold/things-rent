import { URL } from "../../globalVars/globalVars";
import Cookies from 'js-cookie'
import axios from 'axios'

axios.defaults.withCredentials = true


export const registration = (name, email, password, password_confirmation) => async (dispatch) => {
  fetch("https://things-rent.microfo.ru/sanctum/csrf-cookie").then(res =>
    Cookies.set("X-XSRF-TOKEN", Cookies.get("XSRF-TOKEN"))).then(console.log(document.cookie))

  // fetch("https://things-rent.microfo.ru/sanctum/csrf-cookie").then(response => console.log(response)).then(e => console.log(document.cookie))

  // axios.get('https://things-rent.microfo.ru/sanctum/csrf-cookie')
  //   .then(response => {
  //     Cookies.set("X-XSRF-TOKEN", Cookies.get("XSRF-TOKEN"))
  //     // register
  //     axios.post('https://things-rent.microfo.ru/register', {
  //       name: "name",
  //       email: 'admin@admin.com',
  //       password: '12345678',
  //       password_confirmation: '12345678,'
  //     }).then((data) => {
  //       console.log(data);
  //     })
  //   });

  // try {
  //   // fetch("https://things-rent.microfo.ru/sanctum/csrf-cookie").then(response => fetch(`https://things-rent.microfo.ru/register`, {
  //   //   method: "POST",
  //   //   headers: { "Content-type": "application/json" },
  //   //   body: JSON.stringify({ name, email, password, password_confirmation }),
  //   // }))

  //   // const response = await fetch(`https://things-rent.microfo.ru/register`, {
  //   //   method: "POST",
  //   //   headers: { "Content-type": "application/json" },
  //   //   body: JSON.stringify({ name, email, password, password_confirmation }),
  //   // })

  //   //   // if (!response.ok) {
  //   //   //   throw new Error(`Request failed with status ${response.status}`);
  //   //   // }

  //   //   // const data = await response.json();
  //   //   // console.log(data)

  // } catch (err) {
  //   // обработка ошибки
  //   console.log(err)
  // }
};

// 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content