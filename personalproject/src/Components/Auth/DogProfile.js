import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import { connect } from "react-redux";
import axios from "axios";
// import './Breeding.scss';

class DogProfile extends Component {
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
        <section>
          <h3>Step 2</h3>
          <span>
            Thank you for registering with us! Welcome to our bulldog family.
            Please fill out your Dam’s info.
          </span>
        </section>
        <section>
          <Link to="/">
            <button>cancel dog profile</button>
          </Link>
        </section>
        <div>
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
          </section>
        </div>
        <button>
          Submit after it has been submitted direct to a page that says it added
          successfully and can be viewed in your account
        </button>
      </div>
    );
  }
}

export default DogProfile;
