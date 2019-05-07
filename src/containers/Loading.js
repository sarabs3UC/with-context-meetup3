import React from 'react';
import { AppContext } from '../context';
import img from '../loading_spinner.gif'

const Laoading = () => (
  <AppContext.Consumer>
    {(values) => values.loading ?
      <div style={{ textAlign: 'center' }}>
        <img src={img} alt='loading' />
        <h1>LOADING</h1>
      </div> :
      null
    }
  </AppContext.Consumer>
);

export default Laoading;


