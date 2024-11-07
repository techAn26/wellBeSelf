resource "aws_cloudwatch_log_group" "this" {
  // Select a log group in your account that begins with 'aws-waf-logs-'.
  name              = "aws-waf-logs-${local.waf_name}"
  retention_in_days = 60
}

resource "aws_wafv2_web_acl_logging_configuration" "this" {
  log_destination_configs = [aws_cloudwatch_log_group.this.arn]
  resource_arn            = aws_wafv2_web_acl.this.arn

  logging_filter {
    default_behavior = "KEEP"

    filter {
      behavior = "DROP"

      condition {
        action_condition {
          action = "ALLOW"
        }
      }
      requirement = "MEETS_ALL"
    }
  }
}
