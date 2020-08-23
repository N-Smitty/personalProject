import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import "./Contact.scss";
import {
  Segment,
  Button,
  Container,
  Input,
  Icon,
  Form,
} from "semantic-ui-react";
import pic from "../Auth/Profilepic.jpg";

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
      <div className="contact-container">
        <Segment float="left" className="contact">
          {/* <img className="contact-image"></img> */}
          <img src={pic} alt="profilePic" className="profile-image" />
          <h2>Contact Us</h2>
          <h5>We invite you to stay in contact with us!</h5>
          <p>Nathan Smith</p>
          <p>(801)-918-4032</p>
          <p>better.bulldogs.co@gmail.com</p>
          <p>Instagram: @better.bulldogs.co</p>
          <div>
            <Button
              href="https://www.facebook.com/profile.php?id=100004277626574"
              color="facebook"
            >
              <Icon name="facebook" /> Facebook
            </Button>
            <Button
              href="https://www.instagram.com/better.bulldogs.co/"
              color="instagram"
            >
              <Icon name="instagram" /> Instagram
            </Button>
          </div>
        </Segment>
        <Segment float="right" className="contact-form">
          <Form>
            <Form.Group widths="equal">
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="First name"
                placeholder="First name"
              />
              <br />
              <br />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-last-name"
                label="Last name"
                placeholder="Last name"
              />
              <br /> <br />
              <Form.Input
                fluid
                id="form-subcomponent-shorthand-input-first-name"
                label="First name"
                placeholder="email"
              />{" "}
              <br /> <br />
              <Form.Group inline>
                <Form.Field>
                  <label>Phone Number</label>
                  <Input placeholder="(xxx)" />
                </Form.Field>
                <Form.Field>
                  <Input placeholder="xxx" />
                </Form.Field>
                <Form.Field>
                  <Input placeholder="xxxx" />
                </Form.Field>
              </Form.Group>
              <Form.TextArea label="message" placeholder="Message" />
              <Button>
                <Icon name="paper plane" />
                Send Message
              </Button>
            </Form.Group>
          </Form>
        </Segment>
      </div>
    );
  }
}

export default contact;

// contact form is not working
