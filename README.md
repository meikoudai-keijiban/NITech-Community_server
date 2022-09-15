# NITech-Community_server
NITech-Community server
今のコードは練習に使う。後に、書き直し可能性がある。

# 8月
## ESLint
リントまたリンターとは、コンピュータプログラムなどのソースコードを読み込んで内容を分析し、問題点を指摘してくれる静的解析ツール。また、そのようなツールで解析を行うこと。 ツールを指す場合は “linter” （リンター）と呼ぶこともある。

ESLintはJavaScriptのリンターですが、TypeScript用のプラグインを使うことで、TypeScriptのリンターとしても使えるようになっている。

### ESLintの新規導入
ESLintによるリントの設定は、JavaScript、JSON、またはYAMLの形式で.eslintrc.*というファ
イルに記述する。

このほか、コマンドラインから任意の設定ファイルの名前を指定することもできるし、package.
jsonファイルのeslintConfigフィールドに設定を記述することもできる。

```terminal
npm i -D eslint @typescript-eslint/eslint-plugin @typescript-eslint/parser
```

eslintパッケージはESLintのパッケージで、@typescript-eslint/eslint-pluginパッケー
ジはESLintのTypeScript用プラグインです。また、@typescript-eslint/parserパッケージは、
TypeScriptをESLintが理解できるようパースする役割を担うものです。

## nodenv
Nodeのバージョンを管理するツール。
インストール方法などは、[nodenvでNode.jsのバージョンを切り替える](https://zenn.dev/donchan922/articles/b08a66cf3cbbc5)に参照。

```terminal
# インストール可能なNode.jsのバージョン一覧
$ nodenv install -l
...
15.14.0
16.0.0
16.1.0
16.2.0
16.3.0
...

# Node.jsの15.14.0と16.3.0をインストールする
$ nodenv install 15.14.0
$ nodenv install 16.3.0

# nodenvに認識させる
$ nodenv rehash

# インストールされているNode.jsのバージョン一覧
$ nodenv versions
  15.14.0
  16.3.0

# ローカル（カレントディレクトリ配下）で利用するNode.jsのバージョンを設定する
$ nodenv local 15.14.0

# グローバル（システム全体）で利用するNode.jsのバージョンを設定する
$ nodenv global 16.3.0
```
## TypeScript
### tsconfig
各オプション及びその意味
![tsconfig](./readme_img/tsconfig.png)


### routing-controllers
---------------------------------------------
npm audit fix --force を使って、routing-controllersの「controllers?: string[];」エラーを解決

https://www.jianshu.com/p/60591cfc6952 （中国語）

--------------------------------------------

使用方法は、https://github.com/typestack/routing-controllers#example-of-usage  に参照

--------------------------------------------

TypeError: Reflect.getMetadata is not a function
解決方法：app.js(メインファイル)で、"reflect-metadata"をインポートする。
参照：https://github.com/typestack/class-transformer/issues/52 

--------------------------------------------


