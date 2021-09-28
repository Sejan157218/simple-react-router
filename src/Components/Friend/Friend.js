import React from 'react';
import {useHistory, NavLink } from 'react-router-dom';
import './Friend.css'

const Friend = (props) => {
    const {name,email,website,phone,address,id} = props.friend;

    const history = useHistory()
    const handlerFriendsClick=()=>{
        history.push(`/friend/${id}`)
    }
    return (
        <div className="friend-container">
            <h1>I am : {name}</h1>
            <p>Call me : {phone}</p>
            <p>Email me : {email}</p>
            <p>Visit me : {website}</p>
            <p>I live In : {address.street}</p>
            <NavLink to={`/friend/${id}`} target="_blank">Visite Me</NavLink>
            <NavLink to={`/friend/${id}`} target="_blank"><button>Visite Me</button></NavLink>
            <button onClick={handlerFriendsClick} target="_blank">Visit me Button</button>

        </div>
    );
};

export default Friend;