import EventEmitter from "eventemitter3";
import Beat from "./Beat";

export default class Application extends EventEmitter {
  static get events() {
    return {
      READY: "ready",
    };
  }
  _beat = new Beat();
  

  constructor() {
    super();
    

    const interval = setInterval(() => {
      const lyrics = ["Ah", "ha", "ha", "ha", "stayin' alive", "stayin' alive"];
      let count = 0;
      for (const lyric of lyrics) {
        if(count > lyric.length){
          clearInterval(interval)
        }
        const message = document.createElement("div");
      message.classList.add("message");
      message.innerText = lyric;
  
      document.querySelector(".main").appendChild(message);
      count++
      }
    }, 600);
  
    
    this.emit(Application.events.READY);
  }
  

  _create(){
    
  }
}
