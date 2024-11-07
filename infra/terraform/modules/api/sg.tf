# Lambdaに適用するセキュリティグループ
resource "aws_security_group" "lambda" {
  name   = "${var.api_name}-lambda-sg"

  tags = {
    Name = "${var.api_name}-lambda-sg"
  }
}

# Lambdaに適用するセキュリティグループ(アウトバウンド)
resource "aws_security_group_rule" "lambda_outbound" {
  security_group_id = aws_security_group.lambda.id

  type        = "egress"
  from_port   = 0
  to_port     = 0
  protocol    = -1
  cidr_blocks = ["0.0.0.0/0"]
}
