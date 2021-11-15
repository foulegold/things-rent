import { URL } from "../../globalVars/globalVars";

export const addNewAnnouncement = (category_id, title, content, price, address_tran) => async () => {
  try {
    const response = await fetch(`${URL}announcement`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ category_id, title, content, price, address_tran })
    });

    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }

  } catch (err) {
    // обработка ошибки
    console.log(err);
  }
};