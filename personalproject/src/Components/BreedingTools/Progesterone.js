import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Breeding.scss";
import { updateAboutDog } from "../../Redux/dogReducer";
import { connect } from "react-redux";
import {
  Segment,
  Button,
  Input,
  Container,
  Progress,
  Dropdown,
  Icon
} from "semantic-ui-react";
import DropdownComp from "./DropdownComp";

class progesterone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ng_ml: "",
      date_taken: "",
      time_taken: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  render() {
    return (
      <Container className="form">
                <Progress value='1' total='3' progress='ratio'/>

        <Segment>
          <h1>Progesterone Tracker</h1>
          <p>Select dog</p>
          <DropdownComp/>
          <Input
            icon="chart bar outline"
            iconPosition="left"
            name="ng_ml"
            value={this.state.ng_ml}
            onChange={this.handleChange}
            placeholder="ng_ml"
          />{" "}
          <Input
            icon="calendar alternate outline"
            iconPosition="left"
            name="date_taken"
            value={this.state.date_taken}
            onChange={this.handleChange}
            placeholder="Date Taken"
          />{" "}
          <Input
            icon="clock outline"
            iconPosition="left"
            name="time_taken"
            value={this.state.time_taken}
            onChange={this.handleChange}
            placeholder="Time Taken"
          />
            <Link to="/view1">
              <Button
                className="start-btn"
                onClick={() => this.props.updateAboutDog({ ...this.state })}
              >
                Get Started
                <Icon name='chevron circle right'/>
              </Button>
            </Link>
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "stateeee");
  return {
    dogInfo: state.dogReducer,
    user: state.userReducer,
  };
}

export default connect(mapStateToProps, { updateAboutDog })(progesterone);
