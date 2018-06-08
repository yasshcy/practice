window.addEventListener('DOMContentLoaded', function () {

  // divに書いていく
  var ren = document.getElementById('fizzbuzz').textContent;

  var fizzbuzz = function ( num ) {
    if ( ( num % 3 === 0 ) && ( num % 5 === 0 ) ) {
      num = 'fizz!buzz!';
    } else if ( num % 3 === 0 ) {
      num = 'fizz!';
    } else if ( num % 5 === 0 ) {
      num = 'buzz!';
    } else {
      num = num;
    }
    return num;
  }

  for ( var i = 1; i <= 15; i++ ) {
    document.getElementById('fizzbuzz').textContent = fizzbuzz(i);
    console.log(fizzbuzz(i));
  }

});
