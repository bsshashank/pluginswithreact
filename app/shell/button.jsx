"use strict";

var React = require('react');
import Radium from 'radium';

var Button = React.createClass({
  render: function() {
    return(
      <button type="button" id={this.props.buttonId}> {this.props.buttonName}</button>
    );
  }
});

export default Radium(Button);
