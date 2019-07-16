import React from 'react';

const Welcome = (props) => {
  return(
    <section className="form__sign-in">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="card">
              <div className="card__body p-5">
                <div className="text-center">
                  <h3>WELCOME {props.uName}</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Welcome;
