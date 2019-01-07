import { observable } from "mobx";
import Clock from "./clock";
import Stack from "./stack";
import Role from "./role";
import db from "../boundaries/database";
import Player from "./player";
import Narrator from "../roles/Narrator";
import EngineActions from "./actions";

export default class Engine {
  constructor(game, onReady) {
    this.actions = new EngineActions(this);
    this.stack = new Stack();
    this.clock = new Clock();
    this.state = observable({
      clock: this.clock.state,
      players: this.players,
      roles: this.roles,
      events: [],
      stack: this.stack.state,
    });
    
    db.players.toArray().then((dbPlayers) => {
      this.state.roles = Object.keys(game.roles).map((roleId) => new Role(roleId, game.roles[roleId]));
      this.state.roles.push(new Role(Narrator, 1));
      this.state.players = game.players.map((playerId) => new Player(
        dbPlayers.filter((dbPlayer) => dbPlayer.id === playerId)[0]
      ));

      if(onReady) { onReady(this) };
    });
  }

  bindView(view) {
    this.view = view;
  }

  async iterate() {
    this.state.roles.forEach(role => {
      const dayTimeAct = role.actions[`d${this.state.clock.date}-t${this.state.clock.time}`];
      const timeAct = role.actions[`t${this.state.clock.time}`];

      if (dayTimeAct) { dayTimeAct.activate(this.state, this, { role }); }
      if (timeAct) { timeAct.activate(this.state, this, { role }); }
    });

    this.clock.increment();
  }
}
