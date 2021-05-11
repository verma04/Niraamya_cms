import React, { Component } from 'react'
import { section } from './Style';

import Navbar from '../dashboard/Navbar'
import { Section} from './Style'


export default class BulkOrder extends Component {
    render() {
        return (
            <React.Fragment>
                <Navbar/>
                <Section>
                
                 <div className="flex" >

                    <div className="data" >

   <h1>No Order yet</h1>

                    </div>
                 </div>
                </Section>
               
            </React.Fragment>
        )
    }
}
