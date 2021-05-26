import React from 'react';
import { Card } from '../card/card.component';
import './card-list.styles.scss';

export const CardList = (props) => {

    return (
        <div className="card-list mx-auto w-2/3 mt-8"> 
            {props.data.map(item=>(
                <Card key={item.id} item={item} />
            ))}
        </div>
    )
}