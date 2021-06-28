export const loginUser = (payload) => ({
  type: "LOGIN_USER",
  payload,
});

export const logoutUser = () => ({
  type: "LOGOUT_USER",
});

export const newNote = (payload) => ({
  type: "NEW_NOTE",
  payload,
});

export const editNote = (payload) => ({
  type: "EDIT_NOTE",
  payload,
});

export const deleteNote = (payload) => ({
  type: "DELETE_NOTE",
  payload,
});
