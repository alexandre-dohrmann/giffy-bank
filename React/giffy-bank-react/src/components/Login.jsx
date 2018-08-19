import React, { Component } from 'react';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            username: '',
            password: ''
        }
    }
    handleChange = (e) => {

        this.setState({ [e.currentTarget.name]: e.currentTarget.value });

    }
    handleSubmit = async (e) => {
        e.preventDefault();

        const loginResponse = await fetch('http://localhost:9000/auth/login', {
            credentials: 'include',
            method: 'POST',
            body: JSON.stringify(this.state),
            headers: {
                'Content-Type': 'application/json'
            }
        });

        const parsedResponse = await loginResponse.json();

        if (parsedResponse.data === 'login successful') {
            // switch our route.
            // Programmatically switching to a new route.
            this.props.history.push('/gifs');
        }

    }
    render() {
        return (
            <div className="log-in-box"><br />
                <form className="login-input" onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label form="formGroupExampleInput">Username: </label>
                        <input className="form-control log-in" type="text" name="username" id="formGroupExampleInput" placeholder="username" onChange={this.handleChange} />
                    </div>
                    <div className="form-group">
                        <label form="formGroupExampleInput2">Password: </label>
                        <input className="form-control log-in" type="password" name="password" id="formGroupExampleInput2" placeholder="password" onChange={this.handleChange} />
                    </div>
                    <div className="button-log">
                        <button className="btn btn-info log">Login</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default Login;