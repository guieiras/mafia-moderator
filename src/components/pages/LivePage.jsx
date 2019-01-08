import React, { Component } from 'react';
import { Navbar, Page, Button } from 'framework7-react';
import { observer } from 'mobx-react';
import storage from '../../boundaries/storage';
import Engine from '../../engine';
import EngineViewController from '../viewControllers/engineViewController';

import ActionTracker from '../singles/ActionTrackerComponent';
import Clock from '../singles/ClockComponent';
import PlayersTracker from '../singles/PlayersTrackerComponent';
import StackTracker from '../singles/StackTrackerComponent';

export default observer(class LivePage extends Component {
  constructor(props) {
    super(props);
    this.state = { targets: [] };
    this.controller = null;
  }
  
  componentDidMount() {
    storage.currentGame.fetch().then((game) => {
      new Engine(game, (engine) => {
        this.controller = new EngineViewController(this, engine);
        engine.bindView(this.controller);
        this.forceUpdate();
      });
    });
  }

  render() {
    if (!this.controller) { return <Page><p>Carregando</p></Page> }
    return <Page>
      <Navbar title="Jogo Atual" />

      <ActionTracker actions={this.state.targets} />
      <StackTracker stack={this.controller.state.stack} />
      <Clock clock={this.controller.state.clock} />
      <PlayersTracker players={this.controller.state.players} />

      <Button fill onClick={() => { this.controller.engine.iterate() }}>Avançar</Button>
    </Page>
  }
});
