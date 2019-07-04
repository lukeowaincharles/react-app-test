import React from 'react';
import FormSignIn from './FormSignIn';


class FormWrapper extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="form__wrapper">
        <FormSignIn />
      </div>
    )
  }
} 

export default FormWrapper;
