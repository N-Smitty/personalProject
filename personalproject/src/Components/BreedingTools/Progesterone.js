import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Breeding.scss';


class progesterone extends Component {
        constructor(props) {
            super(props)
        }

        // createDog = () => {
        //     axios.post('/api/createDog')
        // }


    render() {
        return (
            <div className='form'>
            <section className='form-container' >
                <h4>Tell us about your dog</h4>
                <label>Name</label>
                <input className='form-inputs' placeholder='Enter Name'></input>
                <label>Age</label>
                <input className='form-inputs' placeholder='Enter Age'></input>
                <label>Breed</label>
                <input className='form-inputs' placeholder='Enter Breed'></input>
                <label>Heat</label>
                <input className='form-inputs' placeholder='Number of Heat'></input>
                <div className='btn-spacing'>
                <Link to='/view1'>
                <button className='start-btn'>Get Started</button>
                </Link>
                </div>
            </section>
            </div>


//results graph

        )
    }
}

export default progesterone;


{/* <article>Progesterone is a hormone produced by the ovaries and placenta that helps to maintain pregnancy. It's main effects on tissues inside the body include: induction of an elaborate network of glands (endometrial glands) in the uterus to help provide nutrition to the early conceptus(puppy) and become the maternal side of the placenta (connection between puppy and mom). During pregnancy, it helps keep the uterine muscle layers relatively quiet so as not to disrupt a pregnancy. It also helps suppress the mother's immune response to its "foreign" puppy as the puppy grows and develop it's own immune system. Progesterone also provides the stimulus to development of the glandular portions of the mammary glands (breast tissue)- it along with estrogen and other hormones, produce the changes to breast tissue after puberty, throughout pregnancy and during nursing to allow these tissues to produce milk for puppies. Progesterone enhances the effects of estrogen on the female's brain to provide outward signs of estrus ("heat"). This is one of the reasons why a bitch's first heat can be silent or go unobserved when there was not sufficient progesterone to prime the brain prior to the secretion of estrogen. Progesterone, also like other steroids, can reduce the body's sensitivity to hormones like insulin that are helpful to glucose control- this is helpful to a pregnant mother with young, growing puppies that require large amounts of energy as they develop into late pregnancy, but can lead to poor glucose control (gestational diabetes) in some bitches.</article>
<form className='progesteroneForm'>        
    <h3>Progesterone Form</h3>
    <label>Insemination Type</label>
    <input></input>
    <label>Nanograms/Milliliters</label>
    <input></input>
    <label>Date Taken</label>
    <input></input>
    <label>Time Taken</label>
    <input></input>
    <button>Submit</button>
</form> */}