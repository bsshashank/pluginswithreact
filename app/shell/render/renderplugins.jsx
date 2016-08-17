"use strict";

var React = require('react');

var RenderPlugins = React.createClass({
  render: function() {
    return (
      <div id="injectedplugins">{
          this.props.registeredplugins.map(function(plugin) {
            return React.createElement(require('../../plugins/' + plugin.get('name') + '/pluginContent'));
          })
        }</div>
    );
  }
});

export default RenderPlugins;
