const trosakDefaultState = [];
export default  (state = trosakDefaultState, action) => {
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
