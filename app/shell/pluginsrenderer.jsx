"use strict";

var React = require('react');
import Radium from 'radium';
import reactor from './reactor';
import getters from './getters';
import RenderPlugins from './renderplugins';
import actions from './actions';

var PluginsRenderer = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      plugins: getters.plugins,
    }
  },

  injectComponent: function() {
    actions.registerComponent(TestButton)
  },

  render: function() {
    return(
      <div>
        This is a Simple reactjs application that supports plugins with nuclear-js.
        <RenderPlugins registeredplugins={this.state.plugins} />
      </div>
    );
  }
});

export default Radium(PluginsRenderer);
