const KEY = "glitch-park-slots:v1";
function probe(){
  try{localStorage.setItem(KEY+":probe","1");localStorage.removeItem(KEY+":probe");return true}catch{return false}
}
export const Store = {
  local:probe(),
  data:{ spins:0, jackpots:0, owned:[] },
  async load(){
    if(this.local){try{this.data={...this.data,...JSON.parse(localStorage.getItem(KEY)||"{}")}}catch{}return this.data}
    return new Promise(resolve=>{
      const on=event=>{if(event.data?.type!=="slots:state")return;clearTimeout(timer);removeEventListener("message",on);if(event.data.state)this.data={...this.data,...event.data.state};resolve(this.data)};
      const timer=setTimeout(()=>{removeEventListener("message",on);resolve(this.data)},1200);
      addEventListener("message",on);parent.postMessage({type:"slots:ready"},"*");
    });
  },
  save(){if(this.local){try{localStorage.setItem(KEY,JSON.stringify(this.data))}catch{};return}parent.postMessage({type:"slots:save",state:this.data},"*")},
  finish(id,jackpot){ this.data.spins++; if(jackpot){ this.data.jackpots++; if(!this.data.owned.includes(id)) this.data.owned.push(id); } this.save(); }
};
