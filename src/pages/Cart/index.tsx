import React from 'react';
import styles from '../Cart/Cart.module.scss';
import CartItem from '../../components/CartItem';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';

const Cart: React.FC = () => {
	const {items} = useSelector((state: RootState) => state.cart);
	const isMounted = React.useRef(false);
	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items);
			localStorage.setItem('cart', json);
		}
		isMounted.current = true;
	}, [items]);
	const totalPrice = items.reduce((sum, item) => sum + item.count * item.price, 0);
	return (
		<div className={styles.cart}>
			{items.length === 0 &&
        <div className={styles.cart_empty}>
        	<h1 className={styles.cart_empty_headline}>Корзина пуста!</h1>
        	<Link to='/#' className={styles.cart_empty_button}>На главную</Link>
        </div>
			}
			<div className={styles.cart_content}>
				<div className={styles.cart_items}>
					{items.map((item) => {
						return <CartItem key = {item.name} {...item}/>;
					})}
				</div>
				{items.length > 0 && 
            <div className={styles.cart_right}>
            	<h2 className = {styles.cart_right_headline}>Итоговая стоимость: <br/><span>{totalPrice} ₽</span></h2>
            	<a className = {styles.cart_right_button}>Оформить заказ</a>
            </div>}
			</div>
		</div>
	);
};

export default Cart;