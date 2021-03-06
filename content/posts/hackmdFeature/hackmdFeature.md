---
title: HackMD小ネタ集
slug: /blog/hackmdFeature
date: 2020-09-02
tags: ["エディタ"]
image: ./eyecatch.png
---

HackMD で個人的によく使う機能を紹介します．

## HackMD とは

Markdown でノートを取ることのできるウェブサービスです．ウェブ上で使えるので，他の人とノートを共有したり，別のマシンからノートにアクセスできる点が便利です．

## 数式の挿入

$\LaTeX$ の記法を使い，数式をノートに書くことができます．

文中に数式を埋め込むには，前後の文章の間にスペースを入れ，`$` で囲みます．

### コード

```
数列 $A$ を $a_1,\ a_2,\ a_3,\ \dots a_n$ とする．
```

### プレビュー

数列 $A$ を $a_1,\ a_2,\ a_3,\ \dots a_n$ とする．

数式を独立させ表示するには， `$$` で囲みます．

### コード

```
$$
e^{i\pi} =  -1
$$
```

### プレビュー

$$
e^{i\pi} =  -1
$$

## 目次をつける

目次をつけたい場所に `[TOC]` と書きます．タグを見て自動で目次を追加してくれます．

## チェックボックス

角括弧の中に `x` を入れるとチェックが入ります．プレビュー側でチェックを入れると自動で編集側に `x` が入ります．

### コード

```
- [ ] チェック
- [x] チェック
```

### プレビュー

- [ ] チェック
- [x] チェック

## コードブロック

連続したバッククオート（ ` ``` ` ）で囲むことでコードを書くことができます．

最初の　` ``` ` の横に言語名を書くことでハイライトを入れることができます．

### コード

````
```python
print("Hello World")
```
````

### プレビュー

```python
print("Hello World")
```

上記に加え，最初の　` ``` ` の横に `=` を書くことで行番号を表示することができます．言語のハイライトと同時に使いたいときは， `python=` のように言語の横に `=` を書きます．

また，例えば `=100` のように `=` の横に数字を入れることで，その行から番号を始めることができます．

## おわりに

基本的な Markdown だけでもきれいなノートが作成できますが，これらの機能でさらに見やすいノートが取れるでしょう．

他にもいろいろあるので，知りたい方は [このページ](https://hackmd.io/s/features-jp) を参考にしてみてください．

HackMD を使って，いろいろな機能で遊んでみてください．

## 参考

- https://hackmd.io/s/features-jp
