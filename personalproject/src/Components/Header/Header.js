import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropdownView: false,
    };
  }

  // handleLogout = () => {
  //     axios.get('/api/logout')
  //     .then(() => {
  //       //Clear user info on state or reduxState

  //       //Re-route user to Auth
  //     this.props.history.push('/Auth')
  //     })
  // }

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

  render() {
    return (
      <>
        <header className="main-header">
          <div>
            <Link to="/">
              <h1>Better Bulldogs Co</h1>
            </Link>
          </div>
          <nav>
            <Link to="/">
              <span>Home</span>
            </Link>
          </nav>
          <nav className="about-dropdown">
            <span onClick={this.aboutDropdown}>About</span>
            {this.state.dropdownView === "About" ? (
              <div className="dropdownView">
                <Link to="/AboutBreed">
                  <span onClick={this.clearDropdown}>The Breed</span>
                </Link>
                {/* <Link to='/AboutStandards'>
                <span  onClick={this.clearDropdown}>AKC Standards</span>
                </Link> */}
                <Link to="/">
                  <span onClick={this.clearDropdown}>About Us</span>
                </Link>
              </div>
            ) : null}
          </nav>
          <nav className="litters-dropdown">
            <span onClick={this.litterDropdown}>Litters</span>
            {this.state.dropdownView === "Litter" ? (
              <div className="dropdownView">
                <Link to="/Gallery">
                  <span onClick={this.clearDropdown}>Gallery</span>
                </Link>
                {/* <Link to='/Available'>
                <span  onClick={this.clearDropdown}>Available</span>
                </Link> */}
                <Link to="/Pricing">
                  <span onClick={this.clearDropdown}>Pricing/Available</span>
                </Link>
              </div>
            ) : null}
          </nav>
          <nav className="breeding-dropdown">
            <span onClick={this.breedingDropdown}>Breeding</span>
            {this.state.dropdownView === "Breeding" ? (
              <div className="dropdownView">
                <Link to="/Stud">
                  <span onClick={this.clearDropdown}>Stud Service</span>
                </Link>
                <Link to="/Progesterone">
                  <span onClick={this.clearDropdown}>Progesterone Tracker</span>
                </Link>
              </div>
            ) : null}
          </nav>
          <nav>
            <Link to="/Contact">
              <span>Contact</span>
            </Link>
          </nav>
          {/* <div>
                <button className='logout-btn' onClick={this.handleLogout}>Logout</button>
                </div> */}
          <div>
            <Link to="/Auth">
              <button className="login-btn">Login</button>
            </Link>
          </div>
        </header>
        <div className="nav-bar__height"></div>
      </>
    );
  }
}

export default withRouter(Header);

{
  /* <nav className='about-dropdown' >
<span onClick={this.aboutDropdown}>About</span>
{this.state.dropdownView === 'About'
    ? (
<div className='dropdownView'>
<Link to='/AboutBreed'>
<span  onClick={this.clearDropdown}>The Breed</span>
</Link>
<Link to='/AboutStandards'>
<span  onClick={this.clearDropdown}>AKC Standards</span>
</Link>
<Link to='AboutUs'>
<span  onClick={this.clearDropdown}>About Us</span>
</Link>
</div>
    )
:null}
</nav>
<nav className='litters-dropdown'>
<span onClick={this.litterDropdown}>Litters</span>
{this.state.dropdownView === 'Litter'
    ? (
<div className='dropdownView'>
<Link to='/Gallery'>
<span  onClick={this.clearDropdown}>Gallery</span>
</Link>
<Link to='/Available'>
<span  onClick={this.clearDropdown}>Available</span>
</Link>
<Link to='/Pricing'>
<span  onClick={this.clearDropdown}>Pricing</span>
</Link>
</div>
    )
:null}
</nav> */
}
