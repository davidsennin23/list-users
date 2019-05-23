import React from 'react';
import './body-text.css'

export default class BodyText extends React.Component {

    render() {
        const {content} = this.props;
        return (
            <div className="text-info"><p className="info">{content}</p></div>
            // <div className="user-line"><span className="label">Teste</span><span className="info">{content}</span></div>
        )
    }

}