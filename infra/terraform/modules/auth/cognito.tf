resource "aws_cognito_user_pool" "this" {
  name = var.name

  password_policy {
    minimum_length                   = 6
    temporary_password_validity_days = 7
  }

  lifecycle {
    prevent_destroy = true
  }
}

resource "aws_cognito_user_pool_client" "this" {
  name         = var.name
  user_pool_id = aws_cognito_user_pool.this.id

  generate_secret = false
  explicit_auth_flows = [
    "ALLOW_REFRESH_TOKEN_AUTH",
    "ALLOW_USER_SRP_AUTH"
  ]

  refresh_token_validity = 365
  access_token_validity  = 24
  id_token_validity      = 60

  token_validity_units {
    refresh_token = "days"
    access_token  = "hours"
    id_token      = "minutes"
  }

  prevent_user_existence_errors = "ENABLED"

  lifecycle {
    prevent_destroy = true
  }
}
