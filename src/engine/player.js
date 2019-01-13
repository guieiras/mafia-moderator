export default function Player({ id, name}) {
  return {
    id,
    name,
    role: null,
    state: {
      exclude: false,
      live: true,
      talk: true,
      target: true,
      targeted: true,
      vote: true,
      voted: true,
    }
  }
}

export function kill(player) {
  player.state.live = false;
  player.state.talk = false;
  player.state.target = false;
  player.state.targeted = false;
  player.state.vote = false;
  player.state.voted = false;
}
