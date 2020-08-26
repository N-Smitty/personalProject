import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";
import "./Breeding.scss";
import { updateDogInfo } from "../../Redux/dogReducer";
import { connect } from "react-redux";
import {
  Segment,
  Button,
  Input,
  Container,
  Progress,
  Icon,
} from "semantic-ui-react";
import DropdownComp from "./DropdownComp";

class progesterone extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog_id: "",
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
      <Container text-align="center" className="form">
        <Segment>
          <h1>Progesterone Tracker</h1>
          <p>Select dog</p>
          <DropdownComp
            updateParentWithDogId={(dogId) => this.setState({ dog_id: dogId })}
          />
          <Input
            icon="chart bar outline"
            iconPosition="left"
            name="ng_ml"
            value={this.state.ng_ml}
            onChange={this.handleChange}
            placeholder="ng_ml"
          />{" "}
          <Input
            name="date_taken"
            type="date"
            value={this.state.date_taken}
            onChange={this.handleChange}
            placeholder="Date Taken"
          />{" "}
          <Input
            type="time"
            name="time_taken"
            value={this.state.time_taken}
            onChange={this.handleChange}
            placeholder="Time Taken"
          />
          <Link to="/view1">
            <Button
              className="start-btn"
              onClick={() => this.props.updateDogInfo({ ...this.state })}
            >
              Get Started
              <Icon name="chevron circle right" />
            </Button>
          </Link>
        </Segment>
        <Progress value="1" total="3" progress="ratio" />
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

export default connect(mapStateToProps, { updateDogInfo })(progesterone);
