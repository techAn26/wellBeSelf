resource "aws_s3_bucket" "public" {
  bucket        = local.s3_public_bucket_name
  force_destroy = false
}

resource "aws_s3_bucket_public_access_block" "public" {
  bucket = aws_s3_bucket.public.id

  block_public_acls       = true
  block_public_policy     = true
  ignore_public_acls      = true
  restrict_public_buckets = true
}

resource "aws_s3_bucket_policy" "this" {
  bucket = aws_s3_bucket.public.id
  policy = jsonencode({
    Version = "2012-10-17"
    Statement = [
      {
        Sid    = ""
        Action = "s3:GetObject"
        Effect = "Allow"
        Principal = {
          Service : "cloudfront.amazonaws.com"
        }
        Resource = [
          "arn:aws:s3:::${local.s3_public_bucket_name}/*",
        ]
        Condition : {
          StringEquals : {
            "AWS:SourceArn" : aws_cloudfront_distribution.this.arn
          }
        }
      },
    ]
  })
}
