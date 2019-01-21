import discovery from '../engine/events/discovery'
import { kill } from '../engine/player'

export default ({
  id: 'hunter',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t2': discovery('hunter', 'silent'),
    't14': {
      name: 'hunterKill',
      dead: true,
      async activate ({ players }, { actions }, { role }) {
        if (!role.players[0].emblems.some((emblem) => emblem.type === 'hunter')) {
          return { event: { resolve: () => {} } }
        }

        const targets = await actions.getTargets({
          id: 'hunterKill',
          players: players.filter((player) => player.state.live && player.state.targetable && player.id !== role.players[0].id),
          acceptNull: true
        })

        return { event: this, origin: role.players[0], targets }
      },
      resolve (result) {
        kill(result.targets[0])
      }
    }
  },
  hooks: {
    onTarget: async (activation) => {
      if (activation.event.name === 'playerLynch') {
        activation.targets[0].emblems.push({
          type: 'hunter',
          until: { time: 15 }
        })
      }
    }
  }
})
