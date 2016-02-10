iz_zoom 説明書
----------

iz_zoom.js (c)2016 econosys system  http://flatsystems.net/econosys_system/  
iz_zoom page   http://flatsystems.net/econosys_system/iz_zoom.html  

Version 3
----------

3.00 jQueryプラグインに。CSS3対応。

デモを実行する
----------

FTPでお使いのレンタルサーバにiz_zoom_demoフォルダをアップロードして
iz_zoom_demo.html を起動して下さい
**（注意）必ずどこかのサーバー上に上げて実行してください。**
ローカルだとajaxでファイル受信が実行できない場合があります。

iz_zoom を使う
-----------

1. 下記の1フォルダ をサーバにアップロードします
「js」フォルダ

2. 使用したい htmlファイルの<head>～</head>内に次の4行を追加します。
```
<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
<script type="text/javascript" src="http://ajax.microsoft.com/ajax/jquery.templates/beta1/jquery.tmpl.js"></script>
<script type="text/javascript" src="js/jquery.iz_zoom.js"></script>
<link type="text/css" rel="stylesheet" href="js/iz_zoom_keyframe.css">
```

3. iz_zoomを起動する画像にIDを追加します（例：image1 というIDを追加）
```
  <img src="thumb.gif"> → <img id="image1" src="thumb.gif">
```

4. IDに対してiz_zoomの設定を行います。</body>の直前に下記の行を追加。（外部 .js ファイルにしてもOK。ただしDOM構築完了後にしてください。）
記述方式は new iz_zoom('ID名',変数のハッシュ);
```
<script type="text/javascript">
$(document).ready(function(){
  $('#image1').iz_zoom({
  	'templatefile' : 'js/iz_zoom/template01.html' ,
  	'cssfile'      : 'js/iz_zoom/template01.css' ,
  	'imagefile'    : 'gallery_images/image01_large.jpg' ,
      'imagefile@2x' : 'gallery_images/image01_large@2x.jpg' ,
  	'x'            : 95 ,
  	'y'            : 40 ,
  	'relative_id'  : 'image1' ,
  	'title'        : '画像のタイトル'
  });
});
</script>
```
（変数のハッシュの説明）
```
templatefile : テンプレートファイル名,
cssfile      : テンプレートcssファイル名 ,
imagefile    : 画像ファイル名,
imagefile@2x : Retina用画像ファイル名（この項目をセットしておくとiPhone, iPad, MacBookProなどRetina端末でRetina用画像を表示します）,
x            : x座標（「relative_id」をセットしていればそこを基準に相対座標 ）,
y            : y座標（「relative_id」をセットしていればそこを基準に相対座標 ）,
relative_id  : ID名（相対座標の基準となるID名）
任意の変数名   : 任意の値
```

5. 画像の表示位置を相対座標で指定したい場合は 'relative_id' に 基準となるID名を記述します。（画像ごとに指定できます）

6. よくあるエラー1（IEでエラーが発生する場合）
下記のように最後にカンマがある場合、IEのみエラーとなりますので必ず取り除いてください。
```
$('#image1').iz_zoom({
  'templatefile' : 'js/iz_zoom/template01.html' ,
  'cssfile'      : 'js/iz_zoom/template01.css' ,
  'imagefile'    : 'gallery_images/image01_large.jpg' ,
});
  　　　↓
$('#image1').iz_zoom({
  'templatefile' : 'js/iz_zoom/template01.html' ,
  'cssfile'      : 'js/iz_zoom/template01.css' ,
  'imagefile'    : 'gallery_images/image01_large.jpg'
});
```

7. よくあるエラー2（IZ_ZOOMを設置するページでイメージマップを使用している場合。Safari,Chromeなどでイメージマップが使用できない場合があります）
その場合下記&lt;DIV&gt;タグをページの何処かに追加してください。
```
  <div id="iz_zoom_box"></div>
```

テンプレートカスタマイズ方法
----------

iz_zoomのテンプレートはカスタマイズすることができます。
テンプレート「js/iz_zoom/template01.html」等を変更することによって好きなレイアウトで表示させることが出来ます。
その際下記のルールを守って下さい

A.画像ファイルのimgタグは下記のようにする。
例：```<img src="${imagefile}" {{html srcset}} >```

B.次の名称の変数は使用できません（プログラムが使用する予約変数です）
x, y, style, templatefile, relative_id


アニメーションカスタマイズ方法
----------

iz_zoomのアニメーション（デフォルトではフェードイン・アウトだけですが。）はCSS3アニメーションを使用しているので
自由にカスタマイズすることができます。

CSSファイル「js/iz_zoom_keyframe.css」を変更することによって好きなアニメーションで表示させることが出来ます。
（ただしキーフレーム名は変更しないでください）


テンプレートカスタマイズ方法
----------


ライセンス
----------

本スクリプトは「フリーソフトです」
ライセンスはMITライセンスです。
「著作権表示」（.jsファイル,テンプレートファイルのそれぞれ1行目）さえ変更しなければ自由に使用、改変、再配布など行えます。
商用利用もOKです。

iz_zoomに関するご要望ご質問
----------

iz_zoomに関するご要望ご質問はhttp://flatsystems.net/econosys_system/cgi/mailform/mailform.cgi
までお願いいたします。
