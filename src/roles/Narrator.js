import discovery from "../engine/events/discovery";

export default ({
  id: 'narrator',
  actions: {
    'd1-t1': discovery('Narrator', null, {
      afterResolve: (result) => {
        result.targets[0].state = { exclude: true };
      }
    })
  }
});
