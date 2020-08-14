import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  editProfile = () => {
    axios.put("/api/user/update", this.state).then(() => {
      this.props.history.push("/AccountView");
    });
  };

  render() {
    return (
      <div>
        <input
          name="first_name"
          value={this.state.first_name}
          onChange={this.handleChange}
          placeholder=""
        />
        <input
          name="last_name"
          value={this.state.last_name}
          onChange={this.handleChange}
          placeholder="last_name"
        />{" "}
        <input
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder=""
        />{" "}
        <input
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="password"
        />{" "}
        <button onClick={this.editProfile}>Save Changes</button>
        {/* <button>Save Changes</button> */}
      </div>
    );
  }
}

export default Form;
