# projectBase
開発の初速を上げるためのベースレポジトリ

! 継続的に改良中...

## 基本構成
AWSを活用したサーバレスアーキテクチャ
- front
  - Code > Next.js (SSG)
  - Hosting > S3 + Cloudfront + Route53 + ACM
- backend
  - Code > Node.js
  - API > Lambda + API-Gateway + Route53 + ACM
  - DB > Notion, etc (coming soon...)
  - Auth > Cognito (coming soon...)
- infra
  - Code > Terraform
  - Provider > AWS

## 開発環境

### フロントエンド

- Next.js (Pages, not AppRouter)
- TypeScript
- Recoil

### バックエンド

- Node.js
- MySQL

### インフラ

- AWS
- Terraform

### 共通

- prettier
- ESLint
- husky
- docker / docker-compose
