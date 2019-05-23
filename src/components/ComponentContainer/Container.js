import React from 'react';
import './container.css';

export default class Container extends React.Component {

    render () {
        const { items, itemElement: Item, innerElement } = this.props;
        return (
            <div className="container grouping">
                {items.map((item) => {
                    return <Item key={item.key} value={item} itemElement={innerElement}/>
                })}
            </div>
        )
    }

}