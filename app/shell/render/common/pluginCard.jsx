import React from 'react';

import { Card, CardText, CardActions, CardTitle, CardMenu } from 'react-mdl';
import { Button, IconButton } from 'react-mdl';

var PluginCard = React.createClass ({
  render: function() {
    return (
      <div>
        <Card shadow={0} style={{width: '62%', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>{this.props.cardTitle}</CardTitle>
          <CardText>
            {this.props.cardText}
          </CardText>
          <CardActions border>
            <Button colored onClick={this.props.onPluginClick}>{this.props.cardActionsButtonText}</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
});

// export default Radium(PluginCard);
module.exports = PluginCard;
