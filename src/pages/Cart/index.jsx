import styles from './Cart.module.scss'

const Cart = () => {
    return (
        <div className={styles.cart}>
        <h1 className={styles.cart_headline}>Корзина</h1>
        <div className={styles.cart_content}>
            <div className={styles.cart_items}>
                <div className={styles.cart_item}>
                    <div className={styles.cart_holder}>
                        <div className={styles.cart_cover}></div>
                        <div className={styles.cart_text_holder}>
                            <p className={styles.cart_name}></p>
                            <p className={styles.cart_price}></p>
                        </div>
                    </div>
                </div>
                <div className={styles.cart_item}>
                    <div className={styles.cart_holder}>
                        <div className={styles.cart_cover}></div>
                        <div className={styles.cart_text_holder}>
                            <p className={styles.cart_name}></p>
                            <p className={styles.cart_price}></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.cart_right}></div>
        </div>
        </div>
    )
}

export default Cart