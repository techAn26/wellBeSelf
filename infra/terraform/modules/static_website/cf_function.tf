resource "aws_cloudfront_function" "add_index_html" {
  name    = "${var.site_name}-cf-func"
  runtime = "cloudfront-js-2.0"
  comment = ""
  publish = true
  code    = file("${path.module}/script/${local.cf_function_file_name}")
}
