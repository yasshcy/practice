$(function(){

  // URLを取得
  var url   = location.href;

  // URLにパラメータ「?]または「&」があったら分割
  if ( url.indexOf( '?' || '&' ) != -1 ) {

    params    = url.split('?');
    paramms   = params[1].split('&');

  } else {

    // パラメータなければdefaultを表示
    console.log('It does not fit anything. default');
    $('.default').fadeIn('slow');
    return;

  }

  // パラメータ用の配列を用意
  var paramArray = [];

  // 配列にパラメータを格納
  for ( i = 0; i < paramms.length; i++ ) {

      neet = paramms[i].split('=');
      paramArray.push(neet[0]);
      paramArray[neet[0]] = neet[1];

  }

  // パラメータによって処理を分岐
  if ( paramArray['viewtype'] === 'viewtype01') {

    // ?viewtype=viewtype01
    console.log('success! viewtype01');
    $('.viewtype01').fadeIn('slow');

  } else if ( paramArray['viewtype'] === 'viewtype02') {

    // ?viewtype=viewtype02
    console.log('success! viewtype02');
    $('.viewtype02').fadeIn('slow');

  } else if ( paramArray['viewtype'] === 'default') {

    // ?viewtype=default
    console.log('success! default');
    $('.default').fadeIn('slow');

  } else {

    // クエリ適合無し(クエリ無し)
    console.log('It does not fit anything. default');
    $('.default').fadeIn('slow');

  }

});