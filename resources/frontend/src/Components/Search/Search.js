import "./module.search.css";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { getSearchResult } from "../../store/actions/searchAction";

function Search() {
  const dispatch = useDispatch();
  // получение значения категории
  const [selectValue = 0, setSelectValue] = useState();
  const [inputValue = "", setInputValue] = useState();

  function searchSubmitHandler(e) {
    e.preventDefault();
    dispatch(getSearchResult(selectValue, inputValue));
    setSelectValue(0);
    setInputValue("");
  }

  // категории будут получаться с бэка
  const categories = [
    "Все категории",
    "Автотранспорт",
    "Одежда",
    "Электроника",
    "Украшения",
    "Животные",
    "Мебель",
  ];

  return (
    <div className="col-md-6">
      <div className="header-search">
        <form>
          <select
            className="input-select"
            value={selectValue}
            onChange={(e) => setSelectValue(Number(e.target.value))}
          >
            {categories.map((el, index) => (
              <option key={index} value={index}>
                {el}
              </option>
            ))}
          </select>
          <input
            className="input"
            placeholder="Поиск"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          ></input>
          <button
            className="search-btn"
            onClick={(e) => searchSubmitHandler(e)}
          >
            Искать
          </button>
        </form>
      </div>
    </div>
  );
}

export default Search;
