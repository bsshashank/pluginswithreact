"use strict";

var React = require('react');
import Radium from 'radium';
import PluginsRenderer from './pluginsrenderer';
import PluginsManager from './PluginManager/manager';
import reactor from './reactor';
import PluginStore from './stores/pluginStore';
import actions from './actions';

reactor.registerStores({
  'plugins': PluginStore,
})

var AppContent = React.createClass({

  componentDidMount: function(){
    actions.mountRegisteredPlugins();
  },

  render: function() {
    return(
      <div>
        <PluginsRenderer />
      </div>
    );
  }
});

export default Radium(AppContent);
