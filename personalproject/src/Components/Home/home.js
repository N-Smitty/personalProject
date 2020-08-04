import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.css'


class home extends Component {
    render() {
        return (
            <div className="home">
                <img className='homeImg' src='https://d17fnq9dkz9hgj.cloudfront.net/breed-uploads/2018/08/Bulldog-trio.jpg?bust=1538074854' alt='mainPhoto'/>
                <h2>FAQ's</h2>
            </div>
        )
    }
}

export default home;