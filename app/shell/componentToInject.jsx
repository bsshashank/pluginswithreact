"use strict";

var React = require('react');
var Button = require('./button');
import Radium from 'radium';

var ComponentToInject = React.createClass({
  render: function() {
    return(
      <Button buttonId='2' key='3' buttonName='InjectedButton' />
    );
  }
});

export default ComponentToInject;
