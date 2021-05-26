import React from 'react';
import './card.styles.scss';

export const Card = (props) =>{
    return (
        <div className="card-container flex flex-col">
            <img src={props.item.image} alt="item"
                className="h-80 object-cover"
            />
            <h4>{props.item.name}</h4>
        </div>
    )
}