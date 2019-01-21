export default ({
  id: 'informant',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t2': {
      name: 'informatingDetails',
      async activate (_, { actions }) {
        await actions.showMessage('informationDetails', [])

        return { event: { resolve: () => { } } }
      }
    }
  }
})
