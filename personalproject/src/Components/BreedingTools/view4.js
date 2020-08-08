import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Breeding.scss';
import Chart from '../Chart';

class view4 extends Component {


    render() {
        return (

            <div className='form'>
                <section>
                <h5>Breeding Results</h5>
                <span>Calendar will display here</span>
                <Chart/>
                <div className='view4-btns'>
                    <Link to='/View3'>
                        <button className='form-button'>Prev</button>
                    </Link>
                    <Link to='/Results'>
                        <button className='form-button'>Submit</button>
                    </Link>
                </div>
                </section>
            </div>
            
        )

    }

}

export default view4
