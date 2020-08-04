import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';



class progesterone extends Component {
    render() {
        return (
            <div>
                
            <div> What is Progesterone? </div>
            <form className='progesteroneForm'>        
                <h3>Progesterone Form</h3>
                <label>Insemination Type</label>
                <input></input>
                <label>Nanongrams/Milliliters</label>
                <input></input>
                <label>Date Taken</label>
                <input></input>
                <label>Time Taken</label>
                <input></input>
                <button>Submit</button>
            </form>
            </div>


//results graph

        )
    }
}

export default progesterone;