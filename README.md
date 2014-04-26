sass-compass-grunt
=======

Grunt Front Osaka Vol.1で発表したsass+compass+gruntの関連ファイル群です。

概要
-----
Gruntがindex.htmlと*.scssファイルを監視します。scssファイルが更新されればcssにコンパイルしてChromeを自動的に再読込します。index.htmlファイルが更新されればChromeを自動的に再読込します。

###使用するGruntプラグイン
* [grunt-contrib-connect](https://www.npmjs.org/package/grunt-contrib-connect)* [grunt-contrib-compass](https://npmjs.org/package/grunt-contrib-compass)* [grunt-contrib-watch](https://npmjs.org/package/grunt-contrib-watch)


使い方
-----

##cloneまたはダウンロード
ファイルをcloneまたはダウンロードして適当なディレクトリに配置してください。

##各プラグインダウンロード
プロジェクトにはプラグインが含まれていませんのでダウンロードしてください。

```
npm install
```


##livereloadをインストール
grunt-contrib-watchでlivereloadを行うので、ブラウザにlivereload拡張をインストールします。勉強会ではChromeとChome版livereload拡張を使いました。

livereload拡張はこちらからダウンロードできます。[How do I install and use the browser extensions?](http://feedback.livereload.com/knowledgebase/articles/86242-how-do-i-install-and-use-the-browser-extensions-)


##gruntを実行

Gruntfile.jsがあるディレクトリでgruntを実行します。

```
grunt
```


