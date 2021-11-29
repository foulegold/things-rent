import { URL } from "../../globalVars/globalVars";
import { setWarning } from "./warningAction";


export const GET_CATEGORIES = "GET_CATEGORIES"

export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories
})


export const getAllCategories = () => async (dispatch) => {
  try {
    const response = await fetch(`/api/category/all`);

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    // добавление результата поиска в стор
    dispatch(getCategories(data));
  } catch (err) {
    // обработка ошибки
    dispatch(setWarning(err));
  }
};