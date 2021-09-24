


// htmlの#outPutFieldを変数outPutFieldに代入
let outPutField = document.getElementById('outPutField');

let wday = ['月', '火', '水', '木', '金'];
for(let day of wday) {
  console.log(day + '曜日');
  outPutField.innerText += day + '曜日' + '\n';
};




// outPutField.innerText = inputVal;
