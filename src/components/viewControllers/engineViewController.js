export default class EngineViewController {
  constructor(view, engine) {
    this.view = view;
    this.engine = engine;
  }

  get state() {
    return this.engine.state;
  }

  selectFrom(id, players, count) {
    return new Promise((resolve, reject) => {
      const { targets } = this.view.state;
      targets.push({ id, players, count, onFinish: (targets) => { resolve(targets) } })
      this.view.setState({ targets });
    });
  }

}
