import React, { Component } from 'react';
import { Card, Button, CardFooter } from 'framework7-react';
import I18n from '../../i18n';

export default class MessageComponent extends Component {
  render() {
    return <Card title={this.props.event.name} content={this.props.event.description}>
      <CardFooter>
        <Button style={{width: '100%'}}
                text={I18n.events.shared.ok}
                onClick={() => { this.props.event.onFinish() }} />
      </CardFooter>
    </Card>
  }
}
