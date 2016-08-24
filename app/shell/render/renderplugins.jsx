"use strict";

var React = require('react');

/*var RenderPlugins = React.createClass({
render: function() {
return (
<div id="injectedplugins">{
this.props.registeredplugins.map(function(plugin) {
return React.createElement(require('../../plugins/' + plugin.get('name') + '/pluginContent'));
})
}</div>
);
}
});*/

var RenderPlugins = React.createClass({
  render: function() {
    var renderPlugin = function(plugin) {
      console.log("selected plugin from renderPlugin " + this.props.selectedPlugin);
      console.log('plugin from renderPlugin ' + plugin.get('name'));
      console.log('after compare ' + this.props.selectedPlugin.localeCompare(plugin.get('name')) != 0 );
      return (this.props.selectedPlugin.localeCompare(plugin.get('name')) != 0) ? null : React.createElement(require('../../plugins/' + plugin.get('name') + '/pluginContent'));
    };
    return (
      <div id="injectedplugins">{
          this.props.registeredplugins.map(renderPlugin,this)
        }</div>
      );
    }
  });

  export default RenderPlugins;
