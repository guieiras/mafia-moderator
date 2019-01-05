import { observable } from "mobx";

export default class Stack {
  constructor() {
    this.state = observable([]);
  }

  push() {}
  pull() {}
}
