import Cookies from 'js-cookie'


export const registration = (name, email, password, password_confirmation) => async (dispatch) => {
  try {
    await fetch("/sanctum/csrf-cookie")
    const response = await fetch(`/register`, {
      method: "POST",
      headers: { "Content-type": "application/json", 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
      credentials: "include",
      body: JSON.stringify({ name, email, password, password_confirmation })
    })

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

  } catch (err) {
    // обработка ошибки
    console.log(err)
  }
};
