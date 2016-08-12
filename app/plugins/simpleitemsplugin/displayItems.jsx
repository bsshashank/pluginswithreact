"use strict";

var React = require('react');
var ItemList = require('./itemList');
var _ = require('lodash');
import Radium from 'radium';

var itemslist = [{ id:'1', name:'test'}];

var DisplayItems = React.createClass({
  getInitialState: function() {
    return {
      items: itemslist,
      newItem: {id:'', name:''}
    };
  },

  setItemState: function(event) {
    var field = event.target.name;
    var value = event.target.value;
    this.state.newItem[field] = value;
    return this.setState({ newItem: this.state.newItem});
  },

  onAddItem: function(event) {
    event.preventDefault();
    var id = Math.floor((Math.random() * 1000) + 1);
    itemslist.push({id:id, name:this.state.newItem.name});
    this.setState({newItem: {id:'', name:''}});
    return this.setState({ items: itemslist });
  },

  render: function() {
    return (
      <ItemList newItem={this.state.newItem} items={this.state.items} onClick={this.onAddItem} onChange={this.setItemState}/>
    );
  }
});

export default Radium(DisplayItems);
