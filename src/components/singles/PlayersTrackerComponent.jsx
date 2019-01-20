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
                                <div slot="after">
                                  { player.emblems.map((emblem, i) => <Icon key={i} icon={`game-icon game-icon-${I18n.emblems[emblem.type][1]}`} tooltip={I18n.emblems[emblem.type][0]} style={{marginRight: '5px'}} />)}
                                </div>
                              </ListItem>)
        }
      </List>
    </div>
  }
});
