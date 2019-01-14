import discovery from "../engine/events/discovery";

export default ({
  id: 'angel',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t5': discovery('angel'),
    't5': {
      name: 'blessing',
      async activate({ players }, { stack, actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'angelBlessing',
          players: players.filter((player) => player.state.live && player.state.targetable)
        });

        return { event: this, origin: role.players[0], targets, stack };
      },
      resolve(result) {
        const negativeEvents = result.stack.state.filter((ev) =>
          ((ev.targets && ev.targets[0].id) === result.targets[0].id) &&
          ev.tags.indexOf('negative') >= 0
        );

        negativeEvents.forEach((event) => event.negatedBy = result.event);
      }
    }
  }
});
