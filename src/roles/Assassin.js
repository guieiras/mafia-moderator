import discovery from "../engine/events/discovery";
import { kill } from "../engine/player";

export default ({
  id: 'assassin',
  aliases: ['mafia'],
  count: { min: 1, max: 3 },
  actions: {
    'd1-t5': discovery('assassin', 'assassin'),
    't5': {
      name: 'mafiaKill',
      async activate({ players }, { actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'mafiaKill',
          players: players.filter((player) => player.state.live)
        });

        targets[0].emblems.push({ type: 'mafia', until: { time: 10 } });

        return { on: 't10', event: this, origin: role, targets, tags: ['kill', 'negative'] };
      },
      resolve(result, { dailyReport }) {
        result.targets.forEach(target => {
          dailyReport.push({ action: 'MafiaKilled', player: target });
          kill(target);
        });
      }
    }
  },
  win: (state) => {
    const livePlayers = state.players.filter((player) => player.state.live);
    const assassinsCount = livePlayers.filter((player) => player.role && player.role.id === 'assassin').length;
    const playersCount = livePlayers.length;

    if (playersCount < 2) { return assassinsCount > 0 };
    if (playersCount === 3 && state.clock > 9) { return assassinsCount > 0 };

    return 2 * assassinsCount >= playersCount;
  }
});
