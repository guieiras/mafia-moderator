export default class Player {
  constructor({ id, name }) {
    this.id = id;
    this.name = name;
    this.state = {
      live: true,
      talk: true,
      actions: true,
      vote: true,
      voted: true,
    };
  }
}
