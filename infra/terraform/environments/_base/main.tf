locals {
  # ToDo 要設定
  env = ""

  # ToDo 要設定
  project      = ""
  project_name = "${local.project}-${local.env}"
  aws_profile  = local.project_name
  region       = "ap-northeast-1"
  # ToDo 要設定
  domain       = ""
}

provider "aws" {
  region  = local.region
  profile = local.aws_profile
}

data "aws_route53_zone" "this" {
  name = local.domain
}

module "s3_public_image" {
  source = "../../modules/s3"

  bucket_name = "${local.project_name}-public-image"
}

module "project" {
  source = "../../project"

  project_name = local.project_name
  env          = local.env
  aws_profile  = local.aws_profile
  region       = local.region

  route53_zone_id = data.aws_route53_zone.this.zone_id

  acm_domain = "*.${local.domain}"

  cognito_user_pool_id = module.auth.cognito_user_pool_id
  cognito_client_id    = module.auth.cognito_client_id

  # ToDo 要設定
  allowed_ips = []

  api_domain    = "api-${local.env}.${local.domain}"
  front_domain  = "front-${local.env}.${local.domain}"
  image_domain  = "image.${local.domain}"

  lambda_memory_size = 10240

  website_cache_policy = "disabled"

  public_image_dir = "s3://${module.s3_public_image.bucket}/"
  # ToDo 要設定
  api_origin = ""
}
