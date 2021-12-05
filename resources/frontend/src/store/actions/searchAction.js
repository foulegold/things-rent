import { setLoading } from "./spinnerActions";
import { setWarning } from "./warningAction";

export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT"

export const addSearchResult = (announcements) => ({
  type: GET_SEARCH_RESULT,
  payload: announcements
})

export const getSearchResult = (category_id, title) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await fetch(`/api/announcement/all?category_id=${category_id}&title=${title}&limit=100&sort_type=DESC`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    dispatch(addSearchResult(data));
    dispatch(setLoading(false))

  } catch (err) {
    // обработка ошибки
    dispatch(setWarning(err))
  }
};
