terraform {
  backend "s3" {
    # versioningを有効化すること
    bucket  = ""
    region  = "ap-northeast-1"
    profile = local.project_name
    key     = "terraform.tfstate"
    encrypt = true
  }
}
