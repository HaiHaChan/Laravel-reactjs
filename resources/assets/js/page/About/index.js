import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class About extends Component {
    render() {
        return (
            <div>
                <p>Uk</p>
                <Link to="/"><button>Return</button></Link>
            </div>
        )
    }
}
export default About;
