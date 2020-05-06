import React from "react";

//pages
import Homepage from "./pages/Homepage";

//styles
import "./App.css";
import "./styles/styles.scss";

//redux
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import allReducers from "./store/reducers/roots";

const store = createStore(allReducers, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Homepage />
      </div>
    </Provider>
  );
}

export default App;
