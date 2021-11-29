import { setLoading } from "./spinnerActions";
import { setWarning } from "./warningAction";


export const GET_ANNOUNCEMENTS = "GET_ANNOUNCEMENTS";

export const getAnnouncements = (announcements) => ({
    type: GET_ANNOUNCEMENTS,
    payload: announcements,
});

export const getAllAnnouncements = () => async (dispatch) => {
    dispatch(setLoading(true));
    try {
        const response = await fetch(`/api/announcement/all?limit=50&sort_type=DESC`);

        if (!response.ok) {
            throw new Error(`Request failed with status ${response.status}`);
        }

        const data = await response.json();
        dispatch(getAnnouncements(data));
        dispatch(setLoading(false));
    } catch (err) {
        // обработка ошибки
        setWarning(err);
    }
};
