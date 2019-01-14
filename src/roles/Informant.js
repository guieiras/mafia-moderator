import discovery from "../engine/events/discovery";

export default ({
  id: 'informant',
  aliases: ['investigator'],
  count: { min: 0, max: 1 },
  actions: {
    'd1-t2': discovery('informant', 'wakeup', {
      afterResolve: (result) => {
        result.actions.showMessage('informationDetails');
      }
    })
  }
});
