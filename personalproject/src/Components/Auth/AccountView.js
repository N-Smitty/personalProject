import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import axios from "axios";
import "./Auth.scss";
import {
  Segment,
  Container,
  Button,
  Icon,
  Label,
  Header,
} from "semantic-ui-react";
import pic from "./Profilepic.jpg";
import floral from "./floral.jpg";

class AccountView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dogProfile: [],
    };
  }

  componentDidMount() {
    console.log("hiiiit");
    axios.get("/api/dog/profile").then((results) => {
      console.log(results.data);
      this.setState({
        dogProfile: results.data,
      });
    });
  }

  deleteDog = (dog_id) => {
    axios.delete(`/dog/delete/${dog_id}`).then(() => {
      axios.get("/api/dog/profile").then((results) => {
        console.log(results.data);
        this.setState({
          dogProfile: results.data,
        });
      });
    });
  };

  render() {
    return (
      <div class="ui horizontal segments">
        <Container class="form">
          {/* <img src={floral} alt="floral" className="floral-image" /> */}
          <Header as="h2">
            <Icon name="settings" />
            <Header.Content>
              Account Settings
              <Header.Subheader>Manage your preferences</Header.Subheader>
            </Header.Content>
          </Header>
          <Segment className="accountInfo">
            <Container className="profile">
              <img src={pic} alt="profilePic" className="profile-image" />
              <div>Name</div>
              <div>Email</div>

              <Container className="button-container">
                <Button
                  className="form-button"
                  onClick={() => {
                    this.props.history.push("/FormComp");
                  }}
                >
                  Add Dog
                  <Icon name="plus" />
                </Button>
                <Button
                  className="form-button"
                  onClick={() => {
                    this.props.history.push("/EditProfile");
                  }}
                >
                  Edit Profile
                  <Icon name="edit outline" />
                </Button>
              </Container>
            </Container>
          </Segment>
          <Segment>
            <h3>Breeding Info</h3>
            This will render a summary of the results that were given in the
            form!
          </Segment>
          <Label>
            {this.state.dogProfile.length > 0 &&
              this.state.dogProfile.map((e) => {
                console.log(e);
                return (
                  <Segment className="breeding-info">
                    <Label>
                      <Button onClick={() => this.deleteDog(e.dog_id)}>
                        <Icon name="trash" />
                      </Button>
                      <h1>{e.dog_name}</h1>
                      <p>Dog Age: {e.dog_age}</p>
                      <p>Breed: {e.breed}</p>
                      <p>Heat #: {e.heat_number}</p>
                    </Label>
                    <Label>
                      <p>{e.dog_id}</p>
                      <p>{e.insemination_type}</p>
                      <p>{e.ng_ml}</p>
                      <Icon name="clock">{e.date_taken}</Icon>
                      <p>{e.time_taken}</p>
                    </Label>
                  </Segment>
                );
              })}
          </Label>
        </Container>
      </div>
    );
  }
}

export default AccountView;
