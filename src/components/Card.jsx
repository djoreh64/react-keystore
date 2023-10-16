import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch} from 'react-redux';
import { addItem } from '../redux/slices/cartSlice'

function Card({name, price, cover}) {
    const dispatch = useDispatch()
    const onClickAdd = () => {
        const item = {
            name,
            price,
            cover   
        }
        dispatch(addItem(item))
    }

    return (
        <div className="card">
            {<a onClick={onClickAdd} className='card__add'>В корзину</a>}
            {/* {cartItems.length>0 && <Link to='/cart' className='card__add'>В корзине</Link>} */}
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