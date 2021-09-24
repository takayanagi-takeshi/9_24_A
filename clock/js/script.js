let outPutField = document.getElementById('outPutField');

// timer関数を作る
let timer = () => {
  // 本日の日付オブジェクトを作る
  let today = new Date();
  let week = ['日','月','火','水','木','金','土'];
  // 今日の曜日を取得する
  console.log(week[5]);
  // console.log(today);

  // 現在の時間を取得
  let hour = today.getHours();
  // console.log(hour);

  // 現在の分を取得
  let min = today.getMinutes();
  // console.log(min);

  // 現在の秒を取得
  let sec = today.getSeconds();
  // console.log(sec);

  // 曜日を取得
  let day = today.getDay();
  // console.log(day);

  // outPutField.innerHTML = hour;
  outPutField.innerHTML = `${hour}時 ${min}分 ${sec}秒 (${week[day]})`;
} 

timer();
// setInterval(timer, 500);