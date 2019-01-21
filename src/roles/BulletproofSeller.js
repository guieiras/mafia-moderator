import discovery from '../engine/events/discovery'
import { kill } from '../engine/player'

export default ({
  id: 'bulletproofSeller',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t6': discovery('bulletproofSeller'),
    't6': {
      name: 'bulletproofGiveaway',
      async activate ({ players }, { stack, actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'bulletproofGiveaway',
          players: players.filter((player) => player.state.live && player.state.targetable && player.id !== role.players[0].id)
        })

        return { event: this, origin: role.players[0], targets, stack }
      },
      resolve (result, { stack }) {
        result.targets[0].emblems.push({ type: 'bulletproofSeller', until: { time: 15 } })

        stack.push({
          on: 't9',
          event: {
            name: 'bulletproofProtection',
            resolve () {
              const mafia = result.stack.state.filter((activation) =>
                ((activation.targets && activation.targets[0] && activation.targets[0].id) === result.targets[0].id) &&
                activation.event.name === 'mafiaKill' &&
                !activation.negatedBy
              )

              mafia.forEach((event) => {
                event.negatedBy = result.origin
                stack.push({
                  on: 't15',
                  targets: result.targets,
                  event: {
                    name: 'bulletproofEnd',
                    resolve () {
                      if (event.negatedBy.id === result.origin.id) {
                        kill(event.targets[0])
                      }
                    }
                  }
                })
              })
            }
          }
        })
      }
    }
  }
})
