import React, { Component } from "react";
import axios from "axios";
import { Segment, Button, Input } from "semantic-ui-react";

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
      <Segment>
        <Input type="file" name="editImage" />
        <Input
          icon="user"
          iconPosition="left"
          name="last_name"
          value={this.state.first_name}
          onChange={this.handleChange}
          placeholder="First Name"
        />{" "}
        <Input
          icon="user outline"
          iconPosition="left"
          name="last_name"
          value={this.state.last_name}
          onChange={this.handleChange}
          placeholder="Last Name"
        />{" "}
        <Input
          icon="envelope outline"
          iconPosition="left"
          name="email"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="john.smith@gmail.com"
        />{" "}
        <Input
          icon="lock"
          iconPosition="left"
          name="password"
          value={this.state.password}
          onChange={this.handleChange}
          placeholder="Password"
        />{" "}
        <Button onClick={this.editProfile}>Save Changes</Button>
      </Segment>
    );
  }
}

export default Form;
