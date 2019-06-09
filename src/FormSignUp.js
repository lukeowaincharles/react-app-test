import React from 'react';
import LoginButton from './LoginButton';

const FormSignUp = () => {
    return (
      <section className="form__sign-in">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <div className="card">
                <div className="card__body p-5">
                  <div className="text-center">
                    <h3>Sign up</h3>
                    <div className="name">
                      <input label="Name" id="name" />
                      <label for="name">Your name</label>
                    </div>
                    <div className="email">
                      <input label="Your email" id="email" />
                      <label for="email">Your email</label>
                    </div>
                    <div className="password">
                      <input label="Your password" id="password" />
                      <label for="password">Your password</label>
                    </div>
                    <div className="text-center mb-3">
                      <LoginButton />
                    </div>
                    <p>Already have an <a href="#!">Account</a>?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  export default FormSignUp;