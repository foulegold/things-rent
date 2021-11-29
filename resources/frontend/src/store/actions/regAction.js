import Cookies from 'js-cookie'
import { setWarning } from './warningAction';


export const registration = (name, email, password, password_confirmation) => async (dispatch) => {
  // try {
  await fetch("/sanctum/csrf-cookie")
  const response = await fetch(`/register`, {
    method: "POST",
    headers: { "Content-type": "application/json", 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
    credentials: "include",
    body: JSON.stringify({ name, email, password, password_confirmation })
  })

  // if (!response.ok) {
  //   throw new Error(`Request failed with status ${response.status}`);
  // }

  dispatch(setWarning("На вашу электронную почту отправлено письмо с подтверждением. Подтвердите вашу почту, следуя инструкциям в письме."))

  // } catch (err) {
  //   // обработка ошибки
  //   console.log(err)
  // }
};
