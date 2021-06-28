const reducer = (state, action) => {
  switch (action.type) {
    case "LOGIN_USER":
      return {
        ...state,
        user: { ...action.payload, isLogin: true },
      };
    case "LOGOUT_USER":
      return {
        user: {
          email: "",
          isLogin: false,
        },
        notes: [],
      };
    case "NEW_NOTE":
      let newArray = [];
      newArray.push(action.payload);
      state.notes.forEach((element) => {
        newArray.push(element);
      });
      return {
        ...state,
        notes: newArray,
      };
    case "EDIT_NOTE":
      let editArray = [];
      editArray.push(action.payload);

      state.notes.forEach((element) => {
        if (element.note_id !== action.payload.note_id) {
          editArray.push(element);
        }
      });
      return {
        ...state,
        notes: editArray,
      };
    case "DELETE_NOTE":
      let deleteArray = [];

      state.notes.forEach((element) => {
        if (element.note_id !== action.payload) {
          deleteArray.push(element);
        }
      });
      return {
        ...state,
        notes: deleteArray,
      };
    default:
      return state;
  }
};

export default reducer;
