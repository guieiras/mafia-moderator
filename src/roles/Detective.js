import discovery from "../engine/events/discovery";
import I18n from "../i18n";

export default ({
  id: 'detective',
  aliases: ['investigator'],
  count: { min: 0, max: 1 },
  actions: {
    'd1-t6': discovery('detective'),
    't6': {
      name: 'investigation',
      async activate({ players }, { actions }, { role }) {
        const targets = await actions.getTargets({
          id: 'detectiveInvestigation',
          players: players.filter((player) => player.state.live && player.state.targetable && player.id !== role.players[0].id)
        });

        return { event: this, origin: role.players[0], targets, actions, actFn: () => { return !!targets[0].role && targets[0].role.id === 'assassin' } };
      },
      resolve(result) {
        result.actions.showMessage(
          'detectiveInvestigationResult',
          [I18n.events.detectiveInvestigationResult.objects[JSON.stringify(result.actFn())]]
        );
      }
    }
  }
});
