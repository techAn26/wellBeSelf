# MySQLの立ち上げ
```shell
docker compose up -d mysql
```

# MySQLへのデータ取り込み
`db/mysql/.sql` 配下に取り込み対象のsqlファイルを配置

```shell
# コンテナに入る
docker compose exec mysql bash
```

```shell
# MySQLにログインする
mysql -uroot -p
> root
```
