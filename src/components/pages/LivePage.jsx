import React, { Component } from 'react';
import { Navbar, Page } from 'framework7-react';
import { observer } from 'mobx-react';

import storage from '../../boundaries/storage';
import Engine from '../../engine';
import EngineViewController from '../viewControllers/engineViewController';
import I18n from '../../i18n';

import ActionTracker from '../singles/ActionTrackerComponent';
import Clock from '../singles/ClockComponent';
import PlayersTracker from '../singles/PlayersTrackerComponent';

export default observer(class LivePage extends Component {
  constructor(props) {
    super(props);
    this.state = { popups: [] };
    this.controller = null;
  }

  componentDidMount() {
    storage.currentGame.fetch().then((game) => {
      new Engine(game, (engine) => {
        this.controller = new EngineViewController(this, engine);
        engine.bindView(this.controller);
        this.forceUpdate();
        this.controller.engine.ignite();
      });
    });
  }

  render() {
    if (!this.controller) { return <Page><p>{I18n.pages.live.loading}</p></Page> }
    return <Page>
      <Navbar title={I18n.pages.shared.title} />

      <ActionTracker actions={this.state.popups} />
      <Clock clock={this.controller.state.clock} />
      <PlayersTracker players={this.controller.state.players} />
    </Page>
  }
});
