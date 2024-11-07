# バケット名
variable "bucket_name" {
  type = string
}

# バージョニング設定
variable "enable_versioning" {
  type    = bool
  default = false
}
