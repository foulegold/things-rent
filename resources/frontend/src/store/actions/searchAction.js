export const getSearchResult = (category_id, title) => async (dispatch) => {
  try {
    const response = await fetch("", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ category_id, title }),
    });
    if (!response.status.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    const data = await response.json();
    // добавление результата поиска в стор
    dispatch();
  } catch (err) {
    // обработка ошибки
    dispatch();
  }
};
