variable "aws_profile" {
  type = string
}

variable "project_name" {
  type = string
}

variable "env" {
  type = string
}

variable "allowed_ips" {
  type = list(string)
}

locals {
  waf_name = "${var.project_name}-${var.env}-cf-waf"
}
