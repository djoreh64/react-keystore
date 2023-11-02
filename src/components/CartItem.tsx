import React from "react";
import styles from '../pages/Cart/Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decrementCount, incrementCount } from '../redux/slices/cartSlice'
import { Link  } from "react-router-dom";

type cartItemProps = {
    id: string,
    name: string,
    price: number,
    cover: string,
    count: number
}

const CartItem: React.FC<cartItemProps> = ({id, name, price, cover, count}) => {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.name === name))
    const onClickMinus = (e) => {
        e.preventDefault()
        if (cartItem.count > 1) {
            dispatch(decrementCount(name))
        } 
    }
    const onClickPlus = (e) => {
        e.preventDefault()
        dispatch(incrementCount(name))
    }
    const onClickRemove = (e) => {
        e.preventDefault()
        dispatch(removeItem(name))
    }
    return (
        <Link to={`/games/${id}`}>
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
                    <div className={styles.cart_counter}>
                        <div onClick={onClickMinus} className={styles.cart_counter_minus}>-</div>
                        <div className={styles.cart_counter_value}>{count}</div>
                        <div onClick={onClickPlus} className={styles.cart_counter_plus}>+</div>
                    </div>
                </div>
            </div>
        </div>
        </Link>
    )
}

export default CartItem