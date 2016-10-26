$(function(){

  // テスト環境のドメインのみ適用させるとき
  // var url   = location.href;
  // if ( url.indexOf( 'localhost' ) ) {

    // 該当のリンクをとってくる
    $('ul li a').each(function() {

      // hrefを格納
      var myLink = $(this).attr('href');

      // ドメインが https://dummy.com だったら
      if ( myLink.match(/^https?:\/\/dummy.com/) ) {

        // 今のURLを取得してドメイン部分を置き換えて格納
        var replaceLink = $(this).attr('href').replace(/^https?:\/\/dummy.com/g, 'https://www.google.co.jp');

        // 置き換えたhtmlに差し替え
        $(this).attr('href', replaceLink);
      }

    });

  // }

});