import React from 'react';
import './card-style.css';

export default class Card extends React.Component {

    render() {
        const { value, itemElement: Item } = this.props;
        return (
            <div className="card  grouping">
                <Item value={value}/>
            </div>
        )
    }

}