import React, { Component } from 'react';
import { Navbar, Page, BlockTitle, List, ListItem } from 'framework7-react';

export default class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      selectedPlayers: {}
    }
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
      </List>
    </Page>
  }
}
