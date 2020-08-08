import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
import './Breeding.scss';

class view3 extends Component {


    render() {
        return (

            <div className='form'>
                <section className='registerLogin'>
                <h5>We're Almost Done</h5>
                <p>You are one step away from seeing your breeding results. Please register or login to view results.</p>
                <Auth/>
                <div className='view3-btns'>
                    <Link to='/View2'>
                        <button className='form-button'>Prev</button>
                    </Link>
                    <Link to='/View4'>
                        <button className='form-button'>View Results</button>
                    </Link>
                </div>
                </section>
            </div>
        )

    }

}

export default view3

