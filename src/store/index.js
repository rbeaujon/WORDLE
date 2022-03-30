import { createStore } from 'redux';
import { combineReducers } from "redux";
import  wordleReducer from '../store/wordle.reducer';


const reducers = combineReducers ({
  wordleReducer
})

const store = createStore(reducers, {}, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());    

export default store;
