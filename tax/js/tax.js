window.addEventListener('DOMContentLoaded', function () {

  var isPrice = document.getElementById('price').textContent;
  var isPriceParse = parseInt( isPrice );
  Number( isPriceParse );


  var totalPrice = function ( price ) {
    // 税率
    var tax = 0.08;
    // 整数値に
    var isPriceParse = parseInt( price );
    // 変数の型を数字に
    Number( isPriceParse );
    // 税率と月山
    total = isPriceParse + isPriceParse * tax;
    return total;
  }

  document.getElementById('total').textContent = totalPrice( isPrice );

});

