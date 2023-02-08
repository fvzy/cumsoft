# Cumsoft - Typescript/Javascript NPMJS API
<div align="center">
  You can reach me here:<br><br>
  <a href="mailto:hello@zyy.sh" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/hello@zyy.sh-%23EA4335?&style=for-the-badge&logo=gmail&logoColor=white"/>
  </a>
  <a href="https://instagram.com/ditzzsxz_" style="text-decoration: none;" target="_blank">
    <img src="https://img.shields.io/badge/@ditzzsxz_-%23E4405F?&style=for-the-badge&logo=instagram&logoColor=white"/>
  </a>
  <br><br>
</div>

# Install

Use the stable version:
```shell
npm install cumsoft
```
Or via yarn
```shell
yarn add cumsoft
```

Use the stable version using github
```sh
yarn add github:wffzy/cumsoft
```
Then import your code using:
```js
const cs = require('cumsoft')
```


### List
<!-- < INI ADALAH AWAL > -->
<details><summary><i>Search</i></summary><br>

import search code using:
```js
const search = cs.search
```


<details><summary><b> # Acara Now</b></summary><br>

```js
search.acara_now()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
```

#### output
```json
{
  "creator":"@Xorizn",
  "info":"Use this code well, dont recode it!!!!!!!",
  "status":true,
  "result":"*ANTV*
17:00 - Nakusha
18:30 - Darna

*GTV*
17:00 - Super Deal Indonesia
18:30 - Kisah Viral +62 (Malam)

*INDOSIAR*
18:00 - Panggilan
20:00 - D'Koplo

*INEWS TV*
17:30 - iNews Room
18:30 - New Top Files

*KOMPAS TV*
17:30 - Sapa Indonesia Malam
19:30 - Berita Utama

*METRO TV*
17:30 - Prime Time News
20:05 - Top News

*MNCTV*
17:45 - Upin & Ipin Bermula
19:00 - Family 100

*NET TV*
17:30 - Zombiedumb
18:30 - Top Spot

*MOJI*
18:00 - Adzan Magrib
18:05 - Today's Update

*RCTI*
18:00 - Si Doel The Series
19:00 - Ikatan Cinta

*RTV*
16:30 - Sinema Keluarga
18:30 - Sinema Keluarga

*SCTV*
17:00 - Tajwid Cinta
19:00 - Cinta Setelah Cinta

*TRANS7*
18:00 - On The Spot
19:00 - Secret Story

*TRANSTV*
17:30 - Bikin Laper
18:30 - Ketawa Itu Berkah

*TVONE*
16:00 - Kabar Petang
18:30 - Apa Kabar Indonesia Malam

*TVRI*
18:00 - Klik Indonesia Petang
19:00 - Indonesia Bicara"
}
```
</details>
<details><summary><b># Bukalapak</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
search.bukalapak('laptop')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "title": "Laptop toshiba l740 640 core i3 ram 4gb kondisi normal ex kantor baterai bagus murah garansi",
      "rating": "4.8",
      "terjual": "Terjual 376",
      "harga": "Rp1.400.000",
      "image": "https://s4.bukalapak.com/img/93421826992/s-330-330/data.jpeg.webp",
      "link": "https://www.bukalapak.com/p/komputer/laptop/laptop-ultrabook/4h7ez3s-jual-laptop-toshiba-l740-640-core-i3-ram-4gb-kondisi-normal-ex-kantor-baterai-bagus-murah-garansi",
      "store": {
        "lokasi": "Kab. Tangerang",
        "nama": "Michayla  Computer",
        "link": "https://www.bukalapak.com/u/it_computer268"
      }
    },
    {
      "title": "Laptop Lenovo Thinkpad X280 i5 Gen8 Touchscreen FHD Murah saja",
      "rating": "5",
      "terjual": "Terjual 1",
      "harga": "Rp3.799.905",
      "image": "https://s0.bukalapak.com/img/04078325992/s-330-330/data.jpg.webp",
      "link": "https://www.bukalapak.com/p/komputer/laptop/notebook/4hg5y3g-jual-laptop-lenovo-thinkpad-x280-i5-gen8-touchscreen-fhd-murah-saja",
      "store": {
        "lokasi": "Jakarta Barat",
        "nama": "mimilaptop",
        "link": "https://www.bukalapak.com/u/tshong_men"
      }
    }
    ....
  ]
}
```
</details>
<details><summary><b># Film</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
search.film('avatar')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "title": "Avatar: The Way of Water (2022) Subtitle Indonesia",
      "quality": "HDTS2022",
      "type": "Movie",
      "upload": "2022",
      "link": "http://167.99.31.48/avatar-the-way-of-water-2022/",
      "thumbnail": "http://167.99.31.48/wp-content/uploads/2022/12/1672020358-7414-t6HIqrRAclMCA60NsSmeqe9RmNV-200x300.jpg"
    },
    {
      "title": "Avatar (2009) Subtitle Indonesia",
      "quality": "EXTENDED BluRay2009",
      "type": "Movie",
      "upload": "2009",
      "link": "http://167.99.31.48/avatar-2009/",
      "thumbnail": "http://167.99.31.48/wp-content/uploads/2023/01/1673147743-2565-jRXYjXNq0Cs2TcJjLkki24MLp7u-200x300.jpg"
    }
    .....
  ]
}
```
</details>
<details><summary><b># Jadwal Sepakbola</b></summary><br>

```js
search.jadwal_sepakbola()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": "17 Januari 2023 - 02.45 - Empoli vs Sampdoria - Serie A\n17 Januari 2023 - 03.00 - Cadiz vs Elche - LaLiga Santander\n17 Januari 2023 - 04.15 - Defensor Sporting vs Montevideo Wanderers - Friendly\n17 Januari 2023 - 07.30 - Nacional vs Belgrano - Friendly\n17 Januari 2023 - 17.00 - Budapest Honved vs Kolubara - Friendly\n17 Januari 2023 - 17.00 - WSG Tirol vs Trencin - Friendly\n17 Januari 2023 - 18.00 - Lugano vs Freiburg II - Friendly\n17 Januari 2023 - 18.00 - Real Murcia vs Paderborn - Friendly\n17 Januari 2023 - 18.30 - Krylya Sovetov Samara vs Sumqayit - Friendly\n17 Januari 2023 - 19.00 - Zalaegerszeg vs Ruzomberok - Friendly\n17 Januari 2023 - 19.00 - Austria Wien vs Vasas Budapest - Friendly\n17 Januari 2023 - 19.00 - SK Prostejov vs Dukla Banska Bystrica - Friendly\n17 Januari 2023 - 20.00 - LASK vs Kapfenberger SV - Friendly\n17 Januari 2023 - 20.00 - Sandhausen vs FC Fastav Zlin - Friendly\n17 Januari 2023 - 21.00 - Amstetten vs TSV Hartberg - Friendly\n17 Januari 2023 - 21.00 - FC Krasnodar vs Levski Sofia - Friendly\n17 Januari 2023 - 21.30 - PFC Sochi vs Forte Taganrog - Friendly\n17 Januari 2023 - 22.30 - FC Rapperswil-Jona vs Winterthur - Friendly\n18 Januari 2023 - 01.00 - Real Sociedad vs Mallorca - Copa del Rey\n18 Januari 2023 - 01.30 - Sportfreunde Baumberg vs ASV Mettmann - Friendly\n18 Januari 2023 - 02.45 - Accrington Stanley vs Boreham Wood - FA Cup\n18 Januari 2023 - 02.45 - Forest Green Rovers vs Birmingham City - FA Cup\n18 Januari 2023 - 02.45 - Swansea City vs Bristol City - FA Cup\n18 Januari 2023 - 02.45 - Wigan Athletic vs Luton Town - FA Cup\n18 Januari 2023 - 02.45 - Wolverhampton Wanderers vs Liverpool - FA Cup\n18 Januari 2023 - 03.00 - West Bromwich Albion vs Chesterfield - FA Cup\n18 Januari 2023 - 03.00 - Deportivo Alaves vs Sevilla - Copa del Rey\n18 Januari 2023 - 03.00 - Napoli vs Cremonese - Coppa Italia\n18 Januari 2023 - 07.30 - Club River Plate vs Vasco da Gama - Friendly\n18 Januari 2023 - 16.00 - Persikabo 1973 vs Dewa United - Liga 1\n18 Januari 2023 - 18.30 - Persita Tangerang vs Persebaya Surabaya - Liga 1\n18 Januari 2023 - 19.00 - Broendby IF vs Naestved - Friendly\n18 Januari 2023 - 20.00 - Grasshopper vs Schaffhausen - Friendly\n18 Januari 2023 - 20.00 - Sturm Graz vs FC Vaduz - Friendly\n18 Januari 2023 - 21.00 - Hamburger SV vs Vancouver Whitecaps - Friendly\n18 Januari 2023 - 21.00 - Kalmar FF vs Lyngby - Friendly\n18 Januari 2023 - 21.30 - Lokomotiv Moscow vs Bunyodkor Tashkent - Friendly\n18 Januari 2023 - 22.00 - FK Graficar vs Zaglebie Lubin - Friendly\n18 Januari 2023 - 23.00 - SK Austria Klagenfurt vs Wolfsberger AC (A) - Friendly\n19 Januari 2023 - 00.00 - Aengelholms FF vs Helsingborg - Friendly\n19 Januari 2023 - 01.00 - Sporting Gijon vs Valencia - Copa del Rey\n19 Januari 2023 - 02.00 - AC Milan vs Inter - Super Cup\n19 Januari 2023 - 02.00 - Athletic Bilbao vs Espanyol - Copa del Rey\n19 Januari 2023 - 02.45 - Leeds United vs Cardiff City - FA Cup\n19 Januari 2023 - 03.00 - Crystal Palace vs Manchester United - Premier League\n19 Januari 2023 - 03.00 - Levante vs Atletico Madrid - Copa del Rey\n19 Januari 2023 - 03.00 - Real Betis vs Osasuna - Copa del Rey\n19 Januari 2023 - 16.00 - Bhayangkara FC vs Persik Kediri - Liga 1\n19 Januari 2023 - 18.00 - Krylya Sovetov Samara vs Szeged 2011 - Friendly\n19 Januari 2023 - 18.00 - Silkeborg vs Viborg - Friendly\n19 Januari 2023 - 18.00 - AGF vs Diosgyori VTK - Friendly\n19 Januari 2023 - 18.00 - FK Akhmat vs Partizan Beograd - Friendly\n19 Januari 2023 - 18.00 - Fakel Voronezh vs FK Spartak Subotica - Friendly\n19 Januari 2023 - 18.30 - Persis Solo vs Persija Jakarta - Liga 1\n19 Januari 2023 - 20.00 - CSKA Moscow vs FC Orenburg - Friendly\n19 Januari 2023 - 21.00 - Atalanta vs Spezia - Coppa Italia\n19 Januari 2023 - 22.00 - Bodo/Glimt vs Viking - Friendly\n20 Januari 2023 - 00.00 - Lazio vs Bologna - Coppa Italia\n20 Januari 2023 - 00.00 - Al Nasr &amp; Al Hilal All Stars vs Paris Saint-Germain - Friendly\n20 Januari 2023 - 02.00 - AD Ceuta FC vs Barcelona - Copa del Rey\n20 Januari 2023 - 03.00 - Manchester City vs Tottenham Hotspur - Premier League\n20 Januari 2023 - 03.00 - Villarreal vs Real Madrid - Copa del Rey\n20 Januari 2023 - 03.00 - Juventus vs Monza - Coppa Italia\n20 Januari 2023 - 16.00 - Bali United vs PSM Makassar - Liga 1\n20 Januari 2023 - 18.00 - Haecken vs Norrby - Friendly\n20 Januari 2023 - 18.00 - TSV Hartberg vs SKN St. Poelten - Friendly\n20 Januari 2023 - 18.30 - Madura United vs Persib Bandung - Liga 1\n20 Januari 2023 - 19.15 - SV Ried vs Novi Pazar - Friendly\n20 Januari 2023 - 20.30 - AC Horsens vs AaB - Friendly\n20 Januari 2023 - 21.00 - Malmo FF vs Randers FC - Friendly\n20 Januari 2023 - 21.30 - Austria Wien vs Shakhtar Donetsk - Friendly\n20 Januari 2023 - 22.00 - Karlsruher SC vs FC Salzburg - Friendly\n20 Januari 2023 - 23.30 - Hammarby IF vs Sandvikens IF - Friendly\n21 Januari 2023 - 00.00 - IFK Gothenburg vs Degerfors - Friendly\n21 Januari 2023 - 02.00 - Excelsior vs FC Volendam - Eredivisie\n21 Januari 2023 - 02.30 - RB Leipzig vs Bayern Munich - Bundesliga\n21 Januari 2023 - 03.00 - Mallorca vs Celta Vigo - LaLiga Santander\n21 Januari 2023 - 03.10 - Marseille vs Rennes - Coupe de France\n21 Januari 2023 - 16.00 - PSIS Semarang vs Arema FC - Liga 1\n21 Januari 2023 - 18.00 - PFC CSKA-Sofia vs LASK - Friendly\n21 Januari 2023 - 18.00 - Paderborn vs Arminia Bielefeld - Friendly\n21 Januari 2023 - 18.00 - FC Rostov vs Bunyodkor Tashkent - Friendly\n21 Januari 2023 - 18.15 - PSS Sleman vs RANS Nusantara - Liga 1\n21 Januari 2023 - 18.30 - Borneo FC Samarinda vs Barito Putera - Liga 1\n21 Januari 2023 - 19.00 - Silkeborg vs Vendsyssel FF - Friendly\n21 Januari 2023 - 19.00 - FC Nordsjaelland vs OB - Friendly\n21 Januari 2023 - 19.30 - Sturm Graz vs Wisla Plock - Friendly\n21 Januari 2023 - 19.30 - St. Pauli vs FC Midtjylland - Friendly\n21 Januari 2023 - 19.30 - AIK vs Sollentuna FK - Friendly\n21 Januari 2023 - 19.30 - Liverpool vs Chelsea - Premier League\n21 Januari 2023 - 20.00 - Brommapojkarna vs Djurgaarden - Friendly\n21 Januari 2023 - 20.00 - Mjaellby vs BK Olympic - Friendly\n21 Januari 2023 - 20.00 - Rayo Vallecano vs Real Sociedad - LaLiga Santander\n21 Januari 2023 - 20.00 - Hittarps IK vs Helsingborg - Friendly\n21 Januari 2023 - 20.00 - Halmstads BK vs Oesters IF - Friendly\n21 Januari 2023 - 21.00 - Verona vs Lecce - Serie A\n21 Januari 2023 - 21.30 - Chambery vs Lyon - Coupe de France\n21 Januari 2023 - 21.30 - VfB Stuttgart vs Mainz - Bundesliga\n21 Januari 2023 - 21.30 - Wolfsburg vs Freiburg - Bundesliga\n21 Januari 2023 - 21.30 - Bochum vs Hertha Berlin - Bundesliga\n21 Januari 2023 - 21.30 - Union Berlin vs Hoffenheim - Bundesliga\n21 Januari 2023 - 21.30 - Eintracht Frankfurt vs Schalke 04 - Bundesliga\n21 Januari 2023 - 22.00 - AFC Bournemouth vs Nottingham Forest - Premier League\n21 Januari 2023 - 22.00 - West Ham United vs Everton - Premier League\n21 Januari 2023 - 22.00 - Austria Lustenau vs Aarau - Friendly\n21 Januari 2023 - 22.00 - Southampton vs Aston Villa - Premier League\n21 Januari 2023 - 22.00 - Leicester City vs Brighton &amp; Hove Albion - Premier League\n21 Januari 2023 - 22.15 - Espanyol vs Real Betis - LaLiga Santander\n21 Januari 2023 - 22.30 - Sturm Graz vs Vozdovac - Friendly\n22 Januari 2023 - 00.00 - Toulouse vs AC Ajaccio - Coupe de France\n22 Januari 2023 - 00.00 - SC Bastia vs Lorient - Coupe de France\n22 Januari 2023 - 00.00 - RC Grasse vs Rodez - Coupe de France\n22 Januari 2023 - 00.00 - Plabennec vs Grenoble - Coupe de France\n22 Januari 2023 - 00.00 - Salernitana vs Napoli - Serie A\n22 Januari 2023 - 00.00 - Les Herbiers vs Reims - Coupe de France\n22 Januari 2023 - 00.00 - Chamalieres vs Paris FC - Coupe de France\n22 Januari 2023 - 00.30 - Crystal Palace vs Newcastle United - Premier League\n22 Januari 2023 - 00.30 - Atletico Madrid vs Real Valladolid - LaLiga Santander\n22 Januari 2023 - 00.30 - FC Cologne vs Werder Bremen - Bundesliga\n22 Januari 2023 - 00.45 - NEC Nijmegen vs FC Emmen - Eredivisie\n22 Januari 2023 - 02.00 - PSV Eindhoven vs Vitesse - Eredivisie\n22 Januari 2023 - 02.00 - Cambuur vs Sparta Rotterdam - Eredivisie\n22 Januari 2023 - 02.45 - FCO Strasbourg Koenigshoffen vs Angers - Coupe de France\n22 Januari 2023 - 02.45 - Fiorentina vs Torino - Serie A\n22 Januari 2023 - 03.00 - RKC Waalwijk vs Go Ahead Eagles - Eredivisie\n22 Januari 2023 - 03.00 - Sevilla vs Cadiz - LaLiga Santander\n22 Januari 2023 - 16.00 - Dewa United vs Persita Tangerang - Liga 1\n22 Januari 2023 - 18.00 - PFC Sochi vs Neftekhimik - Friendly\n22 Januari 2023 - 18.00 - Dinamo Moscow vs FC Orenburg - Friendly\n22 Januari 2023 - 18.00 - Broendby IF vs Hvidovre - Friendly\n22 Januari 2023 - 18.00 - AGF vs Vaalerenga - Friendly\n22 Januari 2023 - 18.15 - SC Heerenveen vs FC Groningen - Eredivisie\n22 Januari 2023 - 18.30 - Sampdoria vs Udinese - Serie A\n22 Januari 2023 - 20.00 - Spartak Moscow vs Levski Sofia - Friendly\n22 Januari 2023 - 20.00 - Lokomotiv Moscow vs Rodina - Friendly\n22 Januari 2023 - 20.00 - Villarreal vs Girona - LaLiga Santander\n22 Januari 2023 - 20.30 - Feyenoord vs Ajax - Eredivisie\n22 Januari 2023 - 20.30 - FC Twente vs FC Utrecht - Eredivisie\n22 Januari 2023 - 21.00 - Manchester City vs Wolverhampton Wanderers - Premier League\n22 Januari 2023 - 21.00 - Monza vs Sassuolo - Serie A\n22 Januari 2023 - 21.00 - Leeds United vs Brentford - Premier League\n22 Januari 2023 - 21.30 - Borussia Dortmund vs Augsburg - Bundesliga\n22 Januari 2023 - 22.15 - Elche vs Osasuna - LaLiga Santander\n22 Januari 2023 - 22.45 - AZ Alkmaar vs Fortuna Sittard - Eredivisie\n22 Januari 2023 - 23.30 - Arsenal vs Manchester United - Premier League\n22 Januari 2023 - 23.30 - Borussia Monchengladbach vs Bayer Leverkusen - Bundesliga\n23 Januari 2023 - 00.00 - Spezia vs Roma - Serie A\n23 Januari 2023 - 00.30 - Barcelona vs Getafe - LaLiga Santander\n23 Januari 2023 - 00.30 - ASM Belfort vs FC Annecy - Coupe de France\n23 Januari 2023 - 00.30 - Le Puy vs Vierzon FC - Coupe de France\n23 Januari 2023 - 00.30 - Lille vs Pau - Coupe de France\n23 Januari 2023 - 00.30 - Niort vs Auxerre - Coupe de France\n23 Januari 2023 - 00.30 - Thaon vs Nantes - Coupe de France\n23 Januari 2023 - 02.45 - Juventus vs Atalanta - Serie A\n23 Januari 2023 - 03.00 - Athletic Bilbao vs Real Madrid - LaLiga Santander\n23 Januari 2023 - 03.00 - Brest vs Lens - Coupe de France\n23 Januari 2023 - 16.00 - Persebaya Surabaya vs Bhayangkara FC - Liga 1\n23 Januari 2023 - 18.00 - FK Akhmat vs Vojvodina - Friendly\n23 Januari 2023 - 18.30 - Persis Solo vs Persikabo 1973 - Liga 1\n23 Januari 2023 - 19.15 - SV Ried vs Mura - Friendly\n23 Januari 2023 - 21.30 - Austria Wien vs Partizan Beograd - Friendly"
}
```
</details>
<details><summary><b># Jadwal Tv</b></summary><br>

> #### Required parameters
> - **List:** 'gtv' | 'antv' | 'indosiar' | 'inewstv' | 'kompastv' | 'metrotv' | 'mnctv' | 'moji' | 'nettv' | 'rcti' | 'rtv' | 'sctv' | 'trans7' | 'transtv' | 'tvone' | 'tvri'

```js
search.jadwal_tv('antv')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": "01:00 - Hari Yang Aneh
02:00 - Hari Yang Aneh
04:15 - Merah Putih Peristiwa
05:00 - Alien Monkey
07:00 - Super Viral
08:00 - Intip Seleb
08:30 - Sultan
12:00 - Radha Krishna
14:00 - Anupamaa
17:00 - Nakusha
18:30 - Darna
20:00 - Suami Pengganti
22:00 - Garis Tangan
23:30 - Medium"
}
```
</details>
<details><summary><b># Lyrics</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
search.lyrics('lemon')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": "[​米津玄師「Lemon」羅馬拼音歌詞]\n\n[Intro]\nYume naraba dore hodo yokatta deshou\nImada ni anata no koto wo yume ni miru\nWasureta mono wo tori ni kaeru you ni\nFurubita omoide no hokori wo harau\n\n[Verse 1]\nModoranai shiawase ga aru koto wo\nSaigo ni anata ga oshiete kureta\nIezu ni kakushiteta kurai kako mo\nAnata ga inakya eien ni kurai mama\n[Pre-Chorus]\nKitto mou kore ijou kizutsuku koto nado\nAri wa shinai to wakatte iru\n\n[Chorus]\nAno hi no kanashimi sae ano hi no kurushimi sae\nSono subete wo aishiteta anata to tomo ni\nMune ni nokori hanarenai nigai remon no nioi\nAme ga furiyamu made wa kaerenai\nIma demo anata wa watashi no hikari\n\n[Verse 2]\nKurayami de anata no se wo nazotta\nSono rinkaku wo senmei ni oboete iru\nUketome kirenai mono to deau tabi\nAfurete yamanai no wa namida dake\n\n[Pre-Chorus]\nNani wo shiteita no nani wo miteita no\nWatashi no shiranai yokogao de\n\n[Chorus]\nDokoka de anata ga ima watashi to onaji you na\nNamida ni kure sabishisa no naka ni iru nara\nWatashi no koto nado douka wasurete kudasai\nSonna koto wo kokoro kara negau hodo ni\nIma demo anata wa watashi no hikari\n"
}
```
</details>
<details><summary><b># PlayStore</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
search.playstore('ff')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "link": "https://play.google.com/store/apps/details?id=com.dts.freefireth",
      "nama": "Free Fire",
      "developer": "Garena International I",
      "img": "https://play-lh.googleusercontent.com/FIldEX6IcJEju0BeWPhXZ3duzgxm9_fTtwPiIesBT9ddwFpeFw0FAjEpYU9vmqccpe7h=s64",
      "rate": "Rated 4.1 stars out of five stars",
      "rate2": "4.1",
      "link_dev": "https://play.google.com/store/apps/developer?id=Garena+International+I"
    },
    {
      "link": "https://play.google.com/store/apps/details?id=com.dts.freefiremax",
      "nama": "Free Fire MAX",
      "developer": "Garena International I",
      "img": "https://play-lh.googleusercontent.com/wMgRzEJbHW_oCZACMOYGw150cF8ahrJo7yU7cL0XckoijXjUWwgG7i342cxH0SKnG_A=s64",
      "rate": "Rated 4.2 stars out of five stars",
      "rate2": "4.2",
      "link_dev": "https://play.google.com/store/apps/developer?id=Garena+International+I"
    }
    ......
  ]
}
```
</details>
<details><summary><b># Soundcloud Search</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
search.soundcloud_search('bertaut')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "link": "https://soundcloud.com/eugenia-birgitta-marsha/nadin-amizah-bertaut",
      "judul": "Nadin Amizah - Bertaut"
    },
    {
      "link": "https://soundcloud.com/fera-freesh/nadin-amizah-bertaut-1",
      "judul": "Nadin amizah - Bertaut"
    },
    {
      "link": "https://soundcloud.com/hbrpdj/bertaut",
      "judul": "Bertaut (Stripped by hbrp)"
    },
    {
      "link": "https://soundcloud.com/helena-juliarti/nadin-amizah-bertaut",
      "judul": "Nadin Amizah - Bertaut."
    },
    {
      "link": "https://soundcloud.com/livia-lara-q/bertaut-nadin-amizah-cover-by-rayby-pokersakti",
      "judul": "Bertaut - Nadin Amizah ( Cover By Ray)by Pokersakti"
    },
    {
      "link": "https://soundcloud.com/agustrimulyono/nadin-amizah-bertaut-rock",
      "judul": "Nadin Amizah -  Bertaut (Rock Cover By Agus Tri Mulyono)"
    },
    {
      "link": "https://soundcloud.com/chintyagabriella22/bertaut-nadin-amizah-chintya-gabriella-cover",
      "judul": "Bertaut - Nadin Amizah ( Chintya Gabriella Cover)"
    },
    {
      "link": "https://soundcloud.com/relaxations-project/bertaut-nadin-amizah-azalia-zalfa-cover",
      "judul": "Nadin Amizah - Bertaut | Cover by Azalia Zalfa"
    },
    {
      "link": "https://soundcloud.com/usepsugiarto2/bertaut-nadin-amizah-cover",
      "judul": "Bertaut"
    },
    {
      "link": "https://soundcloud.com/aywalker-7/nadin-amizah-bertaut-official",
      "judul": "Nadin Amizah - Bertaut (Official Lyric Video).mp3"
    }
  ]
}
```
</details>
<details><summary><b># Steam Search</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
search.steam_search('dota')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "judul": "Dota 2",
      "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/570/capsule_sm_120.jpg?t=1666237243",
      "link": "https://store.steampowered.com/app/570/Dota_2/?snr=1_7_7_151_150_1",
      "rilis": "9 Jul, 2013",
      "harga": "FreetoPlay",
      "rating": "Very Positive 82% of the 1,914,106 user reviews for this game are positive."
    },
    {
      "judul": "Dota Underlords",
      "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/1046930/capsule_sm_120.jpg?t=1649700104",
      "link": "https://store.steampowered.com/app/1046930/Dota_Underlords/?snr=1_7_7_151_150_1",
      "rilis": "20 Jun, 2019",
      "harga": "FreeToPlay",
      "rating": "Very Positive 82% of the 89,688 user reviews for this game are positive."
    },
    ......
  ]
}
```
</details>
<details><summary><b># Steam Detail</b></summary><br>

> #### Required parameters
> - (link) *type **String***

```js
search.steam_detail('https://store.steampowered.com/app/570/Dota_2/?snr=1_7_7_151_150_1')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "desc": "Every day, millions of players worldwide enter battle as one of over a hundred Dota heroes. And no matter if it's their 10th hour of play or 1,000th, there's always something new to discover. With regular updates that ensure a constant evolution of gameplay, features, and heroes, Dota 2 has taken on a life of its own.",
    "img": "https://cdn.cloudflare.steamstatic.com/steam/apps/570/header.jpg?t=1666237243",
    "system": "OS: Windows 7 or newer\nProcessor: Dual core from Intel or AMD at 2.8 GHz\nMemory: 4 GB RAM\nGraphics: NVIDIA GeForce 8600/9600GT, ATI/AMD Radeon HD2600/3600\nDirectX: Version 9.0c\nNetwork: Broadband Internet connection\nStorage: 15 GB available space\nSound Card: DirectX Compatible",
    "info": "Title: Dota2\nGenre: Action,FreetoPlay,Strategy\nDeveloper: Valve\nPublisher: Valve\nFranchise: Dota\nReleaseDate: 9Jul,2013\n"
  }
}
```
</details>
<details><summary><b># Xpanas</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
search.xpanas('china')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "nonton": "https://164.68.127.15/watch/73631587.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/51/b9/35/51b935a67b07c9501427250f4d4cc25d/51b935a67b07c9501427250f4d4cc25d.20.jpg",
      "title": "欲火中烧的中国女人被操到哭1 蜜桃传媒"
    },
    {
      "nonton": "https://164.68.127.15/watch/74202369.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/a1/62/14/a16214f0c0069520d0fde25cbf7e4624/a16214f0c0069520d0fde25cbf7e4624.28.jpg",
      "title": "【国产探花】大二乖乖女校外卖淫一个月只偶尔接单几次赚生活费"
    },
    {
      "nonton": "https://164.68.127.15/watch/70067425.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/ee/f4/49/eef4492612bf7658a8aa1c2af005dcbd/eef4492612bf7658a8aa1c2af005dcbd.3.jpg",
      "title": "Verified uploader"
    },
    {
      "nonton": "https://164.68.127.15/watch/72410838.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/2f/34/27/2f34277ce0c1021319a3c0ac69601fd4/2f34277ce0c1021319a3c0ac69601fd4.30.jpg",
      "title": " Sưu tầm  Cặp đ ocirc i Trung Quốc chơi nhau r ecirc n ầm ĩ"
    },
    {
      "nonton": "https://164.68.127.15/watch/74440073.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/7d/1b/6f/7d1b6fb3f8f3051cb773a8281ff3c0f4/7d1b6fb3f8f3051cb773a8281ff3c0f4.30.jpg",
      "title": "Verified uploader"
    },
    {
      "nonton": "https://164.68.127.15/watch/70692739.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/47/78/cc/4778cc94f588abcb295ec31d3b848a58/4778cc94f588abcb295ec31d3b848a58.1.jpg",
      "title": "【看开头可约】中国古风清纯美臀小姐姐"
    },
    {
      "nonton": "https://164.68.127.15/watch/66004659.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/7a/60/25/7a6025200f96e2a89262f25555c4138f/7a6025200f96e2a89262f25555c4138f.23.jpg",
      "title": "Verified uploader"
    },
    {
      "nonton": "https://164.68.127.15/watch/32759437.html",
      "img": "https://img-l3.xnxx-cdn.com/videos/thumbs169ll/b6/00/19/b60019ca202912a4e79058116c2b2ba4-1/b60019ca202912a4e79058116c2b2ba4.9.jpg",
      "title": "约会可爱美女第一次见面全过程【2023年全国最新同城免费约炮资源APP网址：16wt cc邀请码775418注册免费看片免费约】"
    },
    {
      "nonton": "https://164.68.127.15/watch/33749163.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/f5/2d/cb/f52dcb0d42c23c760fc12c6ee8a40ef3/f52dcb0d42c23c760fc12c6ee8a40ef3.22.jpg",
      "title": "国产」在公司高冷的部门经理怎么喝多了以后淫荡的本性就爆漏了呢？"
    },
    {
      "nonton": "https://164.68.127.15/watch/66029223.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/be/57/7e/be577ea781c4b2b3d1c25b1ca8648fd6/be577ea781c4b2b3d1c25b1ca8648fd6.16.jpg",
      "title": "Verified uploader"
    },
    {
      "nonton": "https://164.68.127.15/watch/58479685.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/3b/e5/3f/3be53fecf908aeae06f8b1ed3beb5515-2/3be53fecf908aeae06f8b1ed3beb5515.27.jpg",
      "title": "【国产】麻豆传媒作品 MSD 031午夜电话艳遇 精彩播放"
    },
    {
      "nonton": "https://164.68.127.15/watch/26584577.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/90/ea/f4/90eaf4dd483f767ec1115e6af9f16f11-1/90eaf4dd483f767ec1115e6af9f16f11.30.jpg",
      "title": "hot chinese girl"
    },
    {
      "nonton": "https://164.68.127.15/watch/73380687.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/76/ec/a0/76eca0e844b643ac26708c67f1289953/76eca0e844b643ac26708c67f1289953.3.jpg",
      "title": "KimBinhMai 02 xemhdo com"
    },
    {
      "nonton": "https://164.68.127.15/watch/39484660.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/33/12/31/331231dc82024c7ecd022221920e3c56/331231dc82024c7ecd022221920e3c56.23.jpg",
      "title": "【国产】麻豆传媒作品 MAD 017贵妃裙下臣 精彩播放"
    },
    {
      "nonton": "https://164.68.127.15/watch/49300377.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/8c/5b/f2/8c5bf29b33b8ea9d7b9c697ebe719276/8c5bf29b33b8ea9d7b9c697ebe719276.3.jpg",
      "title": "Husband Sell His Wife Gangbang FULL"
    },
    {
      "nonton": "https://164.68.127.15/watch/26447395.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/1f/87/31/1f873196e75a1b12d475f40e2f27a76e/1f873196e75a1b12d475f40e2f27a76e.7.jpg",
      "title": "Chinese masturbation girl and latin girl masturbations video Anal for"
    },
    {
      "nonton": "https://164.68.127.15/watch/73481907.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/38/9d/23/389d2321d11922800477f3bbedd69587/389d2321d11922800477f3bbedd69587.1.jpg",
      "title": "高端外围场，重金约操漂亮小姐姐，扛起探花大旗，沙发啪啪，肤白貌美看点多"
    },
    {
      "nonton": "https://164.68.127.15/watch/65552875.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/45/3e/b8/453eb8649d4c685cf022e77857ccb25d/453eb8649d4c685cf022e77857ccb25d.9.jpg",
      "title": "Verified uploader"
    },
    {
      "nonton": "https://164.68.127.15/watch/74243787.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/81/65/f2/8165f2b96c74777093c335f496c886ad/8165f2b96c74777093c335f496c886ad.12.jpg",
      "title": "Chinoise trop bandante"
    },
    {
      "nonton": "https://164.68.127.15/watch/74245853.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/56/72/52/5672524dc0fe947c2054fbfd7608e7d8/5672524dc0fe947c2054fbfd7608e7d8.3.jpg",
      "title": "china cam homemade mohentai tk"
    },
    {
      "nonton": "https://164.68.127.15/watch/54620723.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/43/cb/01/43cb010d7b20a037bafeb604c67ce45d/43cb010d7b20a037bafeb604c67ce45d.29.jpg",
      "title": "大白菜被猪给拱了"
    },
    {
      "nonton": "https://164.68.127.15/watch/73121347.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/f0/3a/56/f03a566fbc852ed8783ca20b28d27142/f03a566fbc852ed8783ca20b28d27142.28.jpg",
      "title": "3000约炮良家极品身材反差婊 沙发干到床上，深喉绝学非常浪"
    },
    {
      "nonton": "https://164.68.127.15/watch/40608385.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/ff/70/89/ff7089f839f426f8d64f7152f79297c9/ff7089f839f426f8d64f7152f79297c9.4.jpg",
      "title": "Verified uploader"
    },
    {
      "nonton": "https://164.68.127.15/watch/58918175.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/81/0b/0e/810b0e6f8bbc8bd89bc1b42f790fe4e2/810b0e6f8bbc8bd89bc1b42f790fe4e2.25.jpg",
      "title": "Female ghost story China"
    },
    {
      "nonton": "https://164.68.127.15/watch/70706935.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/3b/bb/4d/3bbb4d590cdbc198331e13a4ba03da24/3bbb4d590cdbc198331e13a4ba03da24.30.jpg",
      "title": "中国国产极品平面模特清纯女神诱人美乳高颜值从不让人失望"
    },
    {
      "nonton": "https://164.68.127.15/watch/33152511.html",
      "img": "https://cdn77-pic.xnxx-cdn.com/videos/thumbs169ll/a1/6e/8b/a16e8bc4f98030de59f2050f73bf6b9d/a16e8bc4f98030de59f2050f73bf6b9d.22.jpg",
      "title": "Verified uploader"
    },
    {
      "nonton": "https://164.68.127.15/watch/74463631.html",
      "img": "https://img-cf.xnxx-cdn.com/videos/thumbs169ll/2c/08/0f/2c080fc7ea2bebc70d08e5047e524270/2c080fc7ea2bebc70d08e5047e524270.28.jpg",
      "title": "中国苗条气质外围女换上性感黑丝情趣操起来感觉特别爽"
    }
  ]
}
```
</details>

<br>
</details>

<!-- < INI ADALAH AWAL > -->
<details><summary><i>Download</i></summary><br>

import download code using:
```js
const download = cs.download
```

<details><summary><b># Facebook</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.facebook('link')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### Promise
```ts
Promise<{
  creator: string;
  info: string;
  status: true;
  result?: {
    desc: string;
    thumb: string;
    video_sd: string;
    video_hd: string;
  };
}>;
```
</details>
<details><summary><b># Instagram</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.instagram('https://www.instagram.com/p/CnZUjd1MBYf/')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "link": "https://scontent.cdninstagram.com/v/t51.2885-15/324954160_477129624584520_7910317350646486224_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=Msi7uLptfJ4AX8K2a5P&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AfBiDrT4DdfQJRkvNbv1Sl_qA6_DAH4OnxQ-meG7N0OGKQ&oe=63CB572E&_nc_sid=78c662&dl=1",
    "slide": [
      "https://scontent.cdninstagram.com/v/t51.2885-15/324954160_477129624584520_7910317350646486224_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=100&_nc_ohc=Msi7uLptfJ4AX8K2a5P&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AfBiDrT4DdfQJRkvNbv1Sl_qA6_DAH4OnxQ-meG7N0OGKQ&oe=63CB572E&_nc_sid=78c662&dl=1",
      "https://scontent.cdninstagram.com/v/t51.2885-15/324884956_1092319641567670_2579754261981328408_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=110&_nc_ohc=EfiHlhHk9Q0AX8DwYqi&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AfB10RJWcCDOP-Bk9YWKOI-49pNU8RuZxTdofawMxiuJbA&oe=63CB99FE&_nc_sid=78c662&dl=1",
      "https://scontent.cdninstagram.com/v/t51.2885-15/325208798_3344411159138654_4856453769070035848_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=102&_nc_ohc=7HgT5ZXrt4oAX_vRJj_&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AfC7RGni9C9ZAPqkzVLFsgL_i3P0Jp0StTtQd72sydzZ9Q&oe=63CBCD71&_nc_sid=78c662&dl=1",
      "https://scontent.cdninstagram.com/v/t51.2885-15/324872952_123174873771099_8350691274921530999_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=103&_nc_ohc=sdKXNa8xT5UAX-b5o1g&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AfCITKx6unV6vtwtBrpF-1jAYkzugU4Zoh7vl72wiswCOQ&oe=63CB5031&_nc_sid=78c662&dl=1",
      "https://scontent.cdninstagram.com/v/t51.2885-15/325527524_150402787798576_3328096910606611725_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=104&_nc_ohc=4e_Hh-n22RcAX9G2SrJ&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AfCjUPxN78BBO7XyvAa5gF1ZgihGVErXK8PkpahA9TAJWw&oe=63CACD6F&_nc_sid=78c662&dl=1",
      "https://scontent.cdninstagram.com/v/t51.2885-15/325534485_128975946719936_7187147939960425897_n.webp?stp=dst-jpg_e35&_nc_ht=scontent.cdninstagram.com&_nc_cat=108&_nc_ohc=PdLt0g3vJpsAX_1c-r_&edm=AJBgZrYBAAAA&ccb=7-5&oh=00_AfAIAjxCY1QvZi36SkJlLQWl6_668zz-BPOPNDB_i_BMEw&oe=63CADFD1&_nc_sid=78c662&dl=1"
    ],
    "slide_length": 6
  }
}
```
</details>
<details><summary><b># Joox</b></summary><br>

> #### Required parameters
> - (search) *type **String***


```js
download.joox('yellow')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "lagu": "Yellow",
      "album": "Group Effort, Vol. 1",
      "penyanyi": "Crush",
      "publish": "2017-04-07",
      "img": "https://image.joox.com/JOOXcover/0/3a9b0010a75efaf5/1000",
      "mp3": "https://ak-hk.stream.music.joox.com/M500Z4715b773350c5.mp3?vkey=36921366D7708332D1483625CB20C3345242B965AA1A58D2DE76F291BA143C8A97A51CDE19E45D58FC82BE5050B8071AC6830479FA968347&amp;hdnts=exp=1673963037~acl=/*~hmac=2e675fd70593e375995fdd38c1b054b6ea3687121ade9d2849d9944cb0d54f26&fromtag=8&guid=JOOX@WEB_OPENUDID"
    },
    {
      "lagu": "Yellow",
      "album": "Yellow",
      "penyanyi": "Stereo Avenue",
      "publish": "2019-01-16",
      "img": "https://image.joox.com/JOOXcover/0/1d6a241dd550f3bc/1000",
      "mp3": "https://id.stream.music.joox.com/M500Z815D7F60D7748.mp3?vkey=6260C52338B4231A57FA11C222CA30E21DED2E3F3991C4577D16B9B5C0CD37F3CB543C73935D4FF4A495C35D8F58E98139AE0EAE2376228F&amp;hdnts=exp=1673963424~acl=/*~hmac=737699119ac69ab23513a7abefd21b719e70cec96ee553cf597a3cfc36401e00&fromtag=8&guid=JOOX@WEB_OPENUDID"
    },
    {
      "lagu": "Yellow (Piano Version)",
      "album": "Yellow (Piano Version)",
      "penyanyi": "Billy Pianoguy",
      "publish": "2017-11-18",
      "img": "https://image.joox.com/JOOXcover/0/35c109ebabe5afa1/1000",
      "mp3": "https://ak-hk.stream.music.joox.com/M500Z1cdd6509a55e8.mp3?vkey=FE08F3AEED815B6645BD8E2718D0472215F4729D0BA1EB69579FD920FF4947551EDE4B658DD97A26150012FA3062C1C3F12F2750D51F79B1&amp;hdnts=exp=1673963424~acl=/*~hmac=737699119ac69ab23513a7abefd21b719e70cec96ee553cf597a3cfc36401e00&fromtag=8&guid=JOOX@WEB_OPENUDID"
    },
    {
      "lagu": "Yellow",
      "album": "Lullaby - Beautiful Modern Lullabies - Relaxing Music To Help You and Your Baby Sleep",
      "penyanyi": "Sleepyheadz",
      "publish": "2019-03-02",
      "img": "https://image.joox.com/JOOXcover/0/0e827bb5ae998367/1000",
      "mp3": "https://id.stream.music.joox.com/M500ZFA7FE8D1C42FD.mp3?vkey=F7822C7E6DC8FC881BCDECDCD9B8FED5F9DE00203389816FDBD276D78290753C9987D341AE337441A49ED0B3BC64FB7E5D1E6F01B806D87F&amp;hdnts=exp=1673963344~acl=/*~hmac=bed263fb2f73fe2f2003af6789daa9c617f3fd62a5d3f9378a6e1e24b847e134&fromtag=8&guid=JOOX@WEB_OPENUDID"
    },
    {
      "lagu": "Yellow",
      "album": "Yellow",
      "penyanyi": "Emma Stevens",
      "publish": "2020-05-01",
      "img": "https://image.joox.com/JOOXcover/0/17c156700d2faed3/1000",
      "mp3": "https://id.stream.music.joox.com/M500Zb1f3358c84bd5.mp3?vkey=762BDE3B468BD62A601876B9E899936BB3719A4843E2925FE3518303AE23760E4473CC9E5ECA6A0BCAF8E7F11B57DE9F31A27D72A769DE2F&amp;hdnts=exp=1673963344~acl=/*~hmac=bed263fb2f73fe2f2003af6789daa9c617f3fd62a5d3f9378a6e1e24b847e134&fromtag=8&guid=JOOX@WEB_OPENUDID"
    },
    {
      "lagu": "Yellow",
      "album": "Hymn for the Weekend (Tribute to Coldplay) (Piano Version)",
      "penyanyi": "Hymn for the Weekend",
      "publish": "2017-12-06",
      "img": "https://image.joox.com/JOOXcover/0/daf496dc69b4f3ab/1000",
      "mp3": "https://id.stream.music.joox.com/M500Z13533c30d03ee.mp3?vkey=AB65FDF8075C270B68EFF0A862A2F18986B566819FD3BD199A3534590D27907A7240AC01B1616C818ED28261E1E621A85351978911740DB9&amp;hdnts=exp=1673963223~acl=/*~hmac=b83a0de3d0f6510f97ebb143b5c8783d360f915689c6aecfbeb17cb5aaaeb20b&fromtag=8&guid=JOOX@WEB_OPENUDID"
    },
    {
      "lagu": "Yellow (Coldplay Piano Cover)",
      "album": "Yellow (Coldplay Piano Cover)",
      "penyanyi": "Yellow",
      "publish": "2017-10-28",
      "img": "https://image.joox.com/JOOXcover/0/e15779f110f828ea/1000",
      "mp3": "https://ak-hk.stream.music.joox.com/M500Z8323738e014fe.mp3?vkey=54F302CA2C73F01A5BBF2FC0C3104AF4235C1F7D7DF31A00B37A3774D9AD353077DECD5DFF1FE169EE10AE6D88C66CA148568ADB1005DC82&amp;hdnts=exp=1673963508~acl=/*~hmac=ca49910695f6da9c388054f692f1bf71e8cfc8f1bf16ceaa09974a283e54f9fb&fromtag=8&guid=JOOX@WEB_OPENUDID"
    }
  ]
}
```
</details>
<details><summary><b># Mediafire</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.mediafire('https://www.mediafire.com/download/s9co8o5n5ftch9q')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "filename": "RULLMDV5.7z",
    "filetype": "Compressed Archive (.7Z)",
    "link": "https://download1472.mediafire.com/pu2ujrgcpfyg/s9co8o5n5ftch9q/RULLMDV5.7z",
    "detail": "\nFile size: 19.37MB\nUploaded: 2022-11-23 04:30:45\n"
  }
}
```
</details>
<details><summary><b># Musically</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.musically('https://www.tiktok.com/@saidalwilizarmi/video/7187975805241216282?is_from_webapp=1&sender_device=pc')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "user": "saidalwilizarmi",
    "desk": "Kami kembaliiii 🤣🫡🗿 #fyp #bomba",
    "profile": "https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e30a96b0a29197affcea04c8c40b0304~c5_100x100.webp?x-expires=1674043200&x-signature=VJWWd0TSDAWJKMplQmQWcqpRwNA%3D",
    "video": "https://v19.tiktokcdn.com/47953a7a012b8253dd9e1db7bfa90848/63c6e5c2/video/tos/useast2a/tos-useast2a-pve-0037-aiso/o4QfBAXENPg2RDoj2webDBQ56oYDH8QEVCnPCU/?a=1180&ch=0&cr=0&dr=0&lr=all&cd=0%7C0%7C0%7C0&cv=1&br=734&bt=367&cs=0&ds=6&ft=XsdJiqWmmXJPD124lf0q3wUpfwYHaeF~OD&mime_type=video_mp4&qs=0&rc=NTtoN2k0ZWQ7Omc7aDNlZkBpM3c1NTo6Zm9naTMzZjgzM0A2Xy1hXjNeNi8xYWIuXjJhYSNjay5lcjQwMC1gLS1kL2Nzcw%3D%3D&l=20230117121507237652741D523F15C239&btag=80000&cc=4",
    "audio": "https://sf16-ies-music.tiktokcdn.com/obj/ies-music-aiso/7135470543448345371.mp3",
    "video_original": "https://mdcdn.xyz/dll?url=aHR0cHM6Ly92NTgudGlrdG9rY2RuLmNvbS92aWRlby90b3MvdXNlYXN0MmEvdG9zLXVzZWFzdDJhLXB2ZS0wMDM3LWFpc28vb01iMVZOVVB3QkRlUkE4UWdvWDdQQ0FmNkVIUTdqQVFuQ1ZDRE8vP2E9MTE4MCZjaD0wJmNyPTAmZHI9MCZscj1hbGwmY2Q9MCU3QzAlN0MwJTdDMCZjdj0xJmJyPTg4OCZidD00NDQmY3M9MCZkcz0zJmZ0PVhzZEppcVdtbVhKUEQxMjRsZjBxM3dVcGZ3WUhhZUZ-T0QmbWltZV90eXBlPXZpZGVvX21wNCZxcz0wJnJjPVpEdzdaemc2T2pNMVp6TThObWRwYVVCcE0zYzFOVG82Wm05bmFUTXpaamd6TTBCak5ETXlMakV1TlM0eFlXTXRZalF5WVNOamF5NWxjalF3TUMxZ0xTMWtMMk56Y3clM0QlM0QmbD0yMDIzMDExNzEyMTUwNzIzNzY1Mjc0MUQ1MjNGMTVDMjM5JlZFeHBpcmF0aW9uPTE2NzM5NzkzMzAmVlNpZ25hdHVyZT1yTUZORE4ySm1QeEZ6Y3JyTF9kZEJnJmJ0YWc9ODAwMDAmY2M9MTQ&name=c2FpZGFsd2lsaXphcm1p&id=MTY0MDc1MDg1&type=mp4"
  }
}
```
</details>
<details><summary><b># Pinterest Video</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.pinterest_video('https://id.pinterest.com/pin/403283341645711485/')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": "https://v.pinimg.com/videos/mc/720p/33/df/9f/33df9f5d752b992dec5273a6a7c56144.mp4"
}
```
</details>
<details><summary><b># Soundcloud</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.soundcloud('https://soundcloud.com/eugenia-birgitta-marsha/nadin-amizah-bertaut')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "title": "Title: Nadin Amizah - Bertaut",
    "link": "https://dl4.soundcloudmp3.org/api/download/eyJpdiI6InV3YXNWaGpCZVFlU2JNVGtRaFpldFE9PSIsInZhbHVlIjoiK2Rzd0N0YnFBanBiU09CWFlJeEhvMGlRcXduVWZnWkMrUTg0RFwvK1EwcDgzV3ZQcXVNcFRQTkd1NVliTFoybVdEVEdTWlwvR3pBT2h5ZWpDMXN5MjZVaTlkNysxZTRINEtncmVvcTVTMll1OTRJcFwveXM1b1VVa2hRYmpCRzI4RHMiLCJtYWMiOiI2MmJjYTU2YzBiODQ3MWM0NTIxNDMzY2FjY2ZiMjY2NTc0NTZmZmMyODVkZGY3ZDM4MjFlZTQ4ZGIzNTM3NDAwIn0=",
    "img": "https://i1.sndcdn.com/artworks-Pm7hAtNc05p4CK54-AljzXg-large.jpg",
    "cap": "├ Title: Nadin Amizah - Bertaut\n├ Length: 05:17 Minutes\n├ Quality: 320 Kbps"
  }
}
```
</details>
<details><summary><b># Tik Tok</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.tiktok('https://www.tiktok.com/@saidalwilizarmi/video/7187975805241216282?is_from_webapp=1&sender_device=pc')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "thumb": "https://img-cdn02.lovetik.com/images/?file=jaL%2FF1PZO6W0QYabH8o9xA4jZF01QQeP9Vj8iddLupSfj3XeB%2B6kvzzdenuC1qlyswu2jlLkQt4bmqcqyeOHmRm2cHEiSGlGgrkFZ22AR83h6dwWUX4k48nn6cLcvyryozcFQQkmznkaPrO%2FIk1ELwZTabZn0%2FazAtYodHLGY%2FBhe1V9bcPsNpdAA5dnNIpMeQIccf%2F19YCizckcfYXvqCkUA3zYI358pV4%2BLDdt4tfEzUBeD1PbGj3gM4%2F%2BdjZzzIg1YQCLaxm1yYIr1Xa3jXeIUGeBzPz1S3KSN2uCGtU4GNQ6vblYBiCrSdg8ag%3D%3D",
    "v_id": "7187975805241216282",
    "desc": "Kami kembaliiii 🤣🫡🗿 #fyp #bomba ",
    "nowm": "http://cdn-22.lovetik.com/tiktok-file.php?file=jaL%2FF1PZO6WyQ4mbCdZ03ko%2BcRwqSwiVtFDwgJZU7pjAlWXUTKa1qDyMMTbSg7BgqQnkhFf%2BFIcJxL124anz3RLqVCBYDnBfv7ISSSGtTf%2F41dkVSGQTt8348eSb5Qa4hCgYWlQ3zWABOvnqLQZeZx9Kc6stz4bUQtZYERS0AZEEa2Y6dM%2FFCJNwPr11QKRuXC4LSork3L7FtvRXN5yny2h0BjLBBSk7zhh%2FVSI4u%2BO8uCIUDguHEDCqI47lNXt5qctzayDUOEuE3Mh1kXu0mCXLXGSHyuinDHaQNWnlOuMza7Ns%2BsZYGXfqQcIMGgC6f9utiZeYnR3WD1HqsXa6xrmCVx4MCo7kYw4PaO4JiJO6W%2FdFhNVrKpSaKh6XXIOnxSU%2FHiar3DrPVBqPU5QxD6ZQCOnIU1Phvny9ZOvskzYcImqwios1YoZ2RsxhKLTztF2m3d0AZyStOuoIj0K2%2FWkMJ7p7sVpadixTHAd1tYzQdc%2B%2BNShlnVqeU9UaZ07B34VlBiBTD6qIduSpfxDGc9y2VhIy7H7tK2NF69HSMVNFMJcIo%2F1ju1RhjOvrkrv7aNHalwjFxnX6kyTwzhB9xP%2Bap9El&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFgKSQGSsVj6gNsEtZKbyWiaUYXh6WD6LE6EksUxu322mFyPBvYq0Ml0pcD1y0iaFC5eGx1v%2FfNFFWigUqfykpkSRnoF5IeI5O%2BJuAeUjSYcSxQJ1yJHAOX0cEVdbBhQab5nnf27AtQkcw%3D%3D&play=1",
    "author": {
      "author": "@saidalwilizarmi",
      "author_name": "Guree",
      "author_profile": "https://img-cdn02.lovetik.com/images/?file=jaL%2FF1PZO6W0QYabH8o9xA4jZF01QQeP9Vj8iddLupSfj3XeB%2B6kvzzdenuC1qlj6E%2BrjVX%2FG5oPnPsqr%2BP23hDlB3VZX20Q5%2B9AR2i%2FQem2kJ4TEXRTtc7ntrvcthD%2BvnhdFh5n1ihZKLG4bQoRZxtbcK1wxbi%2FBdcrcHbBYvJhbQsoM9niP5hVApBwbNtoCA48S4%2Ftu6mSv%2BQcWJHPtAl5UCTtX39R3wwoW1U%3D"
    },
    "other_video_link": [
      "http://cdn-27.lovetik.com/tiktok-file.php?file=jaL%2FF1PZO6WlANmHWo40xVE4ZB9sS0GO6Vb%2Bns1UuNWGyWrFG6in4jrTZCDRwOFv%2BxTwjEq5T9YR2rcz6eKggS61VSofDjkZ5OMQRT7pEry0xpoUGntU5pvg8LyA%2BkL5jz0NHkA6iX4SYuT8dEY2OhJCeZt30qe%2FBcdvKzOHMqVsDUwzdfnkLYRXE6BsfItgeC0hXe3q5LyQqtgcNZutzmF7BXeRWCZoi087UCEm7%2FLkvDwcTgKDGm%2B9IdK5&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFgKSQGSsVj6gNsEtZKbyWiaUYXh6WD6LE6EksUxu322mFyPBvYq0Ml0pcD1y0iaFC5eGx1v%2FfNFFWigUqfykpkSRnoF5IeI5O%2BJuAeUjSYcSxQJ1yJHAOX0cEVdbBhQab5nnf27AtQkcw%3D%3D",
      "http://cdn-25.lovetik.com/tiktok-file.php?file=jaL%2FF1PZO6WlANmHWo40xVE4ZB9sS0GO6Vb%2Bns1UuNWGyWrFG6in4jrTZCDRwOFv%2BxTwjEq5T9YR2rcz6eKggS61VSofDjkZ5OMQRT7pEry0xpoUGntU5pvg8LyA%2BkL5jz0NHkA6iX4SYuT8dEY2OhJCeZt30qe%2FBcdvKzOHMqVsDUwzdfnkLYRXE6BsfItgeC0hXe3q5LyQqtgcNZ6qw2EuVyOWVSE53085DnAn7qCy7jdMGATQTW%2B9eY%2Fq&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFgKSQGSsVj6gNsEtZKbyWiaUYXh6WD6LE6EksUxu322mFyPBvYq0Ml0pcD1y0iaFC5eGx1v%2FfNFFWigUqfykpkSRnoF5IeI5O%2BJuAeU1H1bcVd4jWBDebKpdE8Md0sUNPYwmQ%3D%3D",
      "http://cdn-25.lovetik.com/tiktok-file.php?file=jaL%2FF1PZO6WlANmHWo40xVE4ZB9sS0GO6Vb%2Bns1UuNWGyWrFG6in4jrTZCDRwOFv%2BxTwjEq5T9YR2rcz6eKggS61VSofDjkZ5OMQRT7pEry0xpoUGntU5pvg8LyA%2BkL5jz0NHkA6iX4SYuT8dEY2OhJCeZt30qe%2FBcdvKzOHMqVsDUwzdfnkLYRXE6BsfItgeC0hXe3q5LyQqtgcNZ%2F5wjwvVSGQVS0%2BiU9oUCgmu6a27WFJSQHUTD%2B8d9%2Fv&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFgKSQGSsVj6gNsEtZKbyWiaUYXh6WD6LE6EksUxu322mFyPBvYq0Ml0pcD1y0iaFC5eGx1v%2FfNFFWigUqfykpkSRnoF5IeI6eSfrQGU1H1bcVd4jWBDebKpdE8Md0oXNPUzlQ%3D%3D",
      "http://cdn-26.lovetik.com/tiktok-file.php?file=jaL%2FF1PZO6WlANmHWo40xVE4ZB9sS0GO6Vb%2Bns1UuNWGyWrFG6in4jrTZCDRwOFv%2BxTwjEq5T9YR2rcz6eKggS61VSofDjkZ5OMQRT7pEry0xpoUGntU5pvg8LyA%2BkL5jz0NHkA6iX4SYuT8dEY2OhJCeZt30qe%2FBcdvKzOHMqVsDUwzdfnkLYRXE6BsfItgeC0hXe3q5LyQqtgcNcyszjp7UCOUDCAz0U86CXB87fO1vzVKGgDUT2W%2BeYi9&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFgKSQGSsVj6gNsEtZKbyWiaUYXh6WD6LE6EksUxu322mFyPBvYq0Ml0pcD1y0iaFC5eGx1v%2FfNFFWigUqfykpkSRnoF5IeI6eSfrQC%2FvnxfHjlnzn0Ha%2FK8blwTL0MQOfU2mPk%3D"
    ],
    "wm": "http://cdn-29.lovetik.com/tiktok-file.php?file=jaL%2FF1PZO6WlANmHWo40xVE4ZB9sS0GO6Vb%2Bns1UuNWGyWrFG6in4jrTZCDRwOFv%2BxTwjEq5T9YR2rcz6eKggS61VSofDjkZ5OMQRT7pEry0xpoUGntU5pvg8LyA%2BkL5jz0NHkA6iX4SYuT8alQdLwxOYbZpnfqkWI57KxmbMK00YFk5dd7kM9BHGZBwaoMCeC0hXe3q5LyQqtgcNcr8y2ApBnWaXSMz2U85CyF866G5vDZJSwGDGWq8Id69&finfo=g7jqCkXeWOWyFeTfB405xU5%2BKFgKSQGSsVj6gNsEtZKbyWiaUYXh6WD6LE6EksUxu322mFyPBvYq0Ml0pcD1y0iaFC5eGx1v%2FfNFFWigUqfykpkSRnoF5IeI8uqcrQGmgDsASwJ4jWBDebKpdE8Md0kbNPE0mQ%3D%3D"
  }
}
```
</details>
<details><summary><b># Twitter</b></summary><br>

> #### Required parameters
> - (link) *type **String***


```js
download.twitter('https://twitter.com/bingganjiaxin/status/1615269790209409026?s=20&t=xDkrkXEK7hhRZkHsQVpzXw')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "thumb": "https://pbs.twimg.com/ext_tw_video_thumb/1615268965613461507/pu/img/OxdGuTAM9DRk8OWN.jpg",
    "author": "饼干夹心",
    "id_link": "新年新福利只限七天无门槛🥳\n私信电报可免费福利可线下全国可✈️\n🔞福利直通车：https://t.co/Pl7CM2UDFz\n转发➕关注私信我吧 https://t.co/uWYQGliKZ7",
    "video": "https://video.twimg.com/ext_tw_video/1615268965613461507/pu/vid/640x360/tC4L9H7OQsVytbrL.mp4?tag=12",
    "audio": "https://twdown.net/mp3.php?v=MjE9Z2F0PzRwbS5fRTNuclNfNUF1NjBlTUFJLzAyN3gwODIxL2Rpdi91cC83MDUxNjQzMTY1Njk4NjI1MTYxL29lZGl2X3d0X3R4ZS9tb2MuZ21pd3Qub2VkaXYvLzpzcHR0aA==&t=token%260c05c632a2822a0a877c7e991602543"
  }
}
```
</details>

<br>
</details>

<!-- < INI ADALAH AWAL > -->
<details><summary><i>Anime</i></summary><br>

import anime code using:
```js
const anime = cs.anime
```

<details><summary><b># Search Anime</b></summary><br>

> #### Required parameters
> - (search) *type **String***
```js
anime.mal_search_anime('tenki no ko')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "title": "Tenki no Ko CMs",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1959/101750.jpg?s=144955e02ba098ec6082d0473c88f7f6",
      "url": "https://myanimelist.net/anime/40034/Tenki_no_Ko_CMs",
      "type": "Movie",
      "episode": "1",
      "score": "8.30"
    },
    {
      "title": "Denki-gai no Honya-san",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/13/68705.jpg?s=fca4bd17fdacd299a7faa76adc3be001",
      "url": "https://myanimelist.net/anime/24031/Denki-gai_no_Honya-san",
      "type": "Special",
      "episode": "8",
      "score": "5.90"
    },
    {
      "title": "Youjo Senki",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/5/82890.jpg?s=b8b3b76d7d72c1730859e6e0f7a88dd7",
      "url": "https://myanimelist.net/anime/32615/Youjo_Senki",
      "type": "TV",
      "episode": "12",
      "score": "7.19"
    },
    {
      "title": "Tenkai Knights",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/8/74140.jpg?s=01344869a3bcefb01d3dabd9d446c7bf",
      "url": "https://myanimelist.net/anime/23067/Tenkai_Knights",
      "type": "TV",
      "episode": "12",
      "score": "7.97"
    },
    {
      "title": "Otenki Oneesan",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/6/50819.jpg?s=b9545e3c8a4f752ff0e742d9c24ec865",
      "url": "https://myanimelist.net/anime/3211/Otenki_Oneesan",
      "type": "TV",
      "episode": "52",
      "score": "6.37"
    },
    {
      "title": "Kishin Douji Zenki",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1014/98589.jpg?s=cfccd4ab544819fb874d9b2d6d254a4b",
      "url": "https://myanimelist.net/anime/1573/Kishin_Douji_Zenki",
      "type": "OVA",
      "episode": "2",
      "score": "5.45"
    },
    {
      "title": "Otenki Boys",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/9/71934.jpg?s=d792f97adc2af67c8fed56968132dcb1",
      "url": "https://myanimelist.net/anime/30025/Otenki_Boys",
      "type": "TV",
      "episode": "51",
      "score": "6.95"
    },
    {
      "title": "Tenki ni Naare",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/11/66169.jpg?s=1033924efead845def5ca298a23ceb35",
      "url": "https://myanimelist.net/anime/26239/Tenki_ni_Naare",
      "type": "TV",
      "episode": "30",
      "score": "N/A"
    },
    {
      "title": "Kirin no Otenki Mama-san",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/11/72061.jpg?s=b7129a08715568f2923bd4f48afe2ee7",
      "url": "https://myanimelist.net/anime/30079/Kirin_no_Otenki_Mama-san",
      "type": "OVA",
      "episode": "1",
      "score": "N/A"
    }
  ]
}
```
</details>
<details><summary><b># Search Character</b></summary><br>

> #### Required parameters
> - (search) *type **String***
```js
anime.mal_search_character('naruto')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "name": "Uzumaki, Naruto",
      "alias_name": "(Nine-Tails Jinchuuriki)",
      "url": "https://myanimelist.net/character/17/Naruto_Uzumaki",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/2/284121.jpg?s=3ebac88ad166bf105d8f04894f3fb469",
      "anime": "Naruto: Honoo no Chuunin Shiken! Naruto vs. Konohamaru!!",
      "manga": "Naruto SD: Rock Lee no Seishun Full-Power Ninden"
    },
    {
      "name": "Naruto, Miyu",
      "alias_name": "No Alias",
      "url": "https://myanimelist.net/character/210984/Miyu_Naruto",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/8/475995.jpg?s=9e8c3d70e2e1ca288766d86b75f06904",
      "anime": "Deaimon",
      "manga": "No In Manga"
    },
    {
      "name": "Naruto, Rie",
      "alias_name": "No Alias",
      "url": "https://myanimelist.net/character/153452/Rie_Naruto",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/10/336813.jpg?s=21cf8bdd20f3d938afeecb824143b0b9",
      "anime": "Karadasagashi",
      "manga": "No In Manga"
    },
    {
      "name": "Kuroki, Naruto",
      "alias_name": "No Alias",
      "url": "https://myanimelist.net/character/174863/Naruto_Kuroki",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/14/391911.jpg?s=39da3ba9e2f39dc2efd5126a89009233",
      "anime": "No In Anime",
      "manga": "No In Manga"
    },
    {
      "name": "Naruto, Tomoe",
      "alias_name": "No Alias",
      "url": "https://myanimelist.net/character/148417/Tomoe_Naruto",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/6/410383.jpg?s=d74a7cc0a5e8b4ec2c9d23f62fe2a030",
      "anime": "Hataraku Otona no Renai Jijou The Animation",
      "manga": "No In Manga"
    },
    {
      "name": "Oonaruto, Muni",
      "alias_name": "No Alias",
      "url": "https://myanimelist.net/character/181307/Muni_Oonaruto",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/16/406900.jpg?s=a1fc07b6b454cab7659f9ca3750960e8",
      "anime": "D4DJ First Mix",
      "manga": "D4DJ Petit Mix"
    },
    {
      "name": "Naruto, Kotarou",
      "alias_name": "(Ko-chan)",
      "url": "https://myanimelist.net/character/80203/Kotarou_Naruto",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/12/267095.jpg?s=a3ace03845a54ccbd404a2be9e1f95e3",
      "anime": "Dansai Bunri no Crime Edge",
      "manga": "No In Manga"
    },
    {
      "name": "Naruto-kun",
      "alias_name": "No Alias",
      "url": "https://myanimelist.net/character/114827/Naruto-kun",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/16/261619.jpg?s=aaecff3073aecc94b7698afacbc73d5e",
      "anime": "Sore Ike! Anpanman",
      "manga": "No In Manga"
    },
    {
      "name": "Nozaki, Naruto",
      "alias_name": "No Alias",
      "url": "https://myanimelist.net/character/147081/Naruto_Nozaki",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/2/457186.jpg?s=dd9496bafb6d3a18ff30ec101736863d",
      "anime": "Juliet",
      "manga": "No In Manga"
    },
    {
      "name": "Ishikawa, Narutoshi",
      "alias_name": "(Niko, Knight of Loyalty)",
      "url": "https://myanimelist.net/character/30935/Narutoshi_Ishikawa",
      "thumbnail": "https://cdn.myanimelist.net/r/42x62/images/characters/10/82334.jpg?s=6747a0ceee570743a799b35ba0101802",
      "anime": "Litchi DE Hikari Club",
      "manga": "No In Manga"
    }
  ]
}
```
</details>
<details><summary><b># Search Manga</b></summary><br>

> #### Required parameters
> - (search) *type **String***
```js
anime.mal_search_manga('naruto')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "title": "Naruto",
      "type": "Manga",
      "vol": "72",
      "score": "8.07",
      "link": "https://myanimelist.net/manga/11/Naruto",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/3/249658.jpg?s=a644bb1e15a7c6e32a70a9d6fe61e501"
    },
    {
      "title": "Naruto",
      "type": "One-shot",
      "vol": "-",
      "score": "6.49",
      "link": "https://myanimelist.net/manga/6444/Naruto",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/1/125935.jpg?s=271503896901f640bd4b346d31705e3c"
    },
    {
      "title": "Boruto: Naruto Next Generations",
      "type": "Manga",
      "vol": "-",
      "score": "6.82",
      "link": "https://myanimelist.net/manga/95210/Boruto__Naruto_Next_Generations",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/3/181968.jpg?s=f9673cdd37df97ceaefe39e8a50514c1"
    },
    {
      "title": "Naruto Shinden Series",
      "type": "Light Novel",
      "vol": "3",
      "score": "8.32",
      "link": "https://myanimelist.net/manga/90531/Naruto_Shinden_Series",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/2/190847.jpg?s=429a6da11afeb70decef72ea6951b568"
    },
    {
      "title": "Naruto Hiden Series",
      "type": "Light Novel",
      "vol": "6",
      "score": "7.75",
      "link": "https://myanimelist.net/manga/86129/Naruto_Hiden_Series",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/1/175457.jpg?s=1523cc0f43a06f7ef35ced6f542503fe"
    },
    {
      "title": "Naruto Gaiden: Nanadaime Hokage to Akairo no Hanatsuzuki",
      "type": "Manga",
      "vol": "1",
      "score": "7.17",
      "link": "https://myanimelist.net/manga/87866/Naruto_Gaiden__Nanadaime_Hokage_to_Akairo_no_Hanatsuzuki",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/2/161762.jpg?s=00462f2a9aa821b2b1a17145e33a34f1"
    },
    {
      "title": "The Last: Naruto the Movie",
      "type": "Light Novel",
      "vol": "1",
      "score": "7.84",
      "link": "https://myanimelist.net/manga/83257/The_Last__Naruto_the_Movie",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/1/144797.jpg?s=0d3250d2c0a73f19a7d151687c9f1f6f"
    },
    {
      "title": "Naruto: Shiro no Douji, Keppu no Kijin",
      "type": "Light Novel",
      "vol": "1",
      "score": "7.46",
      "link": "https://myanimelist.net/manga/6028/Naruto__Shiro_no_Douji_Keppu_no_Kijin",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/3/261705.jpg?s=bf624780e149ba8d9f8f2a013839e495"
    },
    {
      "title": "Naruto Ninden Series",
      "type": "Light Novel",
      "vol": "2",
      "score": "7.57",
      "link": "https://myanimelist.net/manga/40225/Naruto_Ninden_Series",
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/manga/2/70963.jpg?s=f1d0a20509695d70ed36398d95d863c9"
    }
  ]
}
```
</details>
<details><summary><b># Top Airing</b></summary><br>

```js
anime.mal_top_airing()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "rank": 1,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1170/124312.jpg?s=ea717ad18c8bf0f21078491e981e97a1",
      "title": "Vinland Saga Season 2",
      "score": "8.86",
      "link": "https://myanimelist.net/anime/49387/Vinland_Saga_Season_2"
    },
    {
      "rank": 2,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14",
      "title": "One Piece",
      "score": "8.68",
      "link": "https://myanimelist.net/anime/21/One_Piece"
    },
    {
      "rank": 3,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1720/126608.jpg?s=0eb3d2732c5ac3524603b4647741f405",
      "title": "Bungou Stray Dogs 4th Season",
      "score": "8.56",
      "link": "https://myanimelist.net/anime/50330/Bungou_Stray_Dogs_4th_Season"
    },
    {
      "rank": 4,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1855/128059.jpg?s=2dffeb8a4e240cfc06e0db55cba8b444",
      "title": "Golden Kamuy 4th Season",
      "score": "8.28",
      "link": "https://myanimelist.net/anime/50528/Golden_Kamuy_4th_Season"
    },
    {
      "rank": 5,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a",
      "title": "Holo no Graffiti",
      "score": "8.28",
      "link": "https://myanimelist.net/anime/44042/Holo_no_Graffiti"
    },
    {
      "rank": 6,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1258/126929.jpg?s=a978bcf47a16c7859d20c21e32764a65",
      "title": "Blue Lock",
      "score": "8.27",
      "link": "https://myanimelist.net/anime/49596/Blue_Lock"
    },
    {
      "rank": 7,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1483/126005.jpg?s=b8756ff0c26901e2dd71012ecc5532fa",
      "title": "Boku no Hero Academia 6th Season",
      "score": "8.27",
      "link": "https://myanimelist.net/anime/49918/Boku_no_Hero_Academia_6th_Season"
    },
    {
      "rank": 8,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1458/125998.jpg?s=fcef8a332e1758c605884cb94640cac7",
      "title": "IDOLiSH7 Third Beat! Part 2",
      "score": "8.21",
      "link": "https://myanimelist.net/anime/46654/IDOLiSH7_Third_Beat_Part_2"
    },
    {
      "rank": 9,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/7/75199.jpg?s=529dd40c117676c23a713a83ffc0a87f",
      "title": "Detective Conan",
      "score": "8.17",
      "link": "https://myanimelist.net/anime/235/Detective_Conan"
    },
    {
      "rank": 10,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1226/131884.jpg?s=f239202dd606f6c66bf8902a39ca4bae",
      "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen",
      "score": "8.05",
      "link": "https://myanimelist.net/anime/53111/Dungeon_ni_Deai_wo_Motomeru_no_wa_Machigatteiru_Darou_ka_IV__Fuka_Shou_-_Yakusai-hen"
    }
  ]
}
```
</details>
<details><summary><b># Top Anime</b></summary><br>

```js
anime.mal_top_anime()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "rank": 1,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1170/124312.jpg?s=ea717ad18c8bf0f21078491e981e97a1",
      "title": "Vinland Saga Season 2",
      "score": "8.86",
      "link": "https://myanimelist.net/anime/49387/Vinland_Saga_Season_2"
    },
    {
      "rank": 2,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/6/73245.jpg?s=f792b8c9e28534ae455d06b15e686a14",
      "title": "One Piece",
      "score": "8.68",
      "link": "https://myanimelist.net/anime/21/One_Piece"
    },
    {
      "rank": 3,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1720/126608.jpg?s=0eb3d2732c5ac3524603b4647741f405",
      "title": "Bungou Stray Dogs 4th Season",
      "score": "8.56",
      "link": "https://myanimelist.net/anime/50330/Bungou_Stray_Dogs_4th_Season"
    },
    {
      "rank": 4,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1855/128059.jpg?s=2dffeb8a4e240cfc06e0db55cba8b444",
      "title": "Golden Kamuy 4th Season",
      "score": "8.28",
      "link": "https://myanimelist.net/anime/50528/Golden_Kamuy_4th_Season"
    },
    {
      "rank": 5,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1259/110227.jpg?s=08c77f58ab974a8fc36af5e2eac9040a",
      "title": "Holo no Graffiti",
      "score": "8.28",
      "link": "https://myanimelist.net/anime/44042/Holo_no_Graffiti"
    },
    {
      "rank": 6,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1258/126929.jpg?s=a978bcf47a16c7859d20c21e32764a65",
      "title": "Blue Lock",
      "score": "8.27",
      "link": "https://myanimelist.net/anime/49596/Blue_Lock"
    },
    {
      "rank": 7,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1483/126005.jpg?s=b8756ff0c26901e2dd71012ecc5532fa",
      "title": "Boku no Hero Academia 6th Season",
      "score": "8.27",
      "link": "https://myanimelist.net/anime/49918/Boku_no_Hero_Academia_6th_Season"
    },
    {
      "rank": 8,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1458/125998.jpg?s=fcef8a332e1758c605884cb94640cac7",
      "title": "IDOLiSH7 Third Beat! Part 2",
      "score": "8.21",
      "link": "https://myanimelist.net/anime/46654/IDOLiSH7_Third_Beat_Part_2"
    },
    {
      "rank": 9,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/7/75199.jpg?s=529dd40c117676c23a713a83ffc0a87f",
      "title": "Detective Conan",
      "score": "8.17",
      "link": "https://myanimelist.net/anime/235/Detective_Conan"
    },
    {
      "rank": 10,
      "thumbnail": "https://cdn.myanimelist.net/r/50x70/images/anime/1226/131884.jpg?s=f239202dd606f6c66bf8902a39ca4bae",
      "title": "Dungeon ni Deai wo Motomeru no wa Machigatteiru Darou ka IV: Fuka Shou - Yakusai-hen",
      "score": "8.05",
      "link": "https://myanimelist.net/anime/53111/Dungeon_ni_Deai_wo_Motomeru_no_wa_Machigatteiru_Darou_ka_IV__Fuka_Shou_-_Yakusai-hen"
    }
  ]
}
```
</details>

<br>
</details>

<!-- < INI ADALAH AWAL > -->
<details><summary><i>News</i></summary><br>

import news code using:
```js
const news = cs.news
```

<details><summary><b># CNBC</b></summary><br>

> #### Required parameters
> - **List** 'news' | 'market' | 'investment' | 'entrepreneur' | 'syariah' | 'tech' | 'lifestyle'

```js
news.cnbc('news')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "waktu": "News 4 menit yang lalu",
      "title": "Sedih! Avanza Tak Lagi Raja Mobil RI, Begini Perjalanannya",
      "img": "https://akcdn.detik.net.id/visual/2021/11/24/new-avanza-2_169.jpeg?w=715&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117173230-4-406235/sedih-avanza-tak-lagi-raja-mobil-ri-begini-perjalanannya"
    },
    {
      "waktu": "News  -  11 menit yang lalu",
      "title": "Tok! RI Setujui Proyek Rp 51 Triliun 'Raksasa' Minyak Italia",
      "img": "https://akcdn.detik.net.id/visual/2021/02/19/fasilitas-fpu-lapangan-gas-jangkrik-yang-dioperasikan-eni-east-sepinggan-ltd-dok-skk-migas_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117172211-4-406219/tok-ri-setujui-proyek-rp-51-triliun-raksasa-minyak-italia"
    },
    {
      "waktu": "News  -  24 menit yang lalu",
      "title": "Kabar Duka, Dubes RI untuk Italia Muhammad Prakosa Tutup Usia",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/muhammad-prakosainstagram_43.png?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117195500-4-406254/kabar-duka-dubes-ri-untuk-italia-muhammad-prakosa-tutup-usia"
    },
    {
      "waktu": "News  -  32 menit yang lalu",
      "title": "Inggris Panas, Ribuan Orang Mau Mogok Tuntut Naik Gaji",
      "img": "https://akcdn.detik.net.id/visual/2022/06/21/1241429779_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117174539-4-406234/inggris-panas-ribuan-orang-mau-mogok-tuntut-naik-gaji"
    },
    {
      "waktu": "News  -  33 menit yang lalu",
      "title": "Video: Progres Ibu Kota Baru Sudah 15%",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/cnbc-indonesia-tv-2_43.png?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117184654-8-406245/video-progres-ibu-kota-baru-sudah-15"
    },
    {
      "waktu": "News  -  38 menit yang lalu",
      "title": "Tetangga RI Gonjang-Ganjing, Presiden Vietnam Tetiba Mundur",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/1235434186_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117173759-4-406225/tetangga-ri-gonjang-ganjing-presiden-vietnam-tetiba-mundur"
    },
    {
      "waktu": "News  -  42 menit yang lalu",
      "title": "Ada Blok Mahakam, Segini Produksi Gas Pertamina di Kalimantan",
      "img": "https://akcdn.detik.net.id/visual/2018/12/23/90fc4f51-b7e1-40e8-96a9-49815e3e5966_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117194449-4-406252/ada-blok-mahakam-segini-produksi-gas-pertamina-di-kalimantan"
    },
    {
      "waktu": "News  -  45 menit yang lalu",
      "title": "Kabar Baik! Covid Reda, Angka Kemiskinan di Desa Turun",
      "img": "https://akcdn.detik.net.id/visual/2022/10/28/kampung-klayas-distrik-seget-kabupaten-sorong-papua-barat-cnbc-indonesiachandra-gian-asmara-8_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117170343-4-406218/kabar-baik-covid-reda-angka-kemiskinan-di-desa-turun"
    },
    {
      "waktu": "News  -  54 menit yang lalu",
      "title": "IMF: 2024 Ekonomi Dunia akan Bangkit Kembali",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/cnbc-indonesia-tv-3_43.png?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117184653-8-406244/imf-2024-ekonomi-dunia-akan-bangkit-kembali"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Ini Potret Proses Evakuasi Jenazah Korban Yeti Airlines",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/nepal-plane-crash_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117143651-7-406139/ini-potret-proses-evakuasi-jenazah-korban-yeti-airlines"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Disebut Ruwet oleh Jokowi, Apa Itu PBG?",
      "img": "https://akcdn.detik.net.id/visual/2019/09/19/adea5980-b6c7-4b70-a551-dc7778d3b05f_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117164751-4-406217/disebut-ruwet-oleh-jokowi-apa-itu-pbg"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Jokowi Geram Soal Inflasi Hingga Ekonomi China Cuma Tumbuh 3%",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/cnbc-indonesia-tv_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117184650-8-406243/jokowi-geram-soal-inflasi-hingga-ekonomi-china-cuma-tumbuh-3"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Sah! BPH Migas Tetapkan Kuota Pertalite 32,56 Juta KL di 2023",
      "img": "https://akcdn.detik.net.id/visual/2023/01/04/spbu-dijual-lokasi-prembun-jl-kebumen-purworejo-3_43.webp?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117191315-4-406246/sah-bph-migas-tetapkan-kuota-pertalite-3256-juta-kl-di-2023"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Ada Apa Xi Jinping? Populasi China Turun, Pertama Sejak 1961",
      "img": "https://akcdn.detik.net.id/visual/2019/01/21/aba71275-e5ea-43b5-87c9-1b6a954e799f_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117161120-4-406183/ada-apa-xi-jinping-populasi-china-turun-pertama-sejak-1961"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Dunia Gonjang-Ganjing, Ini Wanti-Wanti Luhut buat Ganjar Cs",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/menteri-koordinator-bidang-kemaritiman-republik-indonesia-luhut-binsar-pandjaitan-dalam-acara-rakornas-kepala-daerah-dan-forko-2_43.png?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117165523-4-406206/dunia-gonjang-ganjing-ini-wanti-wanti-luhut-buat-ganjar-cs"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Bos IMF 'Teriak' Lagi, Bawa Ramalan Ngeri Ekonomi 2023",
      "img": "https://akcdn.detik.net.id/visual/2022/12/02/germany-politics-economy-meeting_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117164138-4-406198/bos-imf-teriak-lagi-bawa-ramalan-ngeri-ekonomi-2023"
    },
    {
      "waktu": "News  -  1 jam yang lalu",
      "title": "Kepala BIN 'Ramal' Tahun 2023 Gelap dan Penuh Ketidakpastian",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/rakornas-kepala-daerah-dan-forkopimda-tahun-2023-1_43.png?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117162534-4-406190/kepala-bin-ramal-tahun-2023-gelap-dan-penuh-ketidakpastian"
    },
    {
      "waktu": "News  -  2 jam yang lalu",
      "title": "Astaga, Harga Tiket Kereta Mahal Rp150.000-an dari Pesawat",
      "img": "https://akcdn.detik.net.id/visual/2022/03/08/penumpang-kereta-jarak-jauh-di-stasiun-gambir-14_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117165051-4-406204/astaga-harga-tiket-kereta-mahal-rp150000-an-dari-pesawat"
    },
    {
      "waktu": "News  -  2 jam yang lalu",
      "title": "'Momok Menyeramkan' Muncul di Daerah Ini, Gubernur Waspada!",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/menteri-koordinator-bidang-perekonomian-indonesia-airlangga-hartarto-dalam-acara-rakornas-kepala-daerah-dan-forkopimda-tahun-2_43.png?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117164649-4-406199/momok-menyeramkan-muncul-di-daerah-ini-gubernur-waspada"
    },
    {
      "waktu": "News  -  2 jam yang lalu",
      "title": "Bentrokan Maut di PT GNI Ganggu Investasi? Ini Kata Bahlil",
      "img": "https://akcdn.detik.net.id/visual/2023/01/17/menteri-investasi-bahlil-lahadalia-dalam-acara-rakornas-kepala-daerah-dan-forkopimda-tahun-2023-2_43.png?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117180706-4-406239/bentrokan-maut-di-pt-gni-ganggu-investasi-ini-kata-bahlil"
    },
    {
      "waktu": "News  -  2 jam yang lalu",
      "title": "BPS: Garis Kemiskinan 2022 Tertinggi dalam 9 Tahun Terakhir",
      "img": "https://akcdn.detik.net.id/visual/2022/01/17/infogrfais-angka-kemiskinan-di-indonesia-makin-menurun-ini-buktinya_43.jpeg?w=152&q=90",
      "link": "https://www.cnbcindonesia.com/news/20230117155630-4-406179/bps-garis-kemiskinan-2022-tertinggi-dalam-9-tahun-terakhir"
    }
  ]
}
```
</details>
<details><summary><b># Covid World</b></summary><br>

```js
news.covid_world()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "total_cases": "671,761,595",
    "recovered": "643,131,224",
    "deaths": "6,732,674",
    "active_cases": "21,897,697",
    "closed_cases": "649,863,898",
    "last_update": "January 17, 2023, 13:10 GMT"
  }
}
```
</details>
<details><summary><b># Gempa</b></summary><br>

```js
news.gempa()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "waktu": "17/01/202316:47:55 WIB",
    "lintang": "2.4",
    "bujur": "140.4",
    "magnitudo": "4.1",
    "kedalaman": "13 Km",
    "wilayah": "Pusat gempa berada di laut 20 km Baratlaut Kabupaten Jayapura",
    "img_map": "https://ews.bmkg.go.id/TEWS/data/20230117164755.mmi.jpg",
    "google_map": "https://www.google.com/maps/place/2.4%C2%B0S+140.4%C2%B0E"
  }
}
```
</details>
<details><summary><b># Kompas</b></summary><br>

> #### Required parameters
> - **List** 'terpopuler' | 'terkini' | 'global'

```js
news.kompas('terkini')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```
#### output
<details><summary><b># Promise Terpopuler</b></summary><br>

Promise 
```ts
Promise<{
  creator: string;
  info: string;
  status: true;
  result?: {
    judul: string;
    tanngal: string;
    img: string;
    link: string;
  };
}>;
```
</details>
<details><summary><b># Promise Global</b></summary><br>

Promise 
```ts
Promise<{
  creator: string;
  info: string;
  status: true;
  result?: {
    judul: string;
    tanngal: string;
    img: string;
    link: string;
  };
}>;
```
</details>
<details><summary><b># Promise Terkini</b></summary><br>

Promise 
```ts
Promise<{
  creator: string;
  info: string;
  status: true;
  result?: {
    judul: string;
    deskripsi: string;
    tanggal: string;
    artikel: string;
    img: string;
    link: string;
  };
}>;
```
</details>

#### output terkini
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "judul": "Sebelum Ditangkap, Bandar Narkoba Alex Bonpis Diultimatum untuk Serahkan Diri",
      "deskripsi": "\"Namun, (Alex) tidak menyerahkan diri, akhirnya kami melakukan upaya penyelidikan dan kami tangkap,\" kata polisi.",
      "tanggal": "17/01/2023, 20:30 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/3AqdyQGIWz6il4Bqr4oFahwLgIY=/0x0:0x0/226x150/data/photo/2023/01/17/63c6a02f3c687.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/20300251/sebelum-ditangkap-bandar-narkoba-alex-bonpis-diultimatum-untuk-serahkan"
    },
    {
      "judul": "Todong Penumpang Bajaj di Tengah Kemacetan Jakarta, Pelaku Bawa Kabur Rp 8 Juta",
      "deskripsi": "Saat ini, pelaku sudah ditangkap. Pelaku merupakan residivis kasus pemerasan pada 2016 dan sempat menjalani masa tahanan selama 1,5 tahun penjara.",
      "tanggal": "17/01/2023, 20:23 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/rJo5fOO9NppJxAexFke0ZTB9Vxo=/0x47:800x581/226x150/data/photo/2022/04/30/626d1e70a9f8b.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/20234281/todong-penumpang-bajaj-di-tengah-kemacetan-jakarta-pelaku-bawa-kabur-rp-8"
    },
    {
      "judul": "KPK Sebut Negara Dirugikan Rp 100,7 Miliar dalam Kasus Pengolahan Anoda Logam",
      "deskripsi": "KPK sebut negara dirugikan Rp 100,7 miliar atas perbuatan petinggi PT Antam Dodi Martimbang dalam kasus dugaan korupsi pengolahan anoda logam",
      "tanggal": "17/01/2023, 20:16 WIB",
      "artikel": "Nasional",
      "img": "https://asset.kompas.com/crops/phYrHGX1s2F27-ognCW93TjilyY=/0x0:0x0/226x150/data/photo/2023/01/17/63c6759802184.jpeg",
      "link": "https://nasional.kompas.com/read/2023/01/17/20163161/kpk-sebut-negara-dirugikan-rp-1007-miliar-dalam-kasus-pengolahan-anoda-logam"
    },
    {
      "judul": "Keluarga Brigadir J Harap Jaksa Tuntut Putri Candrawathi Dihukum Mati karena Jadi Sumber Masalah",
      "deskripsi": "“Sebenarnya Putri inilah sumber dari permasalahan ini. Hasil bisikan dialah sama suaminya si Ferdy Sambo, makanya ini terjadi semua,\" ujar Samuel.",
      "tanggal": "17/01/2023, 20:08 WIB",
      "artikel": "Nasional",
      "img": "https://asset.kompas.com/crops/OCbtTDOlBp2nHl6Tdf5ABf9h8i0=/0x0:0x0/226x150/data/photo/2022/12/20/63a1385b13607.jpg",
      "link": "https://nasional.kompas.com/read/2023/01/17/20084631/keluarga-brigadir-j-harap-jaksa-tuntut-putri-candrawathi-dihukum-mati-karena"
    },
    {
      "judul": "Cegah Vandalisme di Underpass Dewi Sartika, Ridwan Kamil Minta Pemkot Depok Pasang CCTV",
      "deskripsi": "kami koordinasikan dan saya titip ke pak wali mungkin akan menambahkan CCTV atau keamanan,\" kata Kang Emil.",
      "tanggal": "17/01/2023, 20:05 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/u8RijJRM3eP91eUrZwRKvMhCaVQ=/0x163:1503x1165/226x150/data/photo/2023/01/17/63c679cc6f0e3.jpeg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/20053691/cegah-vandalisme-di-underpass-dewi-sartika-ridwan-kamil-minta-pemkot"
    },
    {
      "judul": "KPK Tahan Petinggi PT Antam Dodi Martimbang Terkait Kasus Pengolahan Anoda Logam",
      "deskripsi": "KPK tahan General Manager Unit Bisnis Pengolahan dan Pemurnian Logam Mulia tahun 2017 PT Antam Dodi Martimbang dalam kasus korupsi anoda logam",
      "tanggal": "17/01/2023, 19:54 WIB",
      "artikel": "Nasional",
      "img": "https://asset.kompas.com/crops/phYrHGX1s2F27-ognCW93TjilyY=/0x0:0x0/226x150/data/photo/2023/01/17/63c6759802184.jpeg",
      "link": "https://nasional.kompas.com/read/2023/01/17/19544581/kpk-tahan-petinggi-pt-antam-dodi-martimbang-terkait-kasus-pengolahan-anoda"
    },
    {
      "judul": "Balita Korban Satu Keluarga Keracunan di Bekasi Dibawa KPAD ke Tempat Rehabilitasi",
      "deskripsi": "Komisi Perlindungan Anak Daerah (KPAD) Kota Bekasi merujuk NR (5), balita korban keracunan di Ciketing Udik, Bantargebang.",
      "tanggal": "17/01/2023, 19:52 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/0aqXAkgKYdMwFy-BXR3eh-6Hs0g=/0x181:4608x3253/226x150/data/photo/2021/06/28/60d96aa8c8131.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/19522411/balita-korban-satu-keluarga-keracunan-di-bekasi-dibawa-kpad-ke-tempat"
    },
    {
      "judul": "Kubu Ferdy Sambo Nilai Motif Pembunuhan Brigadir J Tak Diurai dalam Tuntutan Jaksa",
      "deskripsi": "Kuasa hukum Ferdy Sambo sebut tuntutan jaksa tidak mengurai dengan jelas motif pembunuhan Brigadir J. Sebab, beberapa keterangan saksi dikesampingkan",
      "tanggal": "17/01/2023, 19:41 WIB",
      "artikel": "Nasional",
      "img": "https://asset.kompas.com/crops/F7QleFibxDfYdib3WLD52XBN1aw=/0x0:0x0/226x150/data/photo/2022/12/08/6391511b93831.jpg",
      "link": "https://nasional.kompas.com/read/2023/01/17/19415601/kubu-ferdy-sambo-nilai-motif-pembunuhan-brigadir-j-tak-diurai-dalam-tuntutan"
    },
    {
      "judul": "Polisi Tangkap 3 Pelaku yang Bikin Sekeluarga Keracunan di Bantar Gebang",
      "deskripsi": "Penyidik menemukan adanya unsur pidana dalam kasus keracunan yang menyebabkan tiga orang tewas tersebut.",
      "tanggal": "17/01/2023, 19:39 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/pUEFaO54JO-33vDxWQIG2ZYaVsI=/0x0:0x0/226x150/data/photo/2023/01/12/63bfca3136886.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/19394571/polisi-tangkap-3-pelaku-yang-bikin-sekeluarga-keracunan-di-bantar-gebang"
    },
    {
      "judul": "Kantornya Digeledah KPK, Ketua DPRD DKI: Saya Dukung Proses Penyelidikan yang Dilakukan",
      "deskripsi": "\"Sebagai Ketua DPRD (DKI), saya mendukung sepenuhnya proses penyelidikan yang dilakukan KPK,\" tutur Prasetyo.",
      "tanggal": "17/01/2023, 19:38 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/lwZMmnTOxIbF8F5zg7KLlPaRH90=/0x0:0x0/226x150/data/photo/2023/01/17/63c687bf42ce4.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/19383771/kantornya-digeledah-kpk-ketua-dprd-dki-saya-dukung-proses-penyelidikan"
    },
    {
      "judul": "Dua Pengganjal ATM di Lubang Buaya Berhasil Diamankan Polsek Cipayung dan Kopasgat TNI AU",
      "deskripsi": "Dua pengganjal mesin ATM di kawasan Lubang Buaya, telah diamankan Polsek Cipayung dan Prajurit Batalyon 467 Kopasgat Pratu Taufik.",
      "tanggal": "17/01/2023, 19:37 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/PDk7v8-YY8YYfV0kGq9gmeop2O4=/0x13:1117x758/226x150/data/photo/2020/06/22/5ef096ef0962c.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/19372901/dua-pengganjal-atm-di-lubang-buaya-berhasil-diamankan-polsek-cipayung-dan"
    },
    {
      "judul": "Keluarga Brigadir J Tak Puas Ferdy Sambo Dituntut Penjara Seumur Hidup, Berharap Hakim Vonis Mati",
      "deskripsi": "\"Kami sangat berharap sekali untuk bapak hakim nantinya untuk mewujudkan harapan keluarga agar diwujudkan vonis hukuman mati,\" tuturnya.",
      "tanggal": "17/01/2023, 19:34 WIB",
      "artikel": "Nasional",
      "img": "https://asset.kompas.com/crops/N-RBtqoFzckDdAlQhyUyCqBAZ5U=/0x0:0x0/226x150/data/photo/2022/11/02/63620a066a89c.jpeg",
      "link": "https://nasional.kompas.com/read/2023/01/17/19343571/keluarga-brigadir-j-tak-puas-ferdy-sambo-dituntut-penjara-seumur-hidup"
    },
    {
      "judul": "Fakta Aksi Perploncoan Siswa SMAN 6 oleh Alumni: Tradisi untuk Mendapatkan Jaket Angkatan",
      "deskripsi": "Dugaan aksi perpeloncoan itu dilakukan secara turun-temurun ke setiap angkatan sekolah sejak tahun 2008.",
      "tanggal": "17/01/2023, 19:32 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/t38s7FOCUmdhC1XUGI10Ubzymhs=/0x0:0x0/226x150/data/photo/2023/01/17/63c641997ad49.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/19323141/fakta-aksi-perploncoan-siswa-sman-6-oleh-alumni-tradisi-untuk-mendapatkan"
    },
    {
      "judul": "Dipanggil Jokowi ke Istana, Budiman Sudjatmiko Bahas Masa Jabatan Kepala Desa",
      "deskripsi": "Budiman Sudjatmiko bertemu Presiden Joko Widodo di Istana Kepresidenan, Jakarta, Selasa (17/1/2023).",
      "tanggal": "17/01/2023, 19:25 WIB",
      "artikel": "Nasional",
      "img": "https://asset.kompas.com/crops/8JyMOpDUjzPQK836W9Ek_vvXpH4=/0x0:0x0/226x150/data/photo/2023/01/17/63c67b709ed2f.jpg",
      "link": "https://nasional.kompas.com/read/2023/01/17/19252191/dipanggil-jokowi-ke-istana-budiman-sudjatmiko-bahas-masa-jabatan-kepala-desa"
    },
    {
      "judul": "Mengaku Dilecehkan, Hasnaeni \"Wanita Emas\" Laporkan Ketua KPU ke Polda Metro Jaya",
      "deskripsi": "Dugaan tindak kekerasan seksual yang dialami kliennya terjadi di tiga lokasi berbeda pada periode Agustus 2022 sampai September 2022.",
      "tanggal": "17/01/2023, 19:25 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/clU4eb5uUtSJ_RvVDksM_JCmyr4=/39x16:580x377/226x150/data/photo/2016/06/20/1317383rps20160620-131620780x390.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/19251331/mengaku-dilecehkan-hasnaeni-wanita-emas-laporkan-ketua-kpu-ke-polda-metro"
    },
    {
      "judul": "Bandar Narkoba Alex Bonpis Ditangkap, Mobil dan Rumahnya di Kampung Bahari Disita Polisi",
      "deskripsi": "\"Barang bukti yang disita, satu unit rumah, kemudian juga ada beberapa aset yang kami temukan seperti mobil dan yang lain-lain,\" kata Doni.",
      "tanggal": "17/01/2023, 19:22 WIB",
      "artikel": "Megapolitan",
      "img": "https://asset.kompas.com/crops/RuFlsjgl-44PR7Rt53aalemvfHQ=/0x0:0x0/226x150/data/photo/2023/01/17/63c69064b94e0.jpg",
      "link": "https://megapolitan.kompas.com/read/2023/01/17/19223841/bandar-narkoba-alex-bonpis-ditangkap-mobil-dan-rumahnya-di-kampung-bahari"
    }
  ]
}
```
</details>
<details><summary><b># Rumah Keadilan</b></summary><br>

```js
news.rumah_keadilan()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": [
    {
      "judul": "Contoh Pelanggaran HAM Ringan dan Berat di Indonesia",
      "penulis": " Adies Wijaya",
      "deskripsi": "Setiap manusia memiliki hak asasi manusia yang harus dihormati oleh semua lapisan masyarakat, tanpa membedakan ras, suku, suku, dan agama. … ",
      "tautan": "https://rumahkeadilan.co.id/contoh-pelanggaran-ham/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2022/10/Contoh-Pelanggaran-HAM-300x164.png"
    },
    {
      "judul": "3 Teori Kepastian Hukum Menurut Para Ahlinya",
      "penulis": " Adies Wijaya",
      "deskripsi": "Ketika membangun negara hukum, prinsip dasar dibangun untuk menciptakan kejelasan tentang negara hukum, prinsip ini adalah teori kepastian hukum. Gagasan … ",
      "tautan": "https://rumahkeadilan.co.id/teori-kepastian-hukum/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2022/10/teori-kepastian-hukum-300x164.png"
    },
    {
      "judul": "Fungsi Hukum Administrasi Negara Sebagai Norma Kehidupan",
      "penulis": " Adies Wijaya",
      "deskripsi": "Ada banyak hal dari fungsi hukum administrasi negara dalam kehidupan sehari- hari untuk mewujudkan pemerintahan negara yang baik dan benar. … ",
      "tautan": "https://rumahkeadilan.co.id/fungsi-hukum-administrasi-negara/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2022/10/fungsi-hukum-administrasi-negara-300x164.png"
    },
    {
      "judul": "Jenis Hukum Pidana Beserta Contoh dan Fungsinya",
      "penulis": " Adies Wijaya",
      "deskripsi": "Dalam buku Pengantar Ilmu Hukum jenis hukum pidana dibagi menjadi dua hal yaitu yang pertama hukum pidana formil dan hukum pidana … ",
      "tautan": "https://rumahkeadilan.co.id/jenis-hukum-pidana/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2022/10/jenis-hukum-pidana-300x164.png"
    },
    {
      "judul": "Xnxubd Video Bokeh Full Bokeh Lights Video Bokeh Google Earth 2021 New Link Japan Blue.com",
      "penulis": " Arif Prasetya",
      "deskripsi": "Rumahkeadilan.co.id – Menyaksikan video bokeh memang menjadi salah satu kegiatan yang memiliki banyak manfaatnya, mulai dari kepuasan hingga ketenangan diri. … ",
      "tautan": "https://rumahkeadilan.co.id/xnxubd-video-bokeh-full-bokeh-lights-video-bokeh-google-earth-2021-new-link-japan-blue-com/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2023/01/Xnxubd-Video-Bokeh-Full-Bokeh-Lights-Video-Bokeh-Google-Earth-2021-New-Link-Japan-Blue.com_-300x164.png"
    },
    {
      "judul": "Proxy Site APP VPN Unblock Video Bokeh Museum No Sensor",
      "penulis": " Adies Wijaya",
      "deskripsi": "Rumahkeadilan.co.id – Google maupun chrome, pastinya bisa kamu gunakan untuk menelusuri sebuah hal atau situs yang sekiranya ada di internet. … ",
      "tautan": "https://rumahkeadilan.co.id/proxy-site/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2022/09/Proxy-Site-300x164.png"
    },
    {
      "judul": "26 185.62 L53 200 Video Bokeh Meseeum Indonesia Viral",
      "penulis": " Bilca Rohana",
      "deskripsi": "Rumahkeadilan.co.id – Situs 26 185.62 L53 200 Video Bokeh Meseeum Indonesia merupakan situs bokeh indonesia ter update, kamu langsung bisa … ",
      "tautan": "https://rumahkeadilan.co.id/26-185-62-l53-200-video-bokeh-meseeum-indonesia/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2023/01/ZA1waLVT9j8hd-300x164.jpg"
    },
    {
      "judul": "45.76. 33 x 44 Full Bokeh Museum Video Indonesia Apk Viral",
      "penulis": " Putra Adit",
      "deskripsi": "Rumahkeadilan.co.id – 45.76. 33 x 44 Full Bokeh Museum Video Indonesia Apk sekarang ini sedang viral-viralnya gaess. Karena sebagian orang … ",
      "tautan": "https://rumahkeadilan.co.id/45-76-33-x-44-full-bokeh-museum-video-indonesia-apk/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2023/01/Full-Bokeh-Museum-Video-Indonesia-Apk-300x169.jpg"
    },
    {
      "judul": "Xnxubd 2023 Frame Rate Video Bokeh Japanese & China Full",
      "penulis": " Putra Adit",
      "deskripsi": "Rumahkeadilan.co.id – Xnxubd 2023 Frame Rate adalah video hiburan yang berisikan video hubungan intim. Dalam sebuah pencarian silahkan kalian ketik … ",
      "tautan": "https://rumahkeadilan.co.id/xnxubd-2023-frame-rate/",
      "thumbnail": "https://rumahkeadilan.co.id/wp-content/uploads/2023/01/Xnxubd-2023-Frame-Rate-300x169.jpg"
    }
  ]
}
```
</details>

<br>
</details>

<!-- < INI ADALAH AWAL > -->
<details><summary><i>TextPro</i></summary><br>

import textpro code using:
```js
const textpro = cs.textpro
```

> #### Required parameters
> - (url) *type **String***
> - (text) *type **Array***
> - if requires 2 texts: ['text', 'text']

```js
textpro('https://textpro.me/create-realistic-3d-text-effect-frozen-winter-1099.html', ["text"])
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "image": "https://textpro.me/images/user_image/2023/01/63c6a88678235.jpg",
    "image_code": "63c6a88678235.jpg"
  }
}
```

<br>
</details>

<!-- < INI ADALAH AWAL > -->
<details><summary><i>Stalk</i></summary><br>

import stalk code using:
```js
const stalk = cs.stalk
```

<details><summary><b># Github</b></summary><br>

> #### Required parameters
> - (username) *type **String***

```js
stalk.github_stalk('satyawikananda')
.then(res => {
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output

<details><summary><i>Very Much Result</i></summary>

```json
Males Nampilin nya
```
</details>
<br>
</details>
<details><summary><b># Instagram</b></summary><br>

> #### Required parameters
> - (username) *type **String***
```js
stalk.ig_stalk('btr_ryzen')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "id": 6012400380,
    "username": "btr_ryzen",
    "avatar": "https://storiesig.me/api/proxy/https://instagram.flwo4-2.fna.fbcdn.net/v/t51.2885-19/299937346_5636604416383858_2649559773128593217_n.jpg?stp=dst-jpg_s150x150&_nc_ht=instagram.flwo4-2.fna.fbcdn.net&_nc_cat=1&_nc_ohc=Bm-vpi3aP2oAX_gelqD&edm=AEF8tYYBAAAA&ccb=7-5&oh=00_AfBkNNNTEcIafvk5ElpYxZYy9L3vJ50yZZwTXHHs-glPsQ&oe=63CBB710&_nc_sid=a9513d",
    "isPrivate": "not private",
    "name": "Muhammad Albi",
    "bio": "Professional player @bigetronesports\nOwner : @ryzenstore.official @ryzenrekber.official @superryzenuniverse \n📩 Business: talitha@starion.id",
    "publication": 29,
    "subscriber": 1738213,
    "subscription": 772,
    "story": [
      {
        "url": "https://storiesig.me/api/proxy/https://instagram.fiev22-2.fna.fbcdn.net/o1/v/t16/f1/m78/4C43F44512026DA3591E5CD9A6DAD0A8_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5zdG9yeS5iYXNlbGluZSJ9&_nc_ht=instagram.fiev22-2.fna.fbcdn.net&_nc_cat=102&vs=553722289989247_424212529&_nc_vs=HBkcFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyLzRDNDNGNDQ1MTIwMjZEQTM1OTFFNUNEOUE2REFEMEE4X3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBACgAGAAbAYgHdXNlX29pbAExFQAAJsTz%2FOacieFAFQIoAkMzLBdAFAAAAAAAABgSZGFzaF9iYXNlbGluZV8xX3YxEQB16AcA&_nc_rid=fcbca721ba&ccb=9-4&oh=00_AfB9S6U-FNwt_-gWMOzyHmJtUFTpGCGBqe-IynABFxXDJw&oe=63C86EE2&_nc_sid=643ae9",
        "type": "video"
      },
      {
        "url": "https://storiesig.me/api/proxy/https://instagram.fiev22-1.fna.fbcdn.net/o1/v/t16/f1/m78/AC4B9F364C92D6824B914D2370359E80_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5zdG9yeS5iYXNlbGluZSJ9&_nc_ht=instagram.fiev22-1.fna.fbcdn.net&_nc_cat=106&vs=3448556355426400_3573733202&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0FDNEI5RjM2NEM5MkQ2ODI0QjkxNEQyMzcwMzU5RTgwX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBABUAGCRHQmlyc3dMMVdVRk9FTDRBQU80TE9vZk5BUWxmYnBSMUFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACaYxP6arLPxPxUCKAJDMywXQCG7ZFocrAgYEmRhc2hfYmFzZWxpbmVfMV92MREAdegHAA%3D%3D&_nc_rid=fcbca42a55&ccb=9-4&oh=00_AfAGsSVEjaKbadi5nn4l4htr_0Do4agdIorlYKMFX56lpQ&oe=63C87C61&_nc_sid=643ae9",
        "type": "video"
      },
      {
        "url": "https://storiesig.me/api/proxy/https://instagram.fiev22-1.fna.fbcdn.net/o1/v/t16/f1/m78/F346536A779836F12F52FA9273B9C29B_video_dashinit.mp4?efg=eyJ2ZW5jb2RlX3RhZyI6InZ0c192b2RfdXJsZ2VuLjcyMC5zdG9yeS5iYXNlbGluZSJ9&_nc_ht=instagram.fiev22-1.fna.fbcdn.net&_nc_cat=108&vs=879604423438065_3490513685&_nc_vs=HBksFQIYUWlnX3hwdl9wbGFjZW1lbnRfcGVybWFuZW50X3YyL0YzNDY1MzZBNzc5ODM2RjEyRjUyRkE5MjczQjlDMjlCX3ZpZGVvX2Rhc2hpbml0Lm1wNBUAAsgBABUAGCRHTG1PREJOVGVkbzQ1Y2tCQUgxRmMyN2RyN0lIYnBSMUFBQUYVAgLIAQAoABgAGwGIB3VzZV9vaWwBMRUAACbAlY7Qhcv0PxUCKAJDMywXQCEhysCDEm8YEmRhc2hfYmFzZWxpbmVfMV92MREAdegHAA%3D%3D&_nc_rid=fcbcaa462c&ccb=9-4&oh=00_AfCfkA2rfmQkqLc0zaiUbzdPfU4iLPZAu9ogld3uoUZ9jw&oe=63C848D4&_nc_sid=643ae9",
        "type": "video"
      }
    ]
  }
}
```
</details>
<br>
</details>

<!-- < INI ADALAH AWAL > -->
<details><summary><i>Random</i></summary><br>

import random code using:
```js
const random = cs.random
```

<details><summary><b># Dark Jokes</b></summary><br>

```js
random.dark_jokes()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "url": "https://1.bp.blogspot.com/-Ch0dUpx1jdI/X748Ogyik-I/AAAAAAAAAFg/0kB-rZGn3NwZ1KlGrA4grYT38ol-dvZOwCLcBGAsYHQ/s600/darkjokes_indonesia_122805701_795987694531524_3676313257991319285_n.jpg"
  }
}
```
</details>
<details><summary><b># Discord Nekopoi Video</b></summary><br>

```js
random.discord_nekopoi_video()
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "url": "https://media.discordapp.net/attachments/729933061067636776/1039185853416751205/Gaya_doggy_gunungnya_pun_ikutan_goyang2.mp4"
  }
}
```
</details>
<details><summary><b># Waifu</b></summary><br>

> #### Required parameters
> - **type:** 'nsfw' | 'sfw'
> #### Default params 'sfw'

```js
random.waifu('sfw')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "random": [
      "https://i.waifu.pics/~bMLxB_.jpg",
      "https://i.waifu.pics/rF-pZ8a.jpg",
      "https://i.waifu.pics/KBBuZ5R.jpg",
      "https://i.waifu.pics/zkJ5AHV.png",
      "https://i.waifu.pics/AoPMBb_.jpeg",
      "https://i.waifu.pics/II9WeHB.png",
      "https://i.waifu.pics/HaDv5Z-.jpg",
      "https://i.waifu.pics/cG2o0Hs.jpg",
      "https://i.waifu.pics/pgLtw5E.jpg",
      "https://i.waifu.pics/pojy7zt.jpg",
      "https://i.waifu.pics/k-akF2p.jpg",
      "https://i.waifu.pics/Fiw2pVa.jpg",
      "https://i.waifu.pics/czCeUqy.jpg",
      "https://i.waifu.pics/bodE1ZR.png",
      "https://i.waifu.pics/B-CZCbU.png",
      "https://i.waifu.pics/u~qTv5c.jpg",
      "https://i.waifu.pics/89mbLcq.jpg",
      "https://i.waifu.pics/WGTA1vN.png",
      "https://i.waifu.pics/sLd~4NU.jpg",
      "https://i.waifu.pics/vI9Hgee.jpg",
      "https://i.waifu.pics/anKsYF2.png",
      "https://i.waifu.pics/POqiwlb.jpg",
      "https://i.waifu.pics/ZV7J1WW.png",
      "https://i.waifu.pics/GLGHJqM.jpg",
      "https://i.waifu.pics/GTxetnS.jpg",
      "https://i.waifu.pics/vwRNvPe.jpg",
      "https://i.waifu.pics/ZPXy_XG.jpg",
      "https://i.waifu.pics/jnuawXf.png",
      "https://i.waifu.pics/8LzDmNq.jpg",
      "https://i.waifu.pics/rzLcgTU.jpg"
    ]
  }
}
```
</details>
<details><summary><b># Waifu NSFW</b></summary><br>

> #### Required parameters
> - **category:** 'waifu' | 'neko' | 'trap' | 'blowjob'
> #### Default params 'waifu'

```js
random.waifu_nsfw('waifu')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "url": "https://i.waifu.pics/XeVXO5U.jpg"
  }
}
```
</details>
<details><summary><b># Waifu SFW</b></summary><br>

> #### Required parameters
> - **category:** 'waifu' | 'neko' | 'shinobu' | 'megumin' | 'bully' | 'cuddle' | 'cry' | 'hug' | 'awoo' | 'kiss' | 'lick' | 'pat' | 'smug' | 'bonk' | 'yeet' | 'blush' | 'smile' | 'wave' | 'highfive' | 'handhold' | 'nom' | 'bite' | 'glomp' | 'slap' | 'kill' | 'kick' | 'happy' | 'wink' | 'poke' | 'dance' | 'cringe'
> #### Default params 'waifu'


```js
random.waifu_sfw('waifu')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```json
{
  "creator":"@ditzzsxz_",
  "info":"Try web api version : https://cumsoft.net",
  "status": true,
  "result": {
    "url": "https://i.waifu.pics/BA_QzLq.jpg"
  }
}
```
</details>
<br>
</details>
<details><summary><l>Image</l></summary><br>

import image code using:
```js
const image = cs.image
```
<details><summary><b># Jadi Anime</b></summary><br>

> #### Required parameters
> - image is path | link | base64 | buffer
```ts
const jadi_anime: (img: string, nowm?: 'NOWM', opts?: opts | undefined)
```

This is path
```js
jadi_anime(__dirname + '/xorizn.jpg')
```

This is link
```js
//if NOWM
// image.jadi_anime('link', 'NOWM')
image.jadi_anime('https://www.bing.com/th?id=OIP.KpoA87feCn_Vqj2mFc0bewHaE8&w=240&h=160&c=8&rs=1&qlt=90&o=6&pid=3.1&rm=2')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```js
{
  creator: '@Xorizn',
  info: 'Use this code well, dont recode it!!!!!!!',
  status: true,
  result: {
    code: 200,
    img: 'https://shadow-cv-activity4tlimit-1251316161.cos.ap-shanghai.myqcloud.com/folder7/activity/me_in_comics/share/85d798819ae4de1be3fac8de2d1c9237_2xdjz.jpg?sign=q-sign-algorithm%3Dsha1%26q-ak%3DAKIDmKchHz54FBtKUKDSO6atwjIzLRH0hOcZ%26q-sign-time%3D1673830651%3B1674176251%26q-key-time%3D1673830651%3B1674176251%26q-header-list%3Dhost%26q-url-param-list%3D%26q-signature%3D7d984a4a8069733d82d3790c0268e51bcf34dbc6',
    videoUrl: undefined,
    singleImg: undefined
  }
}
```
</details>
<details><summary><b># Pinterest</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
image.pinterest('naruto')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```js
{
  creator: '@Xorizn',
  info: 'Use this code well, dont recode it!!!!!!!',
  status: true,
  result: [
    'https://i.pinimg.com/736x/34/32/0a/34320a4ede536db1f42a80c323d05b23.jpg',
    'https://i.pinimg.com/736x/ea/59/8a/ea598a8f6b6a74016a5a776202ced042.jpg',
    'https://i.pinimg.com/736x/83/aa/85/83aa8535a3ea18b01d392fa73cbbd9c7.jpg',
    'https://i.pinimg.com/736x/b9/b2/fe/b9b2fe6da082beab4e877f77fe679057.jpg',
    'https://i.pinimg.com/736x/35/aa/8b/35aa8b1a331cf52af866dc0a06d68c6f.jpg',
    'https://i.pinimg.com/736x/0a/66/6c/0a666cb60952d415c16e247c96291789.jpg',
    'https://i.pinimg.com/736x/f3/aa/ba/f3aaba8b682ad2de4da8b04bbdf6df44.jpg',
    'https://i.pinimg.com/736x/7c/2e/81/7c2e8136a12b3a33b585187606a705b9.jpg',
    'https://i.pinimg.com/736x/c4/27/b9/c427b9a35897b4791c82e29dcc0b6484.jpg',
    'https://i.pinimg.com/736x/9f/07/3b/9f073b55092fd2d3f53cbfdbe1df9ea6.jpg',
    'https://i.pinimg.com/736x/ec/7b/bc/ec7bbc3ece268d3ea80d964484b5bdae.jpg',
    'https://i.pinimg.com/736x/1c/2e/54/1c2e549a96ca738a396382b2c4a50215.jpg',
    'https://i.pinimg.com/736x/1f/23/3c/1f233cab210553510a44d266b8a64daf.jpg',
    'https://i.pinimg.com/736x/c6/ef/8b/c6ef8bd88a9efa91a06de32304e0fc87.jpg',
    'https://i.pinimg.com/736x/50/a5/5c/50a55c0a1d1c10480aa70c133b0302bc.jpg',
    'https://i.pinimg.com/736x/80/51/30/805130e01dff90ef8c87ef44010a8932.jpg',
    'https://i.pinimg.com/736x/49/ca/18/49ca18cae8391087e48198cab95abb2c.jpg',
    'https://i.pinimg.com/736x/4e/58/e1/4e58e1871fd2d436f6169be762b612ba.jpg',
    'https://i.pinimg.com/736x/1c/c0/cd/1cc0cd4b852f8c8b60a8d8d49e48f7da.jpg',
    'https://i.pinimg.com/736x/cf/f5/83/cff58358e312c05d801e4b91012f867a.jpg',
    'https://i.pinimg.com/736x/eb/fc/69/ebfc69e4c8e1b418e063a52e3103f15b.jpg',
    'https://i.pinimg.com/736x/bc/21/ab/bc21ab513f2b0d88503698095f1c9434.jpg',
    'https://i.pinimg.com/736x/e6/22/28/e6222886fdc2dc2b847284232e03ba74.jpg',
    'https://i.pinimg.com/736x/bc/7a/de/bc7adee823853259c5ddb61b755dbe9e.jpg'
  ]
}
```
</details>
<details><summary><b># Pinterest Video Search</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
image.pinterest_video_search('video')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```js
//This is error, and aill upgrade
```
</details>
<details><summary><b># Pinterest Video Download</b></summary><br>

> #### Required parameters
> - (link) *type **String***

```js
image.pinterest_video('https://id.pinterest.com/pin/68961438044638254/')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```js
{
  creator: '@Xorizn',
  info: 'Use this code well, dont recode it!!!!!!!',
  status: true,
  result: 'https://v.pinimg.com/videos/mc/720p/42/f8/1b/42f81b4a248452ebc75f619b21514b45.mp4'
}
```
</details>
<details><summary><b># Wallpaper Anime Desktop</b></summary><br>

> #### Required parameters
> - (search) *type **String***

```js
image.wallpaper_anime_desktop('naruto')
.then(res => {
  if (res.mess) return console.log(res.mess)
  console.log(res)
})
.catch(error => {
  //error message
})
```

#### output
```js
//This is error, and aill upgrade
```
</details>

</details>
