import React, { Component } from 'react'
import Navbar from './Navbar.js'
import Footer from './Footer'


class Home extends Component {
    render() {
        return (
            <div>
            <Navbar />
             <div className='container'>
                <h1>This is My home Page</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tempor, 
                    elit sed imperdiet placerat, metus neque elementum nibh, a pulvinar dolor 
                    enim sed dolor. Nunc commodo neque tellus, eget volutpat tortor egestas nec. 
                    Phasellus in iaculis velit. Aliquam hendrerit odio ac augue sodales, id viverra 
                    magna tempus. Duis dapibus elit scelerisque ante faucibus viverra ut ac sem.
                    Nulla dictum mauris a risus imperdiet, at convallis eros pharetra. Maecenas 
                    in dictum neque. Donec vestibulum aliquet velit in aliquam. Nulla facilisis 
                    maximus sagittis. Suspendisse a finibus nisi. Phasellus imperdiet dapibus
                    tellus sit amet auctor. Quisque id arcu nulla. 
                    In luctus lectus id semper ornare. Aliquam convallis pharetra blandit.
                    Donec vel ornare leo, in blandit est. Integer finibus, ante sed viverra 
                    feugiat, urna tellus euismod elit, quis accumsan metus ipsum ac sem.
                    uis aliquet venenatis libero, non elementum nisl aliquam ac. Pellentesque
                    vitae pellentesque orci, at sodales lorem. Aliquam erat volutpat. Donec 
                    blandit nunc nisl, vitae mattis sapien imperdiet sed. Donec leo libero,
                    lacinia et nisi non, mattis viverra ante. In quis tristique lorem. 
                    Suspendisse potenti. Mauris rutrum consectetur massa, id dapibus nisi 
                    convallis et. Vestibulum feugiat pharetra eleifend.</p>
            </div>
            <Footer />
            </div>
        )
    }
}

export default Home
