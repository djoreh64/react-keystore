import React from 'react';
import { useState } from 'react';

function Card({title, price, image}) {

    return (
        <div className="card">
            <img className="card__img" style={{backgroundImage: `url(${image})`}} alt=""/>
            <div className="card__text">
                <h4 className="card__headline">{title}</h4>
                <div className="card__price">{Math.ceil(price * 100)} руб</div>
            </div>
        </div>
    )
}

export default Card