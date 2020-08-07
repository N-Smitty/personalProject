import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Contact.scss';

class contact extends Component {
    render() {
        return (
            <div className='contact'>
                <div className='contact-image'></div>
                <section className='contact-container'>
                <h4>Contact</h4>
                <span>Nathan Smith</span>
                <span>(801)-123-4567</span>
                <span>nate@testing.com</span>
                <span>1234 W 567 S Lehi,UT</span>
                </section>
            </div>
        )
    }
}

export default contact;