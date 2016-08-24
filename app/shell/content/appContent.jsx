"use strict";

var React = require('react');
import Radium from 'radium';
import reactor from '../dispatcher/reactor';
import getters from '../data/getters';
import PluginCardRenderer from '../render/pluginCardRenderer';
import RenderPlugins from '../render/renderPlugins';
import actions from '../actions/actions';
import PluginStore from '../stores/pluginStore';

reactor.registerStores({
  'plugins': PluginStore,
});

var PluginsRenderer = React.createClass({
  mixins: [reactor.ReactMixin],

  getInitialState: function() {
    return { showPluginCards: true, selectedPluginName: 'simpleitemsplugin' };
  },

  getDataBindings() {
    return {
      plugins: getters.plugins,
    }
  },

  componentDidMount: function(){
    actions.mountRegisteredPlugins();
  },

  onClick: function(event){
    // console.log("called onClick and event " + JSON.stringify(event));
    this.setState({ showPluginCards: false });
  },

  render: function() {
    return(
      <div>
        <h6>This is a Simple reactjs application that supports plugins with nuclear-js.</h6>
        {this.state.showPluginCards ? <PluginCardRenderer pluginToDisplay={this.state.selectedPluginName} registeredplugins={this.state.plugins} onPluginSelection={this.onClick} /> : null }
        {this.state.showPluginCards ? null : <RenderPlugins selectedPlugin={this.state.selectedPluginName} registeredplugins={this.state.plugins} /> }
      </div>
    );
  }
});

export default Radium(PluginsRenderer);
