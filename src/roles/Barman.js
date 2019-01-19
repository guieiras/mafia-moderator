import discovery from "../engine/events/discovery";
import { hook } from "../engine/player";

export default ({
  id: 'barman',
  aliases: ['mafia'],
  count: { min: 0, max: 1 },
  actions: {
    'd1-t3': discovery('barman'),
    't3': {
      name: 'barmanMeeting',
      async activate({ players }, { actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'barmanMeeting',
          players: players.filter((player) => player.state.live && player.state.targetable && player.id !== role.players[0].id)
        });

        targets.forEach((target) => {
          target.emblems.push({ type: 'barman', until: { time: 11 } });
        });

        return { event: this, origin: role.players[0], targets, role };
      },
      resolve(result, { stack }) {
        result.targets.forEach(target => {
          stack.push(hook('onOrigin', target, {
            async handler(activation, { actions }) {
              activation.negatedBy = activation.origin;
              return await actions.showMessage('playerNegatedByBarman', [target.name, origin.name]);
            },
            until: 't11',
         }));
        });
      }
    }
  }
});
