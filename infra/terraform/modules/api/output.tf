# API GatewayのIDを出力
output "api_gateway_id" {
  value = aws_api_gateway_rest_api.this.id
}
