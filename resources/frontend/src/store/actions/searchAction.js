import { URL } from "../../globalVars/globalVars";

export const GET_SEARCH_RESULT = "GET_SEARCH_RESULT"

export const addSearchResult = (announcements) => ({
  type: GET_SEARCH_RESULT,
  payload: announcements
})

export const getSearchResult = (category_id, title) => async (dispatch) => {
  try {
    const response = await fetch(`${URL}announcement/all?category_id=${category_id}&title=${title}`)

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    // добавление результата поиска в стор
    dispatch(addSearchResult(data));
  } catch (err) {
    // обработка ошибки
    console.log(err)
  }
};
