import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Breeding.scss";
import Chart from "../Chart";
import axios from "axios";
import { connect } from "react-redux";
import { Segment, Button, Container, Progress } from "semantic-ui-react";
import ModalComp from "./ModalComp";

class view2 extends Component {
  constructor() {
    super();
    this.state = {
      results: {},
    };
  }
  componentDidMount() {
    let data = {
      insemination: this.props.insemination,
      dateTaken: this.props.dateTaken,
      timeTaken: this.props.timeTaken,
      nanograms: this.props.nanograms,
    };
    axios
      .put("/api/dog/update", data)
      .then((res) => this.setState({ results: res.data }))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <Container className="form">
        <Segment>
          <h4>Let's take a look at your results!</h4>
          <h5>
            This method will no longer be effective. Consider Surgical
            Insemination.
          </h5>
          <Chart />
          <div className="view2-btns">
            <Link to="/View1">
              <Button className="form-button">Prev</Button>
            </Link>
            <ModalComp />
          </div>
        </Segment>
        <Progress value="3" total="3" progress="ratio" color="teal" />
      </Container>
    );
  }
}

export default connect((state) => state, {})(view2);
