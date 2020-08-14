import React, { Component } from "react";
import axios from "axios";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dog_name: "",
      dog_age: "",
      breed: "",
      heat_number: "",
      insemination_type: "",
      ng_ml: "",
      date_taken: "",
      time_taken: "",
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
  };

  createDog = () => {
    axios.post("/api/createDog", this.state).then(() => {
      this.props.history.push("/AccountView");
    });
  };

  render() {
    return (
      <div>
        <input
          name="dog_name"
          value={this.state.dog_name}
          onChange={this.handleChange}
          placeholder=""
        />
        <input
          name="dog_age"
          value={this.state.age}
          onChange={this.handleChange}
          placeholder="dog_age"
        />{" "}
        <input
          name="breed"
          value={this.state.breed}
          onChange={this.handleChange}
          placeholder=""
        />{" "}
        <input
          name="heat_number"
          value={this.state.heat_number}
          onChange={this.handleChange}
          placeholder="heat_number"
        />{" "}
        <input
          name="insemination_type"
          value={this.state.insemination_type}
          onChange={this.handleChange}
          placeholder=""
        />{" "}
        <input
          name="ng_ml"
          value={this.state.ng_ml}
          onChange={this.handleChange}
          placeholder="ng_ml"
        />{" "}
        <input
          name="date_taken"
          value={this.state.date_taken}
          onChange={this.handleChange}
          placeholder=""
        />{" "}
        <input
          name="time_taken"
          value={this.state.time_taken}
          onChange={this.handleChange}
          placeholder="time_taken"
        />
        <button onClick={this.createDog}>Add Dog</button>
        <button>Save Changes</button>
      </div>
    );
  }
}

export default Form;
