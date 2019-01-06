import { observable } from "mobx";
import Clock from "./clock";
import Stack from "./stack";
import Role from "./role";
import db from "../boundaries/database";
import Player from "./player";
import roles from "../roles";

export default class Engine {
  constructor(game) {
    this.stack = new Stack();
    this.clock = new Clock();
    this.state = observable({
      clock: this.clock.state,
      players: this.players,
      roles: this.roles,
      events: [],
      stack: this.stack.state,
    });
    this.state.roles = Object.keys(game.roles).map((roleId) => new Role(roleId, game.roles[roleId]));
    db.players.toArray().then((dbPlayers) => {
      this.state.players = game.players.map((playerId) => new Player(
        dbPlayers.filter((dbPlayer) => dbPlayer.id == playerId)[0]
      ));
      this.players = [];
    });
  }
}
