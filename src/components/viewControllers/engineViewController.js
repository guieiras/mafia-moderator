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

  async showPopup(popupBuilder) {
    return (new Promise((resolve) => {
      const uid = uuid();
      const { popups } = this.view.state;
      popups.push(popupBuilder(uid, (result) => {
        const { popups } = this.view.state;
        this.view.setState({ popups: popups.filter((popup) => popup.uid !== uid) });
        resolve(result);
      }));
      this.view.setState({ popups });
    }));
  }

  async selectFrom(id, players, count, acceptNull, helpers) {
    return this.showPopup((uid, onFinish) => ({
      type: 'Target',
      id, players, count, uid, acceptNull, helpers, onFinish
    }));
  }

  async showMessage(id, helpers, igniteAfter) {
    return this.showPopup((uid, onFinish) => ({
      type: 'Message', uid, id, helpers, onFinish: () => {
        onFinish();
        if(igniteAfter) { this.engine.ignite(); }
      }
    }));
  }

  async showList(id, list, translator, igniteAfter) {
    return this.showPopup((uid, onFinish) => ({
      type: 'MessageList', uid, id, list, translator, helpers: [],
      onFinish: () => {
        onFinish();
        if(igniteAfter) { this.engine.ignite(); }
      }
    }));
  }
}
