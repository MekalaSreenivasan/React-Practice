import { createSlice } from '@reduxjs/toolkit';

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    isCartVisible: false,
    notification: null
  },
  reducers: {
    toggle(state) {
      state.isCartVisible = !state.isCartVisible;
    },
    setNotification(state, action) {
      state.notification = {
        status: action.payload.status,
        title: action.payload.message
      }
    }
  }
});

export const uiSliceActions = uiSlice.actions;
export default uiSlice;