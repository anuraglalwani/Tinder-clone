import React from 'react';
import Chat from './Chat';
export default function Chats (){

    return( <div className="chats">

         <Chat 
         name="Emilia"
         message="Bye"
         profilePic="https://www.usmagazine.com/wp-content/uploads/2020/10/Emilia-Clarke-Recalls-Filming-Game-of-Thrones-After-Her-Secret-Brain-Surgery-Promo.jpg?w=700&quality=86&strip=all"
         timestamp="1 week ago"
        />
        <Chat 
         name="Jennifer"
         message="hii"
         profilePic="https://media1.popsugar-assets.com/files/thumbor/r82SRROYhy6sIFuHmSdq_q_Kio8/413x72:2216x1875/fit-in/500x500/filters:format_auto-!!-:strip_icc-!!-/2020/06/18/943/n/1922398/6c31632d5eebdeb9cb6252.86135421_/i/Jennifer-Lawrence.jpg"
         timestamp="yesterday"
        />
        <Chat 
         name="Amanda"
         message="hello"
         profilePic="https://www.goldenglobes.com/sites/default/files/2021-02/amanda-seyfried-gettyimages-1165633998.jpg?format=pjpg&auto=webp&optimize=high&width=850"
         timestamp="3 days ago"
        />
        <Chat 
         name="Venessea"
         message="okay..."
         profilePic="https://assets.teenvogue.com/photos/5e6a601e46867a00086fbd99/2:3/w_2456,h_3684,c_limit/GettyImages-1205233378.jpg"
         timestamp="today"
        />
    </div>

    )

}