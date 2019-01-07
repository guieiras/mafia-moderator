import React, { Component } from 'react';
import { Card, CardContent, Block, Button, Row, Col } from 'framework7-react';
import I18n from '../../i18n';
import MultiTargetComponent from './MultiTargetComponent';

export default class TargetComponent extends Component {
  render() {
    return <Card title={I18n['events'][this.props.event.id]['name']}>
      <CardContent>
        <Block>
          <p>{I18n['events'][this.props.event.id]['description']}</p>
        </Block>
        <Row style={{marginTop: '30px'}}>
          {
            this.props.event.count === 1 ?
              this.props.event.players.map(player => <Col key={player.id} width='50'style={{ marginTop: '10px' }}>
                <Button outline
                  text={player.name} 
                  onClick={() => { this.props.event.onFinish([player]) }} 
                />
              </Col>) :
              <MultiTargetComponent event={this.props.event} />
          }
        </Row>
      </CardContent>
    </Card>
  }
}
