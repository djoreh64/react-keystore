import React from "react";

function Card(props) {
    return (
        <div className="card">
            <img className="card-img" src="" alt=""/>
            <div className="card-text">
                <h4 className="card-headline">{props.title}</h4>
                <div className="card-price">{props.price}</div>
            </div>
        </div>
    )
}

export default Card