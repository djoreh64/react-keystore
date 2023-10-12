import styles from './Cart.module.scss'
import CartItem from '../../components/CartItem'

const Cart = () => {
    const cartItems = []

    return (
        <div className={styles.cart}>
        {cartItems.length > 0 && <h1 className={styles.cart_headline}>Корзина</h1>}
        {cartItems.length == 0 && <h1 className={styles.cart_empty_headline}>Корзина пуста!</h1>}
        <div className={styles.cart_content}>
            <div className={styles.cart_items}>
                {cartItems.map((item, i) => {
                    return <CartItem key = {i} {...item}/>
                })}
            </div>
            {cartItems.length > 0 && <div className={styles.cart_right}></div>}
        </div>
        </div>
    )
}

export default Cart