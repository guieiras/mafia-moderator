import { observable } from "mobx";

import db from "../boundaries/database";
import Narrator from "../roles/Narrator";

import Clock from "./clock";
import Stack from "./stack";
import Role from "./role";
import Player from "./player";
import EngineActions from "./actions";
import StackBuilder from './stack/builder'

export default class Engine {
  constructor(game, onReady) {
    this.actions = new EngineActions(this);
    this.stack = new Stack();
    this.stack.onChange = this.handleNext.bind(this);
    this.clock = new Clock();
    this.state = observable({
      clock: this.clock.state,
      roles: this.roles,
      events: [],
      stack: this.stack.state,
    });
    
    db.players.toArray().then((dbPlayers) => {
      this.state.roles = Object.keys(game.roles).map((roleId) => new Role(roleId, game.roles[roleId]));
      this.state.roles.push(new Role(Narrator, 1));
      this.state.players = game.players.map((playerId) => observable(Player(
        dbPlayers.filter((dbPlayer) => dbPlayer.id === playerId)[0]
      )));

      if(onReady) { onReady(this) };
    });
  }

  bindView(view) {
    this.view = view;
  }

  handleNext() {
    if (this.view.isWaitingForActions()) { return; }
    if (this.stack.isEmpty()) {
      this.clock.increment();
      StackBuilder(this).forEach((event) => this.stack.push(event, false));
      this.handleNext();
    } else {
      const nextEvent = this.stack.top(this.state.clock);
      nextEvent.event.resolve(nextEvent, this);
      this.stack.pull(nextEvent.uuid);
    }
  }

  async iterate() {
    this.handleNext();
  }
}
