import roles from '../roles';

export default class Role {
  constructor(roleId, amount) {
    this.roleId = roleId;
    this.role = roles.find(roleId);
    this.players = new Array(amount);
  }
}
