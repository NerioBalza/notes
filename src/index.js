import React, { Suspense } from "react";
import ReactDOM from "react-dom";

// Firebase
import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./firebase-config";

//Redux
import { Provider } from "react-redux";
import { createStore, compose } from "redux";
import reducer from "./reducers";

//Component
import App from "./app/App";
import "./styles/styles.scss";

const initialState = {
  user: {
    email: "",
    name: "",
    isLogin: false,
  },
  notes: [],
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducer, initialState, composeEnhancers());

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Suspense fallback={"conectando..."}>
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </FirebaseAppProvider>,
  document.getElementById("root")
);
