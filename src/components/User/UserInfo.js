import React from 'react';
import BodyText from '../Texts/BodyText';
import './user-style.css'

export default class UserInfo extends React.Component {

    render() {
        const { name, lastName, birth, number } = this.props;
        return (
            <div className="content">
                <BodyText content={name}/>
                <BodyText content={lastName}/>
                <BodyText content={birth}/>
                <BodyText content={number}/>
            </div>
        )
    }

}