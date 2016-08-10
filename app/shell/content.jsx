"use strict";

var React = require('react');
import Radium from 'radium';
import Button from './button';
import reactor from './reactor';
import getters from './getters';
import TestRender from './testRender';
import actions from './actions';

var Content = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      components: getters.components,
    }
  },

  injectComponent: function() {
    actions.registerComponent(TestButton)
  },

  render: function() {
    return(
      <div>
        This is a Simple reactjs application that supports plugins with nuclear-js.
        <TestRender components={this.state.components} />
      </div>
    );
  }
});

export default Radium(Content);
