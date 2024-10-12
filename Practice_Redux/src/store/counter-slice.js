import { createSlice } from "@reduxjs/toolkit";
//while using redux-toolkit we can mutate the state objects
//Internally redux toolkit will use another function to read this mutate and update based on prev value
const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    counter: 0,
    showCounter: true
  },
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    }
  }
});

export default counterSlice;