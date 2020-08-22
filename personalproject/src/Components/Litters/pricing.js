import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Litters.scss';
import {Segment, Button, Container, Icon} from "semantic-ui-react";



class pricing extends Component {
    render() {
        return (
            <Segment className='pricing-sheet'> 
                <h5>Pricing Sheet</h5>
                <p>Fawn: $2,500</p>
                <p>Lilac Tri: $5,000</p>
                <p>Blue Tri: $7,000</p>
                <p>Black Tri: $9,000</p>
                <p> Sable: $4,000</p>
                <p>Merle: $8,000</p>
                <Segment className='deposit-section'>
                <h6>Place A Deposit</h6>
                <h5>Reserve your new puppy today!</h5>
                <p>See the puppy of your dreams? Place a deposit today and reserve the puppy of your choice before someone else does.  Puppies will be available at 8 weeks.  We ship worldwide at buyers expense. Give one of these beauties their FurEver home!</p>
                <Button className='form-button'>Buy Now</Button>
                <Icon name='cc apple pay'/>
                <Icon name='cc amex'/>
                <Icon name='cc mastercard'/>
                <Icon name='cc visa'/>
                <Icon name='cc discover'/>
                </Segment>

            </Segment>
        )
    }
}

export default pricing;