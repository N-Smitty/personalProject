import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./Breeding.scss";

import { updateInsemination } from "../../Redux/reducer";
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
      <div className="form">
        <section className="form-container">
          {this.state.selectedOption}
          <form>
            <h4> How do you plan on breeding?</h4>
            {/* <div className='checkbox-form'>
                    <input type="checkbox"/>
                    <label for="toggle">Artificial Insemination</label>
                    </div> */}
            {/* <div className='checkbox-form'>
                    <input type="checkbox"/>
                    <label for="toggle">Trans-Cervical Insemination</label>
                    </div>
                    <div className='checkbox-form'>
                    <input type="checkbox"/>
                    <label for="toggle"> Surgical Insemination</label>
                    </div> */}
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="center">
              <label className="label">
                {" "}
                Artificial Insemination
                <input
                  className="label__checkbox"
                  type="radio"
                  name="survey"
                  onClick={() => this.setState({ selectedOption: "AI" })}
                />
                <span className="label__text">
                  <span className="label__check">
                    <i className="fa fa-check icon"></i>
                  </span>
                </span>
              </label>
            </div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="center">
              <label className="label">
                {" "}
                Trans-Cervical Insemination
                <input
                  className="label__checkbox"
                  type="radio"
                  name="survey"
                  onClick={() => this.setState({ selectedOption: "TCI" })}
                />
                <span className="label__text">
                  <span className="label__check">
                    <i className="fa fa-check icon"></i>
                  </span>
                </span>
              </label>
            </div>
            <link
              rel="stylesheet"
              href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            />
            <div className="center">
              <label className="label">
                {" "}
                Surgical Insemination
                <input
                  className="label__checkbox"
                  type="radio"
                  name="survey"
                  onClick={() => this.setState({ selectedOption: "SI" })}
                />
                <span className="label__text">
                  <span className="label__check">
                    <i className="fa fa-check icon"></i>
                  </span>
                </span>
              </label>
            </div>

            <div className="view1-btns">
              <button
                className="form-button"
                onClick={() => this.changePage("Progesterone")}
              >
                Prev
              </button>
              <button
                className="form-button"
                onClick={() => this.changePage("View2")}
              >
                Next
              </button>
            </div>
          </form>
        </section>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { updateInsemination })(view1);
