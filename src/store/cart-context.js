import React,{useState,createContext} from 'react';


//using this createContext method from react
const CartContext=createContext({
    cart:[],
    cartLength:0,
})

export const CartContextProvider=(props)=>{

      const [cart,setCart]=useState([]);

    
      //through this function,we will be adding item to cart
      const addItemHandler=(item)=>{
        setCart((prevState)=>{
            return [...prevState,item];
        })
    }
   
      const context={
          cart: cart,
          cartLength:cart.length,
          addItemHandler:addItemHandler
      }


    return (
        <CartContext.Provider value={context}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartContext;