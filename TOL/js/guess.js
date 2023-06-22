

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
let refarr = [
   'Hi! ',
   'You can get free TON ',
   'here: https://t.me/TheOpenLottery_bot/TheOpLot ',
   "Don't forget my ref: ",
];

refbtn.addEventListener('click', function () {
   
   refarr.unshift(`${area.value}`);
   area.value = null;
   let a = refarr[0];
   boofer.innerText = (`${refarr[1]}`+`${refarr[2]}`+`${refarr[3]}`+`${refarr[4]}`+`${a.slice(0, 3)}` + `${a.slice(-4, -1)}`);

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
   if (now - lastTouchEnd <= 40) {
   event.preventDefault();
   }
   lastTouchEnd = now;
}, false);


$(function() {
   $(".g-form").submit(function (event) {
   event.preventDefault();

     // Ссылка, которую получили на этапе публикации приложения
      let appLink = "https://script.google.com/macros/s/AKfycbwQxcl93LNRytvtuPuZw8K1ew6TzRnU4HRwBE-lWGmz18gDa7dOkoBMTnpdgZxjFnGywg/exec";

     // Id текущей формы
      let form = $('#' + $(this).attr('id'))[0];
      
     // Блок прелоадера
      let preloader = $(this).find('.g-form__preloader');
      
     // Кнопка отправки формы
      let submitButton = $(this).find('.adress__btn');
      
     // FormData
   let fd = new FormData(form);
   $.ajax({
      url: appLink,
      type: "POST",
      data: fd,
      processData: false,
      contentType: false,
      beforeSend: function(){
       // Показываем прелоадер
      preloader.css('opacity', '1');
   },
   }).done(function(res, textStatus, jqXHR) {
   if(jqXHR.readyState === 4 && jqXHR.status === 200) {
     // Прячем прелоадер
   preloader.css('opacity', '0');
   } else {
      formTitle.css({
         'display': 'none'
      });
      formRespond.html(errorRespond).css('color', '#c64b4b');
      preloader.css('opacity', '0');
      setTimeout( () => {
         formRespond.css({
         'display': 'none'
         });
         formTitle.css({
         'display': 'block'
         });
         submitButton.prop('disabled', false);
      }, 5000);
      console.log('Гугл не ответил статусом 200');
   }
   }).fail(function(res, textStatus, jqXHR) {
   formTitle.css({
      'display': 'none'
   });
   preloader.css('opacity', '0');
   formRespond.html('Не удалось отправить сообщение. Cвяжитесь с администратором сайта другим способом').css('color', '#c64b4b');
   setTimeout( () => {
      formRespond.css({
         'display': 'none'
      });
      formTitle.css({
         'display': 'block'
      });
      submitButton.prop('disabled', false); 
   }, 5000);
   console.log('Не удалось выполнить запрос по указанному в скрипте пути');
   }); 
});
}(jQuery));
