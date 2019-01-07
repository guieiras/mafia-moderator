import uuid from 'uuid/v1';

export default class EngineViewController {
  constructor(view, engine) {
    this.view = view;
    this.engine = engine;
  }

  get state() {
    return this.engine.state;
  }

  async selectFrom(id, players, count) {
    return (new Promise((resolve) => {
      const uid = uuid();
      const { targets } = this.view.state;
      targets.push({ 
        id, players, count, uid, 
        onFinish: (selectedTargets) => { 
          const { targets } = this.view.state;
          this.view.setState({ targets: targets.filter((target) => target.uid !== uid) });
          resolve(selectedTargets);
        } 
      });
      this.view.setState({ targets });
    }));
  }

}
