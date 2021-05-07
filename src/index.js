import React from "react";
import ReactDOM from "react-dom";
//Redux
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";
//Component
import App from "./router/App";
import "./assets/styles/Index.scss";

const initialState = {
  user: {
    name: "",
    email: "",
  },
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
