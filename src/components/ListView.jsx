/* eslint-disable-next-line */
import React from "react";
import PropsTypes from 'prop-types';
import ShopItem from './ShopItem';

function ListView(props) {
    const {items} = props;

    return (
        <div className="list-view">
            {items.map((item, i) => 
                <ShopItem item={item} key={'item' + i}/>
            )}
        </div>
    );
}

ListView.propsTypes = {
    items: PropsTypes.arrayOf(PropsTypes.object).isRequired
}

export default ListView