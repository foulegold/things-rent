import "./module.search.css";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { getSearchResult } from "../../store/actions/searchAction";
import { useHistory } from "react-router";

// превращение категорий в итерируемый массив
export const getCategoriesArray = (categoriesListObj) => {
  let options = [];
  for (let key in categoriesListObj) {
    const category = categoriesListObj[key];
    let is_group = false;
    let className = 'regular';
    if ('children' in category) {
      is_group = true;
      className = 'title';
    }
    options.push(
      <option key={category.id} value={category.id} className={className}>
        {category.title}
      </option>
    );
    if (is_group) {
      options = options.concat(getCategoriesArray(category.children));
    }
  }
  return options;
}

function Search() {
  const dispatch = useDispatch();
  const history = useHistory();
  const categories = useSelector((state) => state.categories, shallowEqual)

  const [selectValue = 0, setSelectValue] = useState();
  const [inputValue = "", setInputValue] = useState();

  function searchSubmitHandler(e) {
    e.preventDefault();
    dispatch(getSearchResult(selectValue, inputValue));
    // setSelectValue(0);
    // setInputValue("");
    history.push("/filter")
  }

  const categoriesArr = getCategoriesArray(categories);

  return (
    <div className="col-md-6">
      <div className="header-search">
        <form>
          <select
            className="input-select"
            value={selectValue}
            onChange={(e) => setSelectValue(Number(e.target.value))}
          >
            {categoriesArr.map((el) => el)}
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
