import discovery from "../engine/events/discovery";
import { kill } from "../engine/player";

export default ({
  id: 'narrator',
  actions: {
    'd1-t1': discovery('Narrator', null, {
      afterResolve: (result) => {
        result.targets[0].state = { exclude: true };
      }
    }),
    't9': {
      name: 'playerLynch',
      async activate({ players }, { actions }) {
        const targets = await actions.getTargets({
          id: 'playerLynch',
          players: players.filter((player) => player.state.voted),
          acceptNull: true,
        });

        return { event: this, origin: null, targets };
      },
      resolve(result) {
        result.targets.forEach(target => { kill(target); });
      }
    }
  }
});
