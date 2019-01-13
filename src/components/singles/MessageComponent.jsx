import React, { Component } from 'react';
import { Card, Button, CardFooter } from 'framework7-react';
import I18n from '../../i18n';

export default class MessageComponent extends Component {
  render() {
    const arrayMessage = typeof this.props.event.message === 'string' ? 
                           this.props.event.message.split('.') :  
                           this.props.event.message;
    const event = arrayMessage.reduce((previous, key) => previous[key], I18n.events);                       
    
    return <Card title={event.name} content={event.description}>
      <CardFooter>
        <Button style={{width: '100%'}}
                text={I18n.events.shared.ok} 
                onClick={() => { this.props.event.onFinish() }} />
      </CardFooter>
    </Card>
  }
}
