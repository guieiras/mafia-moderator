export default class EngineActions {
  constructor(engine) {
    this.engine = engine;
  }

  async getTargets({ id = 'genericTarget', count = 1, players }) {
    return await this.engine.view.selectFrom(id, players, count);
  }
}
