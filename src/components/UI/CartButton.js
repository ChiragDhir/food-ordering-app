import React,{useContext} from 'react';
import styles from './CartButton.module.css';
import { HiShoppingCart } from 'react-icons/hi';
import CartContext from '../../store/cart-context';

const CartButton=()=>{

const cartCtx = useContext(CartContext);

    return <form action="/my-cart">
    <button type="submit" className={styles.button}>
        <HiShoppingCart className={styles.shop}/>
        <span>Your Cart</span>
        <span>{cartCtx.cartLength}</span>
    </button>
    </form>
}
export default CartButton;