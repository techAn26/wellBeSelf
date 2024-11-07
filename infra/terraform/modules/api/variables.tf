# AWS Profile
variable "aws_profile" {
  type = string
}


# openapiの定義ファイル
variable "openapi_file" {
  type = string
}

# API名
variable "api_name" {
  type = string
}

# APIドメイン
variable "domain" {
  type = string
}

# ACMのarn
variable "acm_arn" {
  type = string
}

# スクリプトを保持するS3バケット名
variable "s3_bucket" {
  type = string
}

# APIに使用するLambdaのハンドラ名
variable "lambda_handler" {
  type = string
}

# APIに使用するLambdaのメモリサイズ
variable "lambda_memory_size" {
  type = number
}

# Lambdaに設定する環境変数
variable "environments" {
  type = map(string)
}

# timeout
variable "timeout" {
  type = number
}

# Route53のゾーンID
variable "route53_zone_id" {
  type    = string
  default = ""
}

variable "region" {
  type = string
}

variable "waf_arn" {
  type = string
  default = ""
}

data "aws_caller_identity" "current" {}

locals {
  account_id = data.aws_caller_identity.current.account_id
  stage_name = "published"
}

variable "TMP_dummy_domain_prefix" {
  type    = string
  default = ""
}

variable "resource_policy" {
  type    = string
  default = ""
}
