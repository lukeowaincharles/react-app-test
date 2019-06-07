import React from 'react';
import SigninButton from './SigninButton';

const FormSignIn = () => {
    return (
      <section className="form__sign-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card__body p-5">
                  <div className="text-center">
                    <h3>Sign in</h3>
                    <div className="email">
                      <input label="Your email" id="email" />
                      <label for="email">Your email</label>
                    </div>
                    <div className="password">
                      <input label="Your password" id="password" />
                      <label for="password">Your password</label>
                    </div>
                    <p className="forgotPassword py-3">Forgot <a href="#!" className="">password?</a></p>
                    <div className="text-center mb-3">
                      <SigninButton />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default FormSignIn;