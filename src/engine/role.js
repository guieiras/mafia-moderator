import roles from '../roles';

export default class Role {
  constructor(base, amount) {
    this.roleId = base;
    this.base = typeof base === 'string' ? roles.find(base) : base;
    this.players = new Array(amount);
  }

  get actions() {
    return this.base.actions || {};
  }
}
