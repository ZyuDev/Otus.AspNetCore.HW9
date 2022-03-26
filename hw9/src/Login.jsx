import React from 'react';
import ReactDOM from 'react-dom'
import axions from 'axios'
import axios from 'axios';

export default class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: "admin",
            password: "1",
        };

    }

    onLoginClicked = (e) => {
        console.log("Login clicked");

        const payload = {
            userName: this.state.userName,
            password: this.state.password
        };

        console.log("payload:", payload);

        axios.post('/api/login', payload).then(res => {
            console.log(res);
            console.log(res.data);
        });

    }

    onUserChange = (e) => {
        this.setState({ userName: e.target.value });
    }

    onPasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }
    render() {
        return (
            <div className="row">

                <div className="col-sm-4"></div>
                <div className="col-sm-4">

                    <div className="card" style={{ border: "1px solid #dedede" }}>

                        <div className="card-header">
                            <h5 className="card-title text-primary">Log in</h5>
                        </div>

                        <div className="card-body" style={{ padding: "10px 50px 10px 50px" }}>

                            <section>

                                {/* Email */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">👤</span>
                                    <input type="text"
                                        className="form-control"
                                        placeholder="Username"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={this.state.userName}
                                        onChange={this.onUserChange} />
                                </div>

                                {/* Password */}
                                <div className="input-group mb-3">
                                    <span className="input-group-text" id="basic-addon1">&#128273;</span>
                                    <input type="password"
                                        className="form-control"
                                        placeholder="Password"
                                        aria-label="Username"
                                        aria-describedby="basic-addon1"
                                        value={this.state.password}
                                        onChange={this.onPasswordChange} />
                                </div>


                                {/* Login button */}
                                <div className="form-group">
                                    <button className="btn btn-outline-success btn-sm" onClick={this.onLoginClicked}>Enter</button>

                                </div>
                            </section>


                        </div>

                    </div>



                </div>
                <div className="col-sm-4"></div>



            </div>

        );
    }


}