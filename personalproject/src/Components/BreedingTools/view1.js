import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import './Breeding.scss';


class view1 extends Component {


    render() {
        return (
            <div className='form'>
                <section className='form-container'>
                    <h4> How do you plan on breeding?</h4>
                    <div>
                    <input type="checkbox"/>
                    <label className='checkbox-inputs' for="toggle">Artificial Insemination</label>
                    </div>
                    <div>
                    <input type="checkbox"/>
                    <label className='checkbox-inputs' for="toggle">Trans-Cervical Insemination</label>
                    </div>
                    <div>
                    <input type="checkbox"/>
                    <label className='checkbox-inputs' for="toggle"> Surgical Insemination</label>
                    </div>
                <div className='view1-btns'>
                    <Link to='/Progesterone'>
                        <button className='form-button'>Prev</button>
                    </Link>
                    <Link to='/View2'>
                        <button className='form-button'>Next</button>
                    </Link>
                </div>
                </section>
            </div>
        )

    }

}

export default view1