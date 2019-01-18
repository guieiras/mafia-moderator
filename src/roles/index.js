import Angel from './Angel';
import Assassin from './Assassin';
import Bodyguard from './Bodyguard';
import Corrupt from './Corrupt';
import Detective from './Detective';
import Hunter from './Hunter';
import Informant from './Informant';
import Kidnapper from './Kidnapper';
import Princess from './Princess';
import Suspect from './Suspect';

const roles = [
  Angel,
  Assassin,
  Bodyguard,
  Corrupt,
  Detective,
  Hunter,
  Informant,
  Kidnapper,
  Princess,
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
