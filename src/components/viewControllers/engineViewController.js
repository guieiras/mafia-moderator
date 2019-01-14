import uuid from 'uuid/v1';

export default class EngineViewController {
  constructor(view, engine) {
    this.view = view;
    this.engine = engine;
  }

  isWaitingForActions() {
    return this.view.state.popups.length !== 0;
  }

  get state() {
    return this.engine.state;
  }

  async selectFrom(id, players, count, acceptNull, helpers) {
    return (new Promise((resolve) => {
      const uid = uuid();
      const { popups } = this.view.state;
      popups.push({ 
        type: 'Target',
        id, players, count, uid, acceptNull, helpers,
        onFinish: (selectedTargets) => { 
          const { popups } = this.view.state;
          this.view.setState({ popups: popups.filter((popup) => popup.uid !== uid) });
          resolve(selectedTargets);
        } 
      });
      this.view.setState({ popups });
    }));
  }

  async showMessage(message, object) {
    return (new Promise((resolve) => {
      const uid = uuid();
      const { popups } = this.view.state;
      popups.push({ 
        type: 'Message',
        message,
        object,
        onFinish: (selectedTargets) => { 
          const { popups } = this.view.state;
          this.view.setState({ popups: popups.filter((popup) => popup.uid !== uid) });
          resolve(selectedTargets);
        } 
      });
      this.view.setState({ popups });
    }));
  }

}
