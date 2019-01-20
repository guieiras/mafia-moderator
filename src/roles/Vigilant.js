import uuid from "uuid/v1";
import discovery from "../engine/events/discovery";

export default ({
  id: 'vigilant',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t1': {
      name: 'targetSpy',
      async activate({ players }, _engine, { role }) {
        return { event: this, origin: role, targets: [], players };
      },
      resolve(result) {
        result.players.forEach((player) => {
          player.hooks.onTarget[uuid()] = (event) => {
            if(event.origin && event.origin._type === 'Player' && event.event.name !== 'vigilance') {
              result.origin.spy[player.id] = result.origin.spy[player.id] || [];
              result.origin.spy[player.id].push(event.origin);
            }
          }
        });
      }
    },
    't1': {
      name: 'vigilanceReset',
      activate(_state, _engine, { role }) {
        return { event: this, role };
      },
      resolve(result) {
        result.role.spy = {};
      }
    },
    'd1-t7': discovery('vigilant'),
    't7': {
      name: 'vigilance',
      async activate({ players }, { actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'vigilance',
          players: players.filter((player) => player.state.targetable)
        });

        return { event: this, origin: role.players[0], targets, role };
      },
      resolve(result, { actions }) {
        actions.showMessage(
          'vigilanceResult',
          [
            result.targets[0].name,
            (result.role.spy[result.targets[0].id] || []).map((player) => player.name).join(', ')
          ]
        );
      }
    },
  }
});
