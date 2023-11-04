import React from "react";
import styles from '../pages/Cart/Cart.module.scss'
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, decrementCount, incrementCount } from '../redux/slices/cartSlice.ts'
import { useNavigate } from "react-router-dom";
import { RootState } from '../redux/store.ts'

type CartItemProps = {
    id: string,
    name: string,
    price: number,
    cover: string,
    count: number
}

const CartItem: React.FC<CartItemProps> = ({id, name, price, cover, count}) => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cartItem = useSelector((state: RootState) => state.cart.items.find(obj => obj.name === name))
    const onClickMinus = (e: React.MouseEvent) => {
        e.stopPropagation()
        if (cartItem ? cartItem.count > 1: '') {
            dispatch(decrementCount(name))
        } 
    }
    const onClickPlus = (e: React.MouseEvent<HTMLDivElement>) => {
        e.stopPropagation()
        dispatch(incrementCount(name))
    }
    const onClickRemove = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.stopPropagation()
        dispatch(removeItem(name))
    }
    const onClickItem = () => {
        navigate(`/games/${id}`)
    }

    return (
        <div onClick={onClickItem} className={styles.cart_item}>
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
    )
}

export default CartItem