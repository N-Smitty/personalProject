import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Litters.scss';


class pricing extends Component {
    render() {
        return (
            <div className='pricing-sheet'> 
                <h5>Pricing Sheet</h5>
                <p>Fawn: $2,500</p>
                <p>Lilac Tri: $5,000</p>
                <p>Blue Tri: $7,000</p>
                <p>Black Tri: $9,000</p>
                <p> Sable: $4,000</p>
                <p>Merle: $8,000</p>
                <div className='deposit-section'>
                <h6>Place A Deposit</h6>
                <button className='form-button'>Buy Now</button>
                </div>

            </div>
        )
    }
}

export default pricing;