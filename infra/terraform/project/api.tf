# WAF(API)
module "waf_api" {
  source = "../modules/waf/api_gw"

  aws_profile  = var.aws_profile
  region       = var.region
  project_name = var.project_name
  // API用のwafはIP制限をかけないため、allowed_ipsは[]で固定とする
  allowed_ips  = []
}

# 管理画面API
module "api" {
  source = "../modules/api"

  aws_profile = var.aws_profile
  openapi_file       = "../../project/openapi/sample.json"
  api_name           = "${var.project_name}-api"
  domain             = var.api_domain
  acm_arn            = data.aws_acm_certificate.this_region.arn
  s3_bucket          = module.s3_lambda_script.bucket
  lambda_handler     = "apiIndex.handler"
  lambda_memory_size = var.lambda_memory_size

  environments = {
    ENV                    = var.env
    STORAGE_DIR            = "s3://${module.s3_storage.bucket}"
    COGNITO_USER_POOL_ID   = var.cognito_user_pool_id
    COGNITO_CLIENT_ID      = var.cognito_client_id
    PUBLIC_IMAGE_DIR       = var.public_image_dir

    API_ORIGIN         = var.api_origin
  }

  timeout         = 180
  route53_zone_id = var.route53_zone_id
  region          = var.region

  waf_arn = module.waf_api.arn

  TMP_dummy_domain_prefix = var.TMP_dummy_domain_prefix
}
