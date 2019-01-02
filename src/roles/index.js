import Assassin from './Assassin';

const roles = [
  Assassin,
];

export default new class RoleManager {
  all() {
    return roles;
  }

  find(roleId) {
    return roles.filter((role) => role.id === roleId)[0];
  }
}();
