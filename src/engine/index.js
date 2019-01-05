import { observable } from "mobx";
import Clock from "./clock";
import Stack from "./stack";

export default class Engine {
  constructor(game) {
    this.players = game.players;
    this.roles = game.roles;
    this.stack = new Stack();
    this.clock = new Clock();
    this.state = observable({
      clock: this.clock.state,
      players: this.players,
      roles: this.roles,
      events: [],
      stack: this.stack.state,
    });
  }
}
