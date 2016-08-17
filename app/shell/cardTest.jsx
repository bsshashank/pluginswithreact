import React from 'react';
import Radium from 'radium';

import { Card, CardText, CardActions, CardTitle, CardMenu } from 'react-mdl';
import { Button, IconButton } from 'react-mdl';

var CardTest = React.createClass ({
  render: function() {
    return (
      <div>
        <Card shadow={0} style={{width: 'auto', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '176px', background: 'url(http://www.getmdl.io/assets/demos/welcome_card.jpg) center / cover'}}>Welcome</CardTitle>
          <CardText>
            TestData
          </CardText>
          <CardActions border>
            <Button colored>Get Started</Button>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
      </div>
    );
  }
});

export default Radium(CardTest);
// module.exports = CardTest;
