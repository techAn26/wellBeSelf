# WAF(フロント)
module "waf_front" {
  source = "../modules/waf/cloudfront"

  aws_profile  = var.aws_profile
  project_name = var.project_name
  env          = var.env
  allowed_ips  = var.allowed_ips
}

# フロント
module "front_mng" {
  source = "../modules/static_website"

  aws_profile = var.aws_profile

  site_name        = var.project_name
  domains          = [var.front_domain]
  virginia_acm_arn = data.aws_acm_certificate.virginia.arn
  route53_zone_id  = var.route53_zone_id
  cache_policy     = var.website_cache_policy

  waf_arn = module.waf_front.arn
}
