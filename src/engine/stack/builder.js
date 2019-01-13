export default function StackBuilder(engine) {
  return engine.state.roles.map((role) => ({
    event: {
      name: 'roleTrigger',
      resolve: async (activation, { stack, state }) => {
        const dayTimeAct = activation.origin.actions[`d${state.clock.date}-t${state.clock.time}`];
        const timeAct = activation.origin.actions[`t${state.clock.time}`];
        
        if (timeAct) {
          let activation = await timeAct.activate(engine.state, engine, { role });
          engine.stack.push(activation);
        }
        
        if (dayTimeAct) {
          let activation = await dayTimeAct.activate(engine.state, engine, { role });
          engine.stack.push(activation);
        }
      }
    },
    origin: role,
    target: null,
  }))
}
