import Vigilant from '../Vigilant';
import discovery from '../../engine/events/discovery';

const mafiaVigilant = Object.assign({}, Vigilant, {
  id: 'mafiaVigilant'
});

mafiaVigilant.actions["d1-t7"] = discovery('mafiaVigilant');

export default mafiaVigilant;
