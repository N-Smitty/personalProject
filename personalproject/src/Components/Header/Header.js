import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
// import "./Header.scss";
import { Menu, Container, Button, Icon } from "semantic-ui-react";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { logoutUser } from "../../Redux/userReducer";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownView: false,
    };
  }

  handleLogout = () => {
      axios.get('/api/logout')
      .then(() => {
        //Clear user info on state or reduxState

        //Re-route user to Auth
      this.props.history.push('/Auth')
      })
  }

  aboutDropdown = () => {
    this.setState({ dropdownView: "About" });
  };

  litterDropdown = () => {
    this.setState({ dropdownView: "Litter" });
  };

  breedingDropdown = () => {
    this.setState({ dropdownView: "Breeding" });
  };

  clearDropdown = () => {
    this.setState({ dropdownView: "" });
  };

  logoutUser = () => {
    console.log("hit head");
    axios.post("/api/logout").then(this.props.logoutUser());
  };

  render() {
    console.log(this.props.user);
    return (

 <>
<Menu class="ui dropdown">
  <Link to="/">
    <h1>Better Bulldogs Co</h1>
  </Link>
  <Link to="/">
    <a class="item">Home</a>
  </Link>
  <nav class="menu">
    <span class="item" onClick={this.aboutDropdown}>
      About
    <i class="dropdown icon"></i>
    </span>
      {this.state.dropdownView === "About" ? (
        <div className="view">
          <Link to="/AboutBreed">
            <span class="item" onClick={this.clearDropdown}>
              The Breed
            </span>
          </Link>
          <Link to="/">
            <span class="item" onClick={this.clearDropdown}>
              About Us
            </span>
          </Link>
        </div>
      ) : null}
      </nav>
    <nav class="menu">
      <span class="item" onClick={this.litterDropdown}>
        Litters
        <i class="dropdown icon"></i>
      </span>
      {this.state.dropdownView === "Litter" ? (
        <div className="dropdownView">
          <Link to="/Gallery">
            <span class="item" onClick={this.clearDropdown}>
              Gallery
            </span>
          </Link>
          <Link to="/Available">
            <span class="item" onClick={this.clearDropdown}>
              Available
            </span>
          </Link>
        </div>
      ) : null}
    </nav>
    <nav class="menu">
      <span class="item" onClick={this.breedingDropdown}>
        Breeding
        <i class="dropdown icon"></i>
      </span>
      {this.state.dropdownView === "Breeding" ? (
        <div className="dropdownView">
          <Link to="/Stud">
            <span class="item" onClick={this.clearDropdown}>
              Stud Service
            </span>
          </Link>
          <Link to="/Progesterone">
            <span class="item" onClick={this.clearDropdown}>
              Progesterone Tracker
            </span>
          </Link>
        </div>
      ) : null}
    </nav>
    <nav>
      <Link class="item" to="/Contact">
        <span>Contact</span>
      </Link>
    </nav>
    <nav>
      <Link to="/Pricing">
        <span class="item" onClick={this.clearDropdown}>
          Reserve Puppy
        </span>
      </Link>
    </nav>
    <nav>
      <Link to="/AccountView">
        <span class="item">Account</span>
      </Link>
    </nav>
    <div>
      {!this.props.user ? (
        <Link to="/Auth">
          <Button className="login-btn">Login</Button>
        </Link>
      ) : (
        <Button onClick={() => this.logoutUser()} className="login-btn">
          Logout
          <Icon name="power off" />
        </Button>
      )}
    </div>
</Menu>
<div className="nav-bar__height"></div>
</>
);
}
}

function mapStateToProps(state) {
  console.log(state.user.user);
  return {
    user: state.user.user,
  };
}
export default connect(mapStateToProps, { logoutUser })(withRouter(Header));







