import Cookies from 'js-cookie'

export const USER_LOGIN = "USER_LOGIN"
export const USER_LOGOUT = "USER_LOGOUT"

export const userLogin = (data) => ({
  type: USER_LOGIN,
  payload: data
})

export const userLogout = () => ({
  type: USER_LOGOUT,
})


export const login = (email, password, remember) => async (dispatch) => {
  try {
    fetch("https://things-rent.microfo.ru/sanctum/csrf-cookie").then(response => fetch(`https://things-rent.microfo.ru/login`, {
      method: "POST",
      headers: { "Content-type": "application/json", 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
      credentials: "include",
      body: JSON.stringify({ email, password, remember })
    })).then(function (data) {
      console.log(data);
      dispatch(userLogin(data))
    })

  } catch (err) {
    // обработка ошибки
    console.log(err)
  }
};

export const logout = () => async (dispatch) => {
  try {
    fetch("https://things-rent.microfo.ru/sanctum/csrf-cookie").then(response => fetch(`https://things-rent.microfo.ru/logout`, {
      method: "POST",
      headers: { 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
      credentials: "include",
    })).then(dispatch(userLogout()))

  } catch (err) {
    // обработка ошибки
    console.log(err)
  }
};
