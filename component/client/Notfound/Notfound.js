import React, { Component } from 'react'

import Navbar from '../Navbar/Navbar';

import {Section} from './Style'

export default class NotFound extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>

            <Section>

                <div className="flex" >
                  
                <div className="flex-1" >
                  <div className="head" >
                  <i class="fas fa-bug"></i>
                  <h1>404</h1>
                  </div>

                  <div className="para" >
                      <div className="haed"><h1>PAGE NOT FOUND</h1></div>
                  
              <p>We're are sorry, page you requested could not found.Plaese go back to homepage or contact us on support@niraamya.com </p>
                  </div>
                  <div className="button" >
 <button>Read More</button>  

</div>

</div>


                </div>
            </Section>
      
                  </React.Fragment>
        )
    }
}