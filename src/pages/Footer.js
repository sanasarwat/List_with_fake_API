import React, { Component } from 'react'
import '../Style.css' 

class Footer extends Component {
    render() {
        return (
            <div>
                <footer className="footer mt-auto py-3">
                <div className="container">
                    <span className="text-muted">Place sticky footer content here.</span>
                </div>
                </footer>
            </div>
        )
    }
}

export default Footer
