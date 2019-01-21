import uuid from 'uuid/v1'

export default function Player ({ id, name }) {
  return {
    id,
    name,
    role: null,
    emblems: [],
    hooks: {
      onOrigin: {},
      onTarget: {}
    },
    state: {
      exclude: false,
      live: true,
      targetable: true,
      votable: true
    },
    _type: 'Player'
  }
}

export function kill (player) {
  player.state.live = false
  player.state.targetable = false
  player.state.votable = false
}

export function hook (moment, player, { handler, until }) {
  const id = uuid()
  player.hooks[moment][id] = handler

  return {
    on: until,
    event: {
      name: 'negateRollback',
      resolve: () => {
        delete player.hooks[moment][id]
      }
    }
  }
}
