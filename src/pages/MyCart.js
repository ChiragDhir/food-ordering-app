import React,{useContext} from 'react';
import CartContext from '../store/cart-context';

const MyCart=()=>{
   
     const cartCtx = useContext(CartContext);
     const cart=cartCtx.cart;

    return (
    <ul style={{paddingTop:'5rem'}}>
        {
            cart.map((item)=>{

                 return <li key={item.id}>
                    <p>{item.name}</p>
                    <p>{item.desc}</p>
                    <p>{item.price}</p>
                    <p>x {item.qty}</p>
                </li>
            })
        }
    </ul>)
}
export default MyCart;