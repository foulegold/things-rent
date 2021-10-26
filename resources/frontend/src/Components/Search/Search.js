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
  // const categories = [
  //   "Все категории",
  //   "Автотранспорт",
  //   "Одежда",
  //   "Электроника",
  //   "Украшения",
  //   "Животные",
  //   "Мебель",
  // ];

  // в таком виде будут приходить категории с бэка
  const categories = {
    0: {
      id: 0,
      title: "Все категории",
    },

    1: {
      id: 1,
      title: "Автотранспорт",
      children: {
        2: {
          id: 2,
          title: "Легковые",
        },
        3: {
          id: 3,
          title: "Грузовые",
        },
      },
    },

    4: {
      id: 4,
      title: "Одежда",
      children: {
        5: {
          id: 5,
          title: "Для взрослых",
        },
        6: {
          id: 6,
          title: "Для детей",
        },
      },
    },

    7: {
      id: 7,
      title: "Книги",
      children: {
        8: {
          id: 8,
          title: "Фентези",
        },
        9: {
          id: 9,
          title: "Хентай манга",
        },
      },
    },
  };

  // превращение категорий в итерируемы массив
  // ToDo вынести в экшен???
  const getCategoriesArray = (obj) => {
    let option = [];
    for (const elem of Object.entries(obj)) {
      const el = elem[1];
      option.push(
        <option key={el.id} value={el.id} className="gray">
          {el.title}
        </option>
      );
      if (el.children) {
        for (const children of Object.entries(el.children)) {
          let child = children[1];
          option.push(
            <option key={child.id} value={child.id}>
              {child.title}
            </option>
          );
        }
      }
    }
    return option;
  };

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
