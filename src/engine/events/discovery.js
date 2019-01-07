export default function discovery(id, scope) {
  return {
    name: 'discovery',
    activate: async ({ players, stack }, { actions }, { role }) => {
      const target = await actions.getTargets({
        id: `discover${id}`,
        count: role.length, 
        players: scope ? scope(players) : players 
      });
        
      stack.push({ name: 'discovery', origin: null, target });
    },
    resolve: async ({ target }) => {
    }
  }
  
}
