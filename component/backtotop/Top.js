import React, { Component } from 'react'
import { Section } from './Style';
import ScrollToTop from "react-scroll-to-top";

export default class Top extends Component {
    render() {
        return (
            <Section>
                <div className='flex' >
               
                <ScrollToTop smooth />
                </div>
            </Section>
        )
    }
}