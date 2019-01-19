import I18n from '../../i18n';

export default function discovery(id, method = 'wakeup', hooks = {}) {
  return {
    name: `discovery${id}`,
    async activate({ players }, { actions }, { role }) {
      if (hooks.beforeActivate) { await hooks.beforeActivate(...arguments); }
      const targets = await actions.getTargets({
        id: `discover.${method}${role.players.length > 1 ? '.plural' : '.singular'}`,
        count: role.players.length,
        players: players.filter((player) => !player.role),
        helpers: [I18n.roles[role.id]]
      });

      return { event: this, origin: role, targets, actions, on: 'push' };
    },
    resolve(result) {
      if (hooks.beforeResolve) { hooks.beforeResolve(result) }
      result.origin.players = result.targets;
      result.targets.forEach((target) => { target.role = result.origin });
      if (hooks.afterResolve) { hooks.afterResolve(result) }
    }
  }

}
