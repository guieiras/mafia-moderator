import React, { Component } from 'react';
import { BlockTitle, Icon, List, ListItem } from 'framework7-react';
import I18n from '../../i18n';
import { observer } from 'mobx-react';

export default observer(class PlayersTracker extends Component {
  colorFor(state) {
    if(!state.live) { return 'red'; } 
    return null; 
  }
  render() {
    return <div>
      <BlockTitle>{I18n.pages.live.players.title}</BlockTitle>
      <List>
        { 
          this.props.players
            .filter((player) => !player.state.exclude)
            .map((player) => <ListItem key={player.id} 
                                       title={player.name} 
                                       footer={I18n.roles[(player.role && player.role.id) || 'unknown']}
                                       textColor={this.colorFor(player.state)}> 
                                <Icon slot="media" f7="person_round" />
                              </ListItem>)
        }
      </List>
    </div>
  }
});
