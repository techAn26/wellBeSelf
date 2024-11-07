// 複数functionの紐づけができないため、1つの関数でベーシック認証も実施
function handler(event) {
  var request = event.request;
  var headers = request.headers;

  // ユーザー名とパスワードを設定
  // echo -n "user:user" | base64
  var authString = 'Basic dXNlcjp1c2Vy';

  // 初アクセス or 認証NG
  if (typeof headers.authorization === 'undefined' || headers.authorization.value !== authString) {
    return {
      statusCode: 401,
      statusDescription: 'Unauthorized',
      headers: {'www-authenticate': {value: 'Basic'}}
    };
  }

  // 認証OKの場合、/で終わるuriにはindex.htmlを返却
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    request.uri = uri + '/index.html';
  }

  return request;
}
