import roles from '../roles';

export default class Role {
  constructor(base, amount) {
    this.base = typeof base === 'string' ? roles.find(base) : base;
    this.players = new Array(amount);
  }

  get id() {
    return this.base.id;
  }

  get actions() {
    return this.base.actions || {};
  }
}
