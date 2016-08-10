"use strict";

var React = require('react');
import TestDisplayItems from './testDisplayItems';
import Radium from 'radium';
import reactor from './reactor';
import actions from './actions';
import ItemStore from './stores/itemStore'
import getters from './getters'

reactor.registerStores({
  'items': ItemStore,
})

actions.getItems();

var PluginContent = React.createClass({
  render: function() {
    return(
      <div>
        <TestDisplayItems />
      </div>
    );
  }
});

// export default Radium(PluginContent);
export default PluginContent;
