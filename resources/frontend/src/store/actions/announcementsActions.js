import { URL } from "../../globalVars/globalVars";

export const GET_ANNOUNCEMENTS = "GET_ANNOUNCEMENTS"

export const getAnnouncements = (announcements) => ({
  type: GET_ANNOUNCEMENTS,
  payload: announcements
})


export const getAllAnnouncements = () => async (dispatch) => {
  try {
    const response = await fetch(`${URL}announcement/all`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    dispatch(getAnnouncements(data));
  } catch (err) {
    // обработка ошибки
    console.log(err);
  }
};