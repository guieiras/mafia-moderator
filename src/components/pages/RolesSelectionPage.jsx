import React, { Component } from 'react';
import { Page, Navbar, List, ListItem, BlockTitle, Stepper, Button, Block } from 'framework7-react';
import RoleManager from '../../roles';
import I18n from '../../i18n';
import storage from '../../boundaries/storage';

export default class RolesSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.onStepperChange = this.onStepperChange.bind(this);
    this.persistRoles = this.persistRoles.bind(this);
    this.state = {
      currentGame: { players: [] },
      currentRoles: RoleManager.all().reduce((memo, role) => {
        memo[role.id] = role.count.min;
        return memo;
      }, {})
    };
  }

  persistRoles() {
    const { currentGame, currentRoles } = this.state;
    currentGame.roles = Object.keys(currentRoles).reduce((memo, roleId) => {
      if (currentRoles[roleId] > 0) { memo[roleId] = currentRoles[roleId]; }

      return memo;
    }, {});

    storage.currentGame.save(currentGame).then(() => {
      this.$f7router.navigate("/live");
    });
  }

  componentDidMount() {
    storage.currentGame.fetch().then((currentGame) => {
      this.setState({ currentGame });
    });
  }

  get currentRoles() {
    return Object.keys(this.state.currentRoles).reduce((memo, role) => {
      return memo + this.state.currentRoles[role];
    }, 0);
  }

  onStepperChange(roleId) {
    return (event) => {
      const { currentRoles } = this.state;
      currentRoles[roleId] = event;

      this.setState({ currentRoles });
    }
  }

  render() {
    return <Page>
      <Navbar backLink="Voltar" backLinkForce={true} title="Selecionar Papéis" />
      <List>
        {
          RoleManager.all().map((role) => <ListItem key={role.id} title={I18n['roles'][role.id]}>
            <Stepper
              value={this.state.currentRoles[role.id]}
              min={role.count.min} max={role.count.max}
              inputReadonly
              onStepperChange={this.onStepperChange(role.id)}
              step={1} small slot="after" />
          </ListItem>)
        }
        <ListItem title="Papéis sem ação" style={{ fontStyle: 'italic' }}>
          <Stepper
            value={this.state.currentGame ? this.state.currentGame.players.length - this.currentRoles - 1 : 0}
            disabled={true}
            inputReadonly
            small slot="after" />
        </ListItem>
      </List>
      <Block>
        <Button fill onClick={this.persistRoles}>Iniciar Jogo</Button>
      </Block>
    </Page>
  }
}
