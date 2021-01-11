import { v4 as uuidv4 } from "uuid";

export const addTrosak = ({ opis = "", iznos = 0, napravljen = 0 } = {}) => ({
  type: "ADD_TROSAK",
  trosak: {
    id: uuidv4(),
    opis,
    iznos,
    napravljen,
  },
});
export const removeTrosak = ({ id } = {}) => ({
  type: "REMOVE_TROSAK",
  id,
});
export const editTrosak = (id, updates) => ({
  type: "EDIT_TROSAK",
  id,
  updates,
});
 export const setTextFilter=(text='')=>({
     type:"SET_TEXT",
     text
 });