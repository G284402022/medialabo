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

let h = document.querySelector('button#hantei');
h.addEventListener('click', hantei);

function hantei() {
  let i = document.querySelector('input[name="t"]');
  let t = i.value;
  console.log(t);
}

let a=[
  {n:"Cairo カイロ （エジプト）"},
  {n:"Moscow モスクワ （ロシア）"},
  {n:"Johannesburg ヨハネスブルク （南アフリカ）"},
  {n:"Beijing 北京 （中華人民共和国）"},
  {n:"Tokyo 東京 （日本）"},
  {n:"Singapore シンガポール"},
  {n:"Sydney シドニー （オーストラリア）"},
  {n:"London ロンドン （イギリス）"},
  {n:"Paris パリ （フランス）"},
  {n:"Rio de Janeiro リオデジャネイロ （ブラジル）"},
  {n:"New York ニューヨーク （アメリカ合衆国）"},
  {n:"Los Angeles ロサンゼルス （アメリカ合衆国）"},
];

let b=[
  

];
