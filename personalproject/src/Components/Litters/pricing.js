import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';



class pricing extends Component {
    render() {
        return (
            <div className='pricing'> 
                <h5>Pricing Sheet</h5>
                <p>Fawn: $2,500</p>
                <p>Lilac Tri: $5,000</p>
                <p>Merle: $8,000</p>

                <span>Place A Deposit</span>
                <button>Buy Now</button>

            </div>
        )
    }
}

export default pricing;