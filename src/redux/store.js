import {createStore,combineReducers,applyMiddleware} from "redux";
import thunk from "redux-thunk";
import Reducers from "./Reducers";
const rootReducer = combineReducers({
    Reducers
})
export const store = createStore(rootReducer,applyMiddleware(thunk)); 