import React, { Component } from 'react'

class Auth extends Component {
    Login()
    {
        alert('Login called')
    }
    render() {
        return (
            <div>
                <div>
                    <input type='text'/><br/><br/>
                    <input type='text'/><br/><br/>
                    <button onClick={()=>this.Login()}>Login</button>
                </div>
            </div>
        )
    }
}

export default Auth
