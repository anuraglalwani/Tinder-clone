import React from 'react';
import { Avatar } from '@material-ui/core';
import "./Chat.css";
import { Link } from 'react-router-dom';
export default function Chat ({name,message,profilePic, timestamp}){

    return(
        <Link to={"/chat/"+name}>
        <div className="chat">
           
            <Avatar src={profilePic} alt="img" 
               className="chat__image"/>
            <div className="chat__Details">
              <h2>{name}</h2>
               <p>{message}</p>
            </div>
            <p className="chat__timestamp">{timestamp}</p>
         
        </div>
        </Link>
       
       

    )

}