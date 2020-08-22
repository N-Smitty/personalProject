import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import { connect } from "react-redux";
import axios from "axios";
import { Segment, Container, Button, Input, Icon, Label } from "semantic-ui-react";

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
      <Container className="form">
        <Segment>
          <h3>Step 2</h3>
          <span>
            Thank you for registering with us! Welcome to our bulldog family.
            Please fill out your Dam’s info.
          </span>
        </Segment>
        <Segment>
          <Link to="/">
            <Button>cancel dog profile</Button>
          </Link>
        </Segment>
        <div>
          <Segment className="form-container">
            <h4>Tell us about your dog</h4>
            <label>Name</label>
            <Input
              className="form-inputs"
              placeholder="Enter Name"
              onChange={(e) => this.setState({ name: e.target.value })}
            ></Input>
            <label>Age</label>
            <Input
              className="form-inputs"
              placeholder="Enter Age"
              onChange={(e) => this.setState({ age: e.target.value })}
            ></Input>
            <label>Breed</label>
            <Input
              className="form-inputs"
              placeholder="Enter Breed"
              onChange={(e) => this.setState({ breed: e.target.value })}
            ></Input>
            <label>Heat</label>
            <Input
              className="form-inputs"
              placeholder="Number of Heat"
              onChange={(e) => this.setState({ heat: e.target.value })}
            ></Input>
          </Segment>
        </div>
        <Button>
          Submit after it has been submitted direct to a page that says it added
          successfully and can be viewed in your account
        </Button>
      </Container>
    );
  }
}

export default DogProfile;
