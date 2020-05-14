import React from 'react'
import {Table} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
//import Navbar from './Navbar'
import Footer from './Footer'

function ListArray() {
    
    const persons=[


        {   id:1,
            name:'sanasarwat',
            age:28,
            skill:'react'
        },
        {
            id:2,
            name:'Aasad',
            age:22,
            skill:'graphics'
        }

    ]
 
    
    
  
    return (
        <div>
        
         <h1 className='text-center'>List page</h1>
         <div className='container'>
            <Table striped bordered hover>
                    <thead>
                    <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Skill</th>
                    <th>Opration</th>
                    </tr>
                </thead>
                <tbody>
                {persons.map(x => 
                    <tr>
                    <td>{x.id}</td>
                    <td>{x.name}</td>
                    <td>{x.age}</td>
                    <td>{x.skill}</td>
                    <td>
                    <FontAwesomeIcon icon={faEdit} color="orange"/>{}
                    <FontAwesomeIcon icon={faTrash} color='red'/>{}
                    </td>
                    </tr>
                )}
            </tbody>
           </Table>
           </div>
           <Footer/>
        </div>
    )
}

export default ListArray
