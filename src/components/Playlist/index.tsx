import React,{useEffect, useState }  from 'react';
import {useParams} from 'react-router-dom';



interface albun{
 cover:string
 name:string


}
interface playlist{
 id:string

}

function  PlayList() {
  const {id} =useParams<playlist>();



   return <div> aaaaa {id} </div>

  }
  
  export default PlayList;