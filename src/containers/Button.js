import React from 'react';
import { AppContext } from '../context'

let styles = {
  backgroundColor: 'HotPink ',
  width: '250px',
  height: '100px',
  borderRadius: '100px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <AppContext.Consumer>
        {(values) => (
          <button disabled={values.loading} style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
            onMouseOut={() => { this.setState({ hover: false }) }}
            onMouseOver={() => { this.setState({ hover: true }) }}
            onClick={values.getNews}
          >Press to see News</button>
        )}
      </AppContext.Consumer>
    );
  }

};

export default Button;
