import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Breeding.scss';

class view4 extends Component {


    render() {
        return (

            <div className='form'>
                <section>
                <h5>Results</h5>
                <p>ChartJS will display here.</p>
                <div className='view4-btns'>
                    <Link to='/View3'>
                        <button className='form-button'>Prev</button>
                    </Link>
                    <Link to='/Results'>
                        <button className='form-button'>Next</button>
                    </Link>
                </div>
                </section>
            </div>
        )

    }

}

export default view4
