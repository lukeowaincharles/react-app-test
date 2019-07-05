import React, { Component } from 'react';
import FormSignIn from "./FormSignIn";

class ForgotPassword extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSign: false,
    }
  }

  FormSignIn = () => {
    this.setState({ isSign: true });
  };

  render() {
    return (
        <div>
        { this.state.isSign ? (
            <FormSignIn dataState={this.state} isClick={this.state.welcomeConnect} />
          ) : (
          <section className="form__sign-in">
            <div className="container">
              <div className="row">
                <div className="col-md-6 offset-md-3">
                  <div className="card">
                    <div className="card__body p-5">
                      <div className="text-center">
                        <h3>Forgotten password?</h3>
                        <div className="email">
                          <input type="text" id="signUpEmail" className="form-control" placeholder="Email" autoComplete="false"></input>
                        </div>
                        <div className="text-center mt-3 mb-3">
                        <button className="btn button">Send email</button>
                        </div>
                        <p
                          onClick={this.FormSignIn}
                          style={{
                            cursor: "pointer"
                          }}
                          >
                            Back to sign in
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          )}
        </div>
    )
  }
}

export default ForgotPassword;
