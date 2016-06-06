// URLを取得して「?]で分割「&」でも分割
var url   = location.href;
params    = url.split('?');
paramms   = params[1].split('&');

// パラメータ用の配列を用意
var paramArray = [];

// 配列にパラメータを格納
for ( i = 0; i < paramms.length; i++ ) {

    neet = paramms[i].split('=');
    paramArray.push(neet[0]);
    paramArray[neet[0]] = neet[1];

}

// パラメータによって処理を分岐
if ( paramArray['viewtype'] == 'viewtype01') {

  // ?viewtype=viewtype01
  alert('success! viewtype01');

} else if ( paramArray['viewtype'] == 'viewtype02') {

  // ?viewtype=viewtype02
  alert('success! viewtype02');

} else if ( paramArray['default'] == 'default') {

  // ?viewtype=default
  alert('success! default');

} else {

  // クエリ適合無し(クエリ無し)
  alert('It does not fit anything. default');

}
