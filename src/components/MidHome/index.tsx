import React from 'react';
import ReactPlayer from "react-player";
import './styles.css'

function MidHome() {
    return (
      <>
     
         <div className = "container-mid">
     
    <ReactPlayer id="player" url = "https://youtu.be/r8G4XnxwokQ" />
     
    
    </div>

    <br/>

    <h1><b>Por que virar Premium?</b></h1>

    <table>
        <tr>
            <th><img src="https://campaigns.scdn.co/images/benefit_2.png" className = "imgbox" alt ="img1"></img></th>
            <th><img src="https://campaigns.scdn.co/images/benefit_1.png" className = "imgbox" alt ="img2"></img></th>
            <th><img src="https://campaigns.scdn.co/images/benefit_3.png" className = "imgbox" alt ="img3"></img></th>
            <th><img src="https://campaigns.scdn.co/images/benefit_4.png" className = "imgbox" alt ="img4"></img></th>
        </tr>

        <tr>
            <th>Baixe suas músicas e escute onde quiser.</th>
            <th>Sem anúncios para interromper, ouça música sem parar.</th>
            <th>Ouça qualquer música, mesmo no celular ou tablet.</th>
            <th>Pule quantas faixas quiser, ouça só as que você curtir.</th>
        </tr>

    </table>

<br/>
      
      
      </>
    );
  }
    
 




export default MidHome;