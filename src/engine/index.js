import { observable } from "mobx";
import TailCall from 'tail-call/core';

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
    this.ignite = TailCall.recur(this.handleNext);
    this.stack.onChange = this.ignite.bind(this);
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
      this.state.players = game.players.map((playerId) => observable(new Player(
        dbPlayers.filter((dbPlayer) => dbPlayer.id === playerId)[0]
      )));

      if(onReady) { onReady(this) };
    });
  }

  bindView(view) {
    this.view = view;
  }

  resolveNext(forcePull = true) {
    const nextEvent = this.stack.top(this.state.clock);
    if (!nextEvent.negatedBy) {
      nextEvent.event.resolve(nextEvent, this);
    }
    this.stack.pull(nextEvent.uuid, forcePull);
  }

  handleNext() {
    if (this.reachedSomeWinCondition()) { return; }
    if (this.view.isWaitingForActions()) { return; }
    if (!this.stack.hasAnythingToResolve(this.state.clock)) {
      this.clock.increment();
      this.checkEmblems();
      StackBuilder(this).forEach((event) => this.stack.push(event, false));
      this.ignite();
    } else {
      this.resolveNext();
    }
  }

  reachedSomeWinCondition() {
    for (let index = 0; index < this.state.roles.length; index++) {
      const role = this.state.roles[index];
      if (role.win(this.state)) {
        this.stack.state = [];
        this.actions.showMessage(['win', role.id], [], false);
        return true;
      }
    }

    return false;
  }

  checkEmblems() {
    this.state.players.forEach(player => {
      player.emblems = player.emblems.filter((emblem) =>
        !emblem.until ||
        ((!emblem.until.date || emblem.until.day >= this.state.clock.date) &&
          ((emblem.until.time || 1) > this.state.clock.time)))
    });
  }
}
