import styles from './Cart.module.scss'
import CartItem from '../../components/CartItem'
import { Link } from "react-router-dom"
import { useSelector } from 'react-redux'

const Cart = () => {
    const cartItems = useSelector(state => state.cart.items)
    const totalPrice = useSelector(state => state.cart.totalPrice)
    return (
        <div className={styles.cart}>
        
        {cartItems.length === 0 &&
        <div className={styles.cart_empty}>
            <h1 className={styles.cart_empty_headline}>Корзина пуста!</h1>
            <Link to='/#' className={styles.cart_empty_button}>На главную</Link>
        </div>
         }
        <div className={styles.cart_content}>
            <div className={styles.cart_items}>
                {cartItems.map((item) => {
                    return <CartItem key = {item.name} {...item}/>
                })}
            </div>
            {cartItems.length > 0 && 
            <div className={styles.cart_right}>
                <h2 className = {styles.cart_right_headline}>Итоговая стоимость: <br/><span>{totalPrice} ₽</span></h2>
                <a className = {styles.cart_right_button}>Оформить заказ</a>
            </div>}
        </div>
        </div>
    )
}

export default Cart