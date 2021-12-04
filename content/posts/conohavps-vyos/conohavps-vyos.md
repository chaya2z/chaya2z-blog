---
title: ConoHa-VPSにVyOSをインストールする
slug: /blog/2021/12/04/post01
date: 2021-12-04
tags: ["ネットワーク"]
image: ./eyecatch.png
---

## 手順

1.ConoHa の VPS を契約しサーバを建てる

2.ウェブサーバを建てて ISO イメージを公開する

3.ウェブサーバから ISO イメージをダウンロードする

4.( 1 ) で建てたサーバに ISO イメージを挿入する

5.VyOS をインストールする

6.( 4 ) で挿入した ISO イメージを排出する

## 1. ConoHa の VPS を契約しサーバを建てる

OS は何でもいい ( ※1 ) のでサーバを契約する．

※1: Ubuntu 20.04 で確認済み．ウェブサーバが建てられればなんでもいい．

## 2. ウェブサーバを建てて ISO イメージを公開する

https://qiita.com/marukei/items/6b6ccee3e7a553f64f1e

この記事によると ConoHa の VPS では ISO イメージのダウンロードに http 接続しか使えない．

VyOS の ISO イメージは https で配布されているので，http 接続のためにウェブサーバを建てる必要がある．

### 2.1 nginxでウェブサーバを建てる

1.nginx のインストール

```bash
sudo apt update
sudo apt install nginx -y
```

2.ISO イメージファイルの公開

```bash
cd /var/www/html
sudo wget https://downloads.vyos.io/rolling/current/amd64/vyos-rolling-latest.iso
```

3.ISO イメージファイルにアクセスできるようにする

デフォルトでは `/vyos*.iso` にアクセスしても ISO イメージファイルにアクセスできない．

`nginx.conf` を編集する．

```bash
sudo vi /etc/nginx/nginx.conf
```

httpディレクティブに `server` ディレクティブを追加する．

```
http {
    
    ...
    
    server {
        location / {
            try_files $uri $uri/ =404;
        }
    }
}
```

こうすると `/vyos*.iso` にアクセスしたときにそのファイルがあるか探し，存在しなければ404を返すようになる．

## 3. ConoHaにISO イメージをダウンロードする

### 3.1 conoha-iso を使う

ISO イメージのダウンロードを簡単に行えるツール．ツールのダウンロード手順は以下から．

https://support.conoha.jp/v/clitools/

### 3.2 conoha-iso の確認

```
./conoha-iso list -u [APIユーザ名] \
                  -p [APIパスワード] \
                  -n [テナント名] \
                  -r [リージョン]
```

ISO イメージのダウンロードが初めてなら `No ISO images` と返ってくる．

### 3.3 ISO イメージのダウンロード

(2) で建てたウェブサーバからISOイメージをダウンロードする．

```
./conoha-iso download -i http://{ConoHaのサーバのIP}/{vyosのISOイメージのファイル名} \
                      -u [APIユーザ名] \
                      -p [APIパスワード] \
                      -n [テナント名] \
                      -r [リージョン]
```

もう一度上記の `./conoha-iso list` コマンドを使い ISO イメージが追加されたか確認する．

## 4. ( 1 ) で建てたサーバに ISO イメージを挿入する

`./conoha-iso insert` コマンドで ISO イメージを挿入する．これは USB メモリをサーバに挿した状態と同じ．

## 5. VyOS をインストールする

VyOS のインストーラが立ち上がるのでインストールする．

```
install image
poweroff
```

## 6. ISO イメージを排出する

`./conoha-iso eject` コマンドで ISO イメージを排出する．これは USB メモリをサーバから抜いた状態と同じ．

## 参考

ConoHaのドキュメント．全体の流れはここを参照．

https://support.conoha.jp/v/clitools/

ウェブサーバを建ててISOイメージをダウンロードするアイデアはここから．

https://himakan.net/program/conoha-vps-install-rancheros

nginxの公式ドキュメント．locationの書き方はここを参照．

https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/