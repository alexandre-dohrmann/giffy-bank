import 'bootstrap/dist/js/bootstrap.bundle.min';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Nav extends Component {

    render() {
        return (
            <div>
                <div className="home-header-div">
                    <div className="h1-div">
                        <img src={"/images/giffy-logo.png"} className="App-logo" alt="logo" />
                    </div>
                    <div className="h1-div">
                        <h1 className="home-header">Giffy Bank</h1><br />
                    </div>
                </div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <ul className="nav navbar-nav">
                        <li>
                            <Link className="nav-links m-4" to="/gifs">Gifs Home</Link>
                        </li>
                        <li>
                            <Link className="nav-links m-4" to="/gifs/my-gifs">My Gifs</Link>
                        </li>
                        <li>
                            <Link className="nav-links m-4" to="/">Logout</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default Nav;