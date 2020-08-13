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
      <div className="form">
        {/* {!this.props.user ?  */}
          <div className="form">
            <section className="form-container">
              <h4>Tell us about your dog</h4>
              <label>Name</label>
              <h3 className="form-inputs"> Please Login to enter dog info</h3>
              <label>Age</label>
              <h3 className="form-inputs"> Please Login to enter dog info</h3>
              <label>Breed</label>
              <h3 className="form-inputs"> Please Login to enter dog info</h3>
              <label>Heat</label>
              <h3 className="form-inputs"> Please Login to enter dog info</h3>
              <div className="btn-spacing">
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
        {/* : 
          <div className="form">
            <section className="form-container">
              <h4>Tell us about your dog</h4>
              <label>Name</label>
              <input
                className="form-inputs"
                placeholder="Enter Name"
                onChange={(e) => this.setState({ name: e.target.value })}
              ></input>
              <label>Age</label>
              <input
                className="form-inputs"
                placeholder="Enter Age"
                onChange={(e) => this.setState({ age: e.target.value })}
              ></input>
              <label>Breed</label>
              <input
                className="form-inputs"
                placeholder="Enter Breed"
                onChange={(e) => this.setState({ breed: e.target.value })}
              ></input>
              <label>Heat</label>
              <input
                className="form-inputs"
                placeholder="Number of Heat"
                onChange={(e) => this.setState({ heat: e.target.value })}
              ></input>
              <div className="btn-spacing">
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
        } */}
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