variable "project_name" {
  type = string
}

variable "env" {
  type = string
}

variable "aws_profile" {
  type = string
}

variable "region" {
  type = string
}

variable "route53_zone_id" {
  type    = string
  default = ""
}

variable "acm_domain" {
  type = string
}

variable "cognito_user_pool_id" {
  type = string
}

variable "cognito_client_id" {
  type = string
}

variable "allowed_ips" {
  type = list(string)
}

variable "api_domain" {
  type = string
}

variable "front_domain" {
  type = string
}

variable "image_domain" {
  type = string
}

variable "api_origin" {
  type = string
}

variable "lambda_memory_size" {
  type = number
}

variable "website_cache_policy" {
  type = string
}

variable "public_image_dir" {
  type = string
}

variable "TMP_dummy_domain_prefix" {
  type    = string
  default = ""
}

data "aws_caller_identity" "current" {}

locals {
  # アカウントID
  account_id = data.aws_caller_identity.current.account_id
}
