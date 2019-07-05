import React from 'react';
import Welcome from "./Welcome";
import Signup from "./FormSignUp";

class FormSignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [
        { username: "Luke", password: "letmein" }
      ],
      welcomeConnect: false,
      trueUsername: "",
      isSign: false,
      isSignUp: false
    };
    this.new = this.props;
  }

  Control = () => {
    var newState = this.state.users.concat(this.new.newUser);
    if (this.new.newUser !== undefined) {
      this.setState({
        users: newState
      });
    }

    var username = document.getElementById("username");
    var password = document.getElementById("password");
    this.state.users.map(user => {
      if (
        user.username === username.value &&
        user.password === password.value
      ) {
        return this.setState({
          welcomeConnect: true,
          trueUsername: user.username
        });
      }
    });
  };

  SignUp = () => {
    this.setState({ isSign: true });
  };

  render() {
    return (
      <div>
        {this.state.welcomeConnect ? (
          <Welcome uName={this.state.trueUsername} />
        ) : this.state.isSign ? (
          <Signup dataState={this.state} isClick={this.state.welcomeConnect} />
        ) : (
          <section className="form__sign-in">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="card">
                  <div className="card__body p-5">
                    <div className="text-center">
                      <h3>Sign in</h3>
                      <div className="email">
                      <input
                        type="text"
                        id="email"
                        className="form-control"
                        placeholder="username"
                        autoComplete="false"
                      />
                      </div>
                      <div className="password">
                        <input
                          type="password"
                          id="password"
                          className="
                          form-control"
                          placeholder="Your password"
                        />
                      </div>
                      <p className="forgotPassword py-3">Forgot <a href="#!" className="">password?</a></p>
                      <div className="text-center mb-3">
                        <button className="button btn" onClick={this.Control}>
                          Sign in
                        </button>
                      </div>
                      <p
                      onClick={this.SignUp}
                      style={{
                        textAlign: "center",
                        color: "#262626",
                        marginTop: "-5px",
                        cursor: "pointer"
                      }}
                      >
                      Not a member? Sign up</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}
      </div>
    );
  }
}

export default FormSignIn;