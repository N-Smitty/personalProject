import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Home.scss'
import pic from './leoBella.jpg'


class Home extends Component {

    render() {
        return (
            <div>
            <img src={pic} alt='mainPhoto' className='image-holder' />
            <section className='faq'>
                    <h5>FAQ's</h5>
                <div>
                <p className='faqs' >Who?</p>
                <p className='faqs'>What?</p>
                <p className='faqs'>When?</p>
                <p className='faqs'>Where?</p>
                <p className='faqs'>Why?</p>
                </div>

            </section>
            </div>
        )
    }
}

export default Home;