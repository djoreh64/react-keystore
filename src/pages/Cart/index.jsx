import styles from './Cart.module.scss'
import CartItem from '../../components/CartItem'

const Cart = () => {
    const cartItems = [{}, {}, {}, {}, {}]

    return (
        <div className={styles.cart}>
        <h1 className={styles.cart_headline}>Корзина</h1>
        <div className={styles.cart_content}>
            <div className={styles.cart_items}>
                {cartItems.map((item, i) => {
                    return <CartItem key = {i}/>
                })}
            </div>
            <div className={styles.cart_right}></div>
        </div>
        </div>
    )
}

export default Cart