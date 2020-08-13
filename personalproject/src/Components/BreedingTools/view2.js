import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Breeding.scss';


class view2 extends Component {


    render() {
        return (
            <div className='form'>
                <section className='form-container'>
                    <h4>Progesterone Tracker</h4>
                <label>Date Taken</label>
                <input className='form-inputs' placeholder='mm/dd/yyyy'></input>
                <label>Time Taken</label>
                <input className='form-inputs' placeholder='hh:mm'></input>
                <label>Nanograms/Milliliters</label>
                <input placeholder='ng/ml'></input>
                <div className='view2-btns'>
                    <Link to='/View1'>
                        <button className='form-button'>Prev</button>
                    </Link>
                    <Link to='/View3'>
                        <button className='form-button'>Next</button>
                    </Link>
                </div>
                </section>
            </div>
        )

    }

}

export default view2