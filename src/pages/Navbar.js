import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faList, faHome } from '@fortawesome/free-solid-svg-icons'

class Navbar extends Component {
    render() {
        return (
            <div>
            <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <button className="navbar-toggler" type="button" data-toggle="collapse" 
            data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01"
             aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link className="navbar-brand" to="#">LogoBrand</Link>
            <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
            <li className="nav-item active">
                <Link className="nav-link" to="/"><FontAwesomeIcon icon={faHome}/>Home </Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/About">About</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/Create">Create</Link>
            </li>
            
            <li className="nav-item">
                <Link className="nav-link" to="/Search">Search</Link>
            </li>
            <li className="nav-item">
                <Link className="nav-link" to="/List"><FontAwesomeIcon icon={faList}/>List</Link>
            </li>
           
            
            </ul>
            
            </div>
            </nav>
            </div>
            </div>
        )
    }
}

export default Navbar
