data "template_file" "this" {
  template = file(var.openapi_file)

  vars = {
    api_url : "https://${var.domain}"
    lambda_invoke_arn : aws_lambda_function.this.invoke_arn
    cors_allow_headers : "Origin, Content-Type, Authorization"
    cors_allow_methods : "*"
    cors_allow_origin : "*"
  }
}

resource "aws_api_gateway_rest_api" "this" {
  name = var.api_name
  body = data.template_file.this.rendered

  endpoint_configuration {
    types = [
      "REGIONAL"
    ]
  }
}

resource "aws_api_gateway_domain_name" "this" {
  domain_name              = "${var.TMP_dummy_domain_prefix}${var.domain}"
  regional_certificate_arn = var.acm_arn
  security_policy          = "TLS_1_2"

  endpoint_configuration {
    types = ["REGIONAL"]
  }
}
resource "aws_api_gateway_rest_api_policy" "this" {
  rest_api_id = aws_api_gateway_rest_api.this.id
  policy      = var.resource_policy
}

resource "aws_api_gateway_deployment" "this" {
  rest_api_id = aws_api_gateway_rest_api.this.id

  triggers = {
    redeployment = sha1(jsonencode(aws_api_gateway_rest_api.this.id))
  }

  lifecycle {
    create_before_destroy = true
  }
}

resource "aws_api_gateway_stage" "this" {
  deployment_id = aws_api_gateway_deployment.this.id
  rest_api_id   = aws_api_gateway_rest_api.this.id
  stage_name    = local.stage_name
}

resource "aws_api_gateway_base_path_mapping" "this" {
  api_id      = aws_api_gateway_rest_api.this.id
  stage_name  = aws_api_gateway_stage.this.stage_name
  domain_name = aws_api_gateway_domain_name.this.domain_name
}

resource "aws_wafv2_web_acl_association" "this" {
  count = var.waf_arn == "" ? 0 : 1

  resource_arn = aws_api_gateway_stage.this.arn
  web_acl_arn  = var.waf_arn
}
