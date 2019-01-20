import discovery from "../engine/events/discovery";

export default ({
  id: 'kidnapper',
  aliases: ['mafia'],
  count: { min: 0, max: 1 },
  actions: {
    'd1-t6': discovery('kidnapper'),
    't6': {
      name: 'kidnapping',
      async activate({ players }, { actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'kidnapTarget',
          players: players.filter((player) => player.state.live && player.state.targetable && player.id !== role.players[0].id)
        });

        return { event: this, origin: role.players[0], targets };
      },
      resolve(result, { stack, dailyReport }) {
        result.targets.forEach(target => {
          target.emblems.push({ type: 'kidnapper', until: { time: 10 } });
          stack.push({
            on: 't10',
            tags: ['negative'],
            event: {
              name: 'kidnap',
              resolve() {
                if (target.state.live) {
                  target.emblems.push({ type: 'kidnapper', until: { time: 1 } });
                  dailyReport.push({ action: 'Kidnapped', player: target });
                  let originalValue = target.state.votable;
                  target.state.votable = false;
                  stack.push({ on: 't1', event: {
                    name: 'kidnapRollback',
                    resolve: () => { target.state.votable = originalValue; }
                  } });
                }
              }
            }
          });
        });
      }
    }
  }
});
