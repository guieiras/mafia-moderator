import discovery from '../engine/events/discovery'

export default ({
  id: 'gangster',
  count: { min: 0, max: 3 },
  actions: {
    'd1-t2': discovery('gangster')
  },
  win: (state) => {
    const liveGangsters = state
      .players
      .filter((player) => player.state.live && player.role && player.role.id === 'gangster')

    return liveGangsters.length === 1 && [liveGangsters[0].name]
  }
})
