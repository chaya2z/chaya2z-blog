---
title: JetbrainsのIDEをCLIで起動する
slug: /blog/2021/12/14/post01
date: 2021-12-14
tags: ["エディタ"]
image: ./eyecatch.png
---

この記事は [ITRC Advent Calendar 2021](https://adventar.org/calendars/6368) の14日目の記事です．

## やりたいこと

コマンドラインから Jetbrains の IDE を起動できるようにする．例えば以下のような感じのことをできるようにする．

```bash
idea hoge.md
```

## 環境

- GNU/Linux Ubuntu Desktop 20.04 

- Toolbox を使って IDE を管理しているとする．

## 設定手順

1.まずは Toolbox を開く．

2.ウィンドウの右上の六角形のマークを押下し「Settings」を開く ( もしくは `Ctrl + ,` を入力 ) ．

3.「 Generate shell scripts」にチェックを入れる．

4.任意の `~/` 以下のディレクトリを入力する (**`/usr/local/bin` には権限がなく書きこめないため** ) ．

5.入力欄の下の「 Change... 」を押下する．

6.ディレクトリ選択のダイアログが開く．**「 Selection 」の入力欄の末尾に謎の空白があるので削除する**．

7.「 OK 」を押下してダイアログを閉じる．

8.作成したディレクトリにパスを通す．

### 補足

この画面の「 Generate shell scripts」を設定する．ここでは `/home/chaya2z/.local/share/JetBrains/bin` を使っている．

<img width="448" alt="設定画面" src="https://img.esa.io/uploads/production/attachments/18139/2021/11/03/109022/5cff8db0-7c07-48e3-a07d-bf3d4567489c.png">

「 Selection 」の入力欄の末尾に謎の空白がある

<img width="447" alt="Selection:" src="https://img.esa.io/uploads/production/attachments/18139/2021/11/03/109022/cf711fa5-b334-47be-811e-1b8d8a802974.png">

## 参考

- https://pleiades.io/help/idea/working-with-the-ide-features-from-command-line.html