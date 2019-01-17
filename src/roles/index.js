import Angel from './Angel';
import Assassin from './Assassin';
import Bodyguard from './Bodyguard';
import Detective from './Detective';
import Kidnapper from './Kidnapper';
import Informant from './Informant';
import Suspect from './Suspect';

const roles = [
  Angel,
  Assassin,
  Bodyguard,
  Detective,
  Kidnapper,
  Informant,
  Suspect,
];

export default new class RoleManager {
  all() {
    return roles;
  }

  find(roleId) {
    return roles.filter((role) => role.id === roleId)[0];
  }
}();
