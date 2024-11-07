resource "aws_lambda_function" "this" {
  function_name = var.api_name

  s3_bucket   = var.s3_bucket
  s3_key      = "${var.api_name}.zip"
  role        = aws_iam_role.this.arn
  handler     = var.lambda_handler
  runtime     = "nodejs18.x"
  memory_size = var.lambda_memory_size
  timeout     = var.timeout

  publish = true

  environment {
    variables = var.environments
  }
}

resource "aws_lambda_permission" "this" {
  statement_id  = "AllowExecutionFromAPIGateway"
  action        = "lambda:InvokeFunction"
  function_name = aws_lambda_function.this.function_name
  principal     = "apigateway.amazonaws.com"

  source_arn = "arn:aws:execute-api:${var.region}:${local.account_id}:${aws_api_gateway_rest_api.this.id}/*"
}
