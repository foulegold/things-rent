import Cookies from 'js-cookie'
import { setWarning } from './warningAction'


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
    await fetch("/sanctum/csrf-cookie")

    const response = await fetch(`/login`, {
      method: "POST",
      headers: { "Content-type": "application/json", 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
      credentials: "include",
      body: JSON.stringify({ email, password, remember })
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json()
    const userInfo = { id: data.user.id, name: data.name, email: data.user.email }
    dispatch(userLogin(userInfo))

  } catch (err) {
    // обработка ошибки
    dispatch(setWarning(err))
  }
};

export const logout = () => async (dispatch) => {
  try {
    await fetch("/sanctum/csrf-cookie")

    const response = await fetch(`logout`, {
      method: "POST",
      headers: { 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
      credentials: "include",
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    dispatch(userLogout())
  } catch (err) {
    // обработка ошибки
    dispatch(setWarning(err))
  }
};
