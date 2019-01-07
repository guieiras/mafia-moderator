import { observable } from "mobx";
import uuid from "uuid/v1";

export default class Stack {
  constructor() {
    this.state = observable([]);
  }

  push(event) {
    event.uuid = uuid();
    this.state.push(event);
  }

  pull(uid) {
    const index = this.state.findIndex((element) => element.uuid === uid);
    this.state.splice(index, 1);
  }

  of(clock) {
    return this.state.filter((activation) => {
      return !activation.on ||
        activation.on === `t${clock.time}` ||
        activation.on === `d${clock.date}-t${clock.time}`;
    });
  }
}
