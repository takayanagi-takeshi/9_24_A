


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

// 年齢で未成年か成人かの判定
  let age = parseInt(inputVal);
// 入力文字が数字かどうかの判定
  if(! isNaN(age)) {
  // 20未満だったら未成年
    if(age < 20) {
      outPutField.innerText = '未成年';
  // 20歳以上65歳未満だったら成人
    } else if (age < 65) {
      outPutField.innerText = '成人';
  //65歳以上だったら高齢者 
    } else {
      outPutField.innerText = '高齢者';
    }
  } else {
    outPutField.innerText = '数字入れてよね、半角で';
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