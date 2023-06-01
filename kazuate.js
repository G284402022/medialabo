
// 答え
let kotae = Math.floor(Math.random()*10) + 1;
console.log('答え（デバッグ用）: ' + kotae);

// 入力回数（予想回数）
let kaisu = 0;

// 予想を4回実行する
// 将来以下の hantei(); の4回の呼び出しを全て削除する
// 代わりにここでは，ボタンを押したら hantei() を呼び出すイベント処理をする

// ボタンを押した後の処理をする関数 hantei() の定義
let h = document.querySelector('button#hantei');
h.addEventListener('click', hantei);

function hantei() {
  let i = document.querySelector('input[name="number"]');
  let number = i.value;
  console.log(number);
  // 将来ここでは 4 ではなくテキストボックスに指定された数値を yoso に代入する
  kaisu=kaisu+1;
  let k1=document.querySelector("span#kaisu");
  k1.textContent=kaisu;

  let yoso = number;
  let a1=document.querySelector("span#answer");
  a1.textContent=yoso;

  let w=document.querySelector("p#result");
  if(kaisu<3){
    if(yoso<kotae){
      w.textContent="まちがい．答えはもっと大きいですよ";
    } else if(kotae<yoso){
      w.textContent="まちがい．答えはもっと小さいですよ";
    } 
    
    if((kaisu-1)&&yoso===kotae){
      w.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
    }else if(yoso==kotae){
      w.textContent="正解です.おめでとう！";
    }}

    if(kaisu===3){
      if((kaisu-1)&&yoso===kotae){
        w.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
      }else if(yoso==kotae){
        w.textContent="正解です.おめでとう！";
      }else{
        w.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
      }}

    if(kaisu>=4){
      w.textContent="答えは"+kotae+"でした．すでにゲームは終わっています";
    }}
    


