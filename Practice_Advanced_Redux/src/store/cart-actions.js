import { uiSliceActions } from './ui-slice';
import { cartActions } from './cart-slice';

export const sendCartData = (cart) => {
  return async(dispatch) => {
    dispatch(uiSliceActions.setNotification({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data'
    }));
    const sendRequest = async () => {
      const response = await fetch('https://cartitem-7a5f0-default-rtdb.europe-west1.firebasedatabase.app/cart.json', {
        method: 'PUT',
        body: JSON.stringify(cart)
      })
      if (!response.ok) {
        throw new Error('Updating cart item failed!')
      }      
    }

    try {
      await sendRequest();
      dispatch(uiSliceActions.setNotification({
        status: 'success',
        title: 'Success',
        message: 'Sent cart data'
      }))       
    }catch(error) {
      dispatch(uiSliceActions.setNotification({
        status: 'error',
        title: 'Error',
        message: 'Error sending cart data'
      }))  
    }  
  }
}

export const fetchCartData = () => {
  return async dispatch => {
    const fetchData = async() => {
      const response = await fetch('https://cartitem-7a5f0-default-rtdb.europe-west1.firebasedatabase.app/cart.json');
      if (!response.ok) {
        throw new Error('Failed to fetch Data!');
      }
      const responseData = await response.json();
      return responseData;
    }
    try {
      const cartData = await fetchData();
      dispatch(cartActions.replaceCart({
        items: cartData.items || [],
        totalQuantity: cartData.totalQuantity,
        totalAmount: cartData.totalAmount,
        changed: false
      }));       
    }catch(error) {
      dispatch(uiSliceActions.setNotification({
        status: 'error',
        title: 'Error',
        message: 'Error while fetching Data!'
      }))
    }
  }
}