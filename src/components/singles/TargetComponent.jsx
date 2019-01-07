import React, { Component } from 'react';
import { Card } from 'framework7-react';

export default class TargetComponent extends Component {
  render() {
    return <Card title={this.props.event.id}>
    </Card>
  }
}
