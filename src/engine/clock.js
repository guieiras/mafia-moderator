import { observable } from "mobx";

export default class Clock {
  constructor() {
    this.state = observable({
      date: 1,
      time: 0
    });
  }

  increment() {
    this.state.time += 1;

    if(this.state.time === 16) {
      this.state.time = 1;
      this.state.date++;
    }
  }
}
