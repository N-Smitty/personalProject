//The Auth Component is the component handling the register and login functionality.

//On the Client-side, authentication is important because it allows us as developers to create a personalized experience for each user. Remember that when a user logs in or registers, the server will send back the users session. This contains information that we can then use to tailor the website towards that specific user. An example of this would be viewing you and your friends posts on social media, instead of random posts found throughout the site. It's tailored to information relevant to you as the user.
import React, { Component } from "react";
import axios from "axios";
import { updateUser } from "../../Redux/userReducer";
import { connect } from "react-redux";
class Auth extends Component {
  constructor(props) {
    super(props);
    //Question 2 on the readme can be answered by creating inputs on the client-side and state items to track those inputs. The information that is input for this.state.email and this.state.password make it possible for the user to send the information the server needs to create an account, or log a user in.
    this.state = {
      first: "",
      last: "",
      email: "",
      password: "",
      //registerView will allow this component between a login and register view, meaning I don't have to create separate components for login and register.
      registerView: false,
      //user: {}
    };
  }

  handleInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  //handleRegisters purpose is to request the register endpoint on the server. The register handler function needs the user to send an email and a password on a req.body object.
  handleRegister = () => {
    let body = this.state;
    delete body["registerView"];
    axios
      .post("/api/register", body)
      //Once a response is received(remember, the response is the users active session), that information should be placed on either local state or reduxState, so that it can be used throughout the application.
      .then((res) => {
        this.props.updateUser(res.data);
        //Place user information somewhere(state, reduxState)
        //React-router-dom moves the user to dash
          this.props.history.push("/Form");

      })
      .catch((err) => console.log(err));
  };

  //handleToggle toggles the components view between login and register.
  handleToggle = () => {
    this.setState({
      registerView: !this.state.registerView,
    });
  };

  //handleLogin has the same purpose as register, but for users that already have an account. Like handleRegister, an email and password need to be sent to the server in a req.body.
  handleLogin = () => {
    axios
      .post("/api/login", {
        email: this.state.email,
        password: this.state.password,
      })
      //Like handleRegister, the response is the active users session. This needs to be placed on state or reduxState so it can be used throughout the application.
      .then((res) => {
        // console.log(res.data, 'daterrr')
        //Place user object on state or reduxState
        this.props.updateUser(res.data)
        //Route user to main page
          this.props.history.push("/Progesterone");
    
      })
      .catch((err) => console.log(err));
  };

  render() {
    console.log(this.props);
    return (
      <div>
        {this.state.registerView ? (
          <>
            <input
              placeholder="First name"
              value={this.state.first}
              name="first"
              onChange={(e) => this.handleInput(e)}
            />
            <input
              placeholder="Last name"
              value={this.state.last}
              name="last"
              onChange={(e) => this.handleInput(e)}
            />
          </>
        ) : null}
        <input
          placeholder="email"
          value={this.state.email}
          name="email"
          onChange={(e) => this.handleInput(e)}
        />
        <input
          placeholder="password"
          value={this.state.password}
          name="password"
          onChange={(e) => this.handleInput(e)}
        />
        {/* while the inputs are the same for login and register, the buttons need to switch. That's what this conditional rendering does below */}
        {this.state.registerView ? (
          <>
            <button onClick={this.handleRegister}>Register</button>
            <p>
              Already have an account?{" "}
              <span className="login-toggle" onClick={this.handleToggle}>
                Login here
              </span>
            </p>
          </>
        ) : (
          <>
            <button onClick={this.handleLogin}>Login</button>
            <p>
              Don't have an account?{" "}
              <span className="register-toggle" onClick={this.handleToggle}>
                Register here
              </span>
            </p>
          </>
        )}
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps, { updateUser })(Auth);

// Make login be the default instead of register
// after register is clicked they should be redirected to create a DogProfile! Where do I redirect that?
// after login reroute to home. Where do I redirect that?