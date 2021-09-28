import React from 'react';
import './Friend.css'

const Friend = (props) => {
    const {name,email,website,phone,address} = props.friend
    return (
        <div className="friend-container">
            <h1>I am : {name}</h1>
            <p>Call me : {phone}</p>
            <p>Email me : {email}</p>
            <p>Visit me : {website}</p>
            <p>I live In : {address.street}</p>
        </div>
    );
};

export default Friend;