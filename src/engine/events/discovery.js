import I18n from '../../i18n';

export default function discovery(id, method = 'wakeup', hooks) {
  return {
    name: `discovery${id}`,
    async activate({ players }, { actions }, { role }) {
      const targets = await actions.getTargets({
        id: `discover.${method}`,
        count: role.players.length, 
        players: players.filter((player) => !player.role),
        helpers: [I18n.roles[role.id]]
      });

      return { event: this, origin: role, targets, on: 'push' };
    },
    resolve(result) {
      if (hooks && hooks.beforeResolve) { hooks.beforeResolve(result) }
      result.origin.players = result.targets;
      result.targets.forEach((target) => { target.role = result.origin });
      if (hooks && hooks.afterResolve) { hooks.afterResolve(result) }
    }
  }
  
}
