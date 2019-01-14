import Assassin from './Assassin';
import Detective from './Detective';

const roles = [
  Assassin,
  Detective,
];

export default new class RoleManager {
  all() {
    return roles;
  }

  find(roleId) {
    return roles.filter((role) => role.id === roleId)[0];
  }
}();
