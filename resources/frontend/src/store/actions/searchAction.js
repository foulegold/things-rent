import { setLoading } from "./spinnerActions";


export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT"

export const addSearchResult = (announcements) => ({
  type: GET_SEARCH_RESULT,
  payload: announcements
})

export const getSearchResult = (category_id, title) => async (dispatch) => {
  dispatch(setLoading(true))
  try {
    const response = await fetch(`/api/announcement/all?category_id=${category_id}&title=${title}`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();
    dispatch(addSearchResult(data));
    dispatch(setLoading(false))

  } catch (err) {
    // обработка ошибки
    console.log(err)
  }
};
