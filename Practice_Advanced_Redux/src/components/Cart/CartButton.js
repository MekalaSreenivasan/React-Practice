import {useDispatch, useSelector} from 'react-redux';
import { uiSliceActions } from '../../store/ui-slice';
import classes from './CartButton.module.css';

const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector(state => state.cart.totalQuantity);
  const toggleHandler = ()=> {
    dispatch(uiSliceActions.toggle());
  }
  return (
    <button className={classes.button} onClick={toggleHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity}</span>
    </button>
  );
};

export default CartButton;
