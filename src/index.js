import React from "react";
import ReactDOM from "react-dom/client";
import Routes from "./routes";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promiseMiddleware from "redux-promise";
import reducers from "./store/reducers";

const createStoreWithMiddleware =
  applyMiddleware(promiseMiddleware)(createStore);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Routes />
  </Provider>
);
