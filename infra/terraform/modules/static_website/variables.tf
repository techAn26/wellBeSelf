variable "aws_profile" {
  type = string
}

variable "site_name" {
  type = string
}

variable "domains" {
  type = list(string)
}

variable "virginia_acm_arn" {
  type = string
}

variable "route53_zone_id" {
  type    = string
  default = ""
}

variable "cache_policy" {
  # "disabled" or "optimized"
  type = string
}

variable "enable_basic_auth" {
  type    = bool
  default = false
}

variable "waf_arn" {
  type = string
}

locals {
  s3_public_bucket_name = "${var.site_name}.public"
  oai_name              = "${local.s3_public_bucket_name}-oai"
  caching_policy_id = ({
    optimized = data.aws_cloudfront_cache_policy.optimized.id
    disabled  = data.aws_cloudfront_cache_policy.disabled.id
  })[var.cache_policy]
  cf_function_file_name = var.enable_basic_auth ? "add-index-html.js" : "add-index-html_basic-auth.js"
}

data "aws_cloudfront_cache_policy" "optimized" {
  name = "Managed-CachingOptimized"
}

data "aws_cloudfront_cache_policy" "disabled" {
  name = "Managed-CachingDisabled"
}
