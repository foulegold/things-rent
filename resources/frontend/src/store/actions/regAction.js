import Cookies from 'js-cookie'


export const registration = (name, email, password, password_confirmation) => async (dispatch) => {
  try {
    fetch("https://things-rent.microfo.ru/sanctum/csrf-cookie").then(response => fetch(`https://things-rent.microfo.ru/register`, {
      method: "POST",
      headers: { "Content-type": "application/json", 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
      credentials: "include",
      body: JSON.stringify({ name, email, password, password_confirmation })
    }))

  } catch (err) {
    // обработка ошибки
    console.log(err)
  }
};
