import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';


class available extends Component {
    render() {
        return (
            <div className='available'>
            There are no puppies currently available.
            </div>
        )
    }
}

export default available;