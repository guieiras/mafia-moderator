import React, { Component } from 'react';
import { Page, Navbar, List, ListItem, BlockTitle, Stepper } from 'framework7-react';
import roles from '../../roles';
import storage from '../../boundaries/storage';

export default class RolesSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.onStepperChange = this.onStepperChange.bind(this);
    this.state = {
      currentGame: { players: [] },
      currentRoles: roles.reduce((memo, role) => {
        memo[role.id] = role.count.min;
        return memo;
      }, {})
    };
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
      <BlockTitle>Selecionados: {this.currentRoles}/{this.state.currentGame.players.length}</BlockTitle>
      <List>
        {
          roles.map((role) => <ListItem key={role.id} title={role.name}>
            <Stepper
              value={this.state.currentRoles[role.id]}
              min={role.count.min} max={role.count.max}
              inputReadonly
              onStepperChange={this.onStepperChange(role.id)}
              step={1} small slot="after" />
          </ListItem>)
        }
      </List>
    </Page>
  }
}
