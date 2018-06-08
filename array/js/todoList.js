window.addEventListener('DOMContentLoaded', function() {

  // function を変数に代入
  var todoList = ( function (i) {

    // 配列 todo の中身をlengthで回す
    for (var i = 0; i < todo.length; i++) {

      // ol tagの中に追加するタグを作る
      var li = document.createElement('li');
      // tag作ったらその中身のテキストに埋める
      li.textContent = todo[i];
      // hoge の中身に足す
      document.getElementById('hoge').appendChild(li);

    }

  }());

});
