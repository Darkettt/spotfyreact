import React, {useEffect, useState } from 'react';
import './styles.css';
import {Link} from 'react-router-dom'






 
 function  tick(){
  
  return new Date().toLocaleTimeString()
 
}



//html
function Footer() {
   const [date,setDate] = useState(tick())
  
  useEffect(()=>{ setInterval( ()=>{ setDate(tick())}
  , 1000)}
  )


  return (
  
<footer role="contentinfo">



<div className="container" id="cont1">
        <nav className="row">

          <div className="col-xs-12 col-md-2">
            <div className="footer-logo">
              <Link to="/">Spotify</Link>
            </div>
          </div>

         

         

          <div className="col-xs-12 col-md-4 col-social">
            <ul className="nav">
              <li>
                   <div id="data-hora">{date}</div>
              </li>
              <li>
             {/*<span role="img"  aria-label="Instagram" ><FontAwesomeIcon icon="coffee"/></span>*/}
              </li>
              
              
                
              
            </ul>
          </div>
          <div className="col-xs-4 col-md-6 text-right">
           

            <small className="copyright">© 2017 Spotify AB</small>
          </div>
        </nav>

       
      </div>



    </footer>
  );
}

    export default Footer;