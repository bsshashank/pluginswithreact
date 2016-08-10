"use strict";

var React = require('react');
import Radium from 'radium';
import Content from './content';
import actions from './actions';
import reactor from './reactor';
import ComponentStore from './stores/componentStore'

reactor.registerStores({
  'components': ComponentStore,
})

actions.mountComponent();

var AppContent = React.createClass({
  render: function() {
    return(
      <div>
        <Content />
      </div>
    );
  }
});

export default Radium(AppContent);
