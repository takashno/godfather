# godfather

## 概要
システム開発時の変数やRDBMSのカラム名などの名付け親としての辞書ツールです.  
辞書は、YAMLファイルで定義します.  
完全にプロジェクト内部に閉じて運用が可能です.

## 機能

- 命名機能
  - 入力された値に対して変換先が辞書に登録されていれば変換して画面に表示します.
  - プログラミング言語などで利用される以下のケースで結果出力を行います.
    - LowerCamelCase（ex. hogeFugaPiyo）
    - LowerSnakeCase（ex. hoge_fuga_piyo）
    - UpperCamelCase（ex. HogeFugaPiyo）
    - UpperSnakeCase（ex. HOGE_FUGA_PIYO）
- 辞書機能
  - 変換前と変換後を1：１で定義する辞書を作れます.

## 利用方法

TODO...