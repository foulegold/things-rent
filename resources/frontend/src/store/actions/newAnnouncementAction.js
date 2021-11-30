import Cookies from 'js-cookie'
import { setWarning } from './warningAction';

export const addNewAnnouncement = (category_id, title, content, price, address_tran) => async (dispatch) => {
  try {
    await fetch("/sanctum/csrf-cookie")

    const response = await fetch(`/api/announcement`, {
      method: "POST",
      headers: { "Content-Type": "application/json", 'X-XSRF-TOKEN': Cookies.get("XSRF-TOKEN") },
      credentials: "include",
      body: JSON.stringify({ category_id, title, content, price, address_tran })
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    dispatch(setWarning("Вашe объявление добавлено!"))

  } catch (err) {
    // обработка ошибки
    dispatch(setWarning(err));
  }
};