"use strict";

var React = require('react');

var RenderPlugins = React.createClass({
  render: function() {
    console.log("props from renderplugins " + JSON.stringify(this.props));
    console.log("plugins from renderplugins " + JSON.stringify(this.props.registeredplugins));
    return (
      <div id="injectedplugins">{
          this.props.registeredplugins.map(function(plugin) {
            console.log("component " + plugin);
            console.log("component name " + plugin.get('name'));
            // console.log("componentname " + component._root.entries[0][1]);
            return React.createElement(require('../plugins/' + plugin.get('name') + '/pluginContent'));
          })
        }</div>
    );
  }
});

export default RenderPlugins;
