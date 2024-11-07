# Terraform
基本、modulesとprojectは固定で利用し、environments配下のファイルの設定を行う

※ ただしproject/openapi配下のjsonファイルはAPIの仕様に合わせて編集する必要あり。

インフラ構成は以下を提供
- S3 + Cloudfront + ACM + Route53 による静的サイトホスティング
- Lambda + API Gateway によるサーバレスAPI
- Cognito による認証・認可
- WAF によるIP制限

## Terraformの立ち上げ
```shell
docker compose up -d terraform
```

```shell
# コンテナに入る
docker compose exec terraform bash
```

```shell
# terraform init

# terraform apply

```
