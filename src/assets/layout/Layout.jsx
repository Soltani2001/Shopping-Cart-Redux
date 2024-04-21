import React from 'react'
import { Link } from 'react-router-dom'
import { PiShoppingCartFill } from "react-icons/pi";
// import { useCart } from '../../context/CartContext';
import styles from './Layout.module.css'
import { useSelector } from 'react-redux';
import { Col } from 'react-bootstrap';

function Layout({children}) {
    const state = useSelector(state=> state.cart)
    // const  [state] = useCart()
  return (
    <>
    <Col size={12} md={12}>
        <header className={styles.header}>
            <Link to="/products">DG Shop</Link>
            <div>
            <Link to="/checkout"><PiShoppingCartFill /></Link>
                {state.itemsCounter > 0 && <span>{state.itemsCounter} </span>  }   
            </div>
        </header>
        {children}
        <footer className={styles.footer}>
            <p>Developed by Morteza</p>
        </footer>
    </Col>
    </>
  )
}

export default Layout