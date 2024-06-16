/* eslint-disable-next-line */
import React from "react";
import PropsTypes from 'prop-types';

function ShopCard(props) {
    const {card} = props;

    return (
        <div className="shop-card">
            <h1 className="shop-card-name">{card.name}</h1>
            <h3 className="shop-card-color">{card.color}</h3>
            <div>
                <img className="shop-card-image" src={card.img} alt={card.name} />
                <div>
                    <span className="shop-card-price">{card.price}</span>
                    <button type="button">Add to Cart</button>
                </div>
            </div>
        </div>
    );
}

ShopCard.propsTypes = {
    card: PropsTypes.object.isRequired
}

export default ShopCard