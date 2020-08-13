import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import { connect } from "react-redux";
// import './Breeding.scss';

class DogProfile extends Component {
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
        <Link to='/'>
          <button>cancel dog profile</button>
        </Link>
          <img>Dog Profile Image</img>
          <span>edit image</span>
          <label>Name</label>
          <input></input>
          <lable>Age</lable>
          <input></input>
          <lable>Breed</lable>
          <input></input>
          <lable>Comments</lable>
          <input></input>
          <button>
            Submit after it has been submitted direct to a page that says it
            added successfully and can be viewed in your account
          </button>
        </section>
      </div>
    );
  }
}

export default DogProfile;
