import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Breeding.scss";
import { updateAboutDog } from "../../Redux/dogReducer";
import { connect } from "react-redux";

class progesterone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      breed: "",
      heat: "",
    };
  }

  createDog = () => {
    axios.post("/api/createDog");
  };

  render() {
    return (
           <div className='form'>
           <section className='form-container'>
             <div>
               <h4>Progesterone Tracker</h4>
               <span>Select dog dropdown selection</span>
             </div>
           <label>Date Taken</label>
           <input className='form-inputs' placeholder='mm/dd/yyyy'></input>
           <label>Time Taken</label>
           <input className='form-inputs' placeholder='hh:mm'></input>
           <label>Nanograms/Milliliters</label>
           <input placeholder='ng/ml'></input>
           <div>
                     <Link to="/view1">
                  <button
                    className="start-btn"
                    onClick={() => this.props.updateAboutDog({ ...this.state })}
                  >
                    Get Started
                  </button>
                </Link>
           </div>
           </section>
       </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "stateeee");
  return {
    dogInfo: state.dogReducer, user:state.userReducer
  };
}

export default connect(mapStateToProps, { updateAboutDog })(progesterone);