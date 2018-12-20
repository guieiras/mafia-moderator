import React, { Component } from 'react';
import { Page, Navbar } from 'framework7-react';
import roles from '../../roles';
import storage from '../../boundaries/storage';

export default class RolesSelectionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    storage.currentGame.fetch().then((currentGame) => {
      this.setState({ currentGame });
    });
  }

  render() {
    return <Page>
      <Navbar backLink="Voltar" backLinkForce={true} title="Selecionar Papéis"></Navbar>
    </Page>
  }
}
