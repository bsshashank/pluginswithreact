"use strict";

var React = require('react');
var ItemList = require('./testItemList');
import Radium from 'radium';
import reactor from './reactor'
import getters from './getters'
import TestPush from './testPush'
import actions from './actions'

var itemslist = [{ id:'1', name:'test'}];

var TestDisplayItems = React.createClass({
  mixins: [reactor.ReactMixin],

  getDataBindings() {
    return {
      items: getters.items,
      //newItem: {id:'0', name:'EnterItem'}
    }
  },

  getInitialState: function() {
    return {
      // items: itemslist,
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
    let id = Math.floor((Math.random() * 1000) + 1);
    //itemslist.push({id:id, name:this.state.newItem.name});
    //this.setState({newItem: {id:'', name:''}});
    //return this.setState({ items: itemslist });
    let newItem = {id:id, name:'inserted on click'};
    actions.addItem({id:id, name:this.state.newItem.name});
    this.setState({newItem: {id:'', name:''}});
  },

  render: function() {
    return (
      // <ItemList newItem={this.state.newItem} items={this.state.items} onClick={this.onAddItem} onChange={this.setItemState}/>
      <div>
        <TestPush newItem={this.state.newItem} onClick={this.onAddItem} onChange={this.setItemState} />
        <ItemList items={this.state.items} />
      </div>
    );
  }
});

export default Radium(TestDisplayItems);
