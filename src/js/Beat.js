import EventEmitter from "eventemitter3";

export default class Beat extends EventEmitter{
  static get events() {
    return {
      BIT: "bit",
    };
  }

  
}
