// monsterの初期体力
var monster = 300;

// 攻撃
var attack;
var count = 0;
window.alert('モンスターが現れた！');

// 体力0になるまで繰り返し
while ( monster >= 0 ) {
  var command = window.confirm('モンスターの体力' + monster + ' 戦う？');
  if ( command ) {
    var attack = Math.floor(Math.random() * 80);
    var monster = monster - attack;
    window.alert('モンスターに' + attack + 'ダメージ');
    count++;
  } else {
    window.alert('しかしモンスターはどいてくれない。。。')
  }
}
window.alert('モンスターを' + count + '回攻撃で倒した！！！！');
