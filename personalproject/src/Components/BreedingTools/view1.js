import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Segment,
  Button,
  Input,
  Container,
  Progress,
  Icon,
} from "semantic-ui-react";
import "./Breeding.scss";

import { updateInsemination } from "../../Redux/dogReducer";
class view1 extends Component {
  constructor() {
    super();

    this.state = {
      selectedOption: "",
    };
  }

  changePage = (route) => {
    this.props.updateInsemination(this.state.selectedOption);
    this.props.history.push(`/${route}`);
  };

  render() {
    return (
      <Container className="form">
        <Progress value="2" total="3" progress="ratio" />
        {this.state.selectedOption}
        <h1> How do you plan on breeding?</h1>
        <Segment>
          <Segment className="center">
            <label className="label">
              {" "}
              Artificial Insemination
              <Input
                className="label__checkbox"
                type="radio"
                name="survey"
                onClick={() => this.setState({ selectedOption: "AI" })}
              />
            </label>
          </Segment>
          <Segment className="center">
            <label className="label">
              {" "}
              Trans-Cervical Insemination
              <Input
                className="label__checkbox"
                type="radio"
                name="survey"
                onClick={() => this.setState({ selectedOption: "TCI" })}
              />
            </label>
          </Segment>
          <Segment className="center">
            <label className="label">
              {" "}
              Surgical Insemination
              <Input
                className="label__checkbox"
                type="radio"
                name="survey"
                onClick={() => this.setState({ selectedOption: "SI" })}
              />
            </label>
          </Segment>

          <div className="view1-btns">
            <Button
              className="form-button"
              onClick={() => this.changePage("Progesterone")}
            >
              Prev
            </Button>
            <Button
              className="form-button"
              onClick={() => this.changePage("View2")}
            >
              Get Results <Icon name="chart line" />
            </Button>
          </div>
        </Segment>
      </Container>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { updateInsemination })(view1);
