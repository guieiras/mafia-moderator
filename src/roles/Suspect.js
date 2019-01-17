import discovery from "../engine/events/discovery";

export default ({
  id: 'suspect',
  count: { min: 0, max: 1 },
  actions: {
    'd1-t2': discovery('suspect', 'silent')
  },
  hooks: {
    onTarget: (activation) => {
      if (activation.event.name === 'investigation') {
        activation.actFn = () => true
      }
    }
  }
});
