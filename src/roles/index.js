import Angel from './Angel';
import Assassin from './Assassin';
import Barman from './Barman';
import Bodyguard from './Bodyguard';
import BulletproofSeller from './BulletproofSeller';
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
  Barman,
  Bodyguard,
  BulletproofSeller,
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
