export default class EngineActions {
  constructor (engine) {
    this.engine = engine
  }

  async getTargets ({ id = 'genericTarget', count = 1, players, acceptNull = false, helpers = [] }) {
    return this.engine.view.selectFrom(id, players, count, acceptNull, helpers)
  }

  async showMessage (id, helpers = [], igniteAfter = true) {
    return this.engine.view.showMessage(id, helpers, igniteAfter)
  }

  async showList (message, list, translate, igniteAfter = true) {
    return this.engine.view.showList(message, list, translate, igniteAfter)
  }
}
