/* eslint-disable */
import React from 'react'
import { App, View, Statusbar } from 'framework7-react'

import routes from '../routes'

export default function (props) {
  // Framework7 parameters here
  const f7params = {
    id: 'com.guieiras.mafiamoderator',
    name: 'Mafia Moderator',
    theme: 'auto',
    routes
  }

  return (
    <App params={f7params}>
      <Statusbar />
      <View id="main-view" url="/" main className="ios-edges"/>
    </App>
  )
};
