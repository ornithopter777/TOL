

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

window.addEventListener('click', function (event) {
   if (event.target.dataset.box === 'item') {
      const itemwrap = event.target.closest('.categories__item');
      let itemtarget = itemwrap.querySelector('.item__img');
      let icon = document.createElement(`div`);
      let itemid = itemtarget.id;
      if (itemwrap.querySelector('.itemchecked') === null) {
         icon.classList.add('itemchecked');
         itemtarget.after(icon);
         icon.style.display = 'block';
         itemcount.innerText = coun.length;
         TONcount.innerText = Math.floor(coun.length * itemprice);
         if (coun.length == 0) {
            itemcount.innerText = null;
            TONcount.innerText = null;
         }
         choosinnmbrs1[`${itemid}`] = itemtarget.getAttribute('num');
         choosed.innerText = choosinnmbrs1.join('-');
         TONnumberm.innerText = TONcount.innerText;
         TONnumberw.innerText = TONcount.innerText;
         return;
      } else {
         const h1 = itemwrap.querySelector('.itemchecked');
         const parent = h1.parentNode;
         parent.removeChild(h1);
         itemcount.innerText = coun.length;
         TONcount.innerText = Math.floor(coun.length * itemprice);
         if (coun.length == 0) {
            itemcount.innerText = null;
            TONcount.innerText = null;
         }
         choosinnmbrs1 [`${itemid}`] = null;
         choosed.innerText = choosinnmbrs1.join('-');
         TONnumberm.innerText = TONcount.innerText;
         TONnumberw.innerText = TONcount.innerText;
         return;
      }
   }
   return;
});