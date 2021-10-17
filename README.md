# godfather

## 概要
システム開発時の変数やRDBMSのカラム名などの名付け親（Godfather）としての辞書ツールです.  
辞書は、YAMLファイルで定義します.  
特に外部サービスなどを利用していませんので、内部ネットワークに閉じて運用が可能です.
システム開発などのプロジェクト内ツールとして利用が可能となります.
サーバーサイドをGo/Gin、フロントエンドをNode.js/Reactで構築しています.

## 機能

- 命名機能
  - 日本語で入力された値に対して変換先が辞書に登録されていれば変換して画面に表示します.
  - 本ツールは、入力された言葉の名詞のみを変換対象としています.
  - 名詞の抽出には https://github.com/ikawaha/kagome を利用しています.
  - それぞれの名詞に対して、辞書登録文字との一致を判定して全体を変換します.
  - プログラミング言語などで利用される以下のケースで結果出力を行います.
    - LowerCamelCase（ex. hogeFugaPiyo）
    - LowerSnakeCase（ex. hoge_fuga_piyo）
    - UpperCamelCase（ex. HogeFugaPiyo）
    - UpperSnakeCase（ex. HOGE_FUGA_PIYO）
- 辞書機能
  - 変換前文字と変換後文字を 1：1 で定義する辞書を作れます.（現状手作業での追加のみ）


## 実装予定の機能

- Issueを参照
  - https://github.com/takashno/godfather/issues
- 要望等ありましたら、Issueへ登録お願いします.
- 学習がてら作っているツールになりますので、PullRequestなども歓迎します.


## 利用方法

TODO...