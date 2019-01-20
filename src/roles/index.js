import Angel from './Angel';
import Assassin from './Assassin';
import Barman from './Barman';
import Bodyguard from './Bodyguard';
import BulletproofSeller from './BulletproofSeller';
import Corrupt from './Corrupt';
import Detective from './Detective';
import Friend from './Friend';
import Gangster from './Gangster';
import Hunter from './Hunter';
import Informant from './Informant';
import Kidnapper from './Kidnapper';
import Princess from './Princess';
import Suspect from './Suspect';
import CityVigilant from './Vigilant/CityVigilant';
import MafiaVigilant from './Vigilant/MafiaVigilant';

const roles = [
  Angel,
  Assassin,
  Barman,
  Bodyguard,
  BulletproofSeller,
  CityVigilant,
  Corrupt,
  Detective,
  Friend,
  Gangster,
  Hunter,
  Informant,
  Kidnapper,
  MafiaVigilant,
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
