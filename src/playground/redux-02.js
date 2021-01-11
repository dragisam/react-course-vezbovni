import { createStore, combineReducers } from "redux";
import { v4 as uuidv4 } from "uuid";

const addTrosak = ({ opis = "", iznos = 0, napravljen = 0 } = {}) => ({
  type: "ADD_TROSAK",
  trosak: {
    id: uuidv4(),
    opis,
    iznos,
    napravljen,
  },
});
const removeTrosak = ({ id } = {}) => ({
  type: "REMOVE_TROSAK",
  id,
});
const editTrosak = (id, updates) => ({
  type: "EDIT_TROSAK",
  id,
  updates,
});
 const setTextFilter=(text='')=>({
     type:"SET_TEXT",
     text
 });
const trosakDefaultState = [];
const trosakReduser = (state = trosakDefaultState, action) => {
  switch (action.type) {
    case "ADD_TROSAK":
      return [...state, action.trosak];
    case "REMOVE_TROSAK":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_TROSAK":
      return state.map((trosak) => {
        if (trosak.id === action.id) {
          return {
            ...trosak,
            ...action.updates,
          };
        } else {
          return expense;
        }
      });
    default:
      return state;
  }
};

const filterDefaultState = {
  text: "",
  sortBy: "napravljen",
  starDate: undefined,
  endData: undefined,
};
const filterReduser = (state = filterDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT":
        return {
          ...state,
          text: action.text
        };
    default:
      return state;
  }
};

const store = createStore(
  combineReducers({
    trosak: trosakReduser,
    filters: filterReduser,
  })
);

store.subscribe(() => {
  console.log(store.getState());
});

const trosakOne = store.dispatch(
  addTrosak({
    opis: "u decembru",
    iznos: 155,
    napravljen: 22,
  })
);
const trosakTwo = store.dispatch(
  addTrosak({
    opis: "u decembru",
    iznos: 156,
    napravljen: 225,
  })
);
store.dispatch(removeTrosak({ id: trosakOne.trosak.id }));
store.dispatch(editTrosak(trosakTwo.trosak.id, { iznos: 555 }));

store.dispatch(setTextFilter('renta'));
//store.dispatch(setTextFilter());
const demoState = {
  trosak: [
    {
      id: "asassa",
      opis: "u januaru izdat",
      iznos: 2555,
      napravljen: 0,
    },
  ],
  filters: {
    text: "izdat",
    sortBy: "iznos",
    startDate: undefined,
    endDate: undefined,
  },
};
