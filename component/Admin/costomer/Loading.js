import React, { Component } from 'react'

import { Section } from './Style/costomer';
import Navbar from '../dashboard/Navbar'

export default class Loading extends Component {
    render() {
        return (
            <div>
                <Navbar/>
                    <Section>
                  <div className='grid' >
                 <div className="left">
                  <ul>
                 <li>     <div class="card__title loading"></div> </li>
                <li>     <div class="card__title loading"></div> </li>
                </ul>
                 </div>
                  <div  className="right">
                   
                   <div className="bar" >
                  <div class="card__title loading"></div> 
                 
                   </div>


                
   <div  className="bar" >
   <div class="card__titl loading"></div>
           
   </div>
   <div  className="bar" >
   <div class="card__titl loading"></div>
           
   </div>
   <div  className="bar" >
   <div class="card__titl loading"></div>
           
   </div>
   <div  className="bar" >
   <div class="card__titl loading"></div>
           
   </div>
   <div  className="bar" >
   <div class="card__titl loading"></div>
           
   </div>
   <div  className="bar" >
   <div class="card__titl loading"></div>
           
   </div>
   <div  className="bar" >
   <div class="card__titl loading"></div>
           
   </div>

                   


                  </div>
                  </div>
            </Section>
            </div>
        )
    }
}
