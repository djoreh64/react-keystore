import React from "react";
import styles from '../pages/Cart/Cart.module.scss'
import { useDispatch } from 'react-redux';
import { removeItem } from '../redux/slices/cartSlice'

function CartItem ( {name, price, cover} ) {
    const dispatch = useDispatch()
    const onClickRemove = () => {
        dispatch(removeItem(name))
    }
    return (
        <div className={styles.cart_item}>
            <div className={styles.cart_holder}>
                <a onClick = {onClickRemove} className = {styles.cart__remove}>
                <svg width="20" height="20" viewBox="0 0 118 115" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M112.303 5.3033L8.3033 109.303M5.6967 5.3033L109.697 109.303" stroke="#252525" strokeWidth="20"/>
                </svg>
                </a>    
                <div className={styles.cart_cover} style={{backgroundImage: `url(${cover})`}}></div>
                <div className={styles.cart_text_holder}>
                    <p className={styles.cart_name}>{name}</p>
                    <p className={styles.cart_price}>{price} ₽</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem