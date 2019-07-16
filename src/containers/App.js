import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import FormWrapper from '../components/FormWrapper';
import GMap from '../components/Map';

import './App.scss';

class App extends React.Component {
  render() {
    return (
      <div>
        <FormWrapper />
      </div>,
      <div style={{width: '100%', height: '400px'}}>
        <GMap/>
      </div>
    );
  }
}

export default App;
