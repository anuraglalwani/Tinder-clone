import React, { useState,useEffect } from 'react';
import { Avatar } from '@material-ui/core';
import "./ChatScreen.css";
import axios from "./axios";

export default function ChatScreen (){
   const [messages,setMessgaes]=useState([]);
   const [inputMessage,setInputMeassage]=useState("");
   const [flag,setflag]=useState(false)
   useEffect(()=>{
    async function fetchData(){
     const req= await axios.get("/tinder/messages");
     setMessgaes(req.data);
     console.log(req.data);
    }
    fetchData();
 },[flag])



   function handleClick(e){
       e.preventDefault();
       const newMessage={
           message:inputMessage
       }
       axios.post("/tinder/messages",newMessage)
       //setMessgaes([...messages,{message:inputMessage}]);
       setflag(!flag);
    
       setInputMeassage("");

   }
   function deleteMessage(id){
       axios.delete("/tinder/messages/"+id);
       setflag(!flag);
   }
    return(
    <div className="chatScreen">
        <p className="chatScreen__title">You matched on 10/3/23</p>
        {
            messages.map((message)=>
            message.name?
           ( <div className="chatScreen__message" key={message._id}>
                   <Avatar className="chatScreen__image" src={message.imageUrl} alt={message.name} />
                   
                      <p className="chatScreen__text">{message.message}</p>
                     
           </div>):(
            <div key={message._id}>
               <div className="chatScreen__message">
               <p className="chatScreen__textUser"
                onClick={()=>deleteMessage(message._id)}>{message.message}</p>
               </div>
            </div>
           )
         )
        }
           <form className="chatScreen__input">
                <input placeholder="Type a message" className="chatScreen__inputField"
                value={inputMessage}
                 onChange={(e)=>setInputMeassage(e.target.value)}
                >
                    </input>
               <button className="className__inputbutton" type="submit"
               onClick={handleClick}>SEND</button>
           </form>  
        
    </div>

    )

}