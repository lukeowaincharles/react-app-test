import React from 'react';
import Welcome from "./Welcome";
import Signup from "./FormSignUp";
import ForgotPassword from "./ForgotPassword";

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
      isSignUp: false,
      isPass: false
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

    var username = document.getElementById("email");
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

  ForgotPassword = () => {
    this.setState({ isPass: true });
  };

  render() {
    return (
      <div>
        { this.state.welcomeConnect ? (
          <Welcome uName={this.state.trueUsername} />
        ) : this.state.isSign ? (
          <Signup dataState={this.state} isClick={this.state.welcomeConnect} />
        ) : this.state.isPass ? (
          <ForgotPassword dataState={this.state} isClick={this.state.welcomeConnect} />
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
                        placeholder="Username"
                        autoComplete="false"
                      />
                      </div>
                      <div className="password">
                        <input
                          type="password"
                          id="password"
                          className="
                          form-control"
                          placeholder="Password"
                        />
                      </div>
                      <p className="forgotPassword py-3"
                      onClick={this.ForgotPassword}
                      style={{
                        cursor: "pointer"
                      }}
                      >
                      Forgot password?</p>
                      <div className="text-center mt-3 mb-3">
                        <button className="button btn" onClick={this.Control}>
                          Sign in
                        </button>
                      </div>
                      <p
                      onClick={this.SignUp}
                      style={{
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
