let data = {
  "coord": {
    "lon": 116.3972,
    "lat": 39.9075
  },
  "weather": [
    {
      "id": 803,
      "main": "Clouds",
      "description": "曇りがち",
      "icon": "04d"
    }
  ],
  "base": "stations",
  "main": {
    "temp": 9.94,
    "feels_like": 8.65,
    "temp_min": 9.94,
    "temp_max": 9.94,
    "pressure": 1022,
    "humidity": 14,
    "sea_level": 1022,
    "grnd_level": 1016
  },
  "visibility": 10000,
  "wind": {
    "speed": 2.65,
    "deg": 197,
    "gust": 4.84
  },
  "clouds": {
    "all": 53
  },
  "dt": 1646542386,
  "sys": {
    "type": 1,
    "id": 9609,
    "country": "CN",
    "sunrise": 1646520066,
    "sunset": 1646561447
  },
  "timezone": 28800,
  "id": 1816670,
  "name": "北京市",
  "cod": 200
};

////////// 課題3-2 ここからプログラムを書こう
console.log(data.name);
for(let d of "name"){
  console.log(d.name);
}

let h = document.querySelector('button#btn');
h.addEventListener('click', showSelectResult);

function showSelectResult() {
  let s = document.querySelector('select#t');
  let idx = s.selectedIndex;  // idx 番目の option が選択された

  let os = s.querySelectorAll('option');  // s の子要素 option をすべて検索
  let o = os.item(idx);       // os の idx 番目の要素

    let v=o.value;
    let url = "https://www.nishita-lab.org/web-contents/jsons/openweather/"+v+".json";
    console.log(url);
    
    span=0;
    if(span>1){
      let w = document.querySelector('span#pt');			// span#pt 要素を検索
      w.remove();
      span=span+1;
      let span=document.querySelector("span#pt");
      let p=document.createElement("p");
      let img=document.createElement("img");
      img.setAttribute=("src");
      img.src="photojs/"+v+".jpeg";
      p.insertAdjacentElement("beforeend", img);
      span.insertAdjacentElement("beforeend", p);
      console.log(img)
    }	else{
      //span=span+1;
      let span=document.querySelector("span#pt");
      let p=document.createElement("p");
      let img=document.createElement("img");
      img.setAttribute=("src");
      img.src="photojs/"+v+".jpeg";
      p.insertAdjacentElement("beforeend", img);
      span.insertAdjacentElement("beforeend", p);
      console.log(img)
    }
    /*let span=document.querySelector("span#pt");
    let p=document.createElement("p");
    let img=document.createElement("img");
    img.setAttribute=("src");
    img.src="photojs/"+v+".jpeg";
    p.insertAdjacentElement("beforeend", img);
    span.insertAdjacentElement("beforeend", p);
    span=span+1;
    console.log(img)*/

    axios.get(url)
        .then(showResult)   // 通信成功
        .catch(showError)   // 通信失敗
        .then(finish);      // 通信の最後の処理
    
}
// 通信が成功した時の処理
function showResult(resp) {
    // サーバから送られてきたデータを出力
    let data = resp.data;

    // data が文字列型なら，オブジェクトに変換する
    if (typeof data === 'string') {
        data = JSON.parse(data);
    }

    // data をコンソールに出力
    let a1=document.querySelector("span#s1");
    a1.textContent=data.name;
    let a2=document.querySelector("span#s2");
    a2.textContent=data.weather[0].description;
    let a3=document.querySelector("span#s3");
    a3.textContent=data.coord.lon;
    let a4=document.querySelector("span#s4");
    a4.textContent=data.coord.lat;
    let a5=document.querySelector("span#s5");
    a5.textContent=data.main.temp_min;
    let a6=document.querySelector("span#s6");
    a6.textContent=data.main.temp_max;
    let a7=document.querySelector("span#s7");
    a7.textContent=data.main.humidity;
    let a8=document.querySelector("span#s8");
    a8.textContent=data.wind.speed;
    let a9=document.querySelector("span#s9");
    a9.textContent=data.wind.deg;
}

// 通信エラーが発生した時の処理
function showError(err) {
    console.log(err);
}

// 通信の最後にいつも実行する処理
function finish() {
    console.log('Ajax 通信が終わりました');
}