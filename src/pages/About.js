import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer'


export class About extends Component {
    render() {
        return (
            
            <div>
            <Navbar />
            <div className='container'>
                <h1>About Page</h1>
            </div>
                <Footer />
            </div>
        )
    }
}

export default About
