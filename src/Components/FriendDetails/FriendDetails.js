import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import './FriendDetails.css'

const FriendDetails = () => {
    const {friendID} =useParams();

    const url = `https://jsonplaceholder.typicode.com/users/${friendID}`
    const [friend,setFriend]=useState({})
   const history = useHistory()
    useEffect(()=>{
        fetch(url)
        .then(res=>res.json())
        .then(data=>setFriend(data))
    },[]);
    const {name,email,website,phone,address} =friend;

    const handlerAllFriends=()=>{
        history.push('/friends')
    }
    return (
        <div className="frienddetails-container">
            <h1>I am : {name}</h1>
            <p>Call me : {phone}</p>
            <p>Email me : {email}</p>
            <p>Visit me : {website}</p>
            <p>I live In : {address?.street}</p>
            <button onClick={handlerAllFriends}>see allfriend</button>
        </div>
    );
};

export default FriendDetails;