"use strict";

var React = require('react');
var Input = require('./textInput');

var ItemList = React.createClass({
  render: function() {
    var createitemRow = function(item) {
      return (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{ item.name }</td>
        </tr>
      );
    };
    return (
        <form>
          <Input
            name="name"
            label="Item Name"
            onChange={ this.props.onChange }
            value={ this.props.newItem.name } />
            <br />
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
              </tr>
            </thead>
            <tbody>
              {this.props.items.map(createitemRow, this)}
            </tbody>
          </table>
          <input type="Submit" value="Add Item" onClick={this.props.onClick} />
        </form>
    );
  }
});

module.exports = ItemList;
