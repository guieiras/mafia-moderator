import discovery from '../engine/events/discovery'

export default ({
  id: 'princess',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t2': discovery('princess', 'silent')
  },
  hooks: {
    onTarget: (activation) => {
      if (activation.event.name === 'playerLynch') {
        activation.negatedBy = activation.targets[0]
        activation.targets[0].state.votable = false
      }
    }
  }
})
