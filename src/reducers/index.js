const reducer = (state, action) => {
  switch (action.type) {
    case "SET_NOTE":
      const onList = state.myList.find((item) => item.id === action.payload.id);
      if (onList) return { ...state };
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    default:
      return state;
  }
};

export default reducer;