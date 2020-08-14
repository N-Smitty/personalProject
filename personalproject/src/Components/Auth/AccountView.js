import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import Auth from '../Auth/Auth';
// import './Breeding.scss';

class AccountView extends Component {


    render() {
        return (
            <div className='form'>
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
                    <button>Add Dog</button>
                    <button>Save Changes</button>
                </section>
                <section>
                <span>Edit dog Profile- this will allow changes to dog profile like adding dog picture </span>
                <span>delete dog profile</span>
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

            </div>
        )

    }

}

export default AccountView