import discovery from '../engine/events/discovery'

export default ({
  id: 'friend',
  count: { min: 0, max: 3 },
  actions: {
    'd1-t2': discovery('friend')
  }
})
