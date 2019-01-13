import { observable } from "mobx";
import uuid from "uuid/v1";

export default class Stack {
  constructor() {
    this.state = observable([]);
  }

  push(event, detectChanges = true) {
    event.uuid = uuid();
    this.state.push(event);

    if (this.onChange && detectChanges) { this.onChange(); }
  }

  pull(uid) {
    const index = this.state.findIndex((element) => element.uuid === uid);
    this.state.splice(index, 1);

    if (this.onChange) { this.onChange(); }
  }

  resolvableEvents(clock) {
    return this.state.filter((resolution) => {
      return !resolution.on ||
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
