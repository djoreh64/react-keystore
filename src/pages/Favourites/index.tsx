import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Favourites.module.scss';
import FavouritesItem from '../../components/FavouritesItem.tsx';
import { Link } from 'react-router-dom';
import { RootState } from '../../redux/store.ts';

const Favourites: React.FC = () => {
	const {items} = useSelector((state: RootState) => state.favourites);
	const isMounted = React.useRef(false);
	React.useEffect(() => {
		if (isMounted.current) {
			const json = JSON.stringify(items);
			localStorage.setItem('favourites', json);
		}
		isMounted.current = true;
	}, [items]);
	return (
		<div className={styles.main}>
			{items.length === 0 &&
                <div className={styles.favourites__empty}>
                	<h1 className={styles.favourites__empty_headline}>Список избранного пуст!</h1>
                	<Link to='/#' className={styles.favourites__button}>На главную</Link>
                </div>
			}
			<div className={styles.favourites}>
				{items.map((item) => {
					return <FavouritesItem key = {item.name} {...item}/>;
				})}
			</div>
		</div>
	);
};

export default Favourites;