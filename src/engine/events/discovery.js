export default function discovery(id, scope, hooks) {
  return {
    name: `discovery${id}`,
    async activate({ players }, { actions }, { role }) {
      const defaultScope = (players) => players.filter((player) => !player.role);
      const targets = await actions.getTargets({
        id: `discover${id}`,
        count: role.length, 
        players: scope ? scope(players) : defaultScope(players) 
      });

      return { event: this, origin: role, targets };
    },
    resolve(result) {
      if (hooks && hooks.beforeResolve) { hooks.beforeResolve(result) }
      result.origin.players = result.targets;
      result.targets.forEach((target) => { target.role = result.origin.id });
      if (hooks && hooks.afterResolve) { hooks.afterResolve(result) }
    }
  }
  
}
