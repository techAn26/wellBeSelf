provider "aws" {
  profile = var.aws_profile
  region  = var.region
}

provider "aws" {
  profile = var.aws_profile
  region  = "us-east-1"
  alias   = "virginia"
}

# ストレージ
module "s3_storage" {
  source = "../modules/s3"

  bucket_name       = "${var.project_name}-storage"
  enable_versioning = true
}

# Lambdaスクリプト格納用ストレージ
module "s3_lambda_script" {
  source = "../modules/s3"
  bucket_name = "${var.project_name}-lambda-script"
}

# APIで使用する証明書 (コンソール等から登録済みのもの)
data "aws_acm_certificate" "this_region" {
  domain      = var.acm_domain
  most_recent = true
}

# バージニアのACM取得(CloudFront用)
data "aws_acm_certificate" "virginia" {
  provider    = aws.virginia
  domain      = var.acm_domain
  most_recent = true
}
