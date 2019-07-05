import React, { Component } from 'react'
// import LoginButton from './LoginButton';
import FormSignIn from "./FormSignIn"

class FormSignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      isSignUp: false,
      newUser: null
    }
  }

  NewUser = () => {
    var username = document.getElementById("signUpUsername").value;
    var email = document.getElementById("signUpEmail").value;
    var password1 = document.getElementById("signUpPassword1").value;
    var password2 = document.getElementById("signUpPassword2").value;
    if(password1 === password2){
      if(username !== "") {
        this.setState({
          isSignUp: true,
          newUser: {username: username, email: email, password: password1}
        });
      } else {
        alert("User name cannot be blank.")
      }
    }
    else{
      alert("The passwords you entered do not match.");
    }
  }

  render() {
    return (
      <div>
      {
        this.state.isSignUp ?
        <FormSignIn newUser={this.state.newUser}/>
        :
        <section className="form__sign-in">
          <div className="container">
            <div className="row">
              <div className="col-md-6 offset-md-3">
                <div className="card">
                  <div className="card__body p-5">
                    <div className="text-center">
                      <h3>Sign up</h3>
                      <div className="name">
                        <input type="text" id="signUpUsername" className="form-control" placeholder="Name" autoComplete="false"></input>
                      </div>
                      <div className="email">
                        <input type="text" id="signUpEmail" className="form-control" placeholder="Email" autoComplete="false"></input>
                      </div>
                      <div className="password">
                        <input type="password" id="signUpPassword1" className="form-control" placeholder="Password"></input>
                      </div>
                      <div className="password">
                        <input type="password" id="signUpPassword2" className="form-control" placeholder="Confirm password"></input>
                      </div>
                      <div className="text-center mt-3 mb-3">
                      <button className="btn button" onClick={this.NewUser}>SIGN UP</button>
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
                          Already have an Account?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      }
      </div>





    )
  }
}

export default FormSignUp;



// class FormSignUp extends React.Component {

//   // getInitialState : function() {
//   //   return { showMe : false };
//   // },
//   // onClick : function() {
//   //   this.setState({ showMe : true});
//   // },
//   // render : function () {
//   //   if(this.state.showMe) {
//   //     return (

//   //     )
//   //   } else {
//   //     return (
        
//   //     )
//   //   }
//   // }



//   constructor(props) {
//     super(props);
//     this.state = {addClass: false}
//   }
//   toggle() {
//     this.setState({addClass: !this.state.addClass});
//   }
//   render() {
//     let changeMe = [""];
//     if(this.state.addClass) {
//       changeMe.push('is-active');
//     }
//     return (
//       <section className="form__sign-in">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 offset-md-3">
//               <div className="card">
//                 <div className="card__body p-5">
//                   <div className="text-center">
//                     <h3>Sign up</h3>
//                     <div className="name">
//                       <input className={changeMe.join('')}onClick={this.toggle.bind(this)} label="Name" id="name" />
//                       <label for="name">Your name</label>
//                     </div>
//                     <div className="email">
//                       <input className={changeMe.join('')}onClick={this.toggle.bind(this)}  label="Your email" id="email" />
//                       <label for="email">Your email</label>
//                     </div>
//                     <div className="password">
//                       <input className={changeMe.join('')}onClick={this.toggle.bind(this)}  label="Your password" id="password" />
//                       <label for="password">Your password</label>
//                     </div>
//                     <div className="text-center mb-3">
//                       <LoginButton />
//                     </div>
//                     <p
//                     onClick={this.SignUp}
//                     style={{
//                       textAlign: "center",
//                       color: "#262626",
//                       marginTop: "-5px",
//                       cursor: "pointer"
//                     }}
//                     >Already have an <a href="#!">Account</a>?</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }
// }

// const FormSignUp = () => {
//     return (
//       <section className="form__sign-in">
//         <div className="container">
//           <div className="row">
//             <div className="col-md-6 offset-md-3">
//               <div className="card">
//                 <div className="card__body p-5">
//                   <div className="text-center">
//                     <h3>Sign up</h3>
//                     <div className="name">
//                       <input label="Name" id="name" />
//                       <label for="name">Your name</label>
//                     </div>
//                     <div className="email">
//                       <input label="Your email" id="email" />
//                       <label for="email">Your email</label>
//                     </div>
//                     <div className="password">
//                       <input label="Your password" id="password" />
//                       <label for="password">Your password</label>
//                     </div>
//                     <div className="text-center mb-3">
//                       <LoginButton />
//                     </div>
//                     <p>Already have an <a href="#!">Account</a>?</p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     )
//   }

  // export default FormSignUp;
