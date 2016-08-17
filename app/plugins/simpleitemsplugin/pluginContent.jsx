"use strict";

var React = require('react');
import Radium from 'radium';
import reactor from './reactor';
import actions from './actions';
import TestDisplayItems from './testdisplayitems';
import ItemStore from './stores/itemStore'

reactor.registerStores({
  'items': ItemStore,
})

var PluginContent = React.createClass({

  componentWillMount: function(){
    console.log("called ComponentWillMount");
    actions.getItems();
  },

  render: function() {
    return(
      <div>
        <TestDisplayItems />
      </div>
    );
  }
});

module.exports = PluginContent;
