import React, { Component } from 'react';
import { Navbar, Page, Popup, Button, Block, NavRight, Link } from 'framework7-react';
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
    super(props)
    this.state = { popups: [], menuOpened: false }
    this.controller = null
  }

  componentDidMount() {
    storage.currentGame.fetch().then((game) => {
      this.game = game
      new Engine(game, (engine) => {
        this.controller = new EngineViewController(this, engine)
        engine.bindView(this.controller)
        this.forceUpdate()
        this.controller.engine.ignite()
      })
    })
  }

  closeMenu() {
    this.setState({ menuOpened: false })
  }

  resetGame() {
    this.$f7router.refreshPage()
  }

  resetToPlayers() {
    this.closeMenu()
    storage.currentGame.save(null).then(() => {
      this.$f7router.navigate('/')
    })
  }

  resetToRoles() {
    this.closeMenu()
    storage.currentGame.save({ players: this.game.players }).then(() => {
      this.$f7router.navigate('/roles')
    })
  }

  render() {
    if (!this.controller) { return <Page><p>{I18n.pages.live.loading}</p></Page> }
    return <Page>
      <Navbar title={I18n.pages.shared.title}>
        <NavRight>
          <Link onClick={() => this.setState({ menuOpened: true })} iconF7="menu"/>
        </NavRight>
      </Navbar>

      <ActionTracker actions={this.state.popups} />
      <Clock clock={this.controller.state.clock} />
      <PlayersTracker players={this.controller.state.players} />
      <Popup opened={this.state.menuOpened} onPopupClosed={() => this.closeMenu}>
        <Page>
          <Navbar title={I18n.pages.live.menu.title} />
          <Block>
            <p>
              <Button raised popupClose>{I18n.pages.live.menu.backToGame}</Button>
            </p>
            <p>
              <Button raised onClick={() => this.resetGame()}>{I18n.pages.live.menu.reset}</Button>
            </p>
            <p>
              <Button raised onClick={() => this.resetToPlayers()}>{I18n.pages.live.menu.backToPlayers}</Button>
            </p>
            <p>
              <Button raised onClick={() => this.resetToRoles()}>{I18n.pages.live.menu.backToRoles}</Button>
            </p>
          </Block>
        </Page>
      </Popup>
    </Page>
  }
});
