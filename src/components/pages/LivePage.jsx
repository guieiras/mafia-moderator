import React, { Component } from 'react';
import { Navbar, Page, Button, Card, CardContent } from 'framework7-react';
import { observer } from 'mobx-react';
import storage from '../../boundaries/storage';
import Engine from '../../engine';
import EngineViewController from '../viewControllers/engineViewController';
import TargetComponent from '../singles/TargetComponent';

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
      <Navbar title="Jogo" />
      <p>{JSON.stringify(this.controller.state)}</p>
      {
        this.state.targets.map((target, i) => <TargetComponent key={i} event={target} />)
      }
      <div>
        {
          this.controller.state.stack.map((stack, i) => <Card key={i} title={stack.event.name}>
            <CardContent>
              
            </CardContent>
          </Card>)
        }
      </div>
      <Button fill onClick={() => { this.controller.engine.iterate() }}>Avançar</Button>
    </Page>
  }
});
