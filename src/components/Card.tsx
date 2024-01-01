import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../redux/slices/cartSlice.ts';
import { RootState } from '../redux/store.ts';

type CardProps = {
    id: string, 
    name: string,
    price: number,
    cover: string,
    count: number
}

const Card: React.FC<CardProps> = ({id, name, price, cover}) => {
	const dispatch = useDispatch();
	const navigate = useNavigate();
	const cartItem = useSelector((state: RootState) => state.cart.items.find(obj => obj.id === id));
	const onClickCartAdd = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.stopPropagation();
		if (!cartItem) {
			const item: CardProps = {
				id,
				name,
				price,
				cover,
				count: 1
			};
			dispatch(addItem(item));
		} 
	};
	const onClickCard = () => {
		navigate(`/games/${id}`);
	};

	return (
		<div onClick={onClickCard} className="card">
			<Link to={cartItem ? '/cart' : ''} onClick={onClickCartAdd} className={cartItem ? 'card__add-to-cart active' : 'card__add-to-cart'}>{cartItem ? 'В корзинe' : 'В корзину'}</Link>
			<div className="card__img" style={{backgroundImage: `url(${cover})`}}/>
			<div className="card__text">
				<div className='card__text_holder'>
					<h4 className="card__headline">{name}</h4>
					<div className="card__price">{price} ₽</div>
				</div>
			</div>
		</div>
	);
};

export default Card;