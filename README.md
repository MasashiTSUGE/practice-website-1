# 演習制作サイト-1/(リフォーム会社webページ)

## できるだけデザインカンプを正確に再現したwebサイト

訓練校に入校して最初の大きな演習課題として制作したwebサイトになります
デザインカンプをfigmaファイルで渡していただき、そこから画像素材を切り出しして
HTMLとCSSで出来るだけ正確に再現することを意識して制作しました
開閉するハンバーガーメニューも、html及びcssのみで実装しています
chromeプラグインのPerfectPixelを利用し、同じビューポートの上ではデザインカンプと完全に合致する様に配置しました

## モバイルファースト

課題の制作要件でモバイルファーストとあったため、SP版のページを作成してからPC版のページを制作しました
SP版では縦にならんでいた要素やフォームをビューポートに応じて横に配置し直す等をcssで実装しています

## Javascript

Javascriptを利用し、ナビゲーションメニューとページトップへ戻るボタンを、画面の閲覧位置に応じて表示を変更させる機能を実装しました
フォーム部分の一部バリデーション(メール入力欄のチェック、アラート機能)を実装しました
また、外部ライブラリ(Yubinbango.js)を用いて、郵便番号から住所の自動入力機能も実装しました

## ファイル構造

- site-01
  - index.html
  - css
      - destyle.css
      - style.css
  - js
      - index.js
  - img
      - デザインカンプから切り出した画像を格納しています
