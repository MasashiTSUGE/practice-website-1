'use strict';
// トップに戻るボタンを出したり隠したりするための変数を取得
const hidebutton = document.getElementById('gototop');
// ウィンドウ高さを取得
const scrheight = window.innerHeight;
// ボタンの初期位置データを取得（レスポンシブデザインのため）
const basestatus = hidebutton.getBoundingClientRect();
// basestatus.top=アイコンの最上部のpx値を取得、ウィンドウの高さから引くことでアイコン（画面下端から）の初期位置に設定
const basepoint = scrheight - basestatus.top;
// ボディのサイズ-ウィンドウの高さ=最下部に到達するスクロール値
const pagebottom = document.body.clientHeight - scrheight;
// ヘッダーを操作するために取得
const header = document.getElementById('header');
// スクロールの上下を判定するための変数
let setposition = 0;
// スクロールが発生したときに関数を開始
window.addEventListener('scroll', () => {
    // スクロール量を変数として取得
    const scramount = window.scrollY;
    // 現在のbody下端からの距離
    const distance = pagebottom - scramount;
    // ボタンの位置を変更するための変数（初期位置からスクロールするごとに少しづつ上昇、スクロール量の半分
    let buttonpoint = scramount / 2 + basepoint;
    // ボタンが画面下端より12pxまで来たらそこで上昇を停止
    if (buttonpoint > 12) {
        buttonpoint = 12;
    }
    // 画面位置がフッターに到達した時、ボタンの不透明度を上げる、それ以外は半透明
    if (distance < 171) {
        hidebutton.style.opacity = 1.0;
    } else hidebutton.style.opacity = 0.5;
    // スクロールがフッター領域に近づいた時、フッターに埋まらないようボタン位置を変更
    if (distance < 33) {
        buttonpoint = 45 - distance;
        // ボタンが上に飛ばないようにポジションの最大値を指定
        if (buttonpoint > 45) { buttonpoint = 45; }
    }
    // pc画面用レスポンシブ設定
    if (window.innerWidth > 768) {
        // 下にスクロールされた時、閾値以上の画面位置だったらヘッダー領域を透明にして消す
        if (setposition < window.scrollY) {
            if (scramount > 100) {
                header.style.opacity = 0;
                header.style.display = "none";
            }
        } else {
            // 上にスクロールされた時、閾値以下の画面位置ならヘッダー領域を直ちに表示、閾値以上の画面位置なら半透明に表示して一定時間後にはっきりと表示
            if (scramount < 100) {
                header.style.opacity = 1.0;
                header.style.display = "flex";
            } else {
                setTimeout(() => {
                    header.style.opacity = 0.5;
                    header.style.display = "flex";
                }, 500);
                setTimeout(() => {
                    header.style.opacity = 1.0;
                }, 1500);
            }
        }
        setposition = window.scrollY;
        // スマホ画面から数値の変更
        if (distance < 280) {
            hidebutton.style.opacity = 1.0;
        } else hidebutton.style.opacity = 0.5;
        if (distance < 50) {
            buttonpoint = 62 - distance;
            if (buttonpoint > 62) { buttonpoint = 62; }
        }
    }
    //アイコンの位置をスタイルに直接指示することにより画面追随させている 
    gototop.style.bottom = buttonpoint + 'px';
});
// トップへ戻るボタンにmoした時に不透明度を1にしはっきりと表示
hidebutton.addEventListener('mouseover', () => {
    hidebutton.style.opacity = 1.0;
});
// トップへ戻るボタンからマウスが離れたときに不透明度を0.5に
hidebutton.addEventListener('mouseleave', () => {
    hidebutton.style.opacity = 0.5;
});
// メール確認フォームの入力が違っていた場合アラートを出す
// メールアドレスの内容を取得
const myform = document.form01;
// 確認用フォームからフォーカスが離れたときに判定を開始
myform.mailcheck.addEventListener('focusout', () => {
    const checker = myform.mailadress.value;
    console.log(checker);
    if (checker !== myform.mailcheck.value) {
        myform.mailcheck.style.border = ('1px solid #b71b26');
        document.getElementById('mailwrongallert').style.display = ('inline');
    } else {
        myform.mailcheck.style.border = ('none');
        document.getElementById('mailwrongallert').style.display = ('none');
    };
});
