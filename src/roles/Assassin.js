import discovery from "../engine/events/discovery";

export default ({
  id: 'assassin',
  count: { min: 1, max: 3 },
  actions: {
    'd1-t4': discovery('Assassin')
  }
});
