import React, { Component } from 'react';
import {
  BlockTitle,
  Button,
  Icon,
  List,
  ListInput,
  ListItem,
  Navbar,
  Page,
} from 'framework7-react';
import uuid from 'uuid/v1';

export default class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPlayer: '', players: [], selectedPlayers: {} };
    this.handleInput = this.handleInput.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
  }

  addPlayer() {
    const { currentPlayer, players } = this.state;
    players.push({ id: uuid(), name: currentPlayer })
    this.setState({ players });
  }

  handleInput(event) {
    this.setState({ currentPlayer: event.target.value });
  }

  render() {
    return <Page>
      <Navbar title="Cidade Dorme"></Navbar>
      <BlockTitle>Jogadores</BlockTitle>
      <List>
        {
          this.state.players.map((player) =>
            <ListItem checkbox key={player.id} checked={this.state.selectedPlayers[player.id]} title={player.name}>
            </ListItem>)
        }
        <ListInput type="text" placeholder="Novo Jogador" inputStyle={{width: '90%'}} onInput={this.handleInput}>
          <Button fill color="green" slot="inner-end" className="player-button" onClick={this.addPlayer}>
            <Icon f7="add"></Icon>
          </Button>
        </ListInput>
      </List>
    </Page>
  }
}
