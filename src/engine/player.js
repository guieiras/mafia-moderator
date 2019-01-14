export default function Player({ id, name}) {
  return {
    id,
    name,
    role: null,
    emblems: [],
    state: {
      exclude: false,
      live: true,
      talk: true,
      target: true,
      targetable: true,
      vote: true,
      votable: true,
    }
  }
}

export function kill(player) {
  player.state.live = false;
  player.state.talk = false;
  player.state.target = false;
  player.state.targetable = false;
  player.state.vote = false;
  player.state.votable = false;
}
