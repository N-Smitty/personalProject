import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Breeding.scss";

class view1 extends Component {
  constructor() {
    super();

    this.state = {
      survey: {
        AI: false,
        TCI: false,
        SI: false,
      },
    };
  }

  render() {
    return (
      <div className="form">
        <section className="form-container">
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
                type="checkbox"
                checked={this.state.survey.AI}
                onClick={(this.state.survey.AI = !this.state.survey.AI)}
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
              <input className="label__checkbox" type="checkbox" />
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
              <input className="label__checkbox" type="checkbox" />
              <span className="label__text">
                <span className="label__check">
                  <i className="fa fa-check icon"></i>
                </span>
              </span>
            </label>
          </div>

          <div className="view1-btns">
            <Link to="/Progesterone">
              <button className="form-button">Prev</button>
            </Link>
            <Link to="/View2">
              <button className="form-button">Next</button>
            </Link>
          </div>
        </section>
      </div>
    );
  }
}

export default view1;
