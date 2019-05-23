import React from 'react';
import Photo from './Photo';
import UserInfo from './UserInfo';
import './user-style.css'

export default class UserContent extends React.Component {

    render() {
        const { photo, name, lastName, birth, number } = this.props.value;
        return (
            <div>
                <div className="user-foto">
                    <Photo photoLink={photo}></Photo>
                </div>
                <div className="user-info">
                    <UserInfo name={name} lastName={lastName} birth={birth} number={number}></UserInfo>
                </div>
            </div>
        )
    }

}