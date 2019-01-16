import React, { Component } from 'react';
import { Card, Button, CardFooter, CardContent, List, ListItem, Block } from 'framework7-react';
import I18n from '../../i18n';

export default class MessageListComponent extends Component {
  render() {
    const { translator } = this.props.event;
    debugger;
    return <Card title={this.props.event.name}>
      <CardContent padding={false}>
        <Block style={{ margin: '10px 0px' }}>
          <p>{this.props.event.description}</p>
        </Block>
        <List>
          {
            this.props.event.list.map((event, i) =>
              <ListItem key={i}
                        title={translator[event.action](event.player)}
                        style={{ color: 'dimgrey', fontSize: '14px' }} />
            )
          }
        </List>
      </CardContent>
      <CardFooter>
        <Button style={{width: '100%'}}
                text={I18n.events.shared.ok}
                onClick={() => { this.props.event.onFinish() }} />
      </CardFooter>
    </Card>
  }
}
