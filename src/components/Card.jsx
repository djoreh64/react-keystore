import React from 'react';
import { useState } from 'react';

function Card({name, price, cover}) {

    return (
        <div className="card">
            <a href="#" className='card__add'>В корзину</a>
            <div className="card__img" style={{backgroundImage: `url(${cover})`}}/>
            <div className="card__text">
                <div className='card__text_holder'>
                <h4 className="card__headline">{name}</h4>
                <div className="card__price">{price} руб</div>
                </div>
            </div>
        </div>
    )
}

export default Card