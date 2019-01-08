export default function Player({ id, name}) {
  return {
    id,
    name,
    role: null,
    state: {
      exclude: false,
      live: true,
      talk: true,
      actions: true,
      vote: true,
      voted: true,
    }
  }
}
