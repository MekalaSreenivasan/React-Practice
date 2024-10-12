//import { createStore } from "redux";
import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import counterSlice from "./counter-slice";

/*const reducerFunction = (state = {counter: 0, showCounter: true}, action) => {
  if (action.type === 'increment') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'decrement') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }    
  }
  if (action.type === 'increase') {
    return {
      counter: state.counter + action.value,
      showCounter: state.showCounter
    }
  }
  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }    
  }
  return state;
}*/

//const store = createStore(counterSlice.reducer);


const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  } //Map of reducers can be used, by having key value pair
});
export const counterActions = counterSlice.actions;
export const authActions = authSlice.actions;

export default store;