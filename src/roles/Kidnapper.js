import discovery from "../engine/events/discovery";

export default ({
  id: 'kidnapper',
  aliases: ['mafia'],
  count: { min: 0, max: 1 },
  actions: {
    'd1-t5': discovery('kidnapper'),
    't5': {
      name: 'kidnapping',
      async activate({ players }, { actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'kidnapTarget',
          players: players.filter((player) => player.state.live && player.state.targetable && player.id !== role.players[0].id)
        });

        targets.forEach((target) => {
          target.emblems.push({ type: 'kidnapper', until: { time: 10 } });
        });

        return { on: 't10', event: this, origin: role.players[0], targets, tags: ['negative'] };
      },
      resolve(result, { stack, dailyReport }) {
        result.targets.forEach(target => {
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
        });
      }
    }
  }
});
