/* eslint-disable-next-line */
import React from "react";
import PropsTypes from 'prop-types';
import ShopCard from './ShopCard';

function CardsView(props) {
    const {cards} = props;

    return (
        <div className="cards-view">
            {cards.map((card, i) => 
                <ShopCard card={card} key={'card' + i}/>
            )}
        </div>
    );
}

CardsView.propsTypes = {
    cards: PropsTypes.arrayOf(PropsTypes.object).isRequired
}

export default CardsView