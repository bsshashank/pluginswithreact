var React = require('react');
var Input = require('./textInput');
import Radium from 'radium';

var TestPush = React.createClass({
  render: function() {
    return (
      <form>
        <Input
          name="name"
          label="Item Name"
          onChange={ this.props.onChange }
          value={ this.props.newItem.name } />
        <br />
        <input type="Submit" value="Add Item" onClick={this.props.onClick} />
      </form>
    );
  }
});

export default Radium(TestPush);
