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

  top(clock) {
    const validEvents = this.state.filter((activation) => {
      return !activation.on ||
        activation.on === `t${clock.time}` ||
        activation.on === `d${clock.date}-t${clock.time}`;
    });

    return validEvents[validEvents.length - 1];
  }

  isEmpty() {
    return this.state.length === 0;
  }
}
