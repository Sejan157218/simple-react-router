import React from 'react';
import { NavLink } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name,email,website,phone,address,id} = props.friend;

    return (
        <div className="friend-container">
            <h1>I am : {name}</h1>
            <p>Call me : {phone}</p>
            <p>Email me : {email}</p>
            <p>Visit me : {website}</p>
            <p>I live In : {address.street}</p>
            <NavLink to={`/friend/${id}`} >Visite Me</NavLink>
        </div>
    );
};

export default Friend;