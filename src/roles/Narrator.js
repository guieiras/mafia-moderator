import discovery from "../engine/events/discovery";
import WakeUpTranslator from "../engine/translators/wakeup";
import { kill } from "../engine/player";

export default ({
  id: 'narrator',
  actions: {
    'd1-t1': discovery('narrator', 'narrator', {
      afterResolve: (result) => {
        result.targets[0].state = { exclude: true };
      }
    }),
    't11': {
      name: 'cityWakeUp',
      async activate(_, { actions, dailyReport }) {
        await actions.showList('cityWakeUp', dailyReport, WakeUpTranslator, true);

        return { event: { resolve: () => {} } };
      }
    },
    't13': {
      name: 'playerLynch',
      async activate({ players }, { actions }) {
        const targets = await actions.getTargets({
          id: 'playerLynch',
          players: players.filter((player) => player.state.votable),
          acceptNull: true,
        });

        return { event: this, origin: null, targets };
      },
      resolve(result) {
        result.targets.forEach(target => { kill(target); });
      }
    }
  },
  win(state) {
    const assassins = state.players.filter((player) => player.role && player.role.id === 'assassin');

    return assassins.length > 0 &&
           assassins.filter((player) => player.state.live).length === 0;
  }
});
