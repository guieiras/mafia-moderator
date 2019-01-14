import Assassin from './Assassin';
import Detective from './Detective';
import Informant from './Informant';
import Angel from './Angel';

const roles = [
  Angel,
  Assassin,
  Detective,
  Informant,
];

export default new class RoleManager {
  all() {
    return roles;
  }

  find(roleId) {
    return roles.filter((role) => role.id === roleId)[0];
  }
}();
