import { observable } from 'mobx'
import uuid from 'uuid/v1'

export default class Stack {
  constructor () {
    this.state = observable([])
    this.hooks = { onPush: [], onPull: [] }
  }

  push (event, detectChanges = true, bubbling = true) {
    event.uuid = uuid()

    if (bubbling) {
      this.hooks.onPush.forEach((hook) => { hook(event) })
    }

    this.state.push(Object.assign({ targets: [], tags: [] }, event))
    if (this.onChange && detectChanges) { this.onChange() }
  }

  pull (uid, detectChanges = true) {
    const index = this.state.findIndex((element) => element.uuid === uid)

    this.hooks.onPull.forEach((hook) => { hook(this.state[index]) })
    this.state.splice(index, 1)

    if (this.onChange && detectChanges) { this.onChange() }
  }

  register (handler, onTime) {
    this.hooks[onTime].push(handler)
  }

  resolvableEvents (clock) {
    return this.state.filter((resolution) => {
      return !resolution.on ||
        resolution.on === `push` ||
        resolution.on === `t${clock.time}` ||
        resolution.on === `d${clock.date}-t${clock.time}`
    })
  }

  top (clock) {
    const resolvableEvents = this.resolvableEvents(clock)
    return resolvableEvents[resolvableEvents.length - 1]
  }

  hasAnythingToResolve (clock) {
    return this.resolvableEvents(clock).length !== 0
  }
}
