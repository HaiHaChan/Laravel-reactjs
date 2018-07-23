import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class HomePage extends Component {
    render() {
        return (
            <div>
                <p>Ahihi</p>
                <Link to="/about"><button>123</button></Link>
            </div>
        )
    }
}
export default HomePage;