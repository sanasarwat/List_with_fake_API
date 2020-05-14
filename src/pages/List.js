import React, { Component } from 'react'
import '../Style.css'
import {Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import Navbar from './Navbar.js'
import Footer from './Footer'

class List extends Component {
   constructor(){
       super();
       this.state={
           list:null

       }
   }
   componentDidMount(){
       fetch("http://localhost:3000/Resturant").then((response)=>{
         response.json().then((result)=>{
            //console.warn(result)
            this.setState({
                list:result
            })
         })
       })
   }
    render() {
        //console.warn(this.state)
        return (
            <div>
            <Navbar />
                <h1 className='text-center'>List page</h1>
                {
                    this.state.list?
                    <div className='container'>
                    <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Rating</th>
                    <th>Opration</th>
                    </tr>
                </thead>
                <tbody>
                    {
                     this.state.list.map((item,i)=>
                     
                    
                    <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.rating}</td>
                    <td>
                    <FontAwesomeIcon icon={faEdit} color="orange"/>{}
                    <FontAwesomeIcon icon={faTrash} color='red'/>{}
                    </td>
                    </tr>
                    
                         
                     )
                    }
                    </tbody>
                    </Table>  
                    </div>
                    :<p>Please Wait...</p>
                }
                <Footer/>
            </div>
        )
    }
}

export default List
