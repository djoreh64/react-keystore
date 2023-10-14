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
                <a onClick = {onClickRemove} className = {styles.cart__remove}>Удалить из корзины</a>    
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