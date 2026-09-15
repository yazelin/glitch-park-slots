export const CHARACTERS = [
  { id:"glitch", name:"格莉奇", color:0x9e8ce0, line:"777 也能發生故障喔。" },
  { id:"catgrass", name:"貓草", color:0x79bb91, line:"這次的運氣還行。" },
  { id:"bambi", name:"斑比", color:0xe19bb2, line:"三個一樣才算厲害。" },
  { id:"noah", name:"諾亞", color:0xd09b63, line:"機率也是一種設計。" },
  { id:"tower", name:"鐵塔", color:0x6e9fc8, line:"結果已經記錄下來了。" },
  { id:"zerox", name:"0x", color:0x818695, line:"……又轉到我？" },
  { id:"blackhole", name:"黑洞先生", color:0x574e67, line:"星星都轉進來了。" },
];

export function avatarStyle(index) {
  return `--x:${index % 4 / 3 * 100}%;--y:${Math.floor(index / 4) * 100}%`;
}
