

let addresscop = document.querySelector('.ui-copy-button__icon');

addresscop.addEventListener('click', () => {
   let copyData = [document.querySelector('.header__info__text')].map(el => el.textContent).join('\n');
   if (copyData) {
   navigator.clipboard.writeText(copyData);
   }
   addresscop.style.cssText = 'color: green;'
});

let arropen = [
   '1'
];
let arr = [
   '1001'
];

document.addEventListener('click', function (event) {

   if (event.target.dataset.item === 'itemm') {
      const itemblock = event.target.closest('.guess__item');

      const itemimg = itemblock.querySelector('.guess__item__img');
      itemimg.style.display = 'none';

      let attr = itemimg.getAttribute('id');
      arropen.unshift(`${attr}`);

      if (arropen[1] != `${attr}`) {
         document.getElementById(`${arropen[1]}`).style.display = 'block';
      }

      function getRandomInt(min, max) {
         min = Math.ceil(min);
         max = Math.floor(max);
         return Math.floor(Math.random() * (max - min)) + min; 
      };

      let a = getRandomInt(1001, 1154);
      arr.push(`${a}`);

      let guessitem = document.getElementById(`${a}`);
      guessitem.style.display = 'block';

      if (`${arr.slice(-2, -1)}` != `${a}`) {
         document.getElementById(`${arr.slice(-2, -1)}`).style.display = 'none';
      }

      guessitem.addEventListener('click', function () {
      let addinput = document.querySelector('.address__input');
         addinput.style.cssText = 'display: flex;';
         let addclose = document.querySelector('.adress__btn');
         addclose.addEventListener('click', function () {
         addinput.style.cssText = 'display: none;';
         guessitem.style.cssText = 'display: none;';
      });
});
}
});

let refcont = document.querySelector('.ref__container');

let refopen = document.querySelector('.getref')
refopen.addEventListener('click', function () {
   refcont.style.display = 'flex';
})

let area = document.querySelector('.refadress__area')
let boofer = document.querySelector('.boofer');
let refbtn = document.querySelector('.ref__btn');
let refarr = [];

refbtn.addEventListener('click', function () {
   
   refarr.unshift(`${area.value}`);
   area.value = null;
   let a = refarr[0];
   boofer.innerText = (`${a.slice(0, 3)}` + `${a.slice(-4, -1)}`);

   let copyref = [boofer].map(el => el.textContent).join('\n');
   if (copyref) {
      navigator.clipboard.writeText(copyref);
      refbtn.innerText = 'cpd';
      area.value = 'ref copied, you can send it to your friend now';
   }
});

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
