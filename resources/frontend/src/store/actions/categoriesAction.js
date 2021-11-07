export const GET_CATEGORIES = "GET_CATEGORIES"

export const getCategories = (categories) => ({
  type: GET_CATEGORIES,
  payload: categories
})


export const getAllCategories = () => async (dispatch) => {
  try {
    const response = await fetch("https://things-rent.microfo.ru/api/category/all");

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

    const data = await response.json();

    // добавление результата поиска в стор
    dispatch(getCategories(data));
  } catch (err) {
    // обработка ошибки
    console.log(err);
  }
};