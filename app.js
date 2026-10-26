const seedWhiskies = [
  { id: "macallan-12-sherry", name: "맥캘란 12년 셰리 오크", nameEn: "The Macallan 12 Year Old Sherry Oak", distillery: "The Macallan", type: "싱글몰트", region: "스페이사이드 · 스코틀랜드", abv: 40, averagePrice: "₩120,000 – 160,000", priceValue: 140000, tone: "tone-ruby", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/Macallan_whisky%2C_12-15-18_years.jpg/500px-Macallan_whisky%2C_12-15-18_years.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Macallan_whisky,_12-15-18_years.jpg", imageCredit: "Ssu · CC BY-SA 4.0", notes: { aroma: "말린 과일 · 바닐라", taste: "생강 · 시나몬 · 건포도", finish: "따뜻한 오크 · 달콤함" } },
  { id: "glenfiddich-12", name: "글렌피딕 12년 스페셜 리저브", nameEn: "Glenfiddich 12 Year Old Special Reserve", distillery: "Glenfiddich", type: "싱글몰트", region: "스페이사이드 · 스코틀랜드", abv: 40, averagePrice: "₩75,000 – 95,000", priceValue: 85000, tone: "tone-green", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fe/GlenfiddichSpecialReserve12Years.jpg/250px-GlenfiddichSpecialReserve12Years.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:GlenfiddichSpecialReserve12Years.jpg", imageCredit: "Pbrundel · CC BY-SA 3.0", notes: { aroma: "꿀 · 바닐라 · 셰리", taste: "과일 케이크 · 토피", finish: "부드러운 향신료" } },
  { id: "laphroaig-10", name: "라프로익 10년", nameEn: "Laphroaig 10 Year Old", distillery: "Laphroaig", type: "싱글몰트", region: "아일라 · 스코틀랜드", abv: 40, averagePrice: "₩75,000 – 95,000", priceValue: 85000, tone: "tone-blue", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/Laphroaig_10.jpg/250px-Laphroaig_10.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Laphroaig_10.jpg", imageCredit: "Thomon · CC BY-SA 4.0", notes: { aroma: "피트 연기 · 해초", taste: "바다 소금 · 바닐라", finish: "긴 스모키 · 약초" } },
  { id: "balvenie-12", name: "발베니 12년 더블우드", nameEn: "The Balvenie 12 Year Old DoubleWood", distillery: "The Balvenie", type: "싱글몰트", region: "스페이사이드 · 스코틀랜드", abv: 40, averagePrice: "₩95,000 – 125,000", priceValue: 110000, tone: "tone-clear", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Balvenie_Whisky_Doublewood_12_years_old.jpg/330px-Balvenie_Whisky_Doublewood_12_years_old.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Balvenie_Whisky_Doublewood_12_years_old.jpg", imageCredit: "Pbrundel · CC BY-SA 3.0", notes: { aroma: "달콤한 과일 · 셰리", taste: "견과류 · 계피 · 꿀", finish: "부드럽고 오래가는 여운" } },
  { id: "hibiki-harmony", name: "히비키 재패니즈 하모니", nameEn: "Hibiki Japanese Harmony", distillery: "Suntory", type: "블렌디드", region: "일본", abv: 43, averagePrice: "₩150,000 – 190,000", priceValue: 170000, tone: "tone-ruby", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg/500px-Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Hibiki_the_premium_blended_whisky_from_Japanese_distiller_Suntory.jpg", imageCredit: "Wiki Taro · CC0", notes: { aroma: "장미 · 리치 · 로즈마리", taste: "오렌지 껍질 · 화이트초콜릿", finish: "미즈나라 오크 · 은은한 향신료" } },
  { id: "jim-beam-black", name: "짐빔 블랙 7년", nameEn: "Jim Beam Black 7 Year Old", distillery: "Jim Beam", type: "버번", region: "켄터키 · 미국", abv: 45, averagePrice: "₩45,000 – 60,000", priceValue: 52000, tone: "tone-clear", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Bottle_of_Jim_Beam_Black_in_Oulu_Jan2009.jpg/500px-Bottle_of_Jim_Beam_Black_in_Oulu_Jan2009.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Bottle_of_Jim_Beam_Black_in_Oulu_Jan2009.jpg", imageCredit: "Methem · Public domain", notes: { aroma: "캐러멜 · 바닐라 · 오크", taste: "구운 견과류 · 토피", finish: "긴 오크 · 따뜻한 향신료" } },
  { id: "wild-turkey-101", name: "와일드 터키 101", nameEn: "Wild Turkey 101", distillery: "Wild Turkey", type: "버번", region: "켄터키 · 미국", abv: 50.5, averagePrice: "₩50,000 – 70,000", priceValue: 60000, tone: "tone-ruby", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Wild_Turkey_101.JPG/500px-Wild_Turkey_101.JPG", imagePage: "https://commons.wikimedia.org/wiki/File:Wild_Turkey_101.JPG", imageCredit: "Craiglduncan · CC BY-SA 3.0", notes: { aroma: "바닐라 · 오렌지 · 담배", taste: "캐러멜 · 시나몬 · 토피", finish: "대담한 오크 · 후추" } },
  { id: "makers-mark", name: "메이커스 마크", nameEn: "Maker's Mark", distillery: "Maker's Mark", type: "버번", region: "켄터키 · 미국", abv: 45, averagePrice: "₩45,000 – 65,000", priceValue: 55000, tone: "tone-green", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Bottle_of_Maker%27s_Mark_Whisky.JPG/500px-Bottle_of_Maker%27s_Mark_Whisky.JPG", imagePage: "https://commons.wikimedia.org/wiki/File:Bottle_of_Maker%27s_Mark_Whisky.JPG", imageCredit: "Brian Adler · Public domain", notes: { aroma: "달콤한 밀 · 바닐라", taste: "캐러멜 · 과일 · 스파이스", finish: "부드러운 오크" } },
  { id: "woodford-reserve", name: "우드포드 리저브", nameEn: "Woodford Reserve", distillery: "Woodford Reserve", type: "버번", region: "켄터키 · 미국", abv: 43.2, averagePrice: "₩55,000 – 75,000", priceValue: 65000, tone: "tone-blue", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Woodford_Reserve_2016.png/250px-Woodford_Reserve_2016.png", imagePage: "https://commons.wikimedia.org/wiki/File:Woodford_Reserve_2016.png", imageCredit: "Guerlin · CC BY-SA 4.0", notes: { aroma: "말린 과일 · 민트 · 오렌지", taste: "코코아 · 시나몬 · 토피", finish: "부드러운 초콜릿" } },
  { id: "johnnie-walker-black", name: "조니워커 블랙 라벨 12년", nameEn: "Johnnie Walker Black Label 12 Year Old", distillery: "Johnnie Walker", type: "블렌디드", region: "스코틀랜드", abv: 40, averagePrice: "₩45,000 – 60,000", priceValue: 52000, tone: "tone-blue", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Johnnie_Walker_Black_Label.jpg/500px-Johnnie_Walker_Black_Label.jpg", fallbackImageUrl: "https://upload.wikimedia.org/wikipedia/commons/2/21/Johnnie_Walker_Black_Label.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Johnnie_Walker_Black_Label.jpg", imageCredit: "Iceman7840 · CC BY-SA 3.0", notes: { aroma: "바닐라 · 감귤 · 스모크", taste: "과일 · 캐러멜 · 향신료", finish: "은은한 피트 · 오크" } },
  { id: "chivas-18", name: "시바스 리갈 18년", nameEn: "Chivas Regal 18 Year Old", distillery: "Chivas Regal", type: "블렌디드", region: "스코틀랜드", abv: 40, averagePrice: "₩100,000 – 140,000", priceValue: 120000, tone: "tone-ruby", imageUrl: "assets/chivas-18.png", fallbackImageUrl: "assets/chivas-18.svg", imagePage: "https://www.chivas.com/", imageCredit: "Chivas Regal 18 · Bottle", notes: { aroma: "말린 과일 · 버터스카치", taste: "다크초콜릿 · 시트러스", finish: "긴 여운 · 은은한 스모크" } },
  { id: "bulleit-rye", name: "불릿 라이", nameEn: "Bulleit Rye", distillery: "Bulleit", type: "라이", region: "켄터키 · 미국", abv: 45, averagePrice: "₩50,000 – 70,000", priceValue: 60000, tone: "tone-clear", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bulleit_Bourbon_Frontier_Whiskey.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Bulleit_Bourbon_Frontier_Whiskey.jpg", imageCredit: "Ethan Prater · CC BY 2.0", notes: { aroma: "메이플 · 오크 · 스파이스", taste: "캐러멜 · 후추 · 체리", finish: "드라이한 호밀 · 오크" } },
];

const additionalWhiskies = [
  ["glenlivet-12", "더 글렌리벳 12년", "The Glenlivet", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩70,000 – 90,000", "배 · 사과 · 꽃향기", "바닐라 · 시트러스 · 몰트", "부드럽고 달콤한 여운", "tone-green"],
  ["glenlivet-15", "더 글렌리벳 15년 프렌치 오크", "The Glenlivet", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩100,000 – 130,000", "복숭아 · 버터 · 오크", "살구 · 견과류 · 향신료", "부드러운 오크와 과일", "tone-clear"],
  ["glenmorangie-original-10", "글렌모렌지 오리지널 10년", "Glenmorangie", "싱글몰트", "하이랜드 · 스코틀랜드", 40, "₩75,000 – 95,000", "시트러스 · 복숭아 · 바닐라", "크림 · 꿀 · 아몬드", "가볍고 산뜻한 여운", "tone-blue"],
  ["glenmorangie-original-12", "글렌모렌지 디 오리지널 12년", "Glenmorangie", "싱글몰트", "하이랜드 · 스코틀랜드", 40, "₩78,000 – 98,000", "오렌지 · 복숭아 · 바닐라 · 꿀", "12년 숙성으로 깊어진 크리미 퍼지 · 시트러스 · 아몬드", "실키하고 화사한 과일과 바닐라 여운", "tone-clear"],
  ["glenmorangie-quinta-ruban", "글렌모렌지 퀸타 루반 14년", "Glenmorangie", "싱글몰트", "하이랜드 · 스코틀랜드", 46, "₩120,000 – 155,000", "다크초콜릿 · 민트 · 오렌지", "자두 · 호두 · 코코아", "풍부한 초콜릿과 스파이스", "tone-ruby"],
  ["ardbeg-10", "아드벡 10년", "Ardbeg", "싱글몰트", "아일라 · 스코틀랜드", 46, "₩95,000 – 125,000", "강한 피트 · 레몬 · 바다", "스모크 · 후추 · 라임", "긴 스모키 피니시", "tone-blue"],
  ["ardbeg-uigeadail", "아드벡 우거다일", "Ardbeg", "싱글몰트", "아일라 · 스코틀랜드", 54.2, "₩150,000 – 195,000", "셰리 · 장작 연기 · 건포도", "대추야자 · 에스프레소 · 피트", "달콤하고 강렬한 스모크", "tone-ruby"],
  ["lagavulin-16", "라가불린 16년", "Lagavulin", "싱글몰트", "아일라 · 스코틀랜드", 43, "₩150,000 – 195,000", "피트 연기 · 바다 소금", "말린 과일 · 몰트 · 요오드", "묵직하고 긴 스모키 여운", "tone-blue"],
  ["talisker-10", "탈리스커 10년", "Talisker", "싱글몰트", "스카이섬 · 스코틀랜드", 45.8, "₩95,000 – 125,000", "바닷바람 · 후추 · 연기", "몰트 · 오렌지 · 소금", "후추처럼 알싸한 피니시", "tone-blue"],
  ["highland-park-12", "하이랜드 파크 12년 바이킹 아너", "Highland Park", "싱글몰트", "오크니 · 스코틀랜드", 40, "₩85,000 – 115,000", "헤더 꿀 · 은은한 피트", "과일 · 시나몬 · 몰트", "달콤하고 부드러운 스모크", "tone-green"],
  ["aberlour-12", "아벨라워 12년 더블 캐스크", "Aberlour", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩80,000 – 110,000", "셰리 · 사과 · 시나몬", "건포도 · 초콜릿 · 견과류", "따뜻한 향신료와 오크", "tone-ruby"],
  ["glenallachie-12", "글렌알라키 12년", "GlenAllachie", "싱글몰트", "스페이사이드 · 스코틀랜드", 46, "₩100,000 – 135,000", "꿀 · 모카 · 헤더", "건포도 · 시나몬 · 다크초콜릿", "셰리와 오크의 긴 여운", "tone-ruby"],
  ["macallan-double-cask-12", "맥캘란 12년 더블 캐스크", "The Macallan", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩100,000 – 135,000", "바닐라 · 버터스카치 · 사과", "시트러스 · 생강 · 오크", "달콤한 오크와 부드러운 향신료", "tone-clear"],
  ["macallan-sherry-oak-18", "맥캘란 18년 셰리 오크", "The Macallan", "싱글몰트", "스페이사이드 · 스코틀랜드", 43, "₩450,000 – 600,000", "말린 과일 · 생강 · 바닐라", "건포도 · 다크초콜릿 · 오크", "길고 풍부한 셰리 여운", "tone-ruby"],
  ["glenfiddich-15", "글렌피딕 15년 솔레라 리저브", "Glenfiddich", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩105,000 – 135,000", "헤더 꿀 · 바닐라 퍼지 · 셰리 과일", "실키한 오크 · 마지팬 · 시나몬 · 생강", "풍부하고 오래 지속되는 달콤함", "tone-ruby"],
  ["glenfiddich-18", "글렌피딕 18년 스몰 배치", "Glenfiddich", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩170,000 – 220,000", "사과 · 구운 오크 · 셰리", "말린 과일 · 베이킹 스파이스", "따뜻하고 균형 잡힌 오크", "tone-green"],
  ["balvenie-caribbean-cask-14", "발베니 14년 캐리비안 캐스크", "The Balvenie", "싱글몰트", "스페이사이드 · 스코틀랜드", 43, "₩140,000 – 185,000", "열대과일 · 토피 · 바닐라", "망고 · 꿀 · 부드러운 오크", "달콤한 럼 캐스크 여운", "tone-clear"],
  ["oban-14", "오반 14년", "Oban", "싱글몰트", "하이랜드 · 스코틀랜드", 43, "₩130,000 – 175,000", "오렌지 껍질 · 바다 · 연기", "무화과 · 꿀 · 몰트", "은은한 소금기와 스모크", "tone-blue"],
  ["caol-ila-12", "쿨일라 12년", "Caol Ila", "싱글몰트", "아일라 · 스코틀랜드", 43, "₩110,000 – 150,000", "레몬 · 바닷바람 · 피트", "사과 · 후추 · 스모크", "드라이하고 산뜻한 피트", "tone-blue"],
  ["springbank-10", "스프링뱅크 10년", "Springbank", "싱글몰트", "캠벨타운 · 스코틀랜드", 46, "₩140,000 – 190,000", "소금 · 과일 · 은은한 피트", "바닐라 · 맥아 · 향신료", "오일리하고 긴 여운", "tone-clear"],
  ["dalmore-12", "달모어 12년", "The Dalmore", "싱글몰트", "하이랜드 · 스코틀랜드", 40, "₩95,000 – 125,000", "오렌지 마멀레이드 · 초콜릿 · 스파이스", "올로로소 셰리 · 말린 과일 · 바닐라", "진한 다크초콜릿과 커피 여운", "tone-ruby"],
  ["bowmore-12", "보모어 12년", "Bowmore", "싱글몰트", "아일라 · 스코틀랜드", 40, "₩75,000 – 98,000", "레몬 · 헤더 꿀 · 은은한 피트 연기", "다크초콜릿 · 감귤 · 해풍", "부드럽고 섬세한 스모키 피니시", "tone-blue"],
  ["singleton-dufftown-12", "싱글톤 더프타운 12년", "The Singleton", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩62,000 – 82,000", "구운 사과 · 브라운슈가 · 견과류", "과일 · 크리미한 토피 · 바닐라", "매끄럽고 달콤한 오크 여운", "tone-green"],
  ["auchentoshan-three-wood", "오켄토션 쓰리우드", "Auchentoshan", "싱글몰트", "로우랜드 · 스코틀랜드", 43, "₩82,000 – 110,000", "블랙커런트 · 브라운슈가 · 자두", "헤이즐넛 · 다크초콜릿 · 시나몬 · 셰리", "부드러운 3회 증류와 진한 셰리 피니시", "tone-ruby"],
  ["tamnavulin-double-cask", "탐나불린 더블 캐스크", "Tamnavulin", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩35,000 – 48,000", "사과 · 토피 · 꿀 · 마지팬", "배 · 복숭아 · 파인애플 · 셰리 오크", "부드럽고 산뜻한 달콤함", "tone-clear"],
  ["tamnavulin-sherry-cask", "탐나불린 셰리 캐스크", "Tamnavulin", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩36,000 – 49,000", "바닐라 · 건포도 · 카라멜 · 오렌지", "3종 올로로소 셰리 캐스크 피니시 · 대추야자 · 시나몬", "부드럽고 달콤한 과일 케이크 여운", "tone-ruby"],
  ["benromach-10", "벤로막 10년", "Benromach", "싱글몰트", "스페이사이드 · 스코틀랜드", 43, "₩75,000 – 98,000", "구운 맥아 · 청사과 · 은은한 피트 연기", "셰리 과일 · 바닐라 · 생강 · 부드러운 스모크", "클래식 스페이사이드 특유의 훈연과 오크 여운", "tone-ruby"],
  ["tamdhu-12", "탐두 12년", "Tamdhu", "싱글몰트", "스페이사이드 · 스코틀랜드", 43, "₩95,000 – 125,000", "진한 올로로소 셰리 · 시나몬 · 건포도", "자두 · 건베리 · 바닐라 · 구운 오크", "100% 셰리 캐스크 숙성의 깊고 달콤한 여운", "tone-ruby"],
  ["bunnahabhain-12", "부나하벤 12년", "Bunnahabhain", "싱글몰트", "아일라 · 스코틀랜드", 46.3, "₩95,000 – 125,000", "말린 과일 · 꽃향기 · 바닷바람 · 견과류", "논피트 아일라 · 달콤한 셰리 · 바닐라 · 소금기", "묵직하고 크리미한 견과와 셰리 피니시", "tone-blue"],
  ["mortlach-16", "모틀락 16년", "Mortlach", "싱글몰트", "스페이사이드 · 스코틀랜드", 43.4, "₩165,000 – 215,000", "다크 베리 · 가죽 · 셰리 · 구운 향신료", "2.81회 증류 특유의 묵직한 바디 · 건과일 · 꿀 · 정향", "풍부하고 복합적인 감칠맛과 긴 오크 여운", "tone-ruby"],
  ["jura-12-sherry-cask", "주라 12년 셰리 캐스크 피니시", "Jura", "싱글몰트", "주라섬 · 스코틀랜드", 40, "₩65,000 – 85,000", "다크초콜릿 · 꿀 · 열대과일 · 구운 호두", "구운 바나나 · 브라운슈가 · 감귤 · 올로로소 셰리", "부드러운 달콤함과 섬세한 오크 스파이스", "tone-ruby"],
  ["glen-grant-arboralis", "글렌그란트 아보랄리스", "Glen Grant", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩32,000 – 45,000", "청사과 · 배 · 레몬 · 흰 꽃향기", "버터스카치 · 바닐라 · 산뜻한 몰트", "화사하고 깔끔한 과수원 과일 여운", "tone-green"],
  ["smoky-scot", "스모키 스캇", "Aceo (Caol Ila)", "싱글몰트", "아일라 · 스코틀랜드", 40, "₩38,000 – 52,000", "모닥불 연기 · 해풍 · 레몬 껍질 · 요오드", "쿨일라 원액 기반의 선명한 피트 · 후추 · 보리 맥아", "깔끔하고 강렬한 아일라 스모키 여운", "tone-blue"],
  ["glenfarclas-12", "글렌파클라스 12년", "Glenfarclas", "싱글몰트", "스페이사이드 · 스코틀랜드", 43, "₩85,000 – 115,000", "상큼한 셰리 · 사과 · 구운 오크", "건포도 · 시나몬 · 정향 · 몰트", "전통 셰리 캐스크의 길고 스파이시한 여운", "tone-ruby"],
  ["cardhu-12", "카두 12년", "Cardhu", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩65,000 – 85,000", "배 · 헤더 꿀 · 잘 익은 사과", "실키한 몰트 · 바닐라 · 부드러운 오크", "깔끔하고 달콤한 여운", "tone-clear"],
  ["kirkland-single-malt", "커클랜드 시그니처 싱글몰트 스카치", "Kirkland Signature", "싱글몰트", "하이랜드 · 스코틀랜드", 46, "₩75,000 – 110,000", "셰리 · 건포도 · 오렌지 껍질", "견과류 · 다크초콜릿 · 스파이스", "진하고 따뜻한 오크 피니시", "tone-ruby"],
  ["yamazaki-12", "야마자키 12년", "Suntory", "싱글몰트", "일본", 43, "₩250,000 – 350,000", "복숭아 · 파인애플 · 미즈나라", "꿀 · 코코넛 · 시나몬", "부드러운 과일과 오크", "tone-ruby"],
  ["hakushu-12", "하쿠슈 12년", "Suntory", "싱글몰트", "일본", 43, "₩220,000 – 310,000", "숲 · 민트 · 청사과", "시트러스 · 허브 · 은은한 스모크", "산뜻하고 깨끗한 피니시", "tone-green"],
  ["yoichi-single-malt", "요이치 싱글 몰트", "Nikka", "싱글몰트", "홋카이도 · 일본", 45, "₩130,000 – 180,000", "해풍 · 피트 · 구운 사과", "몰트 · 소금 · 오크", "묵직한 스모크와 후추", "tone-blue"],
  ["kavalan-classic", "카발란 클래식", "Kavalan", "싱글몰트", "대만", 40, "₩90,000 – 125,000", "열대과일 · 바닐라 · 코코넛", "망고 · 꿀 · 스파이스", "따뜻하고 달콤한 여운", "tone-clear"],
  ["kavalan-distillery-select-no1", "카발란 디스틸러리 셀렉트 No.1", "Kavalan", "싱글몰트", "대만", 40, "₩68,000 – 90,000", "열대과일 · 버터스카치 · 바닐라", "파파야 · 크리미한 토피 · 우디 오크", "부드럽고 달콤한 열대 피니시", "tone-clear"],
  ["kavalan-solist-oloroso", "카발란 솔리스트 올로로소 셰리 CS", "Kavalan", "싱글몰트", "대만", 57.1, "₩220,000 – 290,000", "말린 과일 · 견과류 · 진한 셰리", "다크초콜릿 · 에스프레소 · 아몬드", "강렬하고 농밀한 셰리 여운", "tone-ruby"],
  ["teachers-highland-cream", "티처스 하일랜드 크림", "Teacher's", "블렌디드", "스코틀랜드", 40, "₩16,000 – 24,000", "피트 스모크 · 구운 몰트 · 사과", "풍부한 몰트 · 꿀 · 고소한 곡물", "깔끔하고 은은한 스모키 여운", "tone-clear"],
  ["kirkland-blended-scotch", "커클랜드 시그니처 블렌디드 스카치 (1.75L)", "Kirkland Signature", "블렌디드", "스코틀랜드", 40, "₩32,000 – 40,000", "꿀 · 바닐라 · 청사과", "몰트 · 부드러운 캐러멜 · 오크", "가볍고 깔끔한 데일리 피니시", "tone-clear"],
  ["kirkland-12-scotch", "커클랜드 시그니처 12년 블렌디드 스카치", "Kirkland Signature", "블렌디드", "스코틀랜드", 40, "₩55,000 – 68,000", "말린 과일 · 꿀 · 은은한 연기", "토피 · 바닐라 · 구운 오크", "부드럽고 균형 잡힌 여운", "tone-ruby"],
  ["kirkland-canadian-whisky", "커클랜드 시그니처 캐나디안 위스키 6년", "Kirkland Signature", "블렌디드", "캐나다", 40, "₩32,000 – 42,000", "메이플 · 바닐라 · 부드러운 곡물", "버터스카치 · 은은한 호밀 스파이스", "가볍고 매끄러운 목넘김", "tone-clear"],
  ["famous-grouse", "페이머스 그라우스", "The Famous Grouse", "블렌디드", "스코틀랜드", 40, "₩22,000 – 34,000", "사과 · 시트러스 · 비스킷", "말린 과일 · 계피 · 부드러운 몰트", "깔끔하고 달콤한 피니시", "tone-ruby"],
  ["grants-triple-wood", "그란츠 트리플 우드", "Grant's", "블렌디드", "스코틀랜드", 40, "₩19,000 – 29,000", "잘 익은 배 · 바닐라 · 몰트", "브라운슈가 · 바나나 · 오크", "부드럽고 은은한 달콤함", "tone-clear"],
  ["bells-original", "벨즈 오리지널", "Bell's", "블렌디드", "스코틀랜드", 40, "₩16,000 – 25,000", "사과 · 생강 · 구운 곡물", "견과류 · 허브 · 은은한 스모크", "드라이하고 가벼운 스파이스", "tone-clear"],
  ["black-bottle", "블랙보틀", "Black Bottle", "블렌디드", "스코틀랜드", 40, "₩25,000 – 36,000", "은은한 피트 연기 · 꽃향기 · 나무", "꿀 · 과일 · 스모키 오크", "부드러운 스모크와 향신료", "tone-blue"],
  ["naked-malt", "네이키드 몰트", "Naked Malt", "블렌디드", "스코틀랜드", 40, "₩45,000 – 62,000", "버터스카치 · 구운 사과 · 건포도 · 셰리", "맥캘란·하이랜드파크·글렌로세스 원액 블렌딩 · 퍼스트필 올로로소 셰리", "진한 말린 과일과 초콜릿 여운", "tone-ruby"],
  ["john-barr-reserve", "존바 리저브 블랙", "John Barr", "블렌디드", "스코틀랜드", 40, "₩18,000 – 28,000", "구운 사과 · 시나몬 · 바닐라 · 꿀", "하이랜드·스페이사이드 몰트 블렌딩 · 초콜릿 · 살구", "부드러운 스파이스와 은은한 오크 여운", "tone-clear"],
  ["cutty-sark-prohibition", "커티삭 프로히비션", "Cutty Sark", "블렌디드", "스코틀랜드", 50, "₩36,000 – 48,000", "바닐라 · 토피 · 시트러스 · 흑후추", "50도 논칠필터링의 묵직한 타격감 · 캐러멜 · 정향 · 오크", "진하고 스파이시하며 길게 이어지는 여운", "tone-ruby"],
  ["black-and-white", "블랙 앤 화이트", "Black & White", "블렌디드", "스코틀랜드", 40, "₩16,000 – 25,000", "신선한 곡물 · 레몬 · 꿀 · 은은한 허브", "부드러운 몰트 · 비스킷 · 바닐라 · 가벼운 스모크", "하이볼과 데일리에 잘 어울리는 깔끔한 목넘김", "tone-clear"],
  ["monkey-shoulder", "몽키숄더 오리지널", "Monkey Shoulder", "블렌디드", "스코틀랜드", 40, "₩55,000 – 75,000", "오렌지 · 바닐라 · 몰트", "꿀 · 향신료 · 과일", "부드럽고 달콤한 몰트", "tone-ruby"],
  ["johnnie-walker-red", "조니워커 레드 라벨", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩30,000 – 45,000", "바닐라 · 사과 · 스모크", "캐러멜 · 후추 · 몰트", "가볍고 스파이시한 여운", "tone-ruby"],
  ["johnnie-walker-blonde", "조니워커 블론드", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩32,000 – 45,000", "달콤한 바닐라 · 토피 · 상큼한 베리 · 시트러스", "아메리칸 오크 숙성의 크리미한 캐러멜 · 사과 · 부드러운 몰트", "피트 연기 없이 가볍고 산뜻하게 떨어지는 하이볼 특화 여운", "tone-clear"],
  ["johnnie-walker-black-ruby", "조니워커 블랙 루비", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩52,000 – 68,000", "라즈베리 잼 · 블랙베리 · 무화과 · 은은한 연기", "PX·올로로소 셰리 및 레드와인 캐스크의 진한 다크체리 · 자두 · 꿀", "벨벳 같은 과일 단맛과 부드러운 스모키 여운", "tone-ruby"],
  ["johnnie-walker-double-black", "조니워커 더블 블랙", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩55,000 – 75,000", "짙은 피트 · 포도 · 오크", "훈연 · 후추 · 바닐라", "깊고 묵직한 스모크", "tone-blue"],
  ["johnnie-walker-green-15", "조니워커 그린 라벨 15년", "Johnnie Walker", "블렌디드", "스코틀랜드", 43, "₩90,000 – 125,000", "허브 · 과수원 과일 · 오크", "몰트 · 후추 · 연기", "균형 잡힌 허브와 스모크", "tone-green"],
  ["johnnie-walker-gold-reserve", "조니워커 골드 라벨 리저브", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩75,000 – 105,000", "헤더 꿀 · 꽃향기 · 바닐라", "크리미한 토피 · 잘 익은 과일", "부드러운 오크와 은은한 스모크", "tone-clear"],
  ["johnnie-walker-blue", "조니워커 블루 라벨", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩250,000 – 350,000", "말린 과일 · 꿀 · 연기", "헤이즐넛 · 다크초콜릿 · 오크", "길고 부드러운 스모크", "tone-blue"],
  ["ballantines-finest", "발렌타인 파이니스트", "Ballantine's", "블렌디드", "스코틀랜드", 40, "₩25,000 – 38,000", "꿀 · 사과 · 꽃향기", "바닐라 · 초콜릿 · 오크", "부드럽고 가벼운 여운", "tone-clear"],
  ["ballantines-12", "발렌타인 12년", "Ballantine's", "블렌디드", "스코틀랜드", 40, "₩42,000 – 58,000", "꿀 · 오크 · 바닐라", "크리미한 초콜릿 · 사과 · 견과류", "상쾌하고 부드러운 여운", "tone-blue"],
  ["ballantines-17", "발렌타인 17년", "Ballantine's", "블렌디드", "스코틀랜드", 40, "₩110,000 – 150,000", "사과 · 바닐라 · 오크", "꿀 · 향신료 · 은은한 스모크", "균형 잡힌 긴 여운", "tone-green"],
  ["ballantines-21", "발렌타인 21년", "Ballantine's", "블렌디드", "스코틀랜드", 40, "₩175,000 – 230,000", "헤더 꿀 · 사과 · 감초", "실키한 오크 · 말린 과일 · 스파이스", "깊고 우아한 긴 여운", "tone-ruby"],
  ["chivas-12", "시바스 리갈 12년", "Chivas Regal", "블렌디드", "스코틀랜드", 40, "₩45,000 – 65,000", "사과 · 꿀 · 허브", "바닐라 · 버터스카치 · 헤이즐넛", "크리미하고 부드러운 여운", "tone-green"],
  ["chivas-15-xv", "시바스 리갈 15년 XV", "Chivas Regal", "블렌디드", "스코틀랜드", 40, "₩65,000 – 88,000", "자두 · 건포도 · 시나몬", "오렌지 마멀레이드 · 버터스카치 · 코냑 캐스크", "바닐라와 과일의 달콤한 여운", "tone-clear"],
  ["chivas-mizunara", "시바스 리갈 미즈나라", "Chivas Regal", "블렌디드", "스코틀랜드 · 일본 오크", 40, "₩60,000 – 85,000", "배 · 꿀 · 꽃향기", "오렌지 · 헤이즐넛 · 시나몬", "은은한 미즈나라 오크", "tone-clear"],
  ["royal-salute-21", "로얄살루트 21년", "Royal Salute", "블렌디드", "스코틀랜드", 40, "₩180,000 – 240,000", "배 · 시트러스 · 꽃향기", "바닐라 · 오크 · 스파이스", "우아하고 긴 여운", "tone-ruby"],
  ["dewars-white-label", "듀어스 화이트 라벨", "Dewar's", "블렌디드", "스코틀랜드", 40, "₩24,000 – 35,000", "꿀 · 배 · 헤더 꽃향기", "바닐라 · 깔끔한 몰트 · 은은한 스모크", "산뜻하고 균형 잡힌 피니시", "tone-clear"],
  ["dewars-12", "듀어스 12년", "Dewar's", "블렌디드", "스코틀랜드", 40, "₩40,000 – 58,000", "꿀 · 사과 · 바닐라", "토피 · 시리얼 · 오크", "부드럽고 달콤한 피니시", "tone-clear"],
  ["jameson-irish", "제임슨 아이리시 위스키", "Jameson", "블렌디드", "아일랜드", 40, "₩35,000 – 50,000", "바닐라 · 과수원 과일", "견과류 · 향신료 · 셰리", "부드럽고 깔끔한 여운", "tone-green"],
  ["bushmills-black-bush", "부쉬밀 블랙 부쉬", "Bushmills", "블렌디드", "아일랜드", 40, "₩40,000 – 58,000", "셰리 · 말린 과일 · 견과류", "초콜릿 · 살구 · 향신료", "드라이하고 부드러운 여운", "tone-ruby"],
  ["redbreast-12", "레드브레스트 12년", "Redbreast", "블렌디드", "아일랜드", 40, "₩95,000 – 125,000", "과일 케이크 · 구운 오크 · 셰리", "크리미한 질감 · 베리 · 시나몬 · 생강", "싱글 팟 스틸 특유의 풍부하고 긴 여운", "tone-ruby"],
  ["crown-royal", "크라운 로얄", "Crown Royal", "블렌디드", "캐나다", 40, "₩35,000 – 48,000", "바닐라 · 메이플 · 과일", "부드러운 호밀 · 크리미한 오크 · 캐러멜", "가볍고 실키한 목넘김", "tone-ruby"],
  ["suntory-kakubin", "산토리 가쿠빈", "Suntory", "블렌디드", "일본", 40, "₩30,000 – 42,000", "레몬 · 꿀 · 은은한 곡물", "부드러운 몰트 · 바닐라 · 비스킷", "하이볼에 최적화된 깔끔한 여운", "tone-clear"],
  ["suntory-toki", "산토리 토키", "Suntory", "블렌디드", "일본", 43, "₩45,000 – 65,000", "바질 · 청사과 · 꿀", "자몽 · 페퍼민트 · 타임", "가볍고 산뜻한 여운", "tone-clear"],
  ["nikka-from-the-barrel", "닛카 프롬 더 배럴", "Nikka", "블렌디드", "일본", 51.4, "₩75,000 – 105,000", "오렌지 · 향신료 · 오크", "캐러멜 · 사과 · 후추", "진하고 따뜻한 피니시", "tone-ruby"],
  ["hibiki-17", "히비키 17년", "Suntory", "블렌디드", "일본", 43, "₩700,000 – 1,000,000", "매실 · 말린 과일 · 오크", "다크초콜릿 · 꿀 · 향신료", "섬세하고 긴 미즈나라 여운", "tone-ruby"],
  ["kirkland-small-batch-bourbon", "커클랜드 시그니처 스몰 배치 버번", "Kirkland Signature", "버번", "켄터키 · 미국", 46, "₩45,000 – 58,000", "바닐라 · 브라운슈가 · 구운 오크", "캐러멜 · 시나몬 · 옥수수 단맛", "따뜻한 스파이스와 긴 오크 여운", "tone-ruby"],
  ["jack-daniels-old-no7", "잭 다니엘스 올드 넘버 7", "Jack Daniel's", "버번", "테네시 · 미국", 40, "₩38,000 – 52,000", "바나나 · 바닐라 · 구운 오크", "캐러멜 · 메이플 차콜 멜로잉 · 아몬드", "부드럽고 달콤한 스모키 여운", "tone-clear"],
  ["jack-daniels-tennessee-apple", "잭 다니엘스 테네시 애플", "Jack Daniel's", "버번", "테네시 · 미국", 35, "₩38,000 – 52,000", "신선한 청사과 · 캐러멜 · 바닐라 · 구운 오크", "풋사과의 상큼한 과즙 · 올드 넘버 7 특유의 토피 · 은은한 향신료", "달콤하고 산뜻한 사과와 부드러운 오크 여운", "tone-green"],
  ["gentleman-jack", "젠틀맨 잭", "Jack Daniel's", "버번", "테네시 · 미국", 40, "₩52,000 – 72,000", "바닐라 · 시트러스 · 사과", "브라운슈가 · 시나몬 · 실키한 오크", "두 번 여과해 한층 깔끔한 피니시", "tone-blue"],
  ["jim-beam-white", "짐빔 화이트", "Jim Beam", "버번", "켄터키 · 미국", 40, "₩26,000 – 38,000", "바닐라 · 옥수수 단향 · 오크", "캐러멜 · 구운 곡물 · 가벼운 스파이스", "산뜻하고 경쾌한 여운", "tone-clear"],
  ["evan-williams-black", "에반 윌리엄스 블랙", "Evan Williams", "버번", "켄터키 · 미국", 43, "₩28,000 – 40,000", "바닐라 · 민트 · 브라운슈가", "캐러멜 · 사과 · 구운 오크", "부드럽고 달콤한 데일리 버번", "tone-clear"],
  ["evan-williams-bib", "에반 윌리엄스 바틀드 인 본드 (화이트)", "Evan Williams", "버번", "켄터키 · 미국", 50, "₩32,000 – 45,000", "캐러멜 · 바닐라 · 구운 오크 · 흑후추", "100프루프 바틀드 인 본드의 묵직한 타격감 · 흑설탕 · 아몬드 · 감귤", "길고 따뜻하게 이어지는 정통 버번 스파이스", "tone-clear"],
  ["evan-williams-12", "에반 윌리엄스 12년 (레드)", "Evan Williams", "버번", "켄터키 · 미국", 50.5, "₩65,000 – 95,000", "진한 오크 · 다크 캐러멜 · 바닐라 · 말린 오렌지", "12년 장기 숙성과 101프루프가 빚어낸 농밀한 토피 · 초콜릿 · 정향", "묵직한 오크 탄닌과 깊고 긴 달콤쌉싸름한 여운", "tone-ruby"],
  ["bulleit-bourbon", "불릿 버번", "Bulleit", "버번", "켄터키 · 미국", 45, "₩48,000 – 65,000", "구운 오크 · 바닐라 · 오렌지", "메이플 · 육두구 · 호밀 스파이스", "드라이하고 깔끔한 새틴 피니시", "tone-ruby"],
  ["1792-small-batch", "1792 스몰 배치", "1792 Bourbon", "버번", "켄터키 · 미국", 46.85, "₩55,000 – 75,000", "캐러멜 · 바닐라 · 호밀 스파이스", "버터스카치 · 정향 · 구운 오크", "진하고 균형 잡힌 스파이시 여운", "tone-ruby"],
  ["buffalo-trace", "버팔로 트레이스", "Buffalo Trace", "버번", "켄터키 · 미국", 40, "₩45,000 – 65,000", "바닐라 · 민트 · 캐러멜", "옥수수 · 브라운슈가 · 오크", "부드럽고 달콤한 여운", "tone-clear"],
  ["eagle-rare-10", "이글 레어 10년", "Eagle Rare", "버번", "켄터키 · 미국", 45, "₩85,000 – 125,000", "오렌지 껍질 · 꿀 · 오크", "체리 · 토피 · 아몬드", "드라이한 오크와 스파이스", "tone-ruby"],
  ["four-roses-single-barrel", "포 로지스 싱글 배럴", "Four Roses", "버번", "켄터키 · 미국", 50, "₩75,000 – 105,000", "바닐라 · 배 · 꽃향기", "체리 · 메이플 · 향신료", "긴 오크와 후추", "tone-ruby"],
  ["four-roses-yellow", "포 로지스 버번", "Four Roses", "버번", "켄터키 · 미국", 40, "₩38,000 – 55,000", "배 · 사과 · 바닐라", "꿀 · 오크 · 스파이스", "가볍고 산뜻한 여운", "tone-clear"],
  ["woodford-double-oaked", "우드포드 리저브 더블 오크드", "Woodford Reserve", "버번", "켄터키 · 미국", 43.2, "₩75,000 – 105,000", "다크초콜릿 · 바닐라 · 토피", "캐러멜 · 구운 오크 · 헤이즐넛", "달콤하고 진한 오크", "tone-ruby"],
  ["makers-mark-46", "메이커스 마크 46", "Maker's Mark", "버번", "켄터키 · 미국", 47, "₩65,000 – 90,000", "바닐라 · 프렌치 오크 · 캐러멜", "구운 참나무 · 시나몬 · 코코아", "따뜻하고 풍부한 오크", "tone-green"],
  ["knob-creek-9", "놉 크릭 9년", "Knob Creek", "버번", "켄터키 · 미국", 50, "₩65,000 – 90,000", "오크 · 메이플 · 곡물", "캐러멜 · 구운 견과류 · 후추", "강하고 드라이한 여운", "tone-clear"],
  ["elijah-craig-small-batch", "일라이저 크레이그 스몰 배치", "Elijah Craig", "버번", "켄터키 · 미국", 47, "₩55,000 – 78,000", "바닐라 · 민트 · 오크", "캐러멜 · 시나몬 · 구운 견과류", "긴 스파이스와 오크", "tone-ruby"],
  ["blantons-original", "블랑톤 오리지널 싱글 배럴", "Blanton's", "버번", "켄터키 · 미국", 46.5, "₩120,000 – 180,000", "감귤 · 바닐라 · 캐러멜", "꿀 · 체리 · 정향", "부드럽고 따뜻한 스파이스", "tone-clear"],
  ["russells-reserve-10", "러셀 리저브 10년", "Russell's Reserve", "버번", "켄터키 · 미국", 45, "₩65,000 – 90,000", "바닐라 · 오크 · 오렌지", "토피 · 체리 · 향신료", "드라이한 오크 피니시", "tone-ruby"],
  ["wild-turkey-rare-breed", "와일드 터키 레어 브리드", "Wild Turkey", "버번", "켄터키 · 미국", 58.4, "₩85,000 – 120,000", "오크 · 바닐라 · 오렌지", "캐러멜 · 담배 · 후추", "강렬하고 긴 스파이시 여운", "tone-ruby"],
  ["rittenhouse-rye", "리튼하우스 라이 바틀드 인 본드", "Rittenhouse", "라이", "켄터키 · 미국", 50, "₩55,000 – 80,000", "호밀 · 시나몬 · 감귤", "캐러멜 · 정향 · 코코아", "드라이하고 알싸한 여운", "tone-clear"],
  ["sazerac-rye", "사제락 라이", "Sazerac", "라이", "켄터키 · 미국", 45, "₩55,000 – 80,000", "민트 · 감귤 · 아니스", "호밀빵 · 바닐라 · 후추", "산뜻한 허브와 스파이스", "tone-blue"],
  ["royal-brackla-12", "로열 브라클라 12년", "Royal Brackla", "싱글몰트", "하이랜드 · 스코틀랜드", 46, "₩90,000 – 130,000", "파인애플 · 시트러스 · 꽃향기", "바닐라 · 배 · 시나몬", "따뜻한 오크 · 달콤한 향신료", "tone-clear"],
];

const englishNamesById = {
  "macallan-12-sherry": "The Macallan 12 Year Old Sherry Oak",
  "glenfiddich-12": "Glenfiddich 12 Year Old Special Reserve",
  "laphroaig-10": "Laphroaig 10 Year Old",
  "balvenie-12": "The Balvenie 12 Year Old DoubleWood",
  "hibiki-harmony": "Hibiki Japanese Harmony",
  "jim-beam-black": "Jim Beam Black 7 Year Old",
  "wild-turkey-101": "Wild Turkey 101",
  "makers-mark": "Maker's Mark",
  "woodford-reserve": "Woodford Reserve",
  "johnnie-walker-black": "Johnnie Walker Black Label 12 Year Old",
  "chivas-18": "Chivas Regal 18 Year Old",
  "bulleit-rye": "Bulleit Rye",
  "glenlivet-12": "The Glenlivet 12 Year Old",
  "glenlivet-15": "The Glenlivet 15 Year Old French Oak Reserve",
  "glenmorangie-original-10": "Glenmorangie The Original 10 Year Old",
  "glenmorangie-original-12": "Glenmorangie The Original 12 Year Old",
  "glenmorangie-quinta-ruban": "Glenmorangie Quinta Ruban 14 Year Old",
  "ardbeg-10": "Ardbeg 10 Year Old",
  "ardbeg-uigeadail": "Ardbeg Uigeadail",
  "lagavulin-16": "Lagavulin 16 Year Old",
  "talisker-10": "Talisker 10 Year Old",
  "highland-park-12": "Highland Park 12 Year Old Viking Honour",
  "aberlour-12": "Aberlour 12 Year Old Double Cask",
  "glenallachie-12": "The GlenAllachie 12 Year Old",
  "macallan-double-cask-12": "The Macallan 12 Year Old Double Cask",
  "macallan-sherry-oak-18": "The Macallan 18 Year Old Sherry Oak",
  "glenfiddich-15": "Glenfiddich 15 Year Old Solera Reserve",
  "glenfiddich-18": "Glenfiddich 18 Year Old Small Batch Reserve",
  "balvenie-caribbean-cask-14": "The Balvenie 14 Year Old Caribbean Cask",
  "oban-14": "Oban 14 Year Old",
  "caol-ila-12": "Caol Ila 12 Year Old",
  "springbank-10": "Springbank 10 Year Old",
  "dalmore-12": "The Dalmore 12 Year Old",
  "bowmore-12": "Bowmore 12 Year Old",
  "singleton-dufftown-12": "The Singleton of Dufftown 12 Year Old",
  "auchentoshan-three-wood": "Auchentoshan Three Wood",
  "tamnavulin-double-cask": "Tamnavulin Double Cask",
  "tamnavulin-sherry-cask": "Tamnavulin Sherry Cask Edition",
  "benromach-10": "Benromach 10 Year Old",
  "tamdhu-12": "Tamdhu 12 Year Old",
  "bunnahabhain-12": "Bunnahabhain 12 Year Old",
  "mortlach-16": "Mortlach 16 Year Old Distiller's Dram",
  "jura-12-sherry-cask": "Jura 12 Year Old Sherry Cask Finish",
  "glen-grant-arboralis": "The Glen Grant Arboralis",
  "smoky-scot": "Smoky Scot Islay Single Malt",
  "glenfarclas-12": "Glenfarclas 12 Year Old",
  "cardhu-12": "Cardhu 12 Year Old",
  "kirkland-single-malt": "Kirkland Signature Single Malt Scotch Whisky",
  "yamazaki-12": "Yamazaki 12 Year Old",
  "hakushu-12": "Hakushu 12 Year Old",
  "yoichi-single-malt": "Nikka Yoichi Single Malt",
  "kavalan-classic": "Kavalan Classic Single Malt",
  "kavalan-distillery-select-no1": "Kavalan Distillery Select No. 1",
  "kavalan-solist-oloroso": "Kavalan Solist Oloroso Sherry Cask Strength",
  "teachers-highland-cream": "Teacher's Highland Cream",
  "kirkland-blended-scotch": "Kirkland Signature Blended Scotch Whisky",
  "kirkland-12-scotch": "Kirkland Signature 12 Year Old Blended Scotch Whisky",
  "kirkland-canadian-whisky": "Kirkland Signature Canadian Whisky 6 Year Old",
  "famous-grouse": "The Famous Grouse",
  "grants-triple-wood": "Grant's Triple Wood",
  "bells-original": "Bell's Original Blended Scotch Whisky",
  "black-bottle": "Black Bottle Blended Scotch Whisky",
  "naked-malt": "Naked Malt Blended Malt Scotch Whisky",
  "john-barr-reserve": "John Barr Reserve Black Label",
  "cutty-sark-prohibition": "Cutty Sark Prohibition Edition",
  "black-and-white": "Black & White Blended Scotch Whisky",
  "monkey-shoulder": "Monkey Shoulder Original",
  "johnnie-walker-red": "Johnnie Walker Red Label",
  "johnnie-walker-blonde": "Johnnie Walker Blonde",
  "johnnie-walker-black-ruby": "Johnnie Walker Black Ruby",
  "johnnie-walker-double-black": "Johnnie Walker Double Black",
  "johnnie-walker-green-15": "Johnnie Walker Green Label 15 Year Old",
  "johnnie-walker-gold-reserve": "Johnnie Walker Gold Label Reserve",
  "johnnie-walker-blue": "Johnnie Walker Blue Label",
  "ballantines-finest": "Ballantine's Finest",
  "ballantines-12": "Ballantine's 12 Year Old",
  "ballantines-17": "Ballantine's 17 Year Old",
  "ballantines-21": "Ballantine's 21 Year Old",
  "chivas-12": "Chivas Regal 12 Year Old",
  "chivas-15-xv": "Chivas Regal XV 15 Year Old",
  "chivas-mizunara": "Chivas Regal Mizunara",
  "royal-salute-21": "Royal Salute 21 Year Old Signature Blend",
  "dewars-white-label": "Dewar's White Label",
  "dewars-12": "Dewar's 12 Year Old",
  "jameson-irish": "Jameson Irish Whiskey",
  "bushmills-black-bush": "Bushmills Black Bush",
  "redbreast-12": "Redbreast 12 Year Old",
  "crown-royal": "Crown Royal Fine De Luxe Canadian Whisky",
  "suntory-kakubin": "Suntory Whisky Kakubin",
  "suntory-toki": "Suntory Toki",
  "nikka-from-the-barrel": "Nikka From The Barrel",
  "hibiki-17": "Hibiki 17 Year Old",
  "kirkland-small-batch-bourbon": "Kirkland Signature Small Batch Bourbon",
  "jack-daniels-old-no7": "Jack Daniel's Old No. 7 Tennessee Whiskey",
  "jack-daniels-tennessee-apple": "Jack Daniel's Tennessee Apple",
  "gentleman-jack": "Gentleman Jack Double Mellowed Tennessee Whiskey",
  "jim-beam-white": "Jim Beam Kentucky Straight Bourbon",
  "evan-williams-black": "Evan Williams Black Label Bourbon",
  "evan-williams-bib": "Evan Williams Bottled-in-Bond (White Label)",
  "evan-williams-12": "Evan Williams 12 Year Old (Red Label)",
  "bulleit-bourbon": "Bulleit Bourbon Frontier Whiskey",
  "1792-small-batch": "1792 Small Batch Kentucky Straight Bourbon",
  "buffalo-trace": "Buffalo Trace Kentucky Straight Bourbon",
  "eagle-rare-10": "Eagle Rare 10 Year Old",
  "four-roses-single-barrel": "Four Roses Single Barrel",
  "four-roses-yellow": "Four Roses Bourbon",
  "woodford-double-oaked": "Woodford Reserve Double Oaked",
  "makers-mark-46": "Maker's Mark 46",
  "knob-creek-9": "Knob Creek 9 Year Old",
  "elijah-craig-small-batch": "Elijah Craig Small Batch",
  "blantons-original": "Blanton's Original Single Barrel",
  "russells-reserve-10": "Russell's Reserve 10 Year Old",
  "wild-turkey-rare-breed": "Wild Turkey Rare Breed",
  "rittenhouse-rye": "Rittenhouse Bottled-in-Bond Straight Rye",
  "sazerac-rye": "Sazerac Rye",
  "royal-brackla-12": "Royal Brackla 12 Year Old",
};

seedWhiskies.forEach((whisky) => {
  whisky.nameEn = whisky.nameEn || englishNamesById[whisky.id] || whisky.name;
});

const additionalPhotoSources = {
  "The Glenlivet": ["The_Glenlivet_12_year_old_whisky.jpg", "JIP · CC BY-SA 3.0"],
  Glenmorangie: ["Glenmorangie_The_Original_whisky.jpg", "JIP · CC BY-SA 3.0"],
  Ardbeg: ["Ardbeg_10_years_old_whisky.jpg", "JIP · CC BY-SA 3.0"],
  Lagavulin: ["Lagavulin_Single_Malt_Scotch_Whisky_Aged_16_Years.jpg", "Amitbalani · CC0"],
  Talisker: ["Talisker_Single_Malt_Scotch_Whisky_10_years_old.jpg", "Look Sharp! · CC BY-SA 3.0"],
  "Highland Park": ["Highland_Park_12_yo_new.png", "Adrenalin658 · CC BY-SA 4.0"],
  Aberlour: ["Aberlour_single_malt_10_years_old.jpg", "Pbrundel · CC BY-SA 3.0"],
  GlenAllachie: ["Glen_allachie_12yo.jpg", "Keeezawa · CC BY-SA 4.0"],
  Oban: ["Oban_Single_malt_Whisky_14_years_old.jpg", "Look Sharp! · CC BY-SA 3.0"],
  "Caol Ila": ["Caol_Ila_12_years_old_whisky.jpg", "JIP · CC BY-SA 3.0"],
  Springbank: ["Springbank_aged15y.jpg", "Springbank Distillery · CC BY-SA 3.0"],
  Bowmore: ["Bowmore_Single_Malt_Scotch_Whisky_12_years_old.jpg", "Look Sharp! · CC BY-SA 3.0"],
  "The Singleton": ["Singleton_Single_Malt_Whisky_Aged_12_years.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  Auchentoshan: ["Auchentoshan_Family.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  Tamnavulin: ["Tamnavulin_Double.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  Tamdhu: ["Tamdhu_Ambar_Speyside_Single_Malt_Whisky%2C_aged_14_years.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  Bunnahabhain: ["Bunnahabhain_Cruach-Mh%C3%B2na.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  Mortlach: ["Mortlach_Single_Malt_Whisky.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  Jura: ["Jura_Single_Malt.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  "Glen Grant": ["01-Glen-Grant.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  "Aceo (Caol Ila)": ["Caol_Ila_12_years_old_whisky.jpg", "JIP · CC BY-SA 3.0"],
  Glenfarclas: ["Glenfarclas_15y_bottle.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  Cardhu: ["Whisky_Cardhu.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  "Teacher's": ["Teacher%27s_Highland_Cream_20cl_bottle_1.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  "Kirkland Signature": ["Bourbon_Kirkland.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  "The Famous Grouse": ["Famous_Grouse.JPG", "Wikimedia Commons · CC BY-SA 3.0"],
  "Grant's": ["Grant%27s_Whisky_01.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  "Cutty Sark": ["Bottle_of_Cutty_Sark_Scotch_Whisky_with_box.JPG", "Wikimedia Commons · CC BY-SA 3.0"],
  "Black & White": ["Black_%26_White_%28whisky%29_bottle_01.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  "The Macallan": ["Macallan_whisky%2C_12-15-18_years.jpg", "Ssu · CC BY-SA 4.0"],
  Glenfiddich: ["GlenfiddichSpecialReserve12Years.jpg", "Pbrundel · CC BY-SA 3.0"],
  "The Balvenie": ["Balvenie_Whisky_Doublewood_12_years_old.jpg", "Pbrundel · CC BY-SA 3.0"],
  Kavalan: ["Kavalan_single_malt_whiskey.jpg", "othree · CC BY 2.0"],
  Nikka: ["Super_nikka_nikka_whisky_2014.jpg", "Kentin · CC BY-SA 4.0"],
  "Monkey Shoulder": ["Monkey_Shoulder_scotch_bottle.jpg", "Clément Bucco-Lechat · CC BY-SA 3.0"],
  "Johnnie Walker": ["Johnnie_Walker_Black_Label.jpg", "Iceman7840 · CC BY-SA 3.0"],
  "Ballantine's": ["2017_Ballantine%27s_Finest.jpg", "Jacek Halicki · CC BY-SA 4.0"],
  "Chivas Regal": ["Chivas_Regal_The_Icon_Blended_Scotch_Whisky_%28700mL%29.jpg", "Oleg Yunakov · CC BY-SA 4.0"],
  "Royal Salute": ["Royal_Salute_scotch_whiskey.jpg", "Amitbalani · CC0"],
  "Dewar's": ["Bottle_of_Dewar%27s_whisky.jpg", "Nfutvol · CC BY-SA 3.0"],
  Jameson: ["Jameson_Irish_Whiskey_%2811898467796%29.jpg", "Michael Bentley · CC BY 2.0"],
  Bushmills: ["Bushmills_whiskey.jpg", "S-alfeyev · CC BY-SA 4.0"],
  Redbreast: ["Redbreast12.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  "Crown Royal": ["Crown_Royal_Cask_No._16_whiskey.jpg", "Wikimedia Commons · CC BY 2.0"],
  "Jack Daniel's": ["Jack_Daniel%27s_whiskey_99.JPG", "Wikimedia Commons · CC BY-SA 3.0"],
  "Evan Williams": ["Evan_Williams.JPG", "Wikimedia Commons · CC BY-SA 3.0"],
  "Buffalo Trace": ["Buffalo_Trace_bourbon_whiskey.jpg", "Rick Audet · CC BY 2.0"],
  "Eagle Rare": ["Eagle_Rare.JPG", "Craiglduncan · CC BY-SA 3.0"],
  "Four Roses": ["Four_Roses_Bourbon.jpg", "King4120 · CC BY-SA 4.0"],
  "Knob Creek": ["Knob_creek_bottle.jpg", "LittleGun · Public domain"],
  "Elijah Craig": ["Elijah_Craig_Small_Batch.jpg", "Jclark754 · CC BY-SA 4.0"],
  "Blanton's": ["Blanton%27s_Bourbon.jpg", "Fortkeeper · CC BY-SA 4.0"],
  Sazerac: ["Sazerac_Rye_Whisky.jpg", "Dwstultz · CC BY-SA 3.0"],
};

const additionalPhotoSourcesById = {
  "johnnie-walker-red": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Johnnie_Walker_Red_Label.jpg/500px-Johnnie_Walker_Red_Label.jpg",
    fallbackImageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Johnnie_Walker_Red_Label.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Johnnie_Walker_Red_Label.jpg",
    imageCredit: "kallerna · CC BY-SA 3.0",
  },
  "johnnie-walker-blonde": {
    imageUrl: "https://images.ctfassets.net/waruwpig3jxu/5Ae99FJqkSPEqn1CgXRHEv/9b77cef7333e8f63ebff7084a1293b87/blonde-750ml_producthero_halffront_desktop.webp",
    fallbackImageUrl: "assets/johnnie-walker-blonde.svg",
    imagePage: "https://www.johnniewalker.com/",
    imageCredit: "Johnnie Walker Blonde · Bottle",
  },
  "johnnie-walker-black-ruby": {
    imageUrl: "assets/johnnie-walker-black-ruby.png",
    fallbackImageUrl: "assets/johnnie-walker-black-ruby.svg",
    imagePage: "https://www.johnniewalker.com/",
    imageCredit: "Johnnie Walker Black Ruby · Bottle",
  },
  "johnnie-walker-double-black": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/JW_Double_Black.jpg/500px-JW_Double_Black.jpg",
    fallbackImageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a2/JW_Double_Black.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:JW_Double_Black.jpg",
    imageCredit: "Iceman7840 · CC BY-SA 3.0",
  },
  "johnnie-walker-green-15": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/JW_Greens.jpg/500px-JW_Greens.jpg",
    fallbackImageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d7/JW_Greens.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:JW_Greens.jpg",
    imageCredit: "Iceman7840 · CC BY-SA 3.0",
  },
  "johnnie-walker-gold-reserve": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/Johnnie_Walker_Gold_Label_Reserve.jpg/500px-Johnnie_Walker_Gold_Label_Reserve.jpg",
    fallbackImageUrl: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Johnnie_Walker_Gold_Label_Reserve.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:Johnnie_Walker_Gold_Label_Reserve.jpg",
    imageCredit: "Wikimedia Commons · CC BY-SA 3.0",
  },
  "johnnie-walker-blue": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/JW_Blue_Label.jpg/500px-JW_Blue_Label.jpg",
    fallbackImageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/JW_Blue_Label.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:JW_Blue_Label.jpg",
    imageCredit: "Iceman7840 · CC BY-SA 3.0",
  },
  "bells-original": {
    imageUrl: "assets/bells-original.png",
    fallbackImageUrl: "assets/bells-original.svg",
    imagePage: "https://www.thewhiskyexchange.com/p/3545/bells-original",
    imageCredit: "Bell's Original · Bottle",
  },
  "glenlivet-15": {
    imageUrl: "assets/glenlivet-15.png",
    fallbackImageUrl: "",
    imagePage: "https://www.theglenlivet.com/",
    imageCredit: "The Glenlivet 15 French Oak · Bottle",
  },
  "glen-grant-arboralis": {
    imageUrl: "assets/glen-grant-arboralis.png",
    fallbackImageUrl: "assets/glen-grant-arboralis.svg",
    imagePage: "https://www.glengrant.com/",
    imageCredit: "The Glen Grant Arboralis · Bottle",
  },
  "black-bottle": {
    imageUrl: "assets/black-bottle.png",
    fallbackImageUrl: "assets/black-bottle.svg",
    imagePage: "https://www.blackbottle.com/",
    imageCredit: "Black Bottle · Bottle",
  },
  "john-barr-reserve": {
    imageUrl: "assets/john-barr-reserve.png",
    fallbackImageUrl: "assets/john-barr-reserve.svg",
    imagePage: "https://www.johnbarrwhisky.com/",
    imageCredit: "John Barr Reserve · Bottle",
  },
  "gentleman-jack": {
    imageUrl: "assets/gentleman-jack.png",
    fallbackImageUrl: "assets/gentleman-jack.svg",
    imagePage: "https://www.jackdaniels.com/",
    imageCredit: "Gentleman Jack · Bottle",
  },
  "1792-small-batch": {
    imageUrl: "assets/1792-small-batch.png",
    fallbackImageUrl: "assets/1792-small-batch.svg",
    imagePage: "https://www.1792bourbon.com/",
    imageCredit: "1792 Small Batch · Bottle",
  },
  "rittenhouse-rye": {
    imageUrl: "assets/rittenhouse-rye.png",
    fallbackImageUrl: "assets/rittenhouse-rye.svg",
    imagePage: "https://www.heavenhilldistillery.com/",
    imageCredit: "Rittenhouse Rye BiB · Bottle",
  },
  "royal-brackla-12": {
    imageUrl: "assets/royal-brackla-12.png",
    fallbackImageUrl: "assets/royal-brackla-12.svg",
    imagePage: "https://www.royalbrackla.com/",
    imageCredit: "Royal Brackla 12 · Bottle",
  },
  "russells-reserve-10": {
    imageUrl: "assets/russells-reserve-10.png",
    fallbackImageUrl: "assets/russells-reserve-10.svg",
    imagePage: "https://www.russellsreserve.com/",
    imageCredit: "Russell's Reserve 10 · Bottle",
  },
  "chivas-12": {
    imageUrl: "assets/chivas-12.png",
    fallbackImageUrl: "assets/chivas-12.svg",
    imagePage: "https://www.chivas.com/",
    imageCredit: "Chivas Regal 12 · Bottle",
  },
  "chivas-15-xv": {
    imageUrl: "assets/chivas-15-xv.png",
    fallbackImageUrl: "assets/chivas-15-xv.svg",
    imagePage: "https://www.chivas.com/",
    imageCredit: "Chivas Regal XV 15 · Bottle",
  },
  "chivas-mizunara": {
    imageUrl: "assets/chivas-mizunara.png",
    fallbackImageUrl: "assets/chivas-mizunara.svg",
    imagePage: "https://www.chivas.com/",
    imageCredit: "Chivas Regal Mizunara · Bottle",
  },
  "dewars-12": {
    imageUrl: "assets/dewars-12.png",
    fallbackImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Bottle_of_Dewar%27s_whisky.jpg?width=500",
    imagePage: "https://www.dewars.com/",
    imageCredit: "Dewar's 12 · Bottle",
  },
  "ballantines-finest": {
    imageUrl: "https://img.thewhiskyexchange.com/540/blend_bal5.jpg",
    fallbackImageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/2017_Ballantine%27s_Finest.jpg?width=500",
    imagePage: "https://www.ballantines.com/",
    imageCredit: "Ballantine's Finest · Bottle",
  },
  "ballantines-12": {
    imageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1920w/attribute_rule_images/33899_source_1788541245.jpg?compression=lossy",
    fallbackImageUrl: "https://img.thewhiskyexchange.com/540/blend_bal12yo.jpg",
    imagePage: "https://www.ballantines.com/",
    imageCredit: "Ballantine's 12 · Bottle",
  },
  "ballantines-17": {
    imageUrl: "https://img.thewhiskyexchange.com/540/blend_bal66.jpg",
    fallbackImageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/29383_source_1761924040.jpg?compression=lossy",
    imagePage: "https://www.ballantines.com/",
    imageCredit: "Ballantine's 17 · Bottle",
  },
  "ballantines-21": {
    imageUrl: "https://img.thewhiskyexchange.com/540/blend_bal21yo.jpg",
    fallbackImageUrl: "https://cdn11.bigcommerce.com/s-e8lbekfe7c/images/stencil/1024w/attribute_rule_images/15832_source_1761910888.jpg?compression=lossy",
    imagePage: "https://www.ballantines.com/",
    imageCredit: "Ballantine's 21 · Bottle",
  },
  "evan-williams-black": {
    imageUrl: "https://commons.wikimedia.org/wiki/Special:FilePath/Evan_Williams.JPG?width=500",
    fallbackImageUrl: "",
    imagePage: "https://commons.wikimedia.org/wiki/File:Evan_Williams.JPG",
    imageCredit: "Wikimedia Commons · CC BY-SA 3.0",
  },
  "evan-williams-bib": {
    imageUrl: "assets/evan-williams-bib.png",
    fallbackImageUrl: "assets/evan-williams-bib.svg",
    imagePage: "https://evanwilliams.com/",
    imageCredit: "Evan Williams BiB (White) · Bottle",
  },
  "evan-williams-12": {
    imageUrl: "assets/evan-williams-12.png",
    fallbackImageUrl: "assets/evan-williams-12.svg",
    imagePage: "https://evanwilliams.com/",
    imageCredit: "Evan Williams 12 (Red) · Bottle",
  },
  "four-roses-single-barrel": {
    imageUrl: "https://www.thewhiskyexchange.com/cdn-cgi/image/fit=scale-down,width=660,metadata=none,format=webp/media/rtwe/uploads/product/thumbnail/9685.jpg?v=20241201161510",
    fallbackImageUrl: "https://images.whiskymarketplace.kr/masterofmalt/four-roses-single-barrel-bourbon-100-proof-whiskey.jpg?tr=trim-80:w-347,h-434,cm-pad_resize,bg-FFFFFF,f-auto",
    imagePage: "https://www.fourrosesbourbon.com/",
    imageCredit: "Four Roses Single Barrel · Bottle",
  },
  "four-roses-yellow": {
    imageUrl: "https://img.thewhiskyexchange.com/540/brbon_fou1.jpg",
    fallbackImageUrl: "https://images.whiskymarketplace.co.uk/masterofmalt/four-roses-bourbon-whiskey.jpg?tr=trim-80:w-240,h-240,cm-pad_resize,bg-FFFFFF,f-auto",
    imagePage: "https://www.fourrosesbourbon.com/",
    imageCredit: "Four Roses Bourbon · Bottle",
  },
  "dalmore-12": {
    imageUrl: "https://img.thewhiskyexchange.com/540/dlmob.12yov9.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=500&q=85",
    imagePage: "https://www.thewhiskyexchange.com/p/155/dalmore-12-year-old",
    imageCredit: "The Dalmore 12 · Bottle",
  },
  "benromach-10": {
    imageUrl: "https://img.thewhiskyexchange.com/540/brmob.10yo.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=500&q=85",
    imagePage: "https://www.thewhiskyexchange.com/",
    imageCredit: "Benromach 10 · Bottle",
  },
  "naked-malt": {
    imageUrl: "https://img.thewhiskyexchange.com/540/vatted_nak1.jpg",
    fallbackImageUrl: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=500&q=85",
    imagePage: "https://www.thewhiskyexchange.com/",
    imageCredit: "Naked Malt · Bottle",
  },
  "jack-daniels-tennessee-apple": {
    imageUrl: "assets/jack-daniels-apple.png",
    fallbackImageUrl: "assets/jack-daniels-apple.svg",
    imagePage: "https://www.jackdaniels.com/",
    imageCredit: "Jack Daniel's Tennessee Apple · Bottle",
  },
  "suntory-kakubin": ["Suntory_Kakubin.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
};

const genericWhiskyPhoto = {
  imageUrl: "https://images.unsplash.com/photo-1527281400683-1aae777175f8?auto=format&fit=crop&w=500&q=85",
  imagePage: "https://unsplash.com/",
  imageCredit: "위스키 사진 · Unsplash",
};

const photoForWhisky = (id, distillery) => {
  const specificPhoto = additionalPhotoSourcesById[id];
  if (specificPhoto) {
    if (typeof specificPhoto === "object" && !Array.isArray(specificPhoto)) {
      return specificPhoto;
    }
    const [fileName, imageCredit] = specificPhoto;
    return {
      imageUrl: `https://commons.wikimedia.org/wiki/Special:FilePath/${fileName}?width=500`,
      imagePage: `https://commons.wikimedia.org/wiki/File:${fileName.replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")").replace(/%2C/g, ",")}`,
      imageCredit,
    };
  }
  const photoSource = additionalPhotoSources[distillery];
  if (photoSource) {
    const [fileName, imageCredit] = photoSource;
    return {
      imageUrl: `https://commons.wikimedia.org/wiki/Special:FilePath/${fileName}?width=500`,
      imagePage: `https://commons.wikimedia.org/wiki/File:${fileName.replace(/%27/g, "'").replace(/%28/g, "(").replace(/%29/g, ")").replace(/%2C/g, ",")}`,
      imageCredit,
    };
  }
  const existingBrandPhoto = seedWhiskies.find((whisky) => whisky.distillery === distillery && whisky.imageUrl);
  if (existingBrandPhoto) return { imageUrl: existingBrandPhoto.imageUrl, imagePage: existingBrandPhoto.imagePage, imageCredit: existingBrandPhoto.imageCredit };
  return genericWhiskyPhoto;
};

seedWhiskies.push(...additionalWhiskies.map(([id, name, distillery, type, region, abv, averagePrice, aroma, taste, finish, tone]) => ({
  id,
  name,
  nameEn: englishNamesById[id] || name,
  distillery,
  type,
  region,
  abv,
  averagePrice,
  tone,
  ...photoForWhisky(id, distillery),
  notes: { aroma, taste, finish },
})));

const summariesById = {
  "macallan-12-sherry": "올로로소 셰리 오크통 숙성으로 완성한 건과일과 스파이스의 정석 싱글몰트",
  "glenfiddich-12": "서양배의 상큼함과 부드러운 목넘김으로 전 세계에서 가장 사랑받는 입문용 싱글몰트",
  "laphroaig-10": "강렬한 요오드와 바닷바람·장작 연기 풍미가 매력적인 아일라 피트 위스키의 아이콘",
  "balvenie-12": "버번 캐스크의 바닐라에 셰리 캐스크의 꿀 같은 달콤함을 입힌 수제 싱글몰트의 대명사",
  "hibiki-harmony": "일본 사계절의 섬세함과 미즈나라 오크의 꽃·과일 향을 조화롭게 블렌딩한 프리미엄 위스키",
  "jim-beam-black": "일반 라인보다 긴 숙성으로 깊어진 구운 오크와 캐러멜 풍미의 아메리칸 버번",
  "wild-turkey-101": "50.5도의 높은 도수와 호밀 스파이스, 짙은 바닐라 타격감이 살아있는 정통 켄터키 버번",
  "makers-mark": "붉은 밀랍 봉인과 겨울 밀 원료 특유의 부드럽고 달콤한 목넘김이 돋보이는 핸드메이드 버번",
  "woodford-reserve": "구리 단식 증류기를 거쳐 다크초콜릿과 말린 과일 등 복합 풍미를 지닌 프리미엄 버번",
  "johnnie-walker-black": "스코틀랜드 전역 40여 종 원액을 12년 이상 숙성해 스모키함과 과일향의 균형을 이룬 블렌디드",
  "chivas-18": "85가지 이상의 아로마 노트와 다크초콜릿·버터스카치의 벨벳 같은 질감을 선사하는 18년 블렌디드",
  "bulleit-rye": "95%의 높은 호밀 함량으로 체리와 후추, 허브 스파이스가 선명하게 살아있는 라이 위스키",
  "glenlivet-12": "화사한 열대과일과 꽃향기로 스페이사이드 싱글몰트의 표준을 세운 클래식 위스키",
  "glenlivet-15": "프랑스 리무쟁 오크통 피니시로 살구와 버터, 은은한 향신료의 우아한 깊이를 더한 싱글몰트",
  "glenmorangie-original-10": "스코틀랜드 최고 높이 증류기로 빚어낸 시트러스와 바닐라 크림의 산뜻한 하이랜드 싱글몰트",
  "glenmorangie-original-12": "12년 숙성으로 한층 더 깊고 실키해진 꿀·복숭아·바닐라 풍미의 하이랜드 대표 싱글몰트",
  "glenmorangie-quinta-ruban": "루비 포트 와인 캐스크 추가 숙성으로 다크초콜릿과 민트 풍미가 농밀한 14년 싱글몰트",
  "ardbeg-10": "강렬한 피트 연기 속에 상큼한 레몬과 청사과의 반전 단맛이 숨어 있는 아일라 대표 싱글몰트",
  "ardbeg-uigeadail": "아드벡의 강력한 스모크에 올로로소 셰리 캐스크의 건포도·에스프레소 단맛을 결합한 고도수 명작",
  "lagavulin-16": "묵직한 피트 연기와 바다 소금기, 진한 셰리 단맛이 장엄한 여운을 남기는 아일라의 제왕",
  "talisker-10": "스카이섬의 거친 바닷바람과 흑후추 스파이스, 모닥불 스모크가 어우러진 해양성 싱글몰트",
  "highland-park-12": "오크니 제도의 헤더 꿀 단맛과 은은한 향나무 피트가 조화를 이루는 올라운더 싱글몰트",
  "aberlour-12": "버번과 올로로소 셰리 더블 캐스크 숙성으로 사과·초콜릿·시나몬의 균형을 살린 스페이사이드 몰트",
  "glenallachie-12": "마스터 디스틸러 빌리 워커가 완성한 모카·꿀·진한 셰리의 고밀도 스페이사이드 싱글몰트",
  "macallan-double-cask-12": "유러피안과 아메리칸 두 종류의 셰리 오크통이 만나 바닐라와 건과일이 부드럽게 어우러지는 맥캘란",
  "macallan-sherry-oak-18": "18년 숙성 올로로소 셰리 오크의 농후한 건과일과 다크초콜릿 풍미가 절정에 달한 아이코닉 싱글몰트",
  "glenfiddich-15": "솔레라 배트 공법으로 세 가지 캐스크 원액을 블렌딩해 꿀과 마지팬 풍미가 깊은 15년 싱글몰트",
  "glenfiddich-18": "소량씩 엄선한 스몰 배치 오크통에서 18년간 숙성해 구운 사과와 성숙한 오크의 품격을 담은 싱글몰트",
  "balvenie-caribbean-cask-14": "카리브해 럼 캐스크 피니시로 열대과일 망고와 달콤한 토피 향을 풍성하게 입힌 14년 싱글몰트",
  "oban-14": "서부 하이랜드 해안과 내륙의 특징을 함께 품어 오렌지 껍질·무화과·소금기가 조화로운 14년 몰트",
  "caol-ila-12": "산뜻한 레몬 시트러스와 깔끔한 바닷바람 피트가 어우러져 피트 입문자에게도 좋은 아일라 싱글몰트",
  "springbank-10": "몰팅부터 병입까지 100% 수작업 전통 방식을 고수하는 캠벨타운의 독보적인 복합 풍미 싱글몰트",
  "dalmore-12": "왕실 수사슴 엠블럼과 함께 오렌지 마멀레이드·다크초콜릿·올로로소 셰리 풍미를 뽐내는 싱글몰트",
  "bowmore-12": "레몬과 헤더 꿀, 다크초콜릿 위에 부드러운 피트 연기가 감도는 아일라 최고(最古) 증류소의 몰트",
  "singleton-dufftown-12": "구운 사과와 브라운슈가의 매끄럽고 편안한 풍미로 니트와 하이볼 모두에 잘 어울리는 데일리 몰트",
  "auchentoshan-three-wood": "로우랜드 전통 3회 증류의 깔끔함에 버번·올로로소·PX 3가지 캐스크의 진한 셰리를 입힌 싱글몰트",
  "tamnavulin-double-cask": "아메리칸 오크 숙성 후 셰리 캐스크 피니시로 달콤한 과일 풍미를 합리적으로 담아낸 가성비 싱글몰트",
  "tamnavulin-sherry-cask": "3종 올로로소 셰리 캐스크 피니시를 거쳐 건포도와 바닐라, 과일 케이크의 달콤함이 풍부한 싱글몰트",
  "benromach-10": "전통 스페이사이드 방식을 재현해 달콤한 셰리 과일향과 은은한 피트 스모크가 공존하는 수제 싱글몰트",
  "tamdhu-12": "처음부터 끝까지 최상급 올로로소 셰리 오크통에서만 숙성해 깊고 정직한 셰리 풍미를 전하는 12년 몰트",
  "bunnahabhain-12": "아일라 위스키 중 드물게 논피트 스타일과 46.3% 비냉각여과로 고소한 견과류·셰리·해풍을 살린 몰트",
  "mortlach-16": "독창적인 2.81회 증류 공법이 만든 묵직한 바디와 진한 셰리 풍미로 ‘더프타운의 야수’라 불리는 16년 몰트",
  "jura-12-sherry-cask": "주라섬 특유의 부드러운 주질에 올로로소 셰리 피니시를 더해 구운 바나나와 다크초콜릿이 돋보이는 몰트",
  "glen-grant-arboralis": "‘나무 사이로 비치는 빛’이라는 이름처럼 청사과·배·꽃향기가 화사하고 가볍게 퍼지는 입문용 싱글몰트",
  "smoky-scot": "아일라 쿨일라 증류소 원액을 담아 강렬한 모닥불 피트와 해풍을 뛰어난 가성비로 즐기는 싱글몰트",
  "glenfarclas-12": "6대째 가족 경영을 이어오며 직화 증류와 올로로소 셰리 캐스크 숙성을 고수하는 정통 스페이사이드 몰트",
  "cardhu-12": "조니워커의 핵심 몰트 원액으로 유명하며, 배와 헤더 꿀처럼 실키하고 온화한 달콤함을 지닌 싱글몰트",
  "kirkland-single-malt": "코스트코 시그니처 라인으로 선보이는 고도수(46%) 셰리 캐스크 피니시 하이랜드 싱글몰트",
  "yamazaki-12": "일본 최초의 몰트 증류소에서 미즈나라 오크통 숙성으로 완성한 복숭아와 침향의 우아한 재패니즈 몰트",
  "hakushu-12": "남알프스 숲속 증류소에서 빚어내 상쾌한 민트·청사과·은은한 스모크가 살아있는 산림욕 같은 싱글몰트",
  "yoichi-single-malt": "석탄 직화 증류를 고수해 홋카이도 바닷바람의 짭조름함과 묵직한 피트·과일향이 어우러진 일본 싱글몰트",
  "kavalan-classic": "대만의 아열대 기후가 빚어낸 망고·코코넛·바닐라의 화려한 열대과일 아로마를 자랑하는 대표 싱글몰트",
  "kavalan-distillery-select-no1": "카발란 특유의 크리미한 토피와 열대과일 풍미를 데일리와 하이볼로도 편하게 즐기기 좋은 엔트리 몰트",
  "kavalan-solist-oloroso": "물 한 방울 섞지 않은 단일 올로로소 셰리 캐스크 원액으로 압도적인 다크초콜릿·건과일 타격감을 주는 CS 위스키",
  "teachers-highland-cream": "아드모어 피트 몰트 원액 함량이 높아 구운 맥아와 스모키한 여운을 1~2만 원대에 즐기는 가성비 스카치",
  "kirkland-blended-scotch": "넉넉한 1.75L 대용량과 깔끔한 목넘김으로 홈바 하이볼 베이스로 인기가 높은 코스트코 가성비 스카치",
  "kirkland-12-scotch": "12년 숙성 원액만을 블렌딩해 말린 과일과 꿀, 구운 오크의 균형 잡힌 풍미를 합리적으로 즐기는 위스키",
  "kirkland-canadian-whisky": "6년 숙성 캐나디안 위스키 특유의 메이플·버터스카치 단맛과 실키한 목넘김이 돋보이는 대용량 데일리 보틀",
  "famous-grouse": "맥캘란과 하이랜드 파크 원액이 블렌딩되어 스코틀랜드 현지 판매 1위를 오랫동안 지켜온 국민 스카치",
  "grants-triple-wood": "세 가지 서로 다른 오크통 숙성으로 바닐라와 바나나, 브라운슈가 같은 부드러움을 살린 가성비 블렌디드",
  "bells-original": "블레어 애솔 몰트를 중심으로 사과·생강·고소한 곡물과 은은한 스파이시함이 어우러진 영국 데일리 스카치",
  "black-bottle": "아일라 스타일의 은은한 피트 연기와 달콤한 과일·꽃향기가 조화를 이루는 개성파 블렌디드 스카치",
  "naked-malt": "맥캘란·하이랜드 파크·글렌로세스 등 싱글몰트 원액만 블렌딩해 퍼스트필 셰리 오크에 숙성한 블렌디드 몰트",
  "john-barr-reserve": "화이트 앤 맥카이의 블렌딩 노하우로 사과와 초콜릿, 부드러운 오크 스파이스를 담아낸 가성비 블랙 라벨",
  "cutty-sark-prohibition": "미국 금주법 시대 전설의 선장을 기리며 50% 도수와 비냉각여과로 바닐라·흑후추의 강렬함을 담은 스몰 배치",
  "black-and-white": "귀여운 테리어 강아지 라벨로 유명하며 상큼한 레몬·비스킷 풍미로 하이볼에 최적화된 클래식 블렌디드",
  "monkey-shoulder": "스페이사이드 세 증류소의 100% 몰트 원액만 블렌딩해 오렌지·바닐라·꿀 풍미가 풍부한 인기 블렌디드 몰트",
  "johnnie-walker-red": "생동감 넘치는 사과·시나몬 스파이스와 스모키한 피니시로 하이볼과 칵테일에 가장 널리 쓰이는 스카치",
  "johnnie-walker-blonde": "아메리칸 오크 숙성으로 화사한 바닐라와 베리 단맛을 극대화해 상큼한 하이볼에 최적화한 블렌디드",
  "johnnie-walker-black-ruby": "PX·올로로소 셰리와 레드 와인 캐스크 숙성 원액으로 진한 무화과·블랙베리 과실미를 입힌 스카치",
  "johnnie-walker-double-black": "블랙 라벨보다 한층 더 짙은 아일라 피트 원액과 깊게 그을린 오크통을 사용해 훈연향을 극대화한 블렌디드",
  "johnnie-walker-green-15": "그레인 위스키 없이 탈리스커·링크우드·크래겐모어·쿨일라 15년 숙성 싱글몰트만으로 완성한 블렌디드 몰트",
  "johnnie-walker-gold-reserve": "클라이넬리쉬 원액을 중심으로 헤더 꿀과 크리미한 바닐라, 꽃향기가 화려하게 펼쳐지는 축하용 블렌디드",
  "johnnie-walker-blue": "수만 개의 오크통 중 엄선한 희귀 원액을 블렌딩해 벨벳 같은 질감과 긴 스모키 여운을 주는 최고급 위스키",
  "ballantines-finest": "꿀과 사과, 바닐라의 가볍고 깔끔한 밸런스로 부담 없이 즐기기 좋은 발렌타인의 엔트리 블렌디드",
  "ballantines-12": "크리미한 밀크초콜릿과 꿀, 오크 풍미가 매끄럽게 이어져 한국에서 유독 사랑받는 12년 숙성 블렌디드",
  "ballantines-17": "발렌타인 라인업의 황금 밸런스로 꼽히며 바닐라·사과·피트 스모크가 우아하게 이어지는 정통 17년 스카치",
  "ballantines-21": "21년 이상의 긴 숙성이 만들어낸 헤더 꿀, 감초, 말린 과일과 실키한 오크의 격조 높은 블렌디드 위스키",
  "chivas-12": "스트라아일라 싱글몰트를 중심으로 사과와 꿀, 헤이즐넛의 크리미한 부드러움을 자랑하는 대표 블렌디드",
  "chivas-15-xv": "15년 숙성 원액을 프랑스 그랑 샴페인 코냑 캐스크에서 피니시해 자두와 마멀레이드 풍미가 화려한 스카치",
  "chivas-mizunara": "스코틀랜드 원액을 일본산 미즈나라 오크통에서 마무리해 서양배와 오렌지, 이국적인 향신료가 감도는 위스키",
  "royal-salute-21": "영국 여왕 대관식을 기념해 탄생했으며 21년 이상 숙성 원액과 도자기 보틀이 상징적인 프레스티지 스카치",
  "dewars-white-label": "꿀과 배의 산뜻한 아로마와 깔끔한 피니시로 전 세계 바텐더들이 하이볼 베이스로 애용하는 스카치",
  "dewars-12": "블렌딩 후 다시 오크통에서 숙성하는 더블 에이징 공법으로 한층 더 부드러운 꿀·토피 풍미를 완성한 스카치",
  "jameson-irish": "피트 없이 3회 증류해 고소한 견과류와 바닐라, 놀랍도록 부드러운 목넘김을 지닌 세계 1위 아이리시 위스키",
  "bushmills-black-bush": "높은 비율의 올로로소 셰리 캐스크 몰트 원액을 블렌딩해 진한 건과일과 초콜릿 풍미가 돋보이는 아이리시",
  "redbreast-12": "발아 보리와 비발아 보리를 함께 단식 증류해 과일 케이크 같은 질감과 깊은 셰리를 뽐내는 싱글 팟 스틸의 정점",
  "crown-royal": "영국 국왕의 캐나다 방문을 기념해 탄생했으며 메이플·바닐라의 실키한 단맛과 보라색 파우치가 상징적인 위스키",
  "suntory-kakubin": "거북이 등껍질 모양 보틀로 유명하며 상큼한 레몬·비스킷 풍미로 일본 이자카야 하이볼의 대명사가 된 위스키",
  "suntory-toki": "하쿠슈 몰트와 치타 그레인 위스키를 중심으로 청사과·자몽·허브의 산뜻함을 살려 하이볼에 특화한 위스키",
  "nikka-from-the-barrel": "사각형 병 속에 51.4% 고도수와 100여 종 원액의 폭발적인 오크·스파이스·캐러멜 응축미를 담아낸 블렌디드",
  "hibiki-17": "장기 숙성 원액이 빚어내는 매실·다크초콜릿·미즈나라 오크의 깊고 신비로운 여운을 지닌 단종 프리미엄 위스키",
  "kirkland-small-batch-bourbon": "바튼 1792 증류소 원액으로 빚어내 46% 도수의 풍부한 캐러멜·구운 오크 풍미를 선사하는 코스트코 버번",
  "jack-daniels-old-no7": "사탕단풍나무 숯 여과(차콜 멜로잉) 공법으로 바나나·바닐라·구운 오크의 스모키한 단맛을 완성한 테네시 위스키",
  "jack-daniels-tennessee-apple": "올드 넘버 7의 고소한 오크·캐러멜 풍미에 상큼한 청사과 리큐르를 더해 하이볼에 완벽한 플레이버 위스키",
  "gentleman-jack": "숙성 전후 두 번의 사탕단풍나무 숯 여과를 거쳐 특유의 거친 맛을 줄이고 실키한 깔끔함을 극대화한 위스키",
  "jim-beam-white": "200년 넘게 이어온 효모와 4년 이상 숙성으로 가볍고 경쾌한 바닐라·옥수수 단향을 전하는 세계 판매 1위 버번",
  "evan-williams-black": "켄터키 최초 상업 증류소의 역사를 이어받아 바닐라와 브라운슈가의 진한 단맛을 합리적으로 담은 데일리 버번",
  "evan-williams-bib": "1897년 미국 바틀드 인 본드 법규(50%·4년 이상 숙성)를 지켜 강렬한 캐러멜·구운 아몬드 타격감을 주는 가성비 버번",
  "evan-williams-12": "12년 장기 숙성과 50.5% 높은 도수로 농후한 다크체리·오크·가죽의 깊은 풍미를 선사하는 레드 라벨 버번",
  "bulleit-bourbon": "일반 버번보다 약 2배 높은 호밀(28%) 함량을 사용해 오렌지·메이플 뒤에 스파이시하고 드라이한 여운이 남는 버번",
  "1792-small-batch": "높은 호밀 함량과 엄선된 배럴 스몰 배치 병입으로 버터스카치와 정향 스파이스가 우아하게 조화된 켄터키 버번",
  "buffalo-trace": "수많은 명작을 탄생시킨 증류소의 간판 버번으로 바닐라·민트·토피의 뛰어난 밸런스를 보여주는 입문 필수 버번",
  "eagle-rare-10": "10년 숙성으로 체리·오렌지 껍질·깊은 오크와 카카오의 복합적인 풍미를 선사하는 버팔로 트레이스의 상급 버번",
  "four-roses-single-barrel": "10가지 독창적 레시피 중 자두·체리·메이플과 호밀 스파이스가 풍성한 단일 배럴 원액을 50%로 병입한 버번",
  "four-roses-yellow": "최대 10가지 원액 레시피를 블렌딩해 배와 사과, 꿀처럼 화사하고 부드러운 과일 아로마가 매력적인 입문용 버번",
  "woodford-double-oaked": "깊게 토스팅하고 얇게 태운 두 번째 새 오크통에 추가 숙성해 다크초콜릿·메이플·헤이즐넛 단맛을 극대화한 버번",
  "makers-mark-46": "오크통 안에 구운 프렌치 오크 스태브 10개를 넣어 추가 숙성해 바닐라와 베이킹 스파이스를 짙게 끌어올린 버번",
  "knob-creek-9": "금주법 이전의 묵직한 스타일을 복원해 9년 숙성과 50% 도수로 강렬한 구운 견과류·오크·메이플을 전하는 버번",
  "elijah-craig-small-batch": "‘버번의 아버지’ 이름을 따 따뜻한 바닐라와 스모키한 오크, 육두구 스파이스의 정석을 보여주는 스몰 배치 버번",
  "blantons-original": "세계 최초의 싱글 배럴 버번으로 경주마 피규어 코르크와 함께 감귤·꿀·바닐라의 화려한 풍미를 자랑하는 명작",
  "russells-reserve-10": "와일드 터키의 전설적인 부자(父子) 마스터 디스틸러가 엄선한 10년 숙성 배럴로 토피와 체리 풍미를 담은 버번",
  "wild-turkey-rare-breed": "6·8·12년 숙성 원액을 물 한 방울 섞지 않은 배럴 프루프(58.4%)로 블렌딩해 폭발적인 오렌지·캐러멜을 주는 버번",
  "rittenhouse-rye": "바틀드 인 본드(50%·4년 숙성) 규정을 충족하며 클래식 칵테일과 니트 모두에서 호밀·코코아 존재감이 뚜렷한 라이",
  "sazerac-rye": "뉴올리언스의 전설적인 사제락 칵테일을 탄생시켰으며 상쾌한 민트·감귤·후추 스파이스가 산뜻하게 어우러지는 라이",
  "royal-brackla-12": "영국 왕실 최초 ‘로열’ 칭호를 받은 증류소로 올로로소 셰리 피니시를 통해 화사한 과일과 스파이스를 담은 12년 몰트",
};

const officialRatingsById = {
  "macallan-12": 91,
  "lagavulin-16": 95,
  "balvenie-12": 90,
  "hibiki-harmony": 90,
  "woodford-reserve": 89,
  "glenfiddich-12": 86,
  "glenlivet-12": 86,
  "glenmorangie-10": 88,
  "glenmorangie-original-12": 90,
  "glenallachie-12": 90,
  "glenallachie-15": 92,
  "aberlour-12": 88,
  "aberlour-abunadh": 93,
  "ardbeg-10": 93,
  "ardbeg-uigeadail": 95,
  "laphroaig-10": 91,
  "talisker-10": 92,
  "highland-park-12": 90,
  "bruichladdich-classic-laddie": 89,
  "makers-mark": 87,
  "wild-turkey-101": 90,
  "johnnie-walker-black": 89,
  "bulleit-rye": 88,
  "macallan-double-cask-12": 89,
  "macallan-sherry-oak-18": 95,
  "glenfiddich-15": 90,
  "glenfiddich-18": 92,
  "balvenie-caribbean-cask-14": 91,
  "oban-14": 91,
  "caol-ila-12": 90,
  "springbank-10": 94,
  "dalmore-12": 89,
  "bowmore-12": 88,
  "singleton-dufftown-12": 86,
  "auchentoshan-three-wood": 88,
  "tamnavulin-double-cask": 85,
  "tamnavulin-sherry-cask": 86,
  "benromach-10": 91,
  "tamdhu-12": 90,
  "bunnahabhain-12": 92,
  "mortlach-16": 93,
  "jura-12-sherry-cask": 86,
  "glen-grant-arboralis": 84,
  "smoky-scot": 85,
  "glenfarclas-12": 89,
  "cardhu-12": 86,
  "kirkland-single-malt": 88,
  "yamazaki-12": 93,
  "hakushu-12": 92,
  "yoichi-single-malt": 90,
  "kavalan-classic": 89,
  "kavalan-distillery-select-no1": 86,
  "kavalan-solist-oloroso": 95,
  "teachers-highland-cream": 82,
  "kirkland-blended-scotch": 81,
  "kirkland-12-scotch": 86,
  "kirkland-canadian-whisky": 84,
  "famous-grouse": 82,
  "grants-triple-wood": 83,
  "bells-original": 80,
  "black-bottle": 85,
  "naked-malt": 88,
  "john-barr-reserve": 84,
  "cutty-sark-prohibition": 88,
  "black-and-white": 81,
  "monkey-shoulder": 88,
  "johnnie-walker-red": 81,
  "johnnie-walker-blonde": 84,
  "johnnie-walker-black-ruby": 89,
  "johnnie-walker-double-black": 89,
  "johnnie-walker-green-15": 92,
  "johnnie-walker-gold-reserve": 89,
  "johnnie-walker-blue": 94,
  "ballantines-finest": 82,
  "ballantines-12": 86,
  "ballantines-17": 91,
  "ballantines-21": 92,
  "chivas-12": 86,
  "chivas-15-xv": 88,
  "chivas-mizunara": 88,
  "royal-salute-21": 92,
  "dewars-white-label": 83,
  "dewars-12": 87,
  "jameson-irish": 86,
  "bushmills-black-bush": 88,
  "redbreast-12": 94,
  "crown-royal": 85,
  "suntory-kakubin": 83,
  "suntory-toki": 85,
  "nikka-from-the-barrel": 92,
  "hibiki-17": 95,
  "kirkland-small-batch-bourbon": 88,
  "jack-daniels-old-no7": 84,
  "jack-daniels-tennessee-apple": 83,
  "gentleman-jack": 85,
  "jim-beam-white": 82,
  "evan-williams-black": 85,
  "evan-williams-bib": 89,
  "evan-williams-12": 91,
  "bulleit-bourbon": 88,
  "1792-small-batch": 89,
  "buffalo-trace": 90,
  "eagle-rare-10": 92,
  "four-roses-single-barrel": 92,
  "four-roses-yellow": 85,
  "woodford-double-oaked": 92,
  "makers-mark-46": 90,
  "knob-creek-9": 91,
  "elijah-craig-small-batch": 90,
  "blantons-original": 92,
  "russells-reserve-10": 90,
  "wild-turkey-rare-breed": 93,
  "rittenhouse-rye": 90,
  "sazerac-rye": 89,
  "royal-brackla-12": 89,
};

function defaultSummaryForWhisky(whisky) {
  const aroma = whisky.notes?.aroma && whisky.notes.aroma !== "기록 없음" ? whisky.notes.aroma : "";
  const taste = whisky.notes?.taste && whisky.notes.taste !== "기록 없음" ? whisky.notes.taste : "";
  if (aroma && taste) return `${aroma} 향과 ${taste} 풍미가 어우러지는 ${whisky.region || ""} ${whisky.type || "위스키"}`.replace(/\s+/g, " ").trim();
  return `${whisky.distillery || "증류소"}에서 선보이는 개성 있는 ${whisky.type || "위스키"}`;
}

function parseAveragePriceValue(averagePrice = "", fallbackValue = 0) {
  if (Number(fallbackValue) > 0) return Number(fallbackValue);
  const matches = String(averagePrice).match(/\d[\d,]*/g);
  if (!matches || !matches.length) return 0;
  const nums = matches
    .map((token) => Number(token.replace(/,/g, "")))
    .filter((num) => Number.isFinite(num) && num > 0);
  if (!nums.length) return 0;
  if (nums.length === 1) return nums[0];
  return Math.round((nums[0] + nums[1]) / 2);
}

seedWhiskies.forEach((whisky) => {
  whisky.summary = whisky.summary || summariesById[whisky.id] || defaultSummaryForWhisky(whisky);
  whisky.officialRating = whisky.officialRating || officialRatingsById[whisky.id] || 86;
  whisky.priceValue = parseAveragePriceValue(whisky.averagePrice, whisky.priceValue);
});

const storyCategories = [
  { id: "all", label: "전체" },
  { id: "types", label: "위스키 종류" },
  { id: "storage", label: "보관법" },
  { id: "drinking", label: "즐기는 방법" },
  { id: "trivia", label: "관련 상식" },
];

const whiskyStorySections = [
  {
    id: "types",
    eyebrow: "01 · WHISKY STYLES",
    title: "위스키 종류",
    description: "원료와 증류·블렌딩 방식에 따라 달라지는 위스키의 대표 스타일",
    items: [
      {
        badge: "STYLE 01",
        en: "Single Malt Whisky",
        title: "싱글몰트 위스키",
        summary: "단 한 곳의 증류소(Single)에서 100% 발아 보리(Malt)만을 원료로 단식 증류기를 통해 만들어낸 위스키입니다. 산지와 증류소 고유의 개성이 가장 뚜렷하게 드러납니다.",
        points: [
          "<strong>스페이사이드</strong>: 과일·꿀·셰리 오크의 화려하고 우아한 풍미 (맥캘란, 글렌피딕, 발베니)",
          "<strong>아일라</strong>: 피트(이탄) 연기와 바닷바람의 강렬한 스모키 풍미 (라프로익, 아드벡, 보모어)",
          "<strong>하이랜드 & 캠벨타운</strong>: 화사한 꽃향기부터 묵직한 몰트·소금기까지 다채로운 스펙트럼 (달모어, 오반)",
        ],
        tags: "대표 보틀 · 맥캘란 12년, 글렌피딕 15년, 달모어 12년",
        exploreType: "싱글몰트",
      },
      {
        badge: "STYLE 02",
        en: "Blended Whisky",
        title: "블렌디드 위스키",
        summary: "개성이 강한 여러 싱글몰트 위스키에 부드러운 그레인(곡물) 위스키를 마스터 블렌더의 비율로 조화시킨 스타일입니다. 균형감이 뛰어나고 언제 마셔도 편안합니다.",
        points: [
          "<strong>일관된 밸런스</strong>: 수십 가지 원액을 블렌딩해 복합적이면서도 모나지 않은 맛 구현",
          "<strong>가성비 데일리 & 하이볼</strong>: 티처스, 페이머스 그라우스, 산토리 가쿠빈, 커클랜드 스카치 등 활용도가 뛰어남",
          "<strong>블렌디드 몰트</strong>: 그레인 없이 몰트 원액끼리만 섞은 스타일 (몽키숄더, 조니워커 그린)",
        ],
        tags: "대표 보틀 · 조니워커 시리즈, 티처스, 히비키 하모니, 발렌타인",
        exploreType: "블렌디드",
      },
      {
        badge: "STYLE 03",
        en: "Bourbon Whiskey",
        title: "버번 & 테네시 위스키",
        summary: "옥수수를 최소 51% 이상 사용하고, 안쪽을 불로 강하게 그을린(Charring) 새 아메리칸 화이트 오크통에서 숙성하는 미국 대표 위스키입니다.",
        points: [
          "<strong>진한 단맛과 타격감</strong>: 바닐라, 캐러멜, 메이플 시럽, 구운 오크와 코코넛 아로마",
          "<strong>테네시 위스키</strong>: 사탕단풍나무 숯으로 원액을 여과(링컨 카운티 공법)해 한층 부드러운 스타일 (잭 다니엘스)",
          "<strong>밀(Wheat) 버번</strong>: 호밀 대신 밀을 배합해 부드럽고 달콤한 스타일 (메이커스 마크)",
        ],
        tags: "대표 보틀 · 와일드 터키 101, 잭 다니엘스, 버팔로 트레이스",
        exploreType: "버번",
      },
      {
        badge: "STYLE 04",
        en: "Rye Whiskey",
        title: "라이 위스키",
        summary: "호밀(Rye) 함량 51% 이상으로 빚어내는 미국 위스키로, 버번보다 단맛은 절제되고 후추·민트·시나몬 같은 알싸한 스파이스가 돋보입니다.",
        points: [
          "<strong>스파이시 & 드라이</strong>: 입안을 깔끔하게 잡아주는 드라이한 피니시와 허브·향신료 노트",
          "<strong>클래식 칵테일의 기주</strong>: 올드 패션드, 맨해튼, 사제락 등 바텐더들이 사랑하는 베이스",
          "<strong>바틀드 인 본드(BiB)</strong>: 단일 증류 시즌·4년 이상 숙성·50% 도수 규정을 지킨 정통 표기",
        ],
        tags: "대표 보틀 · 불릿 라이, 리튼하우스 라이, 사제락 라이",
        exploreType: "라이",
      },
    ],
  },
  {
    id: "storage",
    eyebrow: "02 · PROPER STORAGE",
    title: "위스키 보관법",
    description: "소중한 보틀의 향과 맛을 마지막 한 잔까지 지키는 4가지 원칙",
    items: [
      {
        badge: "RULE 01",
        en: "Always Keep Upright",
        title: "반드시 세워서 보관하세요",
        summary: "코르크가 마르지 않게 눕혀 보관하는 와인과 달리, 도수가 40% 이상인 위스키는 병을 눕히면 고도수 알코올이 코르크를 부식시킵니다.",
        points: [
          "<strong>코르크 손상 방지</strong>: 알코올과 계속 닿으면 코르크가 삭아서 개봉 시 부러지거나 위스키에 냄새가 배어듭니다.",
          "<strong>가끔 적셔주기</strong>: 장기간 보관할 때는 몇 달에 한 번씩만 병을 살짝 기울였다 세워 코르크 수분만 유지해 주세요.",
        ],
        tags: "핵심 팁 · 와인은 눕혀서, 위스키는 세워서",
      },
      {
        badge: "RULE 02",
        en: "Avoid Sunlight & Heat",
        title: "직사광선 차단과 일정한 온도",
        summary: "자외선과 급격한 온도 변화는 위스키의 가장 큰 적입니다. 빛에 노출되면 색이 바래고 섬세한 에스테르(과일·꽃향기) 성분이 파괴됩니다.",
        points: [
          "<strong>적정 온도 15~20°C</strong>: 서늘하고 온도 변화가 적은 실내 찬장이나 그늘진 선반이 이상적입니다.",
          "<strong>냉장·냉동 보관 지양</strong>: 지나치게 차가우면 향이 닫히고 지방산 성분이 하얗게 응고(백탁 현상)될 수 있습니다.",
          "<strong>케이스 활용</strong>: 구매 시 제공된 종이 박스나 틴케이스에 넣어두면 빛을 완벽히 차단할 수 있습니다.",
        ],
        tags: "핵심 팁 · 직사광선 없는 어두운 실내 선반",
      },
      {
        badge: "RULE 03",
        en: "Airing & Oxidation",
        title: "개봉 후 에어링(Airing)과 산화 관리",
        summary: "병을 처음 열면 알코올 부즈(자극)가 강할 수 있지만, 병 안에 들어간 산소와 만나면서 점차 알코올이 둥글어지고 숨은 향이 피어납니다.",
        points: [
          "<strong>황금 구간</strong>: 개봉 후 1~3개월, 잔량이 2/3~1/2 정도 남았을 때 가장 화사한 맛을 보여주는 경우가 많습니다.",
          "<strong>잔량 1/3 이하 주의</strong>: 병 속 공기층이 넓어지면 산화가 빨라져 향이 날아가므로 6개월~1년 안에 마시는 것이 좋습니다.",
        ],
        tags: "핵심 팁 · 뚜껑을 연 뒤 천천히 변화하는 맛을 기록해 보세요",
      },
      {
        badge: "RULE 04",
        en: "Parafilm & Decanting",
        title: "장기 보관과 소분 팁",
        summary: "아껴 마시는 고가 보틀이거나 개봉한 위스키가 여러 병이라면 간단한 도구로 증발과 산화를 늦출 수 있습니다.",
        points: [
          "<strong>소분 공병 활용</strong>: 위스키가 1/3 미만으로 남았을 때 작은 유리 공병에 옮겨 담으면 공기 접촉 면적을 크게 줄일 수 있습니다.",
          "<strong>파라필름 마감</strong>: 장기간 마시지 않을 보틀은 캡 주변에 실험용 파라필름을 감아두면 알코올 증발을 막는 데 도움이 됩니다.",
        ],
        tags: "핵심 팁 · 남은 양이 적을 땐 작은 병에 옮겨 담기",
      },
    ],
  },
  {
    id: "drinking",
    eyebrow: "03 · HOW TO ENJOY",
    title: "위스키 즐기는 방법",
    description: "기분과 자리에 맞춰 위스키의 매력을 100% 끌어내는 음용법과 테이스팅 가이드",
    items: [
      {
        badge: "SERVE 01",
        en: "Neat & Chaser",
        title: "니트 (Neat · 스트레이트)",
        summary: "얼음이나 물을 섞지 않고 상온의 위스키 원액 그대로를 음미하는 방법입니다. 증류소가 의도한 본연의 향과 질감을 가장 정확하게 느낄 수 있습니다.",
        points: [
          "<strong>글렌케언 글라스</strong>: 아래는 넓고 입구는 좁아지는 튤립 모양 잔이 아로마를 모아주어 테이스팅에 최적입니다.",
          "<strong>체이서(Chaser) 곁들이기</strong>: 상온의 생수 한 잔을 옆에 두고 한 모금 마신 뒤 입안을 헹구면 다음 모금의 향을 더욱 선명하게 느낄 수 있습니다.",
        ],
        tags: "추천 · 싱글몰트, 고숙성 블렌디드",
      },
      {
        badge: "SERVE 02",
        en: "Water Drop & Twice Up",
        title: "워터 드롭 & 트와이스 업",
        summary: "위스키에 상온의 물 몇 방울을 떨어뜨리면 알코올과 결합해 있던 향미 분자가 풀려나오며 꽃과 과일 아로마가 극적으로 열립니다.",
        points: [
          "<strong>워터 드롭(Water Drop)</strong>: 스포이트나 빨대로 물 2~3방울을 더해 알코올 자극은 줄이고 숨은 향을 깨웁니다.",
          "<strong>트와이스 업(Twice Up)</strong>: 위스키와 상온수를 1:1로 섞어 도수를 20%대로 낮추는 방식으로, 마스터 블렌더들이 관능 평가할 때 즐겨 씁니다.",
        ],
        tags: "추천 · CS(고도수) 위스키, 향이 풍부한 싱글몰트",
      },
      {
        badge: "SERVE 03",
        en: "On the Rocks & Highball",
        title: "온더락 & 하이볼",
        summary: "얼음과 탄산수를 활용해 온도감과 청량감을 더하는 방식입니다. 위스키가 낯선 입문자나 식사와 함께 곁들이는 반주로 제격입니다.",
        points: [
          "<strong>온더락(On the Rocks)</strong>: 잔에 크고 단단한 얼음을 넣고 위스키를 부어, 얼음이 천천히 녹으며 변화하는 맛의 그라데이션을 즐깁니다.",
          "<strong>하이볼(Highball)</strong>: 얼음을 가득 채운 잔에 위스키 1 : 탄산수 3~4 비율로 붓고 마들러로 한 번만 가볍게 들어 올리듯 섞어 탄산을 살립니다.",
        ],
        tags: "추천 · 티처스, 산토리 가쿠빈, 짐빔, 버번 위스키",
      },
      {
        badge: "TASTING GUIDE",
        en: "Nose · Palate · Finish",
        title: "시음 기록을 위한 테이스팅 3단계",
        summary: "내 보관함에 시음 노트를 남길 때 AROMA(향) · TASTE(맛) · FINISH(여운) 세 단계로 나누어 집중해 보면 나만의 취향을 쉽게 발견할 수 있습니다.",
        points: [
          "<strong>1단계 AROMA (향)</strong>: 코를 잔에 바로 대지 말고 천천히 거리를 좁히며 입을 살짝 벌려 맡으면 알코올 자극 없이 과일·꽃·오크 향이 느껴집니다.",
          "<strong>2단계 TASTE (맛)</strong>: 소량을 입에 머금고 혀 전체로 굴리며 단맛, 산미, 스파이스와 오일리한 바디감을 확인합니다.",
          "<strong>3단계 FINISH (여운)</strong>: 삼킨 뒤 코로 천천히 숨을 내쉬며 입안에 남는 잔향(피트, 초콜릿, 견과류)과 지속 시간을 음미합니다.",
        ],
        tags: "팁 · 정답은 없으니 떠오르는 일상 속 향과 기억을 자유롭게 적어보세요",
      },
    ],
  },
  {
    id: "trivia",
    eyebrow: "04 · WHISKY TRIVIA",
    title: "알아두면 좋은 위스키 상식",
    description: "라벨과 용어를 읽는 즐거움을 더해주는 흥미로운 위스키 배경지식",
    items: [
      {
        badge: "TRIVIA 01",
        en: "The Angel's Share",
        title: "천사의 몫 (Angel's Share)",
        summary: "오크통 속에서 위스키가 숙성되는 동안 매년 약 2%씩 알코올과 수분이 통 밖으로 자연 증발하는데, 이를 '천사들이 먼저 마신 몫'이라 부릅니다.",
        points: [
          "<strong>20년 숙성의 비밀</strong>: 스코틀랜드에서 20년을 숙성하면 처음 담은 원액의 약 30~40%가 사라져 고숙성 위스키일수록 귀하고 가격이 높아집니다.",
          "<strong>열대 숙성</strong>: 대만(카발란)이나 인도처럼 더운 기후에서는 연 10~12%씩 증발하는 대신 4~6년 만에도 짙고 농밀한 숙성미를 얻습니다.",
        ],
        tags: "키워드 · 숙성 연수, 희소성",
      },
      {
        badge: "TRIVIA 02",
        en: "Oak Cask & Maturation",
        title: "맛과 색의 70%를 결정하는 오크통(Cask)",
        summary: "증류기를 막 빠져나온 위스키 원액(New Make Spirit)은 소주처럼 투명합니다. 갈색 빛깔과 깊은 풍미는 전적으로 오크통 숙성에서 탄생합니다.",
        points: [
          "<strong>버번 캐스크 (Ex-Bourbon)</strong>: 미국 버번을 숙성했던 아메리칸 오크통으로 바닐라, 꿀, 코코넛, 밝은 황금빛을 부여합니다.",
          "<strong>셰리 캐스크 (Ex-Sherry)</strong>: 스페인 주정강화 와인(셰리)을 담았던 오크통으로 건포도, 무화과, 다크초콜릿과 붉은 호박색을 만듭니다.",
          "<strong>더블우드 / 피니시</strong>: 서로 다른 두 종류 이상의 캐스크에서 차례로 숙성해 복합적인 레이어를 입히는 기법입니다.",
        ],
        tags: "키워드 · 셰리 오크, 더블 캐스크, 미즈나라",
      },
      {
        badge: "TRIVIA 03",
        en: "Peat & Smokiness",
        title: "피트 (Peat · 이탄)와 스모키향",
        summary: "스코틀랜드 해안과 섬 지역에서 수천 년간 헤더 풀과 식물이 퇴적되어 만들어진 흙(이탄)을 태워 보리의 싹을 말릴 때 배어드는 독특한 훈연 향입니다.",
        points: [
          "<strong>호불호가 갈리는 매력</strong>: 처음엔 정로환·소독약·모닥불 연기처럼 낯설지만, 익숙해지면 대체 불가능한 감칠맛과 긴 여운에 빠지게 됩니다.",
          "<strong>입문부터 매니아까지</strong>: 티처스·블랙보틀·보모어 12년은 은은한 피트 입문용으로, 라프로익·아드벡은 40~55 PPM 이상의 헤비 피트로 유명합니다.",
        ],
        tags: "키워드 · 아일라, 피트향, PPM",
      },
      {
        badge: "TRIVIA 04",
        en: "Label Terms: CS · NAS · Whisky vs Whiskey",
        title: "라벨 속 용어: CS · NAS · 철자 차이",
        summary: "위스키 병 라벨에 적힌 약어와 표기법만 알아도 어떤 성격의 술인지 한눈에 파악할 수 있습니다.",
        points: [
          "<strong>CS (Cask Strength)</strong>: 병입 전 물을 타지 않고 오크통 원액 도수 그대로(보통 50~60%대) 담아낸 강렬하고 진한 위스키",
          "<strong>NAS (No Age Statement)</strong>: 숙성 연수 표기 없이 마스터 블렌더가 다양한 연수의 원액을 조합해 최적의 맛을 구현한 위스키 (히비키 하모니, 아드벡 우거다일 등)",
          "<strong>Whisky vs Whiskey</strong>: 스코틀랜드·일본·캐나다·대만은 'Whisky', 아일랜드와 미국은 주로 'e'가 들어간 'Whiskey'로 표기합니다.",
        ],
        tags: "키워드 · 라벨 읽는 법, 캐스크 스트렝스",
      },
    ],
  },
];

const storageKey = "stillnote-whisky-collection-v1";
const types = ["전체", "싱글몰트", "버번", "블렌디드", "라이"];
const shelfCategories = [
  { id: "all", label: "전체" },
  { id: "owned", label: "평가한 위스키" },
  { id: "wishlist", label: "관심 위스키" },
];
let selectedShelfStatus = "all";
let selectedType = "전체";
let selectedExploreType = "전체";
let selectedStoryCategory = "all";
let currentTab = "collection";
let activeWhiskyId = null;
let toastTimer;
let newWhiskyPhoto = "";
let newWhiskyPhotoSource = null;
let onlineLookupCandidates = [];

function normalizeShelfStatus(isSaved, shelfStatus) {
  if (!isSaved) return "";
  return shelfStatus === "wishlist" ? "wishlist" : "owned";
}

function getShelfStatus(whisky) {
  if (!whisky) return "";
  return normalizeShelfStatus(Boolean(whisky.isSaved), whisky.shelfStatus);
}

function loadWhiskies() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(stored)) {
      const storedById = new Map(stored.map((whisky) => [whisky.id, whisky]));
      const seedIds = new Set(seedWhiskies.map((whisky) => whisky.id));
      const savedSeeds = seedWhiskies.map((seed) => {
        const saved = storedById.get(seed.id);
        const preserveUploadedPhoto = saved?.imageCredit === "내가 등록한 사진";
        const isSaved = Boolean(saved?.isSaved);
        return {
          ...seed,
          isSaved,
          shelfStatus: normalizeShelfStatus(isSaved, saved?.shelfStatus),
          addedAt: saved?.addedAt || null,
          userReview: { rating: 0, purchasePrice: "", openDate: "", personalNote: "", ...saved?.userReview },
          name: seed.name,
          nameEn: (saved?.nameEn && saved.nameEn !== seed.name) ? saved.nameEn : seed.nameEn,
          summary: seed.summary,
          officialRating: seed.officialRating || officialRatingsById[seed.id] || 86,
          priceValue: parseAveragePriceValue(seed.averagePrice, seed.priceValue),
          ...(preserveUploadedPhoto ? {
            imageUrl: saved.imageUrl,
            fallbackImageUrl: "",
            imagePage: saved.imagePage || "",
            imageCredit: saved.imageCredit,
          } : {
            imageUrl: seed.imageUrl,
            fallbackImageUrl: seed.fallbackImageUrl || "",
            imagePage: seed.imagePage,
            imageCredit: seed.imageCredit,
          }),
        };
      });
      const customWhiskies = stored
        .filter((whisky) => !seedIds.has(whisky.id))
        .map((whisky) => {
          const isSaved = whisky.isSaved !== undefined ? Boolean(whisky.isSaved) : true;
          return {
            ...whisky,
            isSaved,
            shelfStatus: normalizeShelfStatus(isSaved, whisky.shelfStatus),
            nameEn: whisky.nameEn || whisky.name || "",
            summary: whisky.summary || defaultSummaryForWhisky(whisky),
            officialRating: whisky.officialRating || 86,
            priceValue: parseAveragePriceValue(whisky.averagePrice, whisky.priceValue),
          };
        });
      return [...savedSeeds, ...customWhiskies];
    }
  } catch (error) {
    console.warn("컬렉션 데이터를 불러오지 못했습니다.", error);
  }
  return seedWhiskies.map((whisky) => ({ ...whisky, isSaved: false, shelfStatus: "", addedAt: null, userReview: { rating: 0, purchasePrice: "", openDate: "", personalNote: "" } }));
}

function persist() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(whiskies));
  } catch (error) {
    showToast("저장 공간에 기록하지 못했어요.");
  }
}

let whiskies = loadWhiskies();
persist();

function escapeHtml(value = "") {
  return String(value).replace(/[&<>"']/g, (character) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[character]);
}

function normalizeSearchText(value = "") {
  return String(value)
    .toLocaleLowerCase("ko")
    .replace(/글랜/g, "글렌")
    .replace(/맥켈란/g, "맥캘란")
    .replace(/티쳐스/g, "티처스")
    .replace(/하일랜드/g, "하이랜드")
    .replace(/쉐리/g, "셰리")
    .replace(/케스크/g, "캐스크")
    .replace(/피니쉬/g, "피니시")
    .replace(/젝\s*다니엘스?|잭\s*다니엘스?/g, "잭 다니엘")
    .replace(/제네시/g, "테네시")
    .replace(/['’`\-_./&]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesWhiskyQuery(whisky, rawQuery = "") {
  const trimmed = rawQuery.trim();
  if (!trimmed) return true;
  const rawHaystack = `${whisky.name || ""} ${whisky.nameEn || ""} ${whisky.distillery || ""} ${whisky.type || ""} ${whisky.region || ""} ${whisky.summary || ""} ${(whisky.id || "").replace(/-/g, " ")}`.toLocaleLowerCase("ko");
  const normalizedHaystack = normalizeSearchText(rawHaystack);
  const compactHaystack = normalizedHaystack.replace(/\s+/g, "");
  const loweredQuery = trimmed.toLocaleLowerCase("ko");
  if (rawHaystack.includes(loweredQuery)) return true;
  const tokens = normalizeSearchText(trimmed).split(" ").filter(Boolean);
  if (!tokens.length) return true;
  return tokens.every((token) => normalizedHaystack.includes(token) || compactHaystack.includes(token));
}

function bottleArt(whisky, extraClass = "", allowPhotoChange = false) {
  const label = whisky.name.replace(/\s+/g, " ").slice(0, 18);
  const fallbackAttr = whisky.fallbackImageUrl ? ` data-fallback-src="${escapeHtml(whisky.fallbackImageUrl)}"` : "";
  const photo = whisky.imageUrl ? `<img class="bottle-photo" src="${escapeHtml(whisky.imageUrl)}"${fallbackAttr} alt="${escapeHtml(whisky.name)} (${escapeHtml(whisky.nameEn || whisky.name)}) 위스키 병" loading="lazy" decoding="async" referrerpolicy="no-referrer" onload="this.parentElement.classList.add('photo-loaded')" onerror="if(this.dataset.fallbackSrc && this.src !== this.dataset.fallbackSrc){this.src = this.dataset.fallbackSrc; return;} this.parentElement.classList.remove('photo-loaded'); this.remove()">` : "";
  const credit = whisky.imageCredit ? whisky.imagePage
    ? `<a class="photo-credit" href="${escapeHtml(whisky.imagePage)}" target="_blank" rel="noreferrer" aria-label="사진 출처: ${escapeHtml(whisky.imageCredit)}">${escapeHtml(whisky.imageCredit)}</a>`
    : `<span class="photo-credit">${escapeHtml(whisky.imageCredit)}</span>` : "";
  const changeButton = allowPhotoChange ? `<label class="photo-change-button" for="photoInput">사진 변경<input id="photoInput" type="file" accept="image/*" /></label>` : "";
  return `<div class="bottle-art ${whisky.tone || ""} ${extraClass}">${photo}${credit}${changeButton}<div class="bottle-shape"><span class="bottle-label">${escapeHtml(label)}</span></div></div>`;
}

function cardMarkup(whisky, isExplore = false) {
  const rating = Number(whisky.userReview?.rating || 0);
  const official = Number(whisky.officialRating || 86);
  const shelfStatus = getShelfStatus(whisky);
  const visualActions = isExplore
    ? `<div class="card-shelf-actions">
        <button type="button" class="card-shelf-btn ${shelfStatus === "owned" ? "active owned" : ""}" data-shelf-id="${escapeHtml(whisky.id)}" data-shelf-target="owned" aria-label="${shelfStatus === "owned" ? "평가한 위스키에서 해제" : "평가한 위스키로 저장"}" title="${shelfStatus === "owned" ? "평가한 위스키에서 해제" : "평가한 위스키로 저장"}">${shelfStatus === "owned" ? "★ 평가" : "+ 평가"}</button>
        <button type="button" class="card-shelf-btn ${shelfStatus === "wishlist" ? "active wishlist" : ""}" data-shelf-id="${escapeHtml(whisky.id)}" data-shelf-target="wishlist" aria-label="${shelfStatus === "wishlist" ? "관심 위스키에서 해제" : "관심 위스키로 저장"}" title="${shelfStatus === "wishlist" ? "관심 위스키에서 해제" : "관심 위스키로 저장"}">${shelfStatus === "wishlist" ? "♥ 관심" : "♡ 관심"}</button>
      </div>`
    : (shelfStatus ? `<button type="button" class="card-status-badge ${shelfStatus}" data-shelf-id="${escapeHtml(whisky.id)}" data-shelf-target="${shelfStatus === "owned" ? "wishlist" : "owned"}" title="클릭하여 ${shelfStatus === "owned" ? "관심 위스키" : "평가한 위스키"}로 변경">${shelfStatus === "wishlist" ? "♥ 관심" : "★ 평가"}</button>` : "");
  return `<article class="whisky-card" data-open="${escapeHtml(whisky.id)}" tabindex="0" aria-label="${escapeHtml(whisky.name)} ${escapeHtml(whisky.nameEn || "")} 상세 정보">
    <div class="card-visual">${bottleArt(whisky)}
      ${visualActions}
    </div>
    <div class="card-info"><p class="card-distillery">${escapeHtml(whisky.distillery)} <span>· ${escapeHtml(whisky.type)}</span></p>
      <h3 class="card-name">${escapeHtml(whisky.name)}</h3>
      <p class="card-name-en">${escapeHtml(whisky.nameEn || "")}</p>
      ${whisky.summary ? `<p class="card-summary">${escapeHtml(whisky.summary)}</p>` : ""}
      <div class="card-meta"><span>${whisky.abv}% · <strong class="official-score" title="글로벌 전문가·커뮤니티 종합 평점 (100점 만점)">공식 ${official}점</strong></span><span class="card-rating">${rating ? `★ ${rating.toFixed(1)}` : "☆ 평가 전"}</span></div>
      ${isExplore ? `<div class="card-price"><span>참고가</span>${escapeHtml(whisky.averagePrice)}</div>` : ""}
    </div>
  </article>`;
}

function renderFilters() {
  const saved = whiskies.filter((whisky) => whisky.isSaved);
  const ownedCount = saved.filter((whisky) => getShelfStatus(whisky) === "owned").length;
  const wishlistCount = saved.filter((whisky) => getShelfStatus(whisky) === "wishlist").length;
  const countsByStatus = { all: saved.length, owned: ownedCount, wishlist: wishlistCount };
  const shelfStatusRow = document.getElementById("shelfStatusRow");
  if (shelfStatusRow) {
    shelfStatusRow.innerHTML = shelfCategories.map((category) => `
      <button type="button" class="shelf-tab ${selectedShelfStatus === category.id ? "active" : ""} ${category.id}" data-shelf-filter="${category.id}" role="tab" aria-selected="${selectedShelfStatus === category.id}">
        <span>${category.label}</span>
        <strong>${countsByStatus[category.id] || 0}</strong>
      </button>
    `).join("");
  }
  document.getElementById("filterRow").innerHTML = types.map((type) => `<button class="filter-chip ${selectedType === type ? "active" : ""}" data-filter="${type}">${type}</button>`).join("");
  document.getElementById("exploreFilterRow").innerHTML = types.map((type) => `<button class="filter-chip ${selectedExploreType === type ? "active" : ""}" data-explore-filter="${type}">${type}</button>`).join("");
  const storyFilterRow = document.getElementById("storyFilterRow");
  if (storyFilterRow) {
    storyFilterRow.innerHTML = storyCategories.map((category) => `<button class="filter-chip ${selectedStoryCategory === category.id ? "active" : ""}" data-story-filter="${category.id}">${category.label}</button>`).join("");
  }
}

function renderStories() {
  const container = document.getElementById("storyContainer");
  if (!container) return;
  const visibleSections = selectedStoryCategory === "all"
    ? whiskyStorySections
    : whiskyStorySections.filter((section) => section.id === selectedStoryCategory);
  container.innerHTML = visibleSections.map((section) => `
    <section class="story-section" aria-label="${escapeHtml(section.title)}">
      <div class="story-section-header">
        <div>
          <p class="eyebrow">${escapeHtml(section.eyebrow)}</p>
          <h2>${escapeHtml(section.title)}</h2>
        </div>
        <p class="story-section-desc">${escapeHtml(section.description)}</p>
      </div>
      <div class="story-grid">
        ${section.items.map((item) => `
          <article class="story-card">
            <div>
              <div class="story-card-top">
                <span class="story-badge">${escapeHtml(item.badge)}</span>
                <span class="story-en">${escapeHtml(item.en)}</span>
              </div>
              <h3>${escapeHtml(item.title)}</h3>
              <p class="story-summary">${escapeHtml(item.summary)}</p>
              <ul class="story-points">
                ${item.points.map((point) => `<li>${point}</li>`).join("")}
              </ul>
            </div>
            <div class="story-card-footer">
              <span class="story-tags">${escapeHtml(item.tags)}</span>
              ${item.exploreType ? `<button type="button" class="story-explore-btn" data-jump-explore="${escapeHtml(item.exploreType)}">${escapeHtml(item.exploreType)} 보틀 보기 ↗</button>` : ""}
            </div>
          </article>
        `).join("")}
      </div>
    </section>
  `).join("");
}

function renderCollection() {
  const saved = whiskies.filter((whisky) => whisky.isSaved);
  const ownedList = saved.filter((whisky) => getShelfStatus(whisky) === "owned");
  const wishlistList = saved.filter((whisky) => getShelfStatus(whisky) === "wishlist");
  const sortBy = document.getElementById("sortSelect").value;
  const filtered = saved.filter((whisky) => {
    const matchesShelf = selectedShelfStatus === "all" || getShelfStatus(whisky) === selectedShelfStatus;
    const matchesType = selectedType === "전체" || whisky.type === selectedType;
    return matchesShelf && matchesType;
  });
  if (sortBy === "rating") filtered.sort((a, b) => Number(b.userReview?.rating || 0) - Number(a.userReview?.rating || 0));
  if (sortBy === "official") filtered.sort((a, b) => Number(b.officialRating || 0) - Number(a.officialRating || 0));
  if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "ko") || (a.nameEn || "").localeCompare(b.nameEn || "", "en"));
  if (sortBy === "recent") filtered.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
  document.getElementById("savedCount").textContent = String(saved.length).padStart(2, "0");
  document.getElementById("featureCount").textContent = String(ownedList.length).padStart(2, "0");
  const wishlistCountEl = document.getElementById("wishlistCount");
  if (wishlistCountEl) wishlistCountEl.textContent = String(wishlistList.length).padStart(2, "0");
  document.getElementById("collectionGrid").innerHTML = filtered.map((whisky) => cardMarkup(whisky)).join("");
  document.getElementById("collectionEmpty").classList.toggle("hidden", saved.length > 0);
  document.getElementById("collectionGrid").classList.toggle("hidden", filtered.length === 0);
  if (saved.length > 0 && filtered.length === 0) {
    document.getElementById("collectionGrid").classList.remove("hidden");
    const emptyMsg = selectedShelfStatus === "wishlist" && wishlistList.length === 0
      ? "아직 담아둔 관심 위스키가 없어요. 탐색 탭에서 ‘♡ 관심’으로 저장해 보세요."
      : selectedShelfStatus === "owned" && ownedList.length === 0
        ? "아직 등록한 평가한 위스키가 없어요. 탐색 탭에서 ‘+ 평가’로 저장하거나 시음 기록을 남겨보세요."
        : "선택한 조건의 위스키가 아직 없어요.";
    document.getElementById("collectionGrid").innerHTML = `<p class="filter-empty">${emptyMsg}</p>`;
  }
}

function renderExplore() {
  const query = document.getElementById("searchInput").value;
  const sortBy = document.getElementById("exploreSortSelect")?.value || "default";
  const result = whiskies.filter((whisky) => {
    const matchesType = selectedExploreType === "전체" || whisky.type === selectedExploreType;
    return matchesType && matchesWhiskyQuery(whisky, query);
  });
  if (sortBy === "price-asc") {
    result.sort((a, b) => {
      const priceA = parseAveragePriceValue(a.averagePrice, a.priceValue);
      const priceB = parseAveragePriceValue(b.averagePrice, b.priceValue);
      if (!priceA && !priceB) return a.name.localeCompare(b.name, "ko");
      if (!priceA) return 1;
      if (!priceB) return -1;
      return priceA - priceB || Number(b.officialRating || 0) - Number(a.officialRating || 0);
    });
  } else if (sortBy === "price-desc") {
    result.sort((a, b) => {
      const priceA = parseAveragePriceValue(a.averagePrice, a.priceValue);
      const priceB = parseAveragePriceValue(b.averagePrice, b.priceValue);
      if (!priceA && !priceB) return a.name.localeCompare(b.name, "ko");
      if (!priceA) return 1;
      if (!priceB) return -1;
      return priceB - priceA || Number(b.officialRating || 0) - Number(a.officialRating || 0);
    });
  } else if (sortBy === "official-desc") {
    result.sort((a, b) => Number(b.officialRating || 0) - Number(a.officialRating || 0) || a.name.localeCompare(b.name, "ko"));
  } else if (sortBy === "official-asc") {
    result.sort((a, b) => Number(a.officialRating || 0) - Number(b.officialRating || 0) || a.name.localeCompare(b.name, "ko"));
  } else if (sortBy === "name-asc") {
    result.sort((a, b) => a.name.localeCompare(b.name, "ko") || (a.nameEn || "").localeCompare(b.nameEn || "", "en"));
  } else if (sortBy === "name-desc") {
    result.sort((a, b) => b.name.localeCompare(a.name, "ko") || (b.nameEn || "").localeCompare(a.nameEn || "", "en"));
  }
  document.getElementById("resultCount").textContent = result.length;
  document.getElementById("exploreGrid").innerHTML = result.map((whisky) => cardMarkup(whisky, true)).join("");
  document.getElementById("exploreEmpty").classList.toggle("hidden", result.length > 0);
  document.getElementById("exploreGrid").classList.toggle("hidden", result.length === 0);
}

function render() {
  renderFilters();
  renderCollection();
  renderExplore();
  renderStories();
}

function showToast(message) {
  const toast = document.getElementById("toast");
  toast.textContent = message;
  toast.classList.add("visible");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("visible"), 2200);
}

function setTab(tab) {
  currentTab = tab;
  document.querySelectorAll(".nav-item").forEach((button) => {
    const active = button.dataset.tab === tab;
    button.classList.toggle("active", active);
    if (active) button.setAttribute("aria-current", "page");
    else button.removeAttribute("aria-current");
  });
  document.getElementById("collectionView").classList.toggle("active", tab === "collection");
  document.getElementById("exploreView").classList.toggle("active", tab === "explore");
  document.getElementById("storyView")?.classList.toggle("active", tab === "story");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function setWhiskyShelfStatus(id, targetStatus, allowToggleOff = true) {
  const whisky = whiskies.find((item) => item.id === id);
  if (!whisky) return;
  const currentStatus = getShelfStatus(whisky);
  if (!targetStatus || (allowToggleOff && currentStatus === targetStatus)) {
    whisky.isSaved = false;
    whisky.shelfStatus = "";
    whisky.addedAt = null;
    showToast("보관함에서 삭제했어요.");
  } else {
    whisky.isSaved = true;
    whisky.shelfStatus = targetStatus === "wishlist" ? "wishlist" : "owned";
    if (!whisky.addedAt) whisky.addedAt = Date.now();
    showToast(whisky.shelfStatus === "wishlist" ? "관심 위스키로 보관함에 담았어요." : "평가한 위스키로 보관함에 담았어요.");
  }
  persist();
  render();
  if (activeWhiskyId === id) renderDetail(id, getReviewDraft());
}

function toggleSaved(id) {
  const whisky = whiskies.find((item) => item.id === id);
  if (!whisky) return;
  setWhiskyShelfStatus(id, whisky.isSaved ? "" : "owned", false);
}

function getReviewDraft() {
  return {
    nameEn: document.getElementById("detailEnglishName")?.value,
    purchasePrice: document.getElementById("purchasePrice")?.value || "",
    openDate: document.getElementById("openDate")?.value || "",
    personalNote: document.getElementById("personalNote")?.value || "",
    shelfStatus: document.querySelector("[data-detail-shelf].active")?.dataset.detailShelf,
  };
}

function clampHalfRating(value) {
  const num = Math.round(Number(value || 0) * 2) / 2;
  return Math.max(0, Math.min(5, num));
}

function buildHalfStarRatingMarkup(ratingValue) {
  const currentRating = clampHalfRating(ratingValue);
  return Array.from({ length: 5 }, (_, index) => {
    const starNumber = index + 1;
    const leftScore = (starNumber - 0.5).toFixed(1);
    const rightScore = starNumber.toFixed(1);
    const stateClass = currentRating >= starNumber
      ? "full"
      : currentRating >= starNumber - 0.5
        ? "half"
        : "";
    return `<span class="star-unit ${stateClass}">
      <span class="star-glyph" aria-hidden="true">★</span>
      <button type="button" class="star-hit left" data-rating="${leftScore}" aria-label="${leftScore}점"></button>
      <button type="button" class="star-hit right" data-rating="${rightScore}" aria-label="${rightScore}점"></button>
    </span>`;
  }).join("");
}

function renderDetail(id, draft = {}) {
  const whisky = whiskies.find((item) => item.id === id);
  if (!whisky) return;
  activeWhiskyId = id;
  const review = { rating: 0, purchasePrice: "", openDate: "", personalNote: "", ...whisky.userReview, ...draft };
  const currentRating = clampHalfRating(review.rating);
  const currentNameEn = draft.nameEn !== undefined ? draft.nameEn : (whisky.nameEn || "");
  const currentShelfStatus = draft.shelfStatus || getShelfStatus(whisky) || "owned";
  const stars = buildHalfStarRatingMarkup(currentRating);
  const naverSearchUrl = new URL("https://search.naver.com/search.naver");
  naverSearchUrl.searchParams.set("query", whisky.name);
  document.getElementById("detailContent").innerHTML = `
    <div class="detail-hero">${bottleArt(whisky, "", true)}<div><p class="detail-distillery">${escapeHtml(whisky.distillery.toUpperCase())}</p><h2 id="detailName">${escapeHtml(whisky.name)}</h2><p class="detail-name-en">${escapeHtml(currentNameEn)}</p>${whisky.summary ? `<p class="detail-summary">${escapeHtml(whisky.summary)}</p>` : ""}<div class="detail-meta"><span>${escapeHtml(whisky.type)}</span><span>${whisky.abv}% ABV</span><span>${escapeHtml(whisky.region)}</span><span class="detail-official-badge" title="Whisky Advocate · Wine Enthusiast · Whiskybase 등 글로벌 전문가·커뮤니티 종합 평점">★ 공식 평점 ${Number(whisky.officialRating || 86)} / 100</span></div><p class="detail-price"><span>참고 가격</span>${escapeHtml(whisky.averagePrice)}</p><a class="naver-search-button" data-naver-search href="${escapeHtml(naverSearchUrl.href)}" target="_blank" rel="noopener noreferrer"><span class="search-icon" aria-hidden="true"></span><span>인터넷 검색</span><span class="naver-arrow" aria-hidden="true">↗</span></a></div></div>
    <section class="notes-section"><div class="detail-section-title"><h3>테이스팅 노트</h3><span>TASTING PROFILE</span></div><div class="note-groups"><div class="note-group"><span>AROMA</span><p>${escapeHtml(whisky.notes.aroma)}</p></div><div class="note-group"><span>TASTE</span><p>${escapeHtml(whisky.notes.taste)}</p></div><div class="note-group"><span>FINISH</span><p>${escapeHtml(whisky.notes.finish)}</p></div></div></section>
    <section class="review-section"><div class="detail-section-title"><h3>나의 기록</h3><span>PERSONAL JOURNAL</span></div>
      <div class="shelf-status-row">
        <span class="field-label">보관함 구분</span>
        <div class="shelf-status-picker" role="group" aria-label="보관함 구분 선택">
          <button type="button" class="shelf-pick-btn ${currentShelfStatus === "owned" ? "active owned" : ""}" data-detail-shelf="owned">★ 평가한 위스키</button>
          <button type="button" class="shelf-pick-btn ${currentShelfStatus === "wishlist" ? "active wishlist" : ""}" data-detail-shelf="wishlist">♥ 관심 위스키</button>
        </div>
      </div>
      <div class="rating-row">
        <div>
          <span class="field-label">나의 평점 (0.5점 단위)</span>
        </div>
        <div class="rating-controls">
          <div class="stars" role="group" aria-label="별점 (0.5점 단위)">${stars}<span class="rating-value">${currentRating ? currentRating.toFixed(1) : "—"}</span></div>
          <div class="rating-stepper" aria-label="별점 0.5점 미세 조절">
            <button type="button" class="rating-step-btn" data-rating-step="-0.5" aria-label="0.5점 낮추기">-0.5</button>
            <button type="button" class="rating-step-btn" data-rating-step="0.5" aria-label="0.5점 높이기">+0.5</button>
          </div>
        </div>
      </div>
      <div class="review-fields"><div class="form-field note-field"><label for="detailEnglishName">영문 이름</label><input id="detailEnglishName" type="text" maxlength="100" placeholder="예: Johnnie Walker Black Label 12 Year Old" value="${escapeHtml(currentNameEn)}" /></div><div class="form-field"><label for="purchasePrice">구매 가격 (원)</label><input id="purchasePrice" type="number" inputmode="numeric" min="0" placeholder="예: 120000" value="${escapeHtml(review.purchasePrice || "")}" /></div><div class="form-field"><label for="openDate">개봉일</label><input id="openDate" type="date" value="${escapeHtml(review.openDate || "")}" /></div><div class="form-field note-field"><label for="personalNote">시음 메모</label><textarea id="personalNote" placeholder="오늘의 향과 맛, 함께한 순간을 기록해 보세요.">${escapeHtml(review.personalNote || "")}</textarea></div></div>
      <div class="detail-actions">${whisky.isSaved ? `<button class="remove-button" data-remove="${escapeHtml(id)}">보관함 삭제</button>` : ""}<button class="primary-button" id="saveReview">${whisky.isSaved ? "기록 저장하기" : (currentShelfStatus === "wishlist" ? "관심 위스키로 담기" : "평가한 위스키로 담기")} <span aria-hidden="true">↗</span></button></div>
    </section>`;
  document.getElementById("detailBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function renderNewWhiskyForm() {
  activeWhiskyId = null;
  newWhiskyPhoto = "";
  newWhiskyPhotoSource = null;
  onlineLookupCandidates = [];
  document.getElementById("detailContent").innerHTML = `
    <div class="new-whisky-heading"><p class="eyebrow">YOUR OWN BOTTLE</p><h2 id="detailName">위스키 직접 추가</h2><p>나만의 위스키 정보를 입력해 보세요.</p></div>
    <form id="newWhiskyForm" class="new-whisky-form">
      <div class="new-photo-row"><label class="new-photo-preview" id="newPhotoPreview" for="newWhiskyPhotoInput" aria-label="위스키 사진 선택"><span aria-hidden="true">＋</span></label><div><strong>위스키 사진</strong><p>선택 사항 · 사진은 이 기기에 저장됩니다.</p><label class="photo-pick-button" for="newWhiskyPhotoInput">사진 선택<input id="newWhiskyPhotoInput" type="file" accept="image/*" /></label></div></div>
      <section class="internet-lookup" aria-label="인터넷 위스키 정보 검색">
        <label for="onlineWhiskyQuery">인터넷에서 위스키 찾기</label>
        <div class="lookup-input-row"><input id="onlineWhiskyQuery" type="search" autocomplete="off" placeholder="예: Ardbeg Uigeadail" /><button class="lookup-button" id="lookupWhiskyButton" type="button">검색</button></div>
        <p class="lookup-hint">Wikipedia와 Wikimedia Commons에서 찾습니다. 가격과 테이스팅 노트는 직접 확인해 주세요.</p>
        <div id="onlineLookupResults" class="lookup-results" aria-live="polite"></div>
      </section>
      <div class="review-fields">
        <div class="form-field"><label for="newName">위스키 이름 *</label><input id="newName" name="name" required maxlength="80" placeholder="예: 아드벡 우거다일" /></div>
        <div class="form-field"><label for="newEnglishName">영문 이름</label><input id="newEnglishName" name="nameEn" maxlength="100" placeholder="예: Ardbeg Uigeadail" /></div>
        <div class="form-field note-field"><label for="newShelfStatus">보관함 구분 *</label><select id="newShelfStatus" name="shelfStatus"><option value="owned">평가한 위스키</option><option value="wishlist">관심 위스키 (위시리스트)</option></select></div>
        <div class="form-field note-field"><label for="newSummary">한줄 설명</label><input id="newSummary" name="summary" maxlength="120" placeholder="예: 강력한 피트 스모크와 진한 셰리 단맛이 조화로운 아일라 싱글몰트" /></div>
        <div class="form-field"><label for="newDistillery">증류소 / 브랜드 *</label><input id="newDistillery" name="distillery" required maxlength="60" placeholder="예: Ardbeg" /></div>
        <div class="form-field"><label for="newType">종류 *</label><select id="newType" name="type" required>${types.filter((type) => type !== "전체").map((type) => `<option value="${type}">${type}</option>`).join("")}</select></div>
        <div class="form-field"><label for="newAbv">도수 (% ABV) *</label><input id="newAbv" name="abv" type="number" min="0" max="100" step="0.1" required placeholder="예: 46.6" /></div>
        <div class="form-field"><label for="newRegion">지역</label><input id="newRegion" name="region" maxlength="60" placeholder="예: 아일라 · 스코틀랜드" /></div>
        <div class="form-field"><label for="newPrice">참고 가격</label><input id="newPrice" name="averagePrice" maxlength="40" placeholder="예: ₩100,000 – 130,000" /></div>
        <div class="form-field"><label for="newAroma">AROMA</label><input id="newAroma" name="aroma" maxlength="80" placeholder="향기 노트" /></div>
        <div class="form-field"><label for="newTaste">TASTE</label><input id="newTaste" name="taste" maxlength="80" placeholder="맛 노트" /></div>
        <div class="form-field note-field"><label for="newFinish">FINISH</label><input id="newFinish" name="finish" maxlength="80" placeholder="여운 노트" /></div>
      </div>
      <button class="primary-button form-submit" type="submit">내 보관함에 추가 <span aria-hidden="true">↗</span></button>
    </form>`;
  document.getElementById("detailBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function renderLookupResults(localMatches, internetMatches = []) {
  const localResults = localMatches.map((whisky) => `<button class="lookup-result" type="button" data-catalogue-id="${escapeHtml(whisky.id)}"><strong>${escapeHtml(whisky.name)}</strong><span>${escapeHtml(whisky.nameEn || "")} · ${escapeHtml(whisky.distillery)} · ${escapeHtml(whisky.type)}${whisky.isSaved ? " · 이미 보관함에 있어요" : " · 샘플 정보를 사용해 보관함에 추가"}</span></button>`).join("");
  const onlineResults = internetMatches.map((result, index) => `<button class="lookup-result" type="button" data-online-result="${index}"><strong>${escapeHtml(result.title)}</strong><span>${escapeHtml(result.snippet.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim())}</span></button>`).join("");
  document.getElementById("onlineLookupResults").innerHTML = `${localResults}${onlineResults}` || `<p class="lookup-message">검색 결과가 없습니다. 영어 제품명이나 증류소 이름으로 다시 검색해 보세요.</p>`;
}

async function searchWhiskyOnline() {
  const query = document.getElementById("onlineWhiskyQuery").value.trim();
  if (query.length < 2) {
    showToast("위스키 이름을 두 글자 이상 입력해 주세요.");
    return;
  }
  const searchButton = document.getElementById("lookupWhiskyButton");
  const resultsElement = document.getElementById("onlineLookupResults");
  searchButton.disabled = true;
  searchButton.textContent = "검색 중";
  resultsElement.innerHTML = `<p class="lookup-message">기본 목록과 Wikipedia를 검색하고 있어요.</p>`;
  const localMatches = whiskies.filter((whisky) => matchesWhiskyQuery(whisky, query)).slice(0, 4);
  try {
    const internetResults = await Promise.all(["en", "ko"].map(async (language) => {
      const params = new URLSearchParams({
        action: "query",
        list: "search",
        srsearch: `${query} whisky`,
        srlimit: "5",
        format: "json",
        origin: "*",
      });
      const response = await fetch(`https://${language}.wikipedia.org/w/api.php?${params}`);
      if (!response.ok) return [];
      const data = await response.json();
      return (data.query?.search || []).map((result) => ({ ...result, language }));
    }));
    const seenTitles = new Set();
    onlineLookupCandidates = internetResults.flat().filter((result) => {
      const key = result.title.toLocaleLowerCase("en");
      if (seenTitles.has(key)) return false;
      seenTitles.add(key);
      return true;
    }).slice(0, 8);
    renderLookupResults(localMatches, onlineLookupCandidates);
  } catch (error) {
    onlineLookupCandidates = [];
    renderLookupResults(localMatches);
    if (localMatches.length) {
      resultsElement.insertAdjacentHTML("beforeend", `<p class="lookup-message">인터넷 검색을 사용할 수 없어 기본 목록 결과만 표시합니다.</p>`);
    } else {
      resultsElement.innerHTML = `<p class="lookup-message">검색에 실패했어요. 인터넷 연결을 확인해 주세요.</p>`;
    }
  } finally {
    searchButton.disabled = false;
    searchButton.textContent = "검색";
  }
}

function plainText(value = "") {
  return new DOMParser().parseFromString(value, "text/html").body.textContent.trim();
}

function findRegion(extract = "") {
  const regions = [
    ["Speyside", "스페이사이드 · 스코틀랜드"], ["Islay", "아일라 · 스코틀랜드"],
    ["Campbeltown", "캠벨타운 · 스코틀랜드"], ["Highlands?", "하이랜드 · 스코틀랜드"],
    ["Lowlands?", "로우랜드 · 스코틀랜드"], ["Orkney", "오크니 · 스코틀랜드"],
    ["Scotland", "스코틀랜드"], ["Ireland", "아일랜드"], ["Kentucky", "켄터키 · 미국"],
    ["Tennessee", "테네시 · 미국"], ["Japan", "일본"], ["Taiwan", "대만"],
  ];
  const match = regions.find(([pattern]) => new RegExp(`\\b${pattern}\\b`, "i").test(extract));
  return match?.[1] || "";
}

function inferWhiskyType(text = "") {
  if (/single[- ]malt/i.test(text)) return "싱글몰트";
  if (/bourbon/i.test(text)) return "버번";
  if (/\brye\b/i.test(text)) return "라이";
  if (/blended|irish whiskey/i.test(text)) return "블렌디드";
  return "";
}

function previewLookupPhoto(imageUrl, imagePage, imageCredit) {
  newWhiskyPhoto = imageUrl;
  newWhiskyPhotoSource = { page: imagePage, credit: imageCredit };
  const preview = document.getElementById("newPhotoPreview");
  preview.innerHTML = `<img src="${escapeHtml(imageUrl)}" alt="검색된 위스키 병 사진" />`;
  preview.classList.add("has-photo");
}

async function selectOnlineWhisky(index) {
  const candidate = onlineLookupCandidates[index];
  if (!candidate) return;
  const resultsElement = document.getElementById("onlineLookupResults");
  resultsElement.innerHTML = `<p class="lookup-message">${escapeHtml(candidate.title)}의 정보와 병 사진을 불러오고 있어요.</p>`;
  try {
    const pageParams = new URLSearchParams({
      action: "query",
      prop: "extracts|pageimages|info",
      exintro: "1",
      explaintext: "1",
      piprop: "thumbnail",
      pithumbsize: "500",
      inprop: "url",
      titles: candidate.title,
      format: "json",
      origin: "*",
    });
    const pageResponse = await fetch(`https://${candidate.language}.wikipedia.org/w/api.php?${pageParams}`);
    if (!pageResponse.ok) throw new Error("위키백과 정보를 불러오지 못했어요.");
    const pageData = await pageResponse.json();
    const page = Object.values(pageData.query?.pages || {})[0];
    if (!page || page.missing !== undefined) throw new Error("페이지 정보를 찾지 못했어요.");

    const searchQuery = document.getElementById("onlineWhiskyQuery").value.trim();
    const distillery = candidate.title.replace(/\s+distillery.*$/i, "").trim();
    const extract = page.extract || "";
    document.getElementById("newName").value = searchQuery;
    document.getElementById("newEnglishName").value = /[A-Za-z]/.test(searchQuery) ? searchQuery : candidate.title;
    document.getElementById("newDistillery").value = distillery;
    const region = findRegion(extract);
    if (region) document.getElementById("newRegion").value = region;
    const type = inferWhiskyType(`${candidate.title} ${extract}`);
    if (type) document.getElementById("newType").value = type;
    const abvMatch = extract.match(/(\d{2}(?:\.\d+)?)\s*%\s*(?:ABV|alc\/vol|alcohol by volume)/i);
    if (abvMatch) document.getElementById("newAbv").value = abvMatch[1];

    const brandTerm = distillery.toLocaleLowerCase("en").replace(/^the\s+/, "").split(/\s+/)[0];
    let image = null;
    for (const photoQuery of [`${searchQuery} whisky bottle`, `${searchQuery} whisky`, `${brandTerm} whisky bottle`]) {
      const commonsParams = new URLSearchParams({
        action: "query",
        generator: "search",
        gsrsearch: photoQuery,
        gsrnamespace: "6",
        gsrlimit: "8",
        prop: "imageinfo",
        iiprop: "url|extmetadata",
        iiurlwidth: "500",
        format: "json",
        origin: "*",
      });
      const commonsResponse = await fetch(`https://commons.wikimedia.org/w/api.php?${commonsParams}`);
      if (!commonsResponse.ok) continue;
      const commonsData = await commonsResponse.json();
      const files = Object.values(commonsData.query?.pages || {}).filter((file) => file.imageinfo?.[0]?.thumburl);
      image = files.find((file) => file.title.toLocaleLowerCase("en").includes(brandTerm));
      if (image) break;
    }
    if (image) {
      const info = image.imageinfo[0];
      const author = plainText(info.extmetadata?.Artist?.value || "Wikimedia Commons");
      const license = plainText(info.extmetadata?.LicenseShortName?.value || "출처 페이지 참조");
      previewLookupPhoto(info.thumburl, info.descriptionurl, `${author} · ${license}`);
    }

    const sourceUrl = page.fullurl || candidate.url;
    const photoNote = image ? "브랜드 병 사진도 찾았습니다." : "브랜드 병 사진은 찾지 못해 사진은 비워뒀습니다.";
    resultsElement.innerHTML = `<p class="lookup-message">정보를 입력했습니다. ${photoNote} 출처: <a href="${escapeHtml(sourceUrl)}" target="_blank" rel="noreferrer">${escapeHtml(candidate.title)}</a>. 가격과 테이스팅 노트는 확인 후 직접 입력해 주세요.</p>`;
  } catch (error) {
    resultsElement.innerHTML = `<p class="lookup-message">${escapeHtml(error.message || "정보를 불러오지 못했어요.")} 검색 결과를 확인하고 기본 정보를 직접 입력해 주세요.</p>`;
  }
}

function addCatalogueWhisky(id) {
  const whisky = whiskies.find((item) => item.id === id);
  if (!whisky) return;
  const selectedStatus = document.getElementById("newShelfStatus")?.value || "owned";
  if (whisky.isSaved && getShelfStatus(whisky) === selectedStatus) {
    showToast("이미 내 보관함에 있어요.");
    return;
  }
  whisky.isSaved = true;
  whisky.shelfStatus = selectedStatus === "wishlist" ? "wishlist" : "owned";
  whisky.addedAt = Date.now();
  persist();
  render();
  closeDetail();
  showToast(whisky.shelfStatus === "wishlist" ? "기본 위스키를 관심 위스키로 담았어요." : "기본 위스키를 평가한 위스키로 담았어요.");
}

function compressPhoto(file) {
  return new Promise((resolve, reject) => {
    if (!file?.type.startsWith("image/")) {
      reject(new Error("이미지 파일을 선택해 주세요."));
      return;
    }
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("사진을 읽지 못했어요."));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("사진을 열지 못했어요."));
      image.onload = () => {
        const scale = Math.min(1, 960 / Math.max(image.naturalWidth, image.naturalHeight));
        const canvas = document.createElement("canvas");
        canvas.width = Math.round(image.naturalWidth * scale);
        canvas.height = Math.round(image.naturalHeight * scale);
        canvas.getContext("2d").drawImage(image, 0, 0, canvas.width, canvas.height);
        resolve(canvas.toDataURL("image/jpeg", 0.8));
      };
      image.src = reader.result;
    };
    reader.readAsDataURL(file);
  });
}

function saveNewWhisky(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const name = formData.get("name").trim();
  const nameEn = formData.get("nameEn").trim() || name;
  const distillery = formData.get("distillery").trim();
  const shelfStatus = formData.get("shelfStatus") === "wishlist" ? "wishlist" : "owned";
  const id = `custom-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
  const notes = {
    aroma: formData.get("aroma").trim() || "기록 없음",
    taste: formData.get("taste").trim() || "기록 없음",
    finish: formData.get("finish").trim() || "기록 없음",
  };
  const type = formData.get("type");
  const region = formData.get("region").trim() || "정보 없음";
  const summary = formData.get("summary")?.trim() || defaultSummaryForWhisky({ distillery, type, region, notes });
  const whisky = {
    id,
    name,
    nameEn,
    summary,
    distillery,
    type,
    abv: Number(formData.get("abv")),
    region,
    averagePrice: formData.get("averagePrice").trim() || "가격 정보 없음",
    priceValue: parseAveragePriceValue(formData.get("averagePrice").trim(), 0),
    officialRating: 86,
    tone: "tone-clear",
    imageUrl: newWhiskyPhoto,
    imagePage: newWhiskyPhotoSource?.page || "",
    imageCredit: newWhiskyPhotoSource?.credit || "",
    notes,
    isSaved: true,
    shelfStatus,
    isCustom: true,
    addedAt: Date.now(),
    userReview: { rating: 0, purchasePrice: "", openDate: "", personalNote: "" },
  };
  whiskies.unshift(whisky);
  persist();
  render();
  closeDetail();
  showToast(shelfStatus === "wishlist" ? "새 위스키를 관심 위스키에 추가했어요." : "새 위스키를 평가한 위스키에 추가했어요.");
}

function closeDetail() {
  document.getElementById("detailBackdrop").classList.add("hidden");
  document.body.style.overflow = "";
  activeWhiskyId = null;
}

function hasUserReviewData(review = {}) {
  return Boolean(
    Number(review.rating || 0) > 0 ||
    String(review.purchasePrice || "").trim() ||
    String(review.openDate || "").trim() ||
    String(review.personalNote || "").trim()
  );
}

function buildCompactSyncObject(includeDataPhotos = false) {
  const seedIds = new Set(seedWhiskies.map((item) => item.id));
  const seedEntries = [];
  const customEntries = [];

  whiskies.forEach((whisky) => {
    const review = whisky.userReview || {};
    const hasCustomPhoto = includeDataPhotos && whisky.imageCredit === "내가 등록한 사진" && String(whisky.imageUrl || "").startsWith("data:");
    if (seedIds.has(whisky.id)) {
      const seed = seedWhiskies.find((item) => item.id === whisky.id);
      const customNameEn = whisky.nameEn && seed && whisky.nameEn !== seed.nameEn ? whisky.nameEn : "";
      if (whisky.isSaved || hasUserReviewData(review) || customNameEn || hasCustomPhoto) {
        const shelfStatus = getShelfStatus(whisky);
        const entry = {
          i: whisky.id,
          s: whisky.isSaved ? (shelfStatus === "wishlist" ? 2 : 1) : 0,
          t: whisky.addedAt || 0,
          r: clampHalfRating(review.rating),
          p: review.purchasePrice || "",
          d: review.openDate || "",
          n: review.personalNote || "",
        };
        if (customNameEn) entry.e = customNameEn;
        if (hasCustomPhoto) entry.img = whisky.imageUrl;
        seedEntries.push(entry);
      }
    } else {
      const copy = { ...whisky };
      if (!includeDataPhotos && String(copy.imageUrl || "").startsWith("data:")) {
        copy.imageUrl = "";
        copy.imageCredit = "";
      }
      customEntries.push(copy);
    }
  });

  return {
    v: 1,
    exportedAt: new Date().toISOString(),
    seeds: seedEntries,
    customs: customEntries,
  };
}

function encodeSyncCode(dataObj) {
  const json = JSON.stringify(dataObj);
  const bytes = new TextEncoder().encode(json);
  let binary = "";
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, "-").replace(/\//g, "_").replace(/=+$/g, "");
}

function decodeSyncCode(rawInput = "") {
  const trimmed = String(rawInput).trim();
  if (!trimmed) throw new Error("백업 코드나 링크를 입력해 주세요.");
  if (trimmed.startsWith("{") || trimmed.startsWith("[")) {
    return JSON.parse(trimmed);
  }
  let code = trimmed.replace(/^STILLNOTE1:/i, "").trim();
  if (code.includes("sync=")) {
    try {
      const url = new URL(code);
      code = url.searchParams.get("sync") || new URLSearchParams(url.hash.replace(/^#/, "")).get("sync") || code;
    } catch {
      const match = code.match(/[?#&]sync=([^&#\s]+)/);
      if (match) code = match[1];
    }
  }
  const base64 = code.replace(/-/g, "+").replace(/_/g, "/");
  const padded = base64 + "=".repeat((4 - (base64.length % 4)) % 4);
  const binary = atob(padded);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  const json = new TextDecoder().decode(bytes);
  return JSON.parse(json);
}

function getSelectedSyncMode() {
  return document.querySelector('input[name="syncImportMode"]:checked')?.value || "merge";
}

function applySyncData(data, mode = "merge") {
  const seedIds = new Set(seedWhiskies.map((item) => item.id));
  let incomingSeeds = [];
  let incomingCustoms = [];

  if (Array.isArray(data)) {
    data.forEach((item) => {
      if (!item || !item.id) return;
      if (seedIds.has(item.id)) {
        const shelfStatus = normalizeShelfStatus(Boolean(item.isSaved), item.shelfStatus);
        incomingSeeds.push({
          i: item.id,
          s: item.isSaved ? (shelfStatus === "wishlist" ? 2 : 1) : 0,
          t: item.addedAt || 0,
          r: clampHalfRating(item.userReview?.rating),
          p: item.userReview?.purchasePrice || "",
          d: item.userReview?.openDate || "",
          n: item.userReview?.personalNote || "",
          e: item.nameEn || "",
          img: item.imageCredit === "내가 등록한 사진" ? item.imageUrl : "",
        });
      } else {
        incomingCustoms.push(item);
      }
    });
  } else if (data && typeof data === "object") {
    incomingSeeds = Array.isArray(data.seeds) ? data.seeds : [];
    incomingCustoms = Array.isArray(data.customs) ? data.customs : [];
  } else {
    throw new Error("올바른 백업 데이터 형식이 아닙니다.");
  }

  if (mode === "replace") {
    whiskies = seedWhiskies.map((whisky) => ({
      ...whisky,
      isSaved: false,
      shelfStatus: "",
      addedAt: null,
      userReview: { rating: 0, purchasePrice: "", openDate: "", personalNote: "" },
    }));
  }

  incomingSeeds.forEach((entry) => {
    const target = whiskies.find((item) => item.id === entry.i);
    if (!target) return;
    const isSaved = Boolean(entry.s);
    const incomingStatus = entry.s === 2 || entry.st === "wishlist" ? "wishlist" : isSaved ? "owned" : "";
    target.isSaved = mode === "replace" ? isSaved : Boolean(target.isSaved || isSaved);
    if (mode === "replace") {
      target.shelfStatus = incomingStatus;
    } else if (isSaved) {
      target.shelfStatus = incomingStatus || getShelfStatus(target) || "owned";
    }
    target.addedAt = entry.t || target.addedAt || (target.isSaved ? Date.now() : null);
    if (entry.e) target.nameEn = entry.e;
    if (entry.img) {
      target.imageUrl = entry.img;
      target.fallbackImageUrl = "";
      target.imagePage = "";
      target.imageCredit = "내가 등록한 사진";
    }
    const currentReview = target.userReview || { rating: 0, purchasePrice: "", openDate: "", personalNote: "" };
    target.userReview = {
      rating: clampHalfRating(entry.r || currentReview.rating || 0),
      purchasePrice: entry.p || currentReview.purchasePrice || "",
      openDate: entry.d || currentReview.openDate || "",
      personalNote: entry.n || currentReview.personalNote || "",
    };
  });

  incomingCustoms.forEach((customItem) => {
    if (!customItem || !customItem.name) return;
    const existingIndex = whiskies.findIndex((item) => item.id === customItem.id || (!seedIds.has(item.id) && item.name === customItem.name));
    const isSaved = customItem.isSaved !== undefined ? Boolean(customItem.isSaved) : true;
    const normalizedCustom = {
      ...customItem,
      id: customItem.id || `custom-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
      nameEn: customItem.nameEn || customItem.name || "",
      isSaved,
      shelfStatus: normalizeShelfStatus(isSaved, customItem.shelfStatus),
      isCustom: true,
      addedAt: customItem.addedAt || Date.now(),
      userReview: {
        rating: clampHalfRating(customItem.userReview?.rating),
        purchasePrice: customItem.userReview?.purchasePrice || "",
        openDate: customItem.userReview?.openDate || "",
        personalNote: customItem.userReview?.personalNote || "",
      },
    };
    if (existingIndex >= 0) {
      whiskies[existingIndex] = { ...whiskies[existingIndex], ...normalizedCustom };
    } else {
      whiskies.unshift(normalizedCustom);
    }
  });

  persist();
  render();
  return whiskies.filter((item) => item.isSaved).length;
}

function buildSyncShareUrl() {
  const payload = buildCompactSyncObject(false);
  const code = encodeSyncCode(payload);
  const url = new URL(window.location.href);
  url.search = "";
  url.hash = "";
  url.searchParams.set("sync", code);
  return { url: url.href, code: `STILLNOTE1:${code}`, savedCount: whiskies.filter((item) => item.isSaved).length };
}

function renderSyncModal() {
  activeWhiskyId = null;
  const saved = whiskies.filter((item) => item.isSaved);
  const ownedCount = saved.filter((item) => getShelfStatus(item) === "owned").length;
  const wishlistCount = saved.filter((item) => getShelfStatus(item) === "wishlist").length;
  const reviewedCount = whiskies.filter((item) => hasUserReviewData(item.userReview)).length;
  document.getElementById("detailContent").innerHTML = `
    <div class="new-whisky-heading">
      <p class="detail-distillery">BACKUP &amp; DEVICE SYNC</p>
      <h2 id="detailName">보관함 백업 · 기기 이동</h2>
      <p>별도 회원가입 없이 공유 링크나 백업 파일로 다른 스마트폰·PC·태블릿에 내 위스키 보관함을 그대로 옮길 수 있습니다.</p>
    </div>
    <div class="sync-sheet-body">
      <div class="sync-summary-bar">
        <span>현재 기기 보관함</span>
        <span>평가 <strong>${ownedCount}</strong>병 · 관심 <strong>${wishlistCount}</strong>병 · 기록 <strong>${reviewedCount}</strong>건</span>
      </div>

      <section class="sync-card" aria-label="공유 링크로 기기 이동">
        <div class="sync-card-head">
          <h3>1. 공유 링크로 다른 기기에 보내기</h3>
          <span>RECOMMENDED</span>
        </div>
        <p>내 보관함과 시음 노트가 담긴 전용 링크를 생성합니다. 카카오톡 <strong>나에게 보내기</strong>나 메시지로 다른 기기에 보낸 뒤 링크를 열면 즉시 동기화됩니다.</p>
        <div class="sync-button-row">
          <button class="sync-action-btn" type="button" id="shareSyncLinkButton">공유 링크 보내기 · 복사</button>
          <button class="sync-action-btn secondary" type="button" id="copySyncCodeButton">백업 코드만 복사</button>
        </div>
      </section>

      <div class="sync-mode-box">
        <span>가져오기 · 복원 방식 선택</span>
        <div class="sync-mode-options">
          <label class="sync-mode-option">
            <input type="radio" name="syncImportMode" value="merge" checked />
            <span>기존 보관함과 합치기(병합)</span>
          </label>
          <label class="sync-mode-option">
            <input type="radio" name="syncImportMode" value="replace" />
            <span>백업 데이터로 덮어쓰기</span>
          </label>
        </div>
      </div>

      <section class="sync-card" aria-label="백업 파일 내보내기 및 불러오기">
        <div class="sync-card-head">
          <h3>2. 백업 파일(.json) 저장 · 불러오기</h3>
          <span>FULL BACKUP</span>
        </div>
        <p>직접 촬영해 등록한 위스키 사진까지 100% 모두 포함하여 파일로 백업하거나 다른 기기에서 복원합니다.</p>
        <div class="sync-button-row">
          <button class="sync-action-btn secondary" type="button" id="downloadBackupButton">백업 파일 다운로드 (.json)</button>
          <label class="sync-action-btn" for="uploadBackupInput">
            <span>백업 파일 불러오기</span>
            <input id="uploadBackupInput" type="file" accept=".json,application/json" />
          </label>
        </div>
      </section>

      <section class="sync-card" aria-label="백업 코드 붙여넣기">
        <div class="sync-card-head">
          <h3>3. 백업 코드 · 링크 직접 붙여넣기</h3>
          <span>PASTE CODE</span>
        </div>
        <p>다른 기기에서 복사한 공유 링크나 백업 코드(<code>STILLNOTE1:...</code>)를 아래에 붙여넣어 바로 복원할 수 있습니다.</p>
        <textarea class="sync-code-textarea" id="syncCodeInput" placeholder="복사한 공유 링크 또는 백업 코드(STILLNOTE1:...)를 여기에 붙여넣으세요"></textarea>
        <div class="sync-button-row">
          <button class="sync-action-btn" type="button" id="applySyncCodeButton">코드로 보관함 복원하기</button>
        </div>
      </section>
    </div>`;
  document.getElementById("detailBackdrop").classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return true;
  }
  const temp = document.createElement("textarea");
  temp.value = text;
  temp.setAttribute("readonly", "");
  temp.style.position = "fixed";
  temp.style.opacity = "0";
  document.body.appendChild(temp);
  temp.select();
  const ok = document.execCommand("copy");
  document.body.removeChild(temp);
  return ok;
}

async function shareSyncLink() {
  try {
    const { url, savedCount } = buildSyncShareUrl();
    if (navigator.share) {
      try {
        await navigator.share({
          title: "내 위스키 리스트 보관함 동기화",
          text: `내 위스키 보관함(${savedCount}병) 동기화 링크입니다.`,
          url,
        });
        showToast("공유 창을 열었어요. 다른 기기로 링크를 보내보세요!");
        return;
      } catch (shareError) {
        if (shareError?.name === "AbortError") return;
      }
    }
    await copyTextToClipboard(url);
    showToast("동기화 링크를 복사했어요! 카카오톡 등으로 다른 기기에 보내보세요.");
  } catch (error) {
    showToast("링크를 생성하지 못했어요.");
  }
}

async function copySyncCode() {
  try {
    const { code } = buildSyncShareUrl();
    await copyTextToClipboard(code);
    showToast("백업 코드를 복사했어요! 다른 기기에서 붙여넣어 복원하세요.");
  } catch (error) {
    showToast("백업 코드를 복사하지 못했어요.");
  }
}

function downloadBackupFile() {
  try {
    const payload = buildCompactSyncObject(true);
    const json = JSON.stringify(payload, null, 2);
    const blob = new Blob([json], { type: "application/json;charset=utf-8" });
    const url = URL.createObjectURL(blob);
    const dateStr = new Date().toISOString().slice(0, 10);
    const link = document.createElement("a");
    link.href = url;
    link.download = `my-whisky-backup-${dateStr}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => URL.revokeObjectURL(url), 1500);
    showToast("백업 파일(.json)을 다운로드했어요.");
  } catch (error) {
    showToast("백업 파일을 생성하지 못했어요.");
  }
}

function handleSyncCodeImport() {
  const input = document.getElementById("syncCodeInput");
  if (!input || !input.value.trim()) {
    showToast("붙여넣은 백업 코드나 링크가 없어요.");
    input?.focus();
    return;
  }
  try {
    const decoded = decodeSyncCode(input.value);
    const totalSaved = applySyncData(decoded, getSelectedSyncMode());
    closeDetail();
    setTab("collection");
    showToast(`보관함 복원 완료! 현재 총 ${totalSaved}병이 저장되어 있어요.`);
  } catch (error) {
    showToast("백업 코드나 링크 형식을 확인해 주세요.");
  }
}

async function handleBackupFileImport(file) {
  if (!file) return;
  try {
    const text = await file.text();
    const parsed = JSON.parse(text);
    const totalSaved = applySyncData(parsed, getSelectedSyncMode());
    closeDetail();
    setTab("collection");
    showToast(`파일에서 복원 완료! 현재 총 ${totalSaved}병이 저장되어 있어요.`);
  } catch (error) {
    showToast("올바른 백업 파일(.json)이 아닙니다.");
  }
}

function checkUrlSyncOnLoad() {
  const searchParams = new URLSearchParams(window.location.search);
  const hashParams = new URLSearchParams(window.location.hash.replace(/^#/, ""));
  const syncParam = searchParams.get("sync") || hashParams.get("sync");
  if (!syncParam) return;
  try {
    const decoded = decodeSyncCode(syncParam);
    const totalSaved = applySyncData(decoded, "merge");
    const cleanUrl = window.location.pathname;
    window.history.replaceState({}, document.title, cleanUrl);
    setTimeout(() => {
      showToast(`공유 링크에서 보관함을 동기화했어요! (총 ${totalSaved}병)`);
    }, 180);
  } catch (error) {
    console.warn("URL 동기화 데이터를 읽지 못했습니다.", error);
  }
}

function buildNaverAppIntent(query, fallbackUrl) {
  const mobileSearchUrl = new URL("https://m.search.naver.com/search.naver");
  mobileSearchUrl.searchParams.set("query", query);
  const encodedMobileUrl = encodeURIComponent(mobileSearchUrl.href);
  const encodedFallbackUrl = encodeURIComponent(fallbackUrl || mobileSearchUrl.href);
  return `intent://inappbrowser?url=${encodedMobileUrl}&target=new&version=6#Intent;scheme=naversearchapp;action=android.intent.action.VIEW;category=android.intent.category.BROWSABLE;package=com.nhn.android.search;S.browser_fallback_url=${encodedFallbackUrl};end`;
}

document.addEventListener("click", (event) => {
  const naverSearch = event.target.closest("[data-naver-search]");
  if (naverSearch && /Android/i.test(navigator.userAgent)) {
    event.preventDefault();
    window.location.href = buildNaverAppIntent(document.getElementById("detailName").textContent, naverSearch.href);
    return;
  }
  const tabButton = event.target.closest("[data-tab]");
  if (tabButton) { setTab(tabButton.dataset.tab); return; }
  const goButton = event.target.closest("[data-go]");
  if (goButton) { setTab(goButton.dataset.go); return; }
  if (event.target.closest("[data-open-sync]")) { renderSyncModal(); return; }
  if (event.target.closest("#shareSyncLinkButton")) { shareSyncLink(); return; }
  if (event.target.closest("#copySyncCodeButton")) { copySyncCode(); return; }
  if (event.target.closest("#downloadBackupButton")) { downloadBackupFile(); return; }
  if (event.target.closest("#applySyncCodeButton")) { handleSyncCodeImport(); return; }
  const jumpExplore = event.target.closest("[data-jump-explore]");
  if (jumpExplore) {
    selectedExploreType = jumpExplore.dataset.jumpExplore;
    render();
    setTab("explore");
    return;
  }
  if (event.target.closest("#lookupWhiskyButton")) { searchWhiskyOnline(); return; }
  const catalogueResult = event.target.closest("[data-catalogue-id]");
  if (catalogueResult) { addCatalogueWhisky(catalogueResult.dataset.catalogueId); return; }
  const onlineResult = event.target.closest("[data-online-result]");
  if (onlineResult) { selectOnlineWhisky(Number(onlineResult.dataset.onlineResult)); return; }
  if (event.target.closest("#addWhiskyButton")) { renderNewWhiskyForm(); return; }
  const shelfFilter = event.target.closest("[data-shelf-filter]");
  if (shelfFilter) { selectedShelfStatus = shelfFilter.dataset.shelfFilter; render(); return; }
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) { selectedType = filterButton.dataset.filter; render(); return; }
  const exploreFilter = event.target.closest("[data-explore-filter]");
  if (exploreFilter) { selectedExploreType = exploreFilter.dataset.exploreFilter; render(); return; }
  const storyFilter = event.target.closest("[data-story-filter]");
  if (storyFilter) { selectedStoryCategory = storyFilter.dataset.storyFilter; render(); return; }
  const shelfActionButton = event.target.closest("[data-shelf-id]");
  if (shelfActionButton) {
    event.stopPropagation();
    const isBadgeSwitch = shelfActionButton.classList.contains("card-status-badge");
    setWhiskyShelfStatus(shelfActionButton.dataset.shelfId, shelfActionButton.dataset.shelfTarget, !isBadgeSwitch);
    return;
  }
  const detailShelfButton = event.target.closest("[data-detail-shelf]");
  if (detailShelfButton && activeWhiskyId) {
    const targetShelf = detailShelfButton.dataset.detailShelf;
    const whisky = whiskies.find((item) => item.id === activeWhiskyId);
    if (whisky && whisky.isSaved) {
      whisky.shelfStatus = targetShelf;
      persist();
      render();
      showToast(targetShelf === "wishlist" ? "관심 위스키로 변경했어요." : "평가한 위스키로 변경했어요.");
    }
    renderDetail(activeWhiskyId, { ...getReviewDraft(), shelfStatus: targetShelf });
    return;
  }
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) { event.stopPropagation(); toggleSaved(saveButton.dataset.save); return; }
  const ratingStepButton = event.target.closest("[data-rating-step]");
  if (ratingStepButton && activeWhiskyId) {
    const whisky = whiskies.find((item) => item.id === activeWhiskyId);
    const step = Number(ratingStepButton.dataset.ratingStep || 0);
    whisky.userReview.rating = clampHalfRating(Number(whisky.userReview?.rating || 0) + step);
    renderDetail(activeWhiskyId, getReviewDraft());
    return;
  }
  const starButton = event.target.closest("[data-rating]");
  if (starButton && activeWhiskyId) {
    const whisky = whiskies.find((item) => item.id === activeWhiskyId);
    const clickedRating = clampHalfRating(starButton.dataset.rating);
    const currentRating = clampHalfRating(whisky.userReview?.rating);
    if (clickedRating === currentRating) {
      whisky.userReview.rating = clickedRating === 0.5 ? 0 : clampHalfRating(clickedRating - 0.5);
    } else {
      whisky.userReview.rating = clickedRating;
    }
    renderDetail(activeWhiskyId, getReviewDraft());
    return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) { setWhiskyShelfStatus(removeButton.dataset.remove, "", false); closeDetail(); return; }
  const card = event.target.closest("[data-open]");
  if (event.target.closest(".photo-credit")) return;
  if (card) { renderDetail(card.dataset.open); return; }
  if (event.target.id === "closeDetail" || event.target.id === "detailBackdrop") closeDetail();
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeDetail();
  if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
    event.preventDefault();
    setTab("explore");
    document.getElementById("searchInput").focus();
  }
  if ((event.key === "Enter" || event.key === " ") && event.target.matches(".whisky-card")) {
    event.preventDefault();
    renderDetail(event.target.dataset.open);
  }
});

document.getElementById("searchInput").addEventListener("input", renderExplore);
document.getElementById("exploreSortSelect")?.addEventListener("change", renderExplore);
document.getElementById("sortSelect").addEventListener("change", renderCollection);
document.getElementById("closeDetail").addEventListener("click", closeDetail);
document.getElementById("detailContent").addEventListener("click", (event) => {
  if (event.target.id === "saveNewWhisky") return;
  if (event.target.id !== "saveReview") return;
  const whisky = whiskies.find((item) => item.id === activeWhiskyId);
  if (!whisky) return;
  const editedNameEn = document.getElementById("detailEnglishName")?.value.trim();
  if (editedNameEn) {
    whisky.nameEn = editedNameEn;
  }
  const pickedShelfStatus = document.querySelector("[data-detail-shelf].active")?.dataset.detailShelf || getShelfStatus(whisky) || "owned";
  whisky.userReview = {
    ...whisky.userReview,
    rating: clampHalfRating(whisky.userReview?.rating),
    purchasePrice: document.getElementById("purchasePrice").value,
    openDate: document.getElementById("openDate").value,
    personalNote: document.getElementById("personalNote").value,
  };
  whisky.isSaved = true;
  whisky.shelfStatus = pickedShelfStatus === "wishlist" ? "wishlist" : "owned";
  if (!whisky.addedAt) {
    whisky.addedAt = Date.now();
  }
  persist();
  render();
  closeDetail();
  showToast(whisky.shelfStatus === "wishlist" ? "관심 위스키로 기록을 저장했어요." : "평가한 위스키로 기록을 저장했어요.");
});

document.getElementById("detailContent").addEventListener("submit", (event) => {
  if (event.target.id === "newWhiskyForm") saveNewWhisky(event);
});

document.getElementById("detailContent").addEventListener("keydown", (event) => {
  if (event.key === "Enter" && event.target.id === "onlineWhiskyQuery") {
    event.preventDefault();
    searchWhiskyOnline();
  }
});

document.getElementById("detailContent").addEventListener("change", async (event) => {
  if (event.target.id === "uploadBackupInput") {
    const backupFile = event.target.files?.[0];
    if (backupFile) await handleBackupFileImport(backupFile);
    event.target.value = "";
    return;
  }
  if (event.target.id !== "photoInput" && event.target.id !== "newWhiskyPhotoInput") return;
  const file = event.target.files?.[0];
  if (!file) return;
  try {
    const photo = await compressPhoto(file);
    if (event.target.id === "newWhiskyPhotoInput") {
      newWhiskyPhoto = photo;
      newWhiskyPhotoSource = { page: "", credit: "내가 등록한 사진" };
      const preview = document.getElementById("newPhotoPreview");
      preview.innerHTML = `<img src="${photo}" alt="선택한 위스키 사진 미리보기" />`;
      preview.classList.add("has-photo");
      return;
    }
    const whisky = whiskies.find((item) => item.id === activeWhiskyId);
    if (!whisky) return;
    whisky.imageUrl = photo;
    whisky.fallbackImageUrl = "";
    whisky.imagePage = "";
    whisky.imageCredit = "내가 등록한 사진";
    persist();
    renderDetail(whisky.id, getReviewDraft());
    showToast("위스키 사진을 변경했어요.");
  } catch (error) {
    showToast(error.message || "사진을 불러오지 못했어요.");
  }
});

render();
checkUrlSyncOnLoad();
