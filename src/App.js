import React from "react";
import { Provider } from "react-redux"
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";
import Beers from "./pages/Beers";

const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <Beers />
    </Provider>
  );
}
  
export default App;
