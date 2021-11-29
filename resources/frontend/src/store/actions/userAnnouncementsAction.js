import { setLoading } from "./spinnerActions";
import { setWarning } from "./warningAction";

export const SET_USER_ANNOUNCEMETS = "SET_USER_ANNOUNCEMETS"

export const setUserAnnouncements = (userAnnouncements) => ({
  type: SET_USER_ANNOUNCEMETS,
  payload: userAnnouncements
})


export const getUserAnnouncements = () => async (dispatch) => {
  dispatch(setLoading(true));
  try {
    const response = await fetch(`/api/announcement`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    dispatch(setUserAnnouncements(data.Announcements));
    dispatch(setLoading(false));

  } catch (err) {
    // обработка ошибки
    dispatch(setWarning(err));
  }
}