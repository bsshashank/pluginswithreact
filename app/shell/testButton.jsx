"use strict";

var React = require('react');
//import Radium from 'radium';

//var key = Math.floor((Math.random() * 100) + 1);

var TestButton = React.createClass({
  render: function() {
    var key = Math.floor((Math.random() * 100) + 1);
    return(
      <button type="button" key={key}>TestButton{key}</button>
    );
  }
});

export default TestButton;
