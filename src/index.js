import {Provider} from "react-redux";
import ReactDOM from "react-dom";
import store from "./Store/Store";
import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <Provider store = {store}>
    <App/>
  </Provider>,
  rootElement
);
