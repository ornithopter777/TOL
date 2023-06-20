document.addEventListener('touchmove', function (event) {
   if (event.scale !== 1) { event.preventDefault(); }
},
   { passive: false });

var lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
   var now = (new Date()).getTime();
   if (now - lastTouchEnd <= 100) {
   event.preventDefault();
   }
   lastTouchEnd = now;
}, false);


const titletext = document.querySelector('.categories__title');
const titletextcontent = titletext.innerHTML;
titletext.innerHTML = 'FAST!';
titletext.innerHTML = `${titletextcontent} <span class="your">FAST</span>!`;

let addresscop = document.querySelector('.ui-copy-button__icon');

addresscop.addEventListener('click', () => {
   let copyData = [document.querySelector('.header__info__text')].map(el => el.textContent).join('\n');
   if (copyData) {
   navigator.clipboard.writeText(copyData);
   }
   addresscop.style.cssText = 'color: green;';
});

const item1 = document.getElementById('1');
let item1push = document.createElement(`div`);
item1push.innerHTML = `<div class="itemchecked2"></div>`;

const item2 = document.getElementById('2');
let item2push = document.createElement(`div`);
item2push.innerHTML = `<div class="itemchecked2"></div>`;

const item3 = document.getElementById('3');
let item3push = document.createElement(`div`);
item3push.innerHTML = `<div class="itemchecked2"></div>`;

const item4 = document.getElementById('4');
let item4push = document.createElement(`div`);
item4push.innerHTML = `<div class="itemchecked2"></div>`;

const item5 = document.getElementById('5');
let item5push = document.createElement(`div`);
item5push.innerHTML = `<div class="itemchecked2"></div>`;

const item6 = document.getElementById('6');
let item6push = document.createElement(`div`);
item6push.innerHTML = `<div class="itemchecked2"></div>`;

const item7 = document.getElementById('7');
let item7push = document.createElement(`div`);
item7push.innerHTML = `<div class="itemchecked2"></div>`;

const item8 = document.getElementById('8');
let item8push = document.createElement(`div`);
item8push.innerHTML = `<div class="itemchecked2"></div>`;

const item9 = document.getElementById('9');
let item9push = document.createElement(`div`);
item9push.innerHTML = `<div class="itemchecked2"></div>`;

const item10 = document.getElementById('10');
let item10push = document.createElement(`div`);
item10push.innerHTML = `<div class="itemchecked2"></div>`;

const item11 = document.getElementById('11');
let item5push = document.createElement(`div`);
item5push.innerHTML = `<div class="itemchecked2"></div>`;

const item12 = document.getElementById('12');
let item6push = document.createElement(`div`);
item6push.innerHTML = `<div class="itemchecked2"></div>`;

const item13 = document.getElementById('13');
let item1push = document.createElement(`div`);
item1push.innerHTML = `<div class="itemchecked2"></div>`;

const item14 = document.getElementById('14');
let item2push = document.createElement(`div`);
item2push.innerHTML = `<div class="itemchecked2"></div>`;

const item15 = document.getElementById('15');
let item3push = document.createElement(`div`);
item3push.innerHTML = `<div class="itemchecked2"></div>`;

const item16 = document.getElementById('16');
let item4push = document.createElement(`div`);
item4push.innerHTML = `<div class="itemchecked2"></div>`;

const item17 = document.getElementById('17');
let item5push = document.createElement(`div`);
item5push.innerHTML = `<div class="itemchecked2"></div>`;

const item18 = document.getElementById('18');
let item6push = document.createElement(`div`);
item6push.innerHTML = `<div class="itemchecked2"></div>`;

const item19 = document.getElementById('19');
let item1push = document.createElement(`div`);
item1push.innerHTML = `<div class="itemchecked2"></div>`;

const item20 = document.getElementById('20');
let item2push = document.createElement(`div`);
item2push.innerHTML = `<div class="itemchecked2"></div>`;

const item21 = document.getElementById('21');
let item3push = document.createElement(`div`);
item3push.innerHTML = `<div class="itemchecked2"></div>`;

const item22 = document.getElementById('22');
let item4push = document.createElement(`div`);
item4push.innerHTML = `<div class="itemchecked2"></div>`;

const item23 = document.getElementById('23');
let item5push = document.createElement(`div`);
item5push.innerHTML = `<div class="itemchecked2"></div>`;

const item24 = document.getElementById('24');
let item6push = document.createElement(`div`);
item6push.innerHTML = `<div class="itemchecked2"></div>`;

const item25 = document.getElementById('25');
let item1push = document.createElement(`div`);
item1push.innerHTML = `<div class="itemchecked2"></div>`;

const item26 = document.getElementById('26');
let item2push = document.createElement(`div`);
item2push.innerHTML = `<div class="itemchecked2"></div>`;

const item27 = document.getElementById('27');
let item3push = document.createElement(`div`);
item3push.innerHTML = `<div class="itemchecked2"></div>`;

const item28 = document.getElementById('28');
let item4push = document.createElement(`div`);
item4push.innerHTML = `<div class="itemchecked2"></div>`;

const item29 = document.getElementById('29');
let item5push = document.createElement(`div`);
item5push.innerHTML = `<div class="itemchecked2"></div>`;

const item30 = document.getElementById('30');
let item6push = document.createElement(`div`);
item6push.innerHTML = `<div class="itemchecked2"></div>`;

const item31 = document.getElementById('31');
let item1push = document.createElement(`div`);
item1push.innerHTML = `<div class="itemchecked2"></div>`;

const item32 = document.getElementById('32');
let item2push = document.createElement(`div`);
item2push.innerHTML = `<div class="itemchecked2"></div>`;

const item33 = document.getElementById('33');
let item3push = document.createElement(`div`);
item3push.innerHTML = `<div class="itemchecked2"></div>`;

const item34 = document.getElementById('34');
let item4push = document.createElement(`div`);
item4push.innerHTML = `<div class="itemchecked2"></div>`;

const item35 = document.getElementById('35');
let item5push = document.createElement(`div`);
item5push.innerHTML = `<div class="itemchecked2"></div>`;

const item36 = document.getElementById('36');
let item6push = document.createElement(`div`);
item6push.innerHTML = `<div class="itemchecked2"></div>`;

const item37 = document.getElementById('37');
let item1push = document.createElement(`div`);
item1push.innerHTML = `<div class="itemchecked2"></div>`;

const item38 = document.getElementById('38');
let item2push = document.createElement(`div`);
item2push.innerHTML = `<div class="itemchecked2"></div>`;

const item39 = document.getElementById('39');
let item3push = document.createElement(`div`);
item3push.innerHTML = `<div class="itemchecked2"></div>`;

const item40 = document.getElementById('40');
let item4push = document.createElement(`div`);
item4push.innerHTML = `<div class="itemchecked2"></div>`;

const coun = document.getElementsByClassName('itemchecked');

let choosed = document.querySelector('.idcounter');
let itemprice = 0.8;
let choosinnmbrs1 = [
   'Series1:'
];

let itemcount = document.querySelector('.item__counter');
let TONcount = document.querySelector('.TON__counter');

let manualopen = document.getElementById('man');
let manualblock = document.querySelector('.manual__copy');
let TONnumberm = document.querySelector('.TONnumberm');
let manualcopytext = document.querySelector('.manual__copybtn');
let manualclose = document.querySelector('.manual__copyslose');

manualopen.addEventListener('click', function () {
   manualblock.style.cssText = `display: flex;`;
});
manualcopytext.addEventListener('click', () => {
   let copymanual = [choosed].map(el => el.textContent).join('\n');
   if (copymanual) {
      navigator.clipboard.writeText(copymanual);
      manualcopytext.innerText = 'copied';
   }
});
manualclose.addEventListener('click', function () {
   manualblock.style.cssText = `display: none;`;
});

let walletopen = document.getElementById('wal');
let walletcopy = document.querySelector('.wallet__copy');
let TONnumberw = document.querySelector('.TONnumberw');
let walletcopytext = document.querySelector('.wallet__copybtn');
let walletclose = document.querySelector('.wallet__close');

walletopen.addEventListener('click', function () {
   walletcopy.style.cssText = `display: flex;`;
});
walletcopytext.addEventListener('click', () => {
   let copywlt = [choosed].map(el => el.textContent).join('\n');
   if (copywlt) {
      navigator.clipboard.writeText(copywlt);
      walletcopytext.innerText = 'copied';
   }
});
walletclose.addEventListener('click', function () {
   walletcopy.style.cssText = 'display: none;';
});

item1.addEventListener('click', function () {
   if (item1push.innerHTML != `<div class="itemchecked"></div>`) {
      item1push.innerHTML = `<div class="itemchecked"></div>`;
      item1.after(item1push);
   } else {
      item1push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [1] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[1] = '111';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item2.addEventListener('click', function () {
   if (item2push.innerHTML != `<div class="itemchecked"></div>`) {
      item2push.innerHTML = `<div class="itemchecked"></div>`;
      item2.after(item2push);
   } else {
      item2push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [2] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[2] = '2';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item3.addEventListener('click', function () {
   if (item3push.innerHTML != `<div class="itemchecked"></div>`) {
      item3push.innerHTML = `<div class="itemchecked"></div>`;
      item3.after(item3push);
   } else {
      item3push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [3] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1 [3] = 3;
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item4.addEventListener('click', function () {
   if (item4push.innerHTML != `<div class="itemchecked"></div>`) {
      item4push.innerHTML = `<div class="itemchecked"></div>`;
      item4.after(item4push);
   } else {
      item4push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item5.addEventListener('click', function () {
   if (item5push.innerHTML != `<div class="itemchecked"></div>`) {
      item5push.innerHTML = `<div class="itemchecked"></div>`;
      item5.after(item5push);
   } else {
      item5push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item6.addEventListener('click', function () {
   if (item6push.innerHTML != `<div class="itemchecked"></div>`) {
      item6push.innerHTML = `<div class="itemchecked"></div>`;
      item6.after(item6push);
   } else {
      item6push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item1.addEventListener('click', function () {
   if (item1push.innerHTML != `<div class="itemchecked"></div>`) {
      item1push.innerHTML = `<div class="itemchecked"></div>`;
      item1.after(item1push);
   } else {
      item1push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [1] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[1] = '111';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item2.addEventListener('click', function () {
   if (item2push.innerHTML != `<div class="itemchecked"></div>`) {
      item2push.innerHTML = `<div class="itemchecked"></div>`;
      item2.after(item2push);
   } else {
      item2push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [2] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[2] = '2';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item3.addEventListener('click', function () {
   if (item3push.innerHTML != `<div class="itemchecked"></div>`) {
      item3push.innerHTML = `<div class="itemchecked"></div>`;
      item3.after(item3push);
   } else {
      item3push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [3] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1 [3] = 3;
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item4.addEventListener('click', function () {
   if (item4push.innerHTML != `<div class="itemchecked"></div>`) {
      item4push.innerHTML = `<div class="itemchecked"></div>`;
      item4.after(item4push);
   } else {
      item4push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item5.addEventListener('click', function () {
   if (item5push.innerHTML != `<div class="itemchecked"></div>`) {
      item5push.innerHTML = `<div class="itemchecked"></div>`;
      item5.after(item5push);
   } else {
      item5push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item6.addEventListener('click', function () {
   if (item6push.innerHTML != `<div class="itemchecked"></div>`) {
      item6push.innerHTML = `<div class="itemchecked"></div>`;
      item6.after(item6push);
   } else {
      item6push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item1.addEventListener('click', function () {
   if (item1push.innerHTML != `<div class="itemchecked"></div>`) {
      item1push.innerHTML = `<div class="itemchecked"></div>`;
      item1.after(item1push);
   } else {
      item1push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [1] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[1] = '111';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item2.addEventListener('click', function () {
   if (item2push.innerHTML != `<div class="itemchecked"></div>`) {
      item2push.innerHTML = `<div class="itemchecked"></div>`;
      item2.after(item2push);
   } else {
      item2push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [2] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[2] = '2';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item3.addEventListener('click', function () {
   if (item3push.innerHTML != `<div class="itemchecked"></div>`) {
      item3push.innerHTML = `<div class="itemchecked"></div>`;
      item3.after(item3push);
   } else {
      item3push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [3] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1 [3] = 3;
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item4.addEventListener('click', function () {
   if (item4push.innerHTML != `<div class="itemchecked"></div>`) {
      item4push.innerHTML = `<div class="itemchecked"></div>`;
      item4.after(item4push);
   } else {
      item4push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item5.addEventListener('click', function () {
   if (item5push.innerHTML != `<div class="itemchecked"></div>`) {
      item5push.innerHTML = `<div class="itemchecked"></div>`;
      item5.after(item5push);
   } else {
      item5push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item6.addEventListener('click', function () {
   if (item6push.innerHTML != `<div class="itemchecked"></div>`) {
      item6push.innerHTML = `<div class="itemchecked"></div>`;
      item6.after(item6push);
   } else {
      item6push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item1.addEventListener('click', function () {
   if (item1push.innerHTML != `<div class="itemchecked"></div>`) {
      item1push.innerHTML = `<div class="itemchecked"></div>`;
      item1.after(item1push);
   } else {
      item1push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [1] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[1] = '111';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item2.addEventListener('click', function () {
   if (item2push.innerHTML != `<div class="itemchecked"></div>`) {
      item2push.innerHTML = `<div class="itemchecked"></div>`;
      item2.after(item2push);
   } else {
      item2push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [2] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[2] = '2';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item3.addEventListener('click', function () {
   if (item3push.innerHTML != `<div class="itemchecked"></div>`) {
      item3push.innerHTML = `<div class="itemchecked"></div>`;
      item3.after(item3push);
   } else {
      item3push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [3] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1 [3] = 3;
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item4.addEventListener('click', function () {
   if (item4push.innerHTML != `<div class="itemchecked"></div>`) {
      item4push.innerHTML = `<div class="itemchecked"></div>`;
      item4.after(item4push);
   } else {
      item4push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item5.addEventListener('click', function () {
   if (item5push.innerHTML != `<div class="itemchecked"></div>`) {
      item5push.innerHTML = `<div class="itemchecked"></div>`;
      item5.after(item5push);
   } else {
      item5push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item6.addEventListener('click', function () {
   if (item6push.innerHTML != `<div class="itemchecked"></div>`) {
      item6push.innerHTML = `<div class="itemchecked"></div>`;
      item6.after(item6push);
   } else {
      item6push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item1.addEventListener('click', function () {
   if (item1push.innerHTML != `<div class="itemchecked"></div>`) {
      item1push.innerHTML = `<div class="itemchecked"></div>`;
      item1.after(item1push);
   } else {
      item1push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [1] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[1] = '111';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item2.addEventListener('click', function () {
   if (item2push.innerHTML != `<div class="itemchecked"></div>`) {
      item2push.innerHTML = `<div class="itemchecked"></div>`;
      item2.after(item2push);
   } else {
      item2push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [2] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[2] = '2';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item3.addEventListener('click', function () {
   if (item3push.innerHTML != `<div class="itemchecked"></div>`) {
      item3push.innerHTML = `<div class="itemchecked"></div>`;
      item3.after(item3push);
   } else {
      item3push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [3] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1 [3] = 3;
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item4.addEventListener('click', function () {
   if (item4push.innerHTML != `<div class="itemchecked"></div>`) {
      item4push.innerHTML = `<div class="itemchecked"></div>`;
      item4.after(item4push);
   } else {
      item4push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item5.addEventListener('click', function () {
   if (item5push.innerHTML != `<div class="itemchecked"></div>`) {
      item5push.innerHTML = `<div class="itemchecked"></div>`;
      item5.after(item5push);
   } else {
      item5push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item6.addEventListener('click', function () {
   if (item6push.innerHTML != `<div class="itemchecked"></div>`) {
      item6push.innerHTML = `<div class="itemchecked"></div>`;
      item6.after(item6push);
   } else {
      item6push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item1.addEventListener('click', function () {
   if (item1push.innerHTML != `<div class="itemchecked"></div>`) {
      item1push.innerHTML = `<div class="itemchecked"></div>`;
      item1.after(item1push);
   } else {
      item1push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [1] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[1] = '111';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item2.addEventListener('click', function () {
   if (item2push.innerHTML != `<div class="itemchecked"></div>`) {
      item2push.innerHTML = `<div class="itemchecked"></div>`;
      item2.after(item2push);
   } else {
      item2push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [2] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[2] = '2';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item3.addEventListener('click', function () {
   if (item3push.innerHTML != `<div class="itemchecked"></div>`) {
      item3push.innerHTML = `<div class="itemchecked"></div>`;
      item3.after(item3push);
   } else {
      item3push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [3] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1 [3] = 3;
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item4.addEventListener('click', function () {
   if (item4push.innerHTML != `<div class="itemchecked"></div>`) {
      item4push.innerHTML = `<div class="itemchecked"></div>`;
      item4.after(item4push);
   } else {
      item4push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item5.addEventListener('click', function () {
   if (item5push.innerHTML != `<div class="itemchecked"></div>`) {
      item5push.innerHTML = `<div class="itemchecked"></div>`;
      item5.after(item5push);
   } else {
      item5push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item6.addEventListener('click', function () {
   if (item6push.innerHTML != `<div class="itemchecked"></div>`) {
      item6push.innerHTML = `<div class="itemchecked"></div>`;
      item6.after(item6push);
   } else {
      item6push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});

item1.addEventListener('click', function () {
   if (item1push.innerHTML != `<div class="itemchecked"></div>`) {
      item1push.innerHTML = `<div class="itemchecked"></div>`;
      item1.after(item1push);
   } else {
      item1push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [1] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[1] = '111';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item2.addEventListener('click', function () {
   if (item2push.innerHTML != `<div class="itemchecked"></div>`) {
      item2push.innerHTML = `<div class="itemchecked"></div>`;
      item2.after(item2push);
   } else {
      item2push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [2] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1[2] = '2';
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item3.addEventListener('click', function () {
   if (item3push.innerHTML != `<div class="itemchecked"></div>`) {
      item3push.innerHTML = `<div class="itemchecked"></div>`;
      item3.after(item3push);
   } else {
      item3push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      choosinnmbrs1 [3] = null;
      choosed.innerText = choosinnmbrs1.join('-');
      TONnumberm.innerText = TONcount.innerText;
      TONnumberw.innerText = TONcount.innerText;
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   choosinnmbrs1 [3] = 3;
   choosed.innerText = choosinnmbrs1.join('-');
   TONnumberm.innerText = TONcount.innerText;
   TONnumberw.innerText = TONcount.innerText;
   return;
});

item4.addEventListener('click', function () {
   if (item4push.innerHTML != `<div class="itemchecked"></div>`) {
      item4push.innerHTML = `<div class="itemchecked"></div>`;
      item4.after(item4push);
   } else {
      item4push.innerHTML = `<div class="itemchecked2"></div>`;
      itemcount.innerText = coun.length;
      TONcount.innerText = Math.floor(coun.length * itemprice);
      if (coun.length == 0) {
         itemcount.innerText = null;
         TONcount.innerText = null;
      }
      return;
   };
   itemcount.innerText = coun.length;
   TONcount.innerText = Math.floor(coun.length * itemprice);
   if (coun.length == 0) {
      itemcount.innerText = null;
      TONcount.innerText = null;
   }
   return;
});