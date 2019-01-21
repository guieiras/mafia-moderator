import discovery from '../engine/events/discovery'

export default ({
  id: 'vampire',
  aliases: ['mythic'],
  count: { min: 0, max: 1 },
  actions: {
    'd1-t6': discovery('vampire'),
    't6': {
      name: 'vampireBite',
      async activate ({ players }, { actions }, { role }) {
        const validPlayers = players.filter((player) => player.state.live &&
                             player.state.targetable &&
                             player.id !== role.players[0].id &&
                             !player.emblems.some((emblem) => emblem.type === 'vampire'))

        if (validPlayers.length > 0) {
          const targets = await actions.getTargets({
            id: 'vampireBite',
            players: validPlayers
          })

          return { on: 't10', event: this, origin: role.players[0], targets, tags: ['negative'] }
        } else {
          await actions.showMessage('vampireNoTargets')
          return { event: { resolve: () => {} }, origin: role, targets: [] }
        }
      },
      resolve (result, { dailyReport }) {
        result.targets.forEach(target => {
          dailyReport.push({ action: 'BittenByVampire', player: target })
          target.emblems.push({ type: 'vampire' })
        })
      }
    }
  },
  win: (state) => {
    const bittenPlayers = state
      .players
      .filter((player) => player.state.live && player.emblems.some((emblem) => emblem.type === 'vampire'))

    return state.clock.time === 12 && bittenPlayers.length === 3
  }
})
