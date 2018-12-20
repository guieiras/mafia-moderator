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
  SwipeoutActions,
  SwipeoutButton,
  Block,
} from 'framework7-react';
import uuid from 'uuid/v1';
import database from '../../database';

export default class StartPage extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPlayer: '', players: [], selectedPlayers: {} };
    this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addPlayer = this.addPlayer.bind(this);
    this.removePlayer = this.removePlayer.bind(this);
  }

  componentDidMount() {
    this.loadPlayers();
  }

  get selectedPlayers() {
    return Object
      .keys(this.state.selectedPlayers)
      .filter((key) => this.state.selectedPlayers[key]);
  }

  loadPlayers() {
    return database.players.toCollection().sortBy('name').then((players) => {
      this.setState({ players });
    });
  }

  addPlayer() {
    const { currentPlayer } = this.state;
    database.players
      .add({ id: uuid(), name: currentPlayer })
      .then(() => { this.loadPlayers(); })
      .then(() => { this.setState({ currentPlayer: '' }); });
  }

  removePlayer(playerId) {
    return () => {
      const { selectedPlayers } = this.state;
      delete selectedPlayers[playerId];

      database.players.delete(playerId)
        .then(() => { this.loadPlayers(); })
        .then(() => { this.setState({ selectedPlayers }); });
    }
  }

  handleChange(playerId) {
    return () => {
      const { selectedPlayers } = this.state;
      selectedPlayers[playerId] = !selectedPlayers[playerId];

      this.setState({ selectedPlayers });
    }
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
            <ListItem key={player.id} title={player.name} onClick={this.handleChange(player.id)} className="player-item" swipeout>
              <Icon slot="media" f7={this.state.selectedPlayers[player.id] ? 'check_round_fill' : 'circle'} color="blue" />

              <SwipeoutActions right>
                <SwipeoutButton color="red" onClick={this.removePlayer(player.id)}>Remover</SwipeoutButton>
              </SwipeoutActions>
            </ListItem>)
        }
        <ListInput type="text" placeholder="Novo Jogador" inputStyle={{width: '90%'}} onInput={this.handleInput}>
          <Button fill color="green" slot="inner-end" className="player-button" onClick={this.addPlayer}>
            <Icon f7="add"></Icon>
          </Button>
        </ListInput>
      </List>
      <Block>
        <Button fill disabled={this.selectedPlayers.length < 6}>Iniciar Jogo</Button>
      </Block>
    </Page>
  }
}
