/* global localStorage */
const abstractlocalStorage = function (key) {
  return {
    fetch () {
      const stored = localStorage.getItem(key)

      if (!stored) { return Promise.resolve(null) }

      try {
        const parsedJson = JSON.parse(stored)
        return Promise.resolve(parsedJson)
      } catch (error) {
        return Promise.reject(new Error('Failed to parse localStorage'))
      }
    },

    save (object) {
      return Promise.resolve(localStorage.setItem(key, JSON.stringify(object)))
    }
  }
}

export default ({
  currentGame: abstractlocalStorage('currentGame')
})
