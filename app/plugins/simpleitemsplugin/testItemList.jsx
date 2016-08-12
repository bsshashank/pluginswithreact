"use strict";

var React = require('react');
var Input = require('./textInput');

var TestItemList = React.createClass({
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
    );
  }
});

module.exports = TestItemList;
