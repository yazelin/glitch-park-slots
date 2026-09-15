const KEY = "glitch-park-slots:v1";
export const Store = {
  data:{ spins:0, jackpots:0, owned:[] },
  load(){ try { this.data={...this.data,...JSON.parse(localStorage.getItem(KEY)||"{}")}; } catch {} return this.data; },
  save(){ try { localStorage.setItem(KEY,JSON.stringify(this.data)); } catch {} },
  finish(id,jackpot){ this.data.spins++; if(jackpot){ this.data.jackpots++; if(!this.data.owned.includes(id)) this.data.owned.push(id); } this.save(); }
};
