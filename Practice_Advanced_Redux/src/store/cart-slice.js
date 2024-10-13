import {createSlice} from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    totalQuantity: 0,
    totalAmount: 0,
    changed: false
  },
  reducers: {
    addItemToCart(state, action) {
      const itemToAdd = action.payload;
      const exisitingItem = state.items.find(item => item.id === itemToAdd.id);
      state.totalQuantity++;
      state.changed = true;
      if(!exisitingItem) {
        state.items.push({
          id: itemToAdd.id,
          price: itemToAdd.price,
          quantity: 1,
          totalAmount: itemToAdd.price,
          title: itemToAdd.title
        });
      } else {
        exisitingItem.quantity += 1;
        exisitingItem.totalAmount += itemToAdd.price;
      }
    },
    removeItemToCart(state, action) {
      const itemId = action.payload;
      const exisitingItem = state.items.find(item => item.id === itemId);
      state.totalQuantity--;
      state.changed = true;
      if (exisitingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== itemId);
      } else {
        exisitingItem.quantity--;
        exisitingItem.totalAmount = exisitingItem.totalAmount - exisitingItem.price;
      }
    },
    replaceCart(state, action) {
      state.totalQuantity = action.payload.totalQuantity;
      state.items = action.payload.items;
    },    
  }
});

export const cartActions = cartSlice.actions;
export default cartSlice;