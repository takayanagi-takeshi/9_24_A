


// htmlの#outPutFieldを変数outPutFieldに代入
let outPutField = document.getElementById('outPutField');

// let moji = 'ハロー';
// console.log(moji);

// htmlの#btnクリックボタンを変数btnに代入
let btn = document.getElementById('btn');

// btnがクリックされたら、中の関数を実行する
btn.addEventListener('click', () => {
  // HTMLの#inputFieldに入力されたデータを変数inputFieldに代入
  let inputVal = document.getElementById('inputField').value;

// 年齢の判定
  let age = parseInt(inputVal);

  if(! isNaN(age)) {
    if(age < 20) {
      outPutField.innerText = '未成年';
      if(age > 5 && age < 16) {
        outPutField.innerText += '\n' + '（義務教育）';
      } 
      } else if(age < 65) {
        outPutField.innerText = '成人';
      } else {
      outPutField.innerText = '高齢者';
      }
    } else {
      outPutField.innerText = '数字を入れてください'
  }
});

// if(! isNaN(inputVal)) {//    『! if(isNaN(inputVal))』!がつくと反転（not if ~）
//   outPutField.innerText = parseInt + 80;
// parseInt=整数にする
// if(4 === 4) {
//   console.log('正解！');
// } else {
//   console.log('間違い');
// };