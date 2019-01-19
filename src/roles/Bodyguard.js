import discovery from "../engine/events/discovery";

export default ({
  id: 'bodyguard',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t6': discovery('bodyguard'),
    't6': {
      name: 'protection',
      async activate({ players }, { stack, actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'bodyProtection',
          players: players.filter((player) => player.state.live && player.state.targetable && player.id !== role.players[0].id)
        });

        return { event: this, origin: role.players[0], targets, stack };
      },
      resolve(result, { stack }) {
        result.targets[0].emblems.push({ type: 'bodyguard', until: { time: 10 } });

        stack.push({
          on: 't8',
          event: {
            name: 'bodyguardProtection',
            resolve() {
              const mafia = result.stack.state.filter((activation) =>
                ((activation.targets && activation.targets[0] && activation.targets[0].id) === result.targets[0].id) &&
                activation.event.name === 'mafiaKill'
              );

              mafia.forEach((event) => event.targets = [result.origin]);
            }
          }
        })
      }
    }
  }
});
