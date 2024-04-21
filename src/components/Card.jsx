import React from 'react'
import { Link } from 'react-router-dom';
import {TbListDetails, TbShoppingBagCheck  } from "react-icons/tb"
import { FaPlus, FaMinus  } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { productQuantity, shortenText } from '../helpers/helper';
import styles from './card.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { addItem, decrease, increase, removeItem } from '../features/cart/cartSlice';
// import { useCart } from '../context/CartContext';

function Card({data}) {
    const {image, title, price, id} = data;

    // const [state, dispatch] =useCart();

    const state = useSelector(store => store.cart);
    const dispatch = useDispatch();

    const quantity =productQuantity(state, id)
    // const quantity = 0;
  return (
  <>
  <div className={styles.card}>
        <img src={image} alt={title} />
        <h3>{shortenText(title)}</h3>
        <p>{price} $</p>
        <div className={styles.actions}>
            <Link to={`/products/${id}`}><TbListDetails /></Link>
            {quantity === 1 && <button onClick={()=>dispatch(removeItem(data))}><MdDelete /></button>}
            {quantity > 1 &&  
            <button onClick={()=>dispatch(decrease(data))}>< FaMinus /></button>}
            {!!quantity  &&<span>{quantity}</span> }
            {
              quantity === 0 ? <button onClick={()=>dispatch(addItem(data))}><TbShoppingBagCheck /></button> : <button onClick={()=>dispatch(increase(data))}>< FaPlus /></button>
            }
            
            
        
        
        
        </div>
    </div>
  </>
    
  )
}

export default Card