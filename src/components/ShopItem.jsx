/* eslint-disable-next-line */
import React from "react";
import PropsTypes from 'prop-types';

function ShopItem(props) {
    const {item} = props;

    return (
        <div className="shop-item">
            <span>
                <img className="shop-item-image" src={item.img} alt={item.name} />
            </span>
            <span className="shop-item-name">{item.name}</span>
            <span className="shop-item-color">{item.color}</span>
            <span className="shop-item-price">{item.price}</span>
            <button type="button">Add to Cart</button>
        </div>
    );
}

ShopItem.propsTypes = {
    item: PropsTypes.object.isRequired
}

export default ShopItem