"use strict";

var React = require('react');
import Radium from 'radium';
import Button from './button';
import reactor from './reactor';
import getters from './getters';
import TestRender from './testRender';

console.log("getters in content " + getters.components)

var TestContent = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      components: getters.components,
    }
  },

  render: function() {
    return(
      <div>
        Hello, Click button.
        <br />
        <button type="button" onClick={this.injectComponent}>Inject Button</button>
      </div>
    );
  }
});

export default Radium(TestContent);
