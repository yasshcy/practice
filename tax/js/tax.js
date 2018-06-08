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

    // 3桁カンマ
    var totalPrice = total.toString().replace(/(\d)(?=(\d{3})+$)/g , '$1,');
    return totalPrice;
  }

  document.getElementById('total').textContent = totalPrice( isPrice );
  document.getElementById('price').textContent = isPrice.toString().replace(/(\d)(?=(\d{3})+$)/g , '$1,');

});

