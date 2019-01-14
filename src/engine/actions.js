export default class EngineActions {
  constructor(engine) {
    this.engine = engine;
  }

  async getTargets({ id = 'genericTarget', count = 1, players, acceptNull = false, helpers = [] }) {
    return await this.engine.view.selectFrom(id, players, count, acceptNull, helpers);
  }

  async showMessage(id, helpers = []) {
    return await this.engine.view.showMessage(id, helpers);
  }
}
