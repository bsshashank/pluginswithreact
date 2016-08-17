"use strict";

var React = require('react');
var PluginCard = require('./common/pluginCard');

/*var PluginCardRenderer = React.createClass({
render: function() {
return(
<div>
{
this.props.registeredplugins.map(function(plugin) {
return <PluginCard cardTitle={plugin.get('cardTitle')} cardText={plugin.get('cardText')} cardActionsButtonText={plugin.get('cardActionsButtonText')} />
})
}
</div>
);
}
});*/

var PluginCardRenderer = React.createClass({
  render: function() {
    var createPluginCard = function(plugin){
      console.log("props in PluginCardRenderer " + this);
      console.log("plugin in PluginCardRenderer " + plugin);
      return (<PluginCard onPluginClick={this.props.onPluginSelection} pluginName={plugin.get('name')} cardTitle={plugin.get('cardTitle')} cardText={plugin.get('cardText')} cardActionsButtonText={plugin.get('cardActionsButtonText')} />);
    };
    return(
      <div>
        {
          this.props.registeredplugins.map(createPluginCard,this)
        }
    </div>
  );
}
});

export default PluginCardRenderer;
