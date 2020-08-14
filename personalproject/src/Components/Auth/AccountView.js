import React, { Component } from "react";
import { Link } from "react-router-dom";
import Auth from "../Auth/Auth";
import axios from "axios";
// import './Breeding.scss';

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
      <div className="form">
        <span>exit profile account view and route back home</span>
        <section>
          {/* <img>profile icon</img> */}
          <span>Edit Owner Profile</span>
        </section>
        <section>
          {/* <img>Profile image</img> */}
          <span>Edit image</span>
          <span>Name</span>
          <span>Email</span>
          <span>Change Password</span>
          <button
            onClick={() => {
              this.props.history.push("/Form");
            }}
          >
            Add Dog
          </button>
          <button
            onClick={() => {
              this.props.history.push("/EditProfile");
            }}
          >
            Edit Profile
          </button>
        </section>
        <section>
          <span>
            Edit dog Profile- this will allow changes to dog profile like adding
            dog picture{" "}
          </span>
          {/* <img>Dog Profile picture</img> */}
          <label>Name</label>
          <label>Age</label>
          <label>Breed</label>
          <label>Comments</label>
        </section>
        <section>
          <h3>Breeding Info</h3>
          This will render a summary of the results that were given in the form!
        </section>
        <div>
          {this.state.dogProfile.length > 0 &&
            this.state.dogProfile.map((e) => {
              console.log(e);
              return (
                <section>
                  <div>
                    <button onClick={() => this.deleteDog(e.dog_id)}>
                      delete dog profile
                    </button>
                    <h1>{e.dog_name}</h1>
                    <p>{e.dog_age}</p>
                    <p>{e.dog_breed}</p>
                    <p>{e.heat_number}</p>
                  </div>
                  <div>
                    <p>{e.dog_id}</p>
                    <p>{e.insemination_type}</p>
                    <p>{e.ng_ml}</p>
                    <p>{e.date_taken}</p>
                    <p>{e.time_taken}</p>
                  </div>
                </section>
              );
            })}
        </div>
      </div>
    );
  }
}

export default AccountView;
