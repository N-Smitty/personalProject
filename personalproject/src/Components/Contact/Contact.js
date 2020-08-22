import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Contact.scss";
import { Segment, Button, Container, Input, Icon } from "semantic-ui-react";

class contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      email: "",
      phone: "",
      message: "",
    };
  }

  render() {
    return (
      <Container className="contact-container">
        <div className="contact-image"></div>
        <Segment className="contact">
          <h2>Contact Us</h2>
          <h5>We invite you to stay in contact with us!</h5>
          <p>Nathan Smith</p>
          <p>(801)-918-4032</p>
          <p>better.bulldogs.co@gmail.com</p>
          <p>Instagram: @better.bulldogs.co</p>
          <div>
            <Button color="facebook">
              <Icon name="facebook" /> Facebook
            </Button>
            <Button color="google plus">
              <Icon name="google plus" /> Google Plus
            </Button>
            <Button color="instagram">
              <Icon name="instagram" /> Instagram
            </Button>
          </div>
        </Segment>
        <Segment className="contact-form">
          <Input value={this.state.first_name} placeholder="First name">
            First Name
          </Input>
          <Input value={this.state.last_name} placeholder="First name">Last Name</Input>
          <Input value={this.state.email} placeholder="First name">Email</Input>
          <Input  value={this.state.phone} placeholder="First name">Phone Number</Input>
          <Input value={this.state.message} placeholder="First name">Message</Input>
          <Button>
            <Icon name="paper plane" />
            Send Message
          </Button>
        </Segment>
      </Container>
    );
  }
}

export default contact;

// contact form is not working
