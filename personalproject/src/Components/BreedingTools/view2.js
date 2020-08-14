import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Breeding.scss";
import Chart from "../Chart";
import axios from "axios";
import {connect} from "react-redux";

class view2 extends Component {
    constructor() {
        super();
        this.state = {
            results: {},
        }
    }
  componentDidMount() {
    let data = {
        insemination: this.props.insemination,
        dateTaken: this.props.dateTaken,
        timeTaken: this.props.timeTaken,
        nanograms: this.props.nanograms,
    }
    axios
      .put("/api/dog/update", data)
      .then((res) => this.setState({results: res.data}))
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="form">
        <section>
          <h5>Let's take a look at your results!</h5>
          <span>Calendar will display here</span>
          <Chart />
          <div className="view2-btns">
            <Link to="/View1">
              <button className="form-button">Prev</button>
            </Link>
            <Link to="/PostResults">
              <button className="form-button">Submit Results</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default connect((state) => state, {})(view2);
