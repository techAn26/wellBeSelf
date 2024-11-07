resource "aws_cloudfront_origin_access_identity" "this" {
  comment = local.oai_name
}

resource "aws_cloudfront_distribution" "this" {
  web_acl_id = var.waf_arn

  origin {
    origin_id                = aws_s3_bucket.public.id
    domain_name              = aws_s3_bucket.public.bucket_regional_domain_name
    origin_access_control_id = aws_cloudfront_origin_access_control.this.id
  }

  enabled             = true
  default_root_object = "index.html"
  wait_for_deployment = true
  aliases             = var.domains

  viewer_certificate {
    acm_certificate_arn            = var.virginia_acm_arn
    cloudfront_default_certificate = false
    ssl_support_method             = "sni-only"
    minimum_protocol_version       = "TLSv1.2_2021"
  }

  custom_error_response {
    error_code         = "403"
    response_code      = "200"
    response_page_path = "/404.html"
  }

  custom_error_response {
    error_code         = "404"
    response_code      = "200"
    response_page_path = "/404.html"
  }

  default_cache_behavior {
    target_origin_id       = aws_s3_bucket.public.id
    viewer_protocol_policy = "redirect-to-https"
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true

    cache_policy_id = local.caching_policy_id

    function_association {
      event_type   = "viewer-request"
      function_arn = aws_cloudfront_function.add_index_html.arn
    }
  }

  restrictions {
    geo_restriction {
      restriction_type = "none"
    }
  }
}

resource "aws_cloudfront_origin_access_control" "this" {
  name                              = aws_s3_bucket.public.bucket
  origin_access_control_origin_type = "s3"
  signing_behavior                  = "always"
  signing_protocol                  = "sigv4"
}
