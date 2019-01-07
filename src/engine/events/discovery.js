export default function discovery(id, scope) {
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
      result.origin.players = [result.target];
      result.target.role = result.origin.roleId.id;
    }
  }
  
}
