import { observable } from "mobx";

export default class Clock {
  constructor() {
    this.state = observable({
      date: 1,
      clock: 1
    });
  }

  increment() {
    this.state.clock++;

    if(this.state.clock === 13) {
      this.state.clock = 1;
      this.state.date++;
    }
  }
}
