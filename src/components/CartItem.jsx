import React from "react";
import styles from '../pages/Cart/Cart.module.scss'

function CartItem () {
    return (
        <div className={styles.cart_item}>
            <div className={styles.cart_holder}>
                <div className={styles.cart_cover}></div>
                <div className={styles.cart_text_holder}>
                    <p className={styles.cart_name}></p>
                    <p className={styles.cart_price}></p>
                </div>
            </div>
        </div>
    )
}

export default CartItem