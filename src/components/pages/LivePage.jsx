import React, { Component } from 'react';
import { Navbar, Page } from 'framework7-react';
import { observer } from 'mobx-react';
import storage from '../../boundaries/storage';
import Engine from '../../engine';

export default observer(class LivePage extends Component {
  constructor(props) {
    super(props);
    this.engine = null;
  }
  
  componentDidMount() {
    storage.currentGame.fetch().then((game) => {
      this.engine = new Engine(game);
      this.forceUpdate()
    });
  }

  render() {
    if (!this.engine) { return <Page><p>Carregando</p></Page> }
    return <Page>
      <Navbar title="Jogo" />
      <p>{JSON.stringify(this.engine.state)}</p>
    </Page>
  }
});
