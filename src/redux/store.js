import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import { filterReducer } from "./todos/filterReducer";
import { todosReducer } from "./todos/todosReducer";

const rootReducer = combineReducers({
  todos: todosReducer,
  filters: filterReducer,
});

export const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
