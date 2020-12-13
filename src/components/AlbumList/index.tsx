import React,{useEffect, useState }  from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';


interface albun{
 cover:string
 name:string
 id:string


}
interface list{
 albuns:albun[]

}

function  AlbumList() {
  const [list,setlist] = useState<albun[]>([])
  
  
  async function listAtt() { 
     const response:albun[] = await require("../../assets/db.json")
     setlist(response)

  }

  useEffect(()=>{
   listAtt();

  },
  [])
  
   
        return (
          
          <>
         <div className="main"> 
         <div className="mainContent">

         <h1 className="" >Grandes  playlists pra melhorar  seu  dia  </h1>
        
         <div className="cardsWrap">
          {list?.map( (albun)=>(
         <NavLink to={"/playlist/"+albun.id} className="card">
            <div className="cardImage" >
                <img src = {albun.cover} ></img>
            </div>
            <div className="cardContent" >
            <h3>{albun.name }</h3>
                 


            </div>
            <span className="playIcon" > 
            
            </span>
           
           </NavLink>



        )  )}
  </div>
   </div>
       
   </div>
    </>
   );
  }
  
  export default AlbumList;