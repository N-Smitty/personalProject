import React, {Component} from 'react';
import {Link} from 'react-router-dom';


class header extends Component {
        constructor(props) {
            super(props)

            this.state= {
                dropdownView: false
            }
        }

        aboutDropdown = () => {
            this.setState({dropdownView: !this.state.dropdownView})
        }

        litterDropdown = () => {
            this.setState({dropdownView: !this.state.dropdownView})
        }




    render() {
        return (
            <header className="App-header">
                <Link to='/' style={{textDecoration: 'none'}}>
                <h1>Better Bulldogs Co</h1>
                </Link>
            <nav className='nav'>

            <div>
                <span onClick={this.aboutDropdown}>About</span>
                    {this.state.dropdownView
                        ? (
                <div>
                    <Link to='/AboutBreed' style={{textDecoration: 'none'}}>
                    <span>The Breed</span>
                    </Link>
                    <Link to='/AboutStandards' style={{textDecoration: 'none'}}>
                    <span>AKC Standards</span>
                    </Link>
                    <Link to='AboutUs' style={{textDecoration: 'none'}}>
                    <span>About Us</span>
                    </Link>
                </div>
                        )
                    :null}
            </div>
            <div>
                <span onClick={this.litterDropdown}>Litters</span>
                    {this.state.dropdownView
                        ? (
                <div>
                    <Link to='/Gallery' style={{textDecoration: 'none'}}>
                    <span>Gallery</span>
                    </Link>
                    <Link to='/Available' style={{textDecoration: 'none'}}>
                    <span>Available</span>
                    </Link>
                    <Link to='/Pricing' style={{textDecoration: 'none'}}>
                    <span>Pricing</span>
                    </Link>
                </div>
                        )
                    :null}
            </div>
                <Link to='/Progesterone' style={{textDecoration: 'none'}}>
                <span>Breeding Tools</span>
                </Link>
                <Link to='/Contact' style={{textDecoration: 'none'}}>
                <span>Contact</span>
                </Link>
            </nav>
            </header>
        )
    }
}

export default header;            