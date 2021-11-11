import { URL } from "../../globalVars/globalVars";

export const registration = (name, email, password, password_confirmation) => async (dispatch) => {

  try {
    fetch("https://things-rent.microfo.ru/sanctum/csrf-cookie").then(response => fetch(`https://things-rent.microfo.ru/register`, {
      method: "POST",
      headers: { "Content-type": "application/json", "X-CSRF-Token": response },
      body: JSON.stringify({ name, email, password, password_confirmation }),
    }))

    // const response = await fetch(`https://things-rent.microfo.ru/register`, {
    //   method: "POST",
    //   headers: { "Content-type": "application/json" },
    //   "X- CSRF - TOKEN": response,
    //   body: JSON.stringify({ name, email, password, password_confirmation }),
    // })

    // if (!response.ok) {
    //   throw new Error(`Request failed with status ${response.status}`);
    // }

    // const data = await response.json();
    // console.log(data)

  } catch (err) {
    // обработка ошибки
    console.log(err)
  }
};

// 'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').content