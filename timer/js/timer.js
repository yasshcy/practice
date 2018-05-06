// 現在時間取得して整形して出力する
var whatTime = function () {

  // 2桁表示
  var digital = function ( num ) {
    var digi;

    // 引数が10以下は一桁なので先頭に0追加
    if ( num < 10 ) {
      digi = '0' + num;
    } else {
      digi = num;
    }
    return digi;
  }

  // 現在時刻を取得
  var now = new Date();

  // 時・分・秒
  var h = digital(now.getHours());
  var ms = digital(now.getMinutes());
  var s = digital(now.getSeconds());

  // つなげる
  var isNow = h + ':' + ms + ':' + s;

  // 実行結果を返す
  return isNow;
}

// 取得した現在時間をDOMに反映
var dispTime = function () {

  // 反映するhtml取ってきてwhatTime関数で埋める
  document.getElementById('clock').innerHTML = whatTime();
  return;
}

// 1000ミリ秒ごとに実行
setInterval(dispTime, 1000);