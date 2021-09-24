


// htmlの#outPutFieldを変数outPutFieldに代入
let outPutField = document.getElementById('outPutField');

let moji = 'ハロー';
// console.log(moji);

// htmlの#btnクリックボタンを変数btnに代入
let btn = document.getElementById('btn');

// btnがクリックされたら、中の関数を実行する
btn.addEventListener('click', () => {
  // HTMLの#inputFieldに入力されたデータを変数inputFieldに代入
  let inputVal = document.getElementById('inputField').value;
  if (inputVal) {
  // NaN(数字ではなかったらtrue)
  // console.log(isNaN(inputVal));
  // outPutField.innerText = inputVal;
  // 入力値が文字だったら⇨『数字ではないよね』⇨ture
    if(isNaN(inputVal)) {//    『! if(isNaN(inputVal))』!がつくと反転（not if ~）
      outPutField.innerText = '数字ではないよね';
    } else {
    //数字の時は⇨『数字』⇨false
      outPutField.innerText = 'これは数字だよ';
    }
  }
});
// if(! isNaN(inputVal)) {//    『! if(isNaN(inputVal))』!がつくと反転（not if ~）
//   outPutField.innerText = parseInt + 80;
// parseInt=整数にする
console.log('popopoon!');