import { observable } from "mobx";
import uuid from "uuid/v1";
import Player from "./player";

export default class Stack {
  constructor() {
    this.state = observable([]);
  }

  push(event, detectChanges = true) {
    event.uuid = uuid();

    if (event.targets) {
      event.targets.forEach(player => {
        if (player.role && player.role.hooks.onTarget) {
          player.role.hooks.onTarget(event, this);
        }
      });
    }

    if (event.origin && event.origin._type === 'Player') {
      Object.values(event.origin.hooks.onOrigin).forEach(hook => {
        hook(event, this);
      });
    }
    if (event.targets) {
      event.targets.forEach(target => {
        Object.values(target.hooks.onTarget).forEach(hook => {
          hook(event, this);
        });
      });
    }

    this.state.push(Object.assign({ targets: [], tags: [] }, event));
    if (this.onChange && detectChanges) { this.onChange(); }
  }

  pull(uid, detectChanges = true) {
    const index = this.state.findIndex((element) => element.uuid === uid);
    this.state.splice(index, 1);

    if (this.onChange && detectChanges) { this.onChange(); }
  }

  resolvableEvents(clock) {
    return this.state.filter((resolution) => {
      return !resolution.on ||
        resolution.on === `push` ||
        resolution.on === `t${clock.time}` ||
        resolution.on === `d${clock.date}-t${clock.time}`;
    });
  }

  top(clock) {
    const resolvableEvents = this.resolvableEvents(clock);
    return resolvableEvents[resolvableEvents.length - 1];
  }

  hasAnythingToResolve(clock) {
    return this.resolvableEvents(clock).length !== 0;
  }
}
