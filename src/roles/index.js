import Assassin from './Assassin';
import Bodyguard from './Bodyguard';
import Detective from './Detective';
import Informant from './Informant';
import Angel from './Angel';

const roles = [
  Angel,
  Assassin,
  Bodyguard,
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
