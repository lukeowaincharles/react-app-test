import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FormSignIn from './FormSignIn';
import FormSignUp from './FormSignUp';

import './App.scss';

function App() {
  return (
    <div>
      <FormSignIn />
      <FormSignUp />
    </div>
  );
}

export default App;
