import React from 'react';
import  "./Header.css";
import PersonIcon from '@material-ui/icons/Person';
import { IconButton } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';
import { Link,useHistory } from 'react-router-dom';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';

export default function Header ({backButton}){

    const history= useHistory();
    return(

        <div className="header">
        {/* profile/backbutton */}
        {
            backButton?(
            
                    <IconButton onClick={()=>history.replace(backButton)}>
                    <ArrowBackIosIcon fontSize="large" className="header_icon"/>
                    </IconButton>
                
             
            ):(
                <Link to ="/profile">
                <IconButton>
                <PersonIcon fontSize="large" className="header_icon"/>
                </IconButton>
                </Link>
            )
        }
        

        {/* logo */}
        <Link to ="/">
        <img className="header_logo" 
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKMiGFATYIqnn22RqVd0OVMJp-aU1rfOYrNQ&usqp=CAU" 
        
        alt="" />
        </Link>
        
       {/* chat box */}
        <Link to ="/chats">
        <IconButton>
        <ForumIcon fontSize="large" className="header_icon"/>
        </IconButton>
         </Link>
        </div>

    )

}