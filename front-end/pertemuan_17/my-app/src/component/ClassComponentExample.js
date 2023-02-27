import React, { Component } from 'react';

class ClassComponentExample extends Component {
  render() {
    return (
      <div>
        {this.props.email}
      </div>
    );
  }
}

export default ClassComponentExample;
