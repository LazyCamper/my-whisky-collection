# 내 위스키 리스트

나만의 위스키를 탐색하고 보관함과 시음 기록을 관리하는 모바일 우선 앱입니다.

## 구현 계획

1. 한국에서 익숙한 위스키 62종과 가격·종류·테이스팅 노트를 기본 데이터로 준비합니다.
2. 보관함과 탐색 탭, 종류 필터, 이름·증류소 검색 및 정렬을 구현합니다.
3. 상세 화면에서 테이스팅 노트와 평점·구매가·개봉일·메모를 편집합니다.
4. 보관함과 사용자 기록을 브라우저 `localStorage`에 저장해 새로고침 후에도 유지합니다.
5. 위스키를 직접 추가하고, 상세 화면에서 사진을 선택하거나 교체할 수 있게 합니다. 업로드 사진은 리사이즈해 이 기기의 `localStorage`에 저장합니다.
6. 위스키 추가 폼에서 기본 목록, Wikipedia, Wikimedia Commons를 검색해 이름·브랜드·종류·지역과 확인 가능한 도수·병 사진을 자동 입력합니다.
7. 상세 화면에서 네이버 검색을 열며, Android에서는 네이버 앱으로 연결하고 앱을 사용할 수 없으면 웹 검색으로 이동합니다.

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
- `app.js`: 샘플 데이터, 검색·보관함·시음 기록 및 로컬 저장

## 사진 출처

브랜드 병 사진은 Wikimedia Commons에서 제공하며, 사진을 선택하면 원본 페이지가 열립니다. 화면에 맞게 사진을 잘라 표시할 수 있습니다. Rittenhouse Rye와 Russell's Reserve는 확인 가능한 브랜드 병 사진이 없어 실제 위스키 사진을 대신 사용하며, 화면에 출처를 표시합니다.

- Macallan: [Ssu, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Macallan_whisky,_12-15-18_years.jpg)
- Glenfiddich: [Pbrundel, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:GlenfiddichSpecialReserve12Years.jpg)
- Laphroaig: [Thomon, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Laphroaig_10.jpg)
- Balvenie: [Pbrundel, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Balvenie_Whisky_Doublewood_12_years_old.jpg)
- Hibiki: [Wiki Taro, CC0](https://commons.wikimedia.org/wiki/File:Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg)
- Jim Beam: [Methem, Public domain](https://commons.wikimedia.org/wiki/File:Bottle_of_Jim_Beam_Black_in_Oulu_Jan2009.jpg)
- Wild Turkey: [Craiglduncan, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Wild_Turkey_101.JPG)
- Maker's Mark: [Brian Adler, Public domain](https://commons.wikimedia.org/wiki/File:Bottle_of_Maker%27s_Mark_Whisky.JPG)
- Woodford Reserve: [Guerlin, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Woodford_Reserve_2016.png)
- Johnnie Walker: [Iceman7840, CC BY-SA 3.0](https://commons.wikimedia.org/wiki/File:Johnnie_Walker_Black_Label.jpg)
- Chivas Regal: [Oleg Yunakov, CC BY-SA 4.0](https://commons.wikimedia.org/wiki/File:Chivas_Regal_The_Icon_Blended_Scotch_Whisky_(700mL).jpg)
- Bulleit: [Ethan Prater, CC BY 2.0](https://commons.wikimedia.org/wiki/File:Bulleit_Bourbon_Frontier_Whiskey.jpg)