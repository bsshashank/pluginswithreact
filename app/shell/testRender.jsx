"use strict";

var React = require('react');
import Radium from 'radium';

var TestRender = React.createClass({
  render: function() {
    return (
      <div id="injectedcomponents">{
          this.props.components.map(function(component) {
            // var MyComponent = React.createFactory(require('../plugins/' + component + '/pluginContent'));
            // var MyComponentClass = require('../plugins/reactwithnuclear/pluginContent');
            // var MyComponent = React.createFactory(MyComponentClass);
            // console.log(MyComponent);
            // return React.createElement(MyComponent);
            //return MyComponent;
            //console.log('component ' + component);
            return React.createElement(component);
          })
        }</div>
    );
  }
});

export default Radium(TestRender);
