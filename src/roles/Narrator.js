import discovery from "../engine/events/discovery";

export default ({
  id: 'narrator',
  name: 'Narrador',
  actions: {
    'd1-t0': discovery('Narrator')
  }
});
