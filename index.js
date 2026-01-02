import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import App from "./App";
import store1 from "./store";
let root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store1}>
    <App />
  </Provider>
);
