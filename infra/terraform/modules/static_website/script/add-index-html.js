// basic認証を適応しない、本番環境で使用
function handler(event) {
  var request = event.request;

  // /で終わるuriにはindex.htmlを返却
  var uri = request.uri;

  if (uri.endsWith('/')) {
    request.uri = uri + 'index.html';
  } else if (!uri.includes('.')) {
    request.uri = uri + '/index.html';
  }
}
