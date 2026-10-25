# 내 위스키 리스트

나만의 위스키를 탐색하고 보관함과 시음 기록을 관리하는 모바일 우선 앱입니다.

## 구현 계획

1. 한국에서 익숙한 위스키와 국내 코스트코·인기 싱글몰트·블렌디드·버번 라인업(티처스·커클랜드 시그니처·벤로막·탐두·부나하벤·모틀락·조니워커 블랙 루비·조니워커 블론드·에반 윌리엄스 등)을 포함한 114종의 국문·영문 이름, 한줄 설명, 글로벌 공식 평점(100점 만점), 가격·종류·테이스팅 노트를 기본 데이터로 준비합니다.
2. 내 보관함에서 **가지고 있는 위스키(보유)** 와 **관심 위스키(위시리스트)** 를 구별해 저장·필터링하며, 탐색·위스키 이야기 탭, 종류 필터, 한글·영문 이름·증류소 검색 및 정렬을 구현합니다.
3. 위스키 이야기 탭에서 위스키 종류(싱글몰트·블렌디드·버번·라이), 올바른 보관법, 즐기는 방법(니트·트와이스업·온더락·하이볼·테이스팅 3단계), 관련 상식(천사의 몫·오크통·피트·라벨 용어)을 제공합니다.
4. 상세 화면에서 테이스팅 노트와 보관함 구분(보유/관심), 영문 이름, **0.5점 단위 별점(반별 클릭 및 `±0.5` 버튼)**, 구매가·개봉일·메모를 편집합니다.
5. 보관함과 사용자 기록(영문 이름 포함)을 브라우저 `localStorage`에 저장해 새로고침 후에도 유지하며, **공유 링크(`?sync=...`), 백업 코드(`STILLNOTE1:...`), JSON 백업 파일(`.json`)** 내보내기/가져오기를 통해 회원가입 없이 다른 스마트폰·PC·태블릿과 보관함을 동기화합니다.
6. 위스키를 직접 추가하고, 상세 화면에서 사진을 선택하거나 교체할 수 있게 합니다. 업로드 사진은 리사이즈해 이 기기의 `localStorage`에 저장합니다.
7. 위스키 추가 폼에서 기본 목록, Wikipedia, Wikimedia Commons를 검색해 이름·영문 이름·브랜드·종류·지역과 확인 가능한 도수·병 사진을 자동 입력합니다.
8. 상세 화면에서 인터넷 검색을 열며, Android에서는 네이버 앱 인앱 브라우저(`inappbrowser`) 또는 선택한 브라우저로 검색 결과를 연결합니다.

## 실행

`index.html`을 브라우저에서 열면 바로 사용할 수 있습니다. 별도의 설치나 개발 서버는 필요하지 않습니다.

온라인 검색은 인터넷 연결이 필요합니다. 가격과 테이스팅 노트는 공개 문서마다 기준이 달라 자동 확정하지 않으므로, 검색 출처를 확인한 뒤 직접 입력해 주세요.

브라우저의 로컬 저장 데이터를 초기화하려면 개발자 도구 콘솔에서 다음을 실행하세요.

```js
localStorage.removeItem("stillnote-whisky-collection-v1");
location.reload();
```

## 파일 구성

- `index.html`: 앱 화면 구조
- `styles.css`: 모바일 우선 반응형 스타일
- `app.js`: 샘플 데이터, 검색·보관함·시음 기록·위스키 이야기 가이드 및 로컬 저장

## 사진 출처

브랜드 병 사진은 Wikimedia Commons에서 제공하며, 사진을 선택하면 원본 페이지가 열립니다. 화면에 맞게 사진을 잘라 표시할 수 있습니다. Rittenhouse Rye와 Russell's Reserve 등 일부 품목은 확인 가능한 브랜드 병 사진이 없어 실제 위스키 사진을 대신 사용하며, 화면에 출처를 표시합니다.

- Macallan: [Ssu, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Macallan_whisky,_12-15-18_years.jpg)
- Glenfiddich: [Pbrundel, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:GlenfiddichSpecialReserve12Years.jpg)
- Laphroaig: [Thomon, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Laphroaig_10.jpg)
- Balvenie: [Pbrundel, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Balvenie_Whisky_Doublewood_12_years_old.jpg)
- Hibiki: [Wiki Taro, CC0](https://commons.wikimedia.org/wiki/File:Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg)
- Jim Beam: [Methem, Public domain](https://commons.wikimedia.org/wiki/File:Bottle_of_Jim_Beam_Black_in_Oulu_Jan2009.jpg)
- Wild Turkey: [Craiglduncan, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Wild_Turkey_101.JPG)
- Maker's Mark: [Brian Adler, Public domain](https://commons.wikimedia.org/wiki/File:Bottle_of_Maker%27s_Mark_Whisky.JPG)
- Woodford Reserve: [Guerlin, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Woodford_Reserve_2016.png)
- Johnnie Walker Black Label: [Iceman7840, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Johnnie_Walker_Black_Label.jpg)
- Johnnie Walker Red Label: [kallerna, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Johnnie_Walker_Red_Label.jpg)
- Johnnie Walker Double Black: [Iceman7840, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:JW_Double_Black.jpg)
- Johnnie Walker Green Label: [Iceman7840, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:JW_Greens.jpg)
- Johnnie Walker Gold Label Reserve: [Wikimedia Commons, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Johnnie_Walker_Gold_Label_Reserve.jpg)
- Johnnie Walker Blue Label: [Iceman7840, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:JW_Blue_Label.jpg)
- Chivas Regal: [Oleg Yunakov, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Chivas_Regal_The_Icon_Blended_Scotch_Whisky_(700mL).jpg)
- Bulleit: [Ethan Prater, CC BY 2.0](https://commons.wikimedia.org/wiki/File:Bulleit_Bourbon_Frontier_Whiskey.jpg)
