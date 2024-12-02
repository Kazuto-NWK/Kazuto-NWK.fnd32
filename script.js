"use strict"


$(function() {
	setTimeout(function(){
		$('#loading').fadeIn(1000);
	},500);
	setTimeout(function(){
		$('#loading').fadeOut(3500);
	},2000);
});

$(function() {
  $('html,body').animate({ scrollTop: 0 }, '1');
});


const exportResult = function () {
  const Number = Math.floor(Math.random() * 7);
  let result;
  switch (Number) {
    case 0:
      result = "大吉だ！　一日超絶ラッキー！"
      break;
    case 1:
      result = "吉だ！　悩み事が解決するかも"
      break;
    case 2:
      result = "中吉だ！　無くし物が見つかるかも"
      break;
    case 3:
      result = "小吉だ！　可もなく不可もなく"
      break;
    case 4:
      result = "末吉だ！　これから運が好転するぞ！"
      break;
    case 5:
      result = "凶だ！　健康的に過ごしてみよう！"
      break;
    case 6:
      result = "大凶だ！　身の回りの変化に気をつけて！"
      break;
  }return result;
}


const myfunc = function() {
  let result = exportResult();
  document.getElementById("omikuji");
  omikuji.innerHTML = `<p>${result}</p>`;  
}
