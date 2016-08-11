"use strict";

var React = require('react');

var TestRender = React.createClass({
  render: function() {
    console.log("components " + this.props.components);
    return (
      <div id="injectedcomponents">{
          this.props.components.map(function(component) {
            console.log("component " + component);
            // console.log("componentname " + component._root.entries[0][1]);
            return React.createElement(require('../plugins/' + component + '/pluginContent'));
          })
        }</div>
    );
  }
});

export default TestRender;
