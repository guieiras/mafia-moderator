import Vigilant from '../Vigilant';
import discovery from '../../engine/events/discovery';

const cityVigilant = Object.assign({}, Vigilant, {
  id: 'cityVigilant'
});

cityVigilant.actions["d1-t7"] = discovery('cityVigilant');

export default cityVigilant;
