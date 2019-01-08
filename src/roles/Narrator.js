import discovery from "../engine/events/discovery";

export default ({
  id: 'narrator',
  actions: {
    'd1-t0': discovery('Narrator', null, {
      afterResolve: (result) => {
        result.target.state.exclude = true;
      }
    })
  }
});
