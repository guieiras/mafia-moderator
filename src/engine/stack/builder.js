import I18n from "../../i18n";

export default function StackBuilder(engine) {
  return engine.state.roles.map((role) => ({
    event: {
      name: 'roleTrigger',
      resolve: async (activation, { actions, state }) => {
        const dayTimeAct = activation.origin.actions[`d${state.clock.date}-t${state.clock.time}`];
        const timeAct = activation.origin.actions[`t${state.clock.time}`];

        if ((dayTimeAct || timeAct) && !role.players.every((player) => player.state.live || player.state.exclude)) {
          return actions.showMessage('rolePlayersDead', [I18n.roles[role.id]])
        }

        if (timeAct && dayTimeAct) {
          let activation = await dayTimeAct.activate(engine.state, engine, { role });
          engine.stack.push(activation, false);

          if(activation.on === 'push') { engine.resolveNext(false); }

          activation = await timeAct.activate(engine.state, engine, { role });
          engine.stack.push(activation);
        } else {
          [dayTimeAct, timeAct].forEach(async (act) => {
            if (act) {
              let activation = await act.activate(engine.state, engine, { role });
              engine.stack.push(activation);
            }
          });
        }
      }
    },
    origin: role,
    target: null,
  }))
}
