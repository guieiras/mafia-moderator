import React, { Component } from 'react';
import { Card, CardContent, Block, Button, Row, Col } from 'framework7-react';
import I18n from '../../i18n';

export default class TargetComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { selectedPlayers: [] };
  }

  target(player) {
    const { selectedPlayers } = this.state;
    selectedPlayers.push(player);
    this.setState({ selectedPlayers });

    if(this.props.event.count === this.state.selectedPlayers.length) {
      this.props.event.onFinish(this.state.selectedPlayers);
    } 
  }

  render() {
    const event = I18n.events[this.props.event.id] || { name: this.props.event.id };
    return <Card title={event.name}>
      <CardContent>
        <Block><p>{event.description}</p></Block>
        <Row style={{marginTop: '30px'}}>
          {
            this.props.event.players.map(player => <Col key={player.id} width='50'style={{ marginTop: '10px' }}>
              <Button outline 
                      text={player.name} 
                      onClick={() => { this.target(player) }} 
                      disabled={this.state.selectedPlayers.filter((p) => p.id === player.id).length !== 0} />
            </Col>)
          }
          { 
            this.props.event.acceptNull && <Col width='50' style={{ marginTop: '10px' }}>
              <Button outline style={{fontStyle: 'italic'}} text={I18n.pages.live.players.nullPlayer}
                onClick={() => { this.target({ state: { } }) }} />
            </Col>
          }
        </Row>
      </CardContent>
    </Card>
  }
}
