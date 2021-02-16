---
title: Python Tkinterでアプリケーション制作
slug: /blog/device-manager
date: 2020-10-02
tags: ["Python"]
image: ./eyecatch.png
---

Python の Tkinter を使い，ラップトップの画面の明るさを変えるだけの GUI アプリを作りました．

ソースコードは[こちら](https://github.com/chaya2z/DeviceManager)．

## 外観

アプリのスクリーンショットです．

![スクリーンショット](../../assets/deviceManagerSS.jpg)

## 目的

私はウィンドウマネージャの i3 を使っており，GNOME や KDE といったデスクトップ環境は入れていません．それらのデスクトップ環境にあるような画面の明るさや音量を変える設定アプリは無いため，自分で作ることにしました．すでに他の人が作ったものはありますが，勉強のため画面の明るさを変えるアプリを作ることにしました．

## おわりに

polybar から呼び出せるようにして使っていく予定です．rofi とは別によく使う項目をここに機能追加していく予定.
