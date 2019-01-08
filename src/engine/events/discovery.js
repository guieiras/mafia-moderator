export default function discovery(id, scope, hooks) {
  return {
    name: `discovery${id}`,
    async activate({ players }, { actions }, { role }) {
      const targets = await actions.getTargets({
        id: `discover${id}`,
        count: role.length, 
        players: scope ? scope(players) : players 
      });

      return { event: this, origin: role, target: targets[0] };
    },
    resolve(result) {
      if (hooks && hooks.beforeResolve) { hooks.beforeResolve(result) }
      result.origin.players = [result.target];
      result.target.role = result.origin.roleId.id;
      if (hooks && hooks.afterResolve) { hooks.afterResolve(result) }
    }
  }
  
}
