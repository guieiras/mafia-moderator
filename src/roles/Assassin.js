import discovery from "../engine/events/discovery";

export default ({
  id: 'assassin',
  count: { min: 1, max: 3 },
  actions: {
    'd1-t4': discovery('Assassin'),
    't4': {
      name: 'mafiaKill',
      async activate({ players }, { actions }, { role }) {
        const targets = await actions.getTargets({
          players: players.filter((player) => player.state.live)
        });

        return { event: this, origin: role, targets };
      },
      resolve(result) {
      }
    }
  }
});
