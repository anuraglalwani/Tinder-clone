import React, { useState,useEffect} from 'react';
import { Avatar } from '@material-ui/core'; 
import { IconButton } from '@material-ui/core';
import { Link,useHistory } from 'react-router-dom';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import UpdateIcon from '@material-ui/icons/Update';
import axios from './axios';
import "./ProfileScreen.css";
export default function ProfileScreen (){

    const [details,setDetails]=useState([{_id:null}]);
     const [reqId,setReqId]=useState(0);

    useEffect(()=>{
        async function fetchData(){
         const req= await axios.get("/profile");
          setDetails(req.data);
           setReqId(details[0]._id);
        }
        fetchData();
       
     })

    return(
        <div className="ProfileScreen">
            <div className="profileHeader">
                    <h1>Profile</h1>
                     <Link to="/">
                         <IconButton>
                           <KeyboardArrowRightIcon fontSize="large" className="header_icon"/>
                        </IconButton>
                    </Link>
            </div>
           
                
            <div>
             <Avatar className="chatScreen__image" style={{width:100,height:100,margin :30}}
              src="https://image.shutterstock.com/image-photo/los-angeles-dec-11-ryan-260nw-544581334.jpg" 
              alt="ryan" />
            </div>
        
            
            {details.map((detail)=>{
              return( <div key={detail._id} className="details">
                  <div className="detailPart">
                    <h2>Name :</h2>
                    <p>{detail.name}</p>
                  </div>
                 
                  <div className="detailPart">
                     <h2>Age :</h2>
                     <p>{detail.age}</p>
                  </div>

                  <div className="detailPart">
                     <h2>Language :</h2>
                     <p>{detail.language}</p>
                  </div>
                </div>
                )  
            })}

            <div >
              {/* <Link to="/update/"> */}
              <Link to ={"/update/"+reqId}>
              <button className="updateLink ">Update Profile</button>
              </Link>
            </div>
          
        
             
        </div>
        

    )

}