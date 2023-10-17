import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector} from 'react-redux';
import { addItem } from '../redux/slices/cartSlice'

function Card({name, price, cover}) {
    const dispatch = useDispatch()
    const cartItem = useSelector(state => state.cart.items.find(obj => obj.name === name))
    const onClickAdd = () => {
        if (!cartItem) {
            const item = {
                name,
                price,
                cover,
                count: 1
            }
            dispatch(addItem(item))
        }
    }

    return (
        <div className="card">
            <Link to={cartItem ? '/cart' : ''} onClick={onClickAdd} className='card__add'>{cartItem ? 'В корзинe' : 'В корзину'}</Link>
            <div className="card__img" style={{backgroundImage: `url(${cover})`}}/>
            <div className="card__text">
                <div className='card__text_holder'>
                <h4 className="card__headline">{name}</h4>
                <div className="card__price">{price} ₽</div>
                </div>
            </div>
        </div>
    )
}

export default Card