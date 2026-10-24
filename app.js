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
  { id: "chivas-18", name: "시바스 리갈 18년", nameEn: "Chivas Regal 18 Year Old", distillery: "Chivas Regal", type: "블렌디드", region: "스코틀랜드", abv: 40, averagePrice: "₩100,000 – 140,000", priceValue: 120000, tone: "tone-ruby", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/Chivas_Regal_The_Icon_Blended_Scotch_Whisky_%28700mL%29.jpg/500px-Chivas_Regal_The_Icon_Blended_Scotch_Whisky_%28700mL%29.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Chivas_Regal_The_Icon_Blended_Scotch_Whisky_(700mL).jpg", imageCredit: "Oleg Yunakov · CC BY-SA 4.0", notes: { aroma: "말린 과일 · 버터스카치", taste: "다크초콜릿 · 시트러스", finish: "긴 여운 · 은은한 스모크" } },
  { id: "bulleit-rye", name: "불릿 라이", nameEn: "Bulleit Rye", distillery: "Bulleit", type: "라이", region: "켄터키 · 미국", abv: 45, averagePrice: "₩50,000 – 70,000", priceValue: 60000, tone: "tone-clear", imageUrl: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Bulleit_Bourbon_Frontier_Whiskey.jpg", imagePage: "https://commons.wikimedia.org/wiki/File:Bulleit_Bourbon_Frontier_Whiskey.jpg", imageCredit: "Ethan Prater · CC BY 2.0", notes: { aroma: "메이플 · 오크 · 스파이스", taste: "캐러멜 · 후추 · 체리", finish: "드라이한 호밀 · 오크" } },
];

const additionalWhiskies = [
  ["glenlivet-12", "더 글렌리벳 12년", "The Glenlivet", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩70,000 – 90,000", "배 · 사과 · 꽃향기", "바닐라 · 시트러스 · 몰트", "부드럽고 달콤한 여운", "tone-green"],
  ["glenlivet-15", "더 글렌리벳 15년 프렌치 오크", "The Glenlivet", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩100,000 – 130,000", "복숭아 · 버터 · 오크", "살구 · 견과류 · 향신료", "부드러운 오크와 과일", "tone-clear"],
  ["glenmorangie-original-10", "글렌모렌지 오리지널 10년", "Glenmorangie", "싱글몰트", "하이랜드 · 스코틀랜드", 40, "₩75,000 – 95,000", "시트러스 · 복숭아 · 바닐라", "크림 · 꿀 · 아몬드", "가볍고 산뜻한 여운", "tone-blue"],
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
  ["monkey-shoulder", "몽키숄더 오리지널", "Monkey Shoulder", "블렌디드", "스코틀랜드", 40, "₩55,000 – 75,000", "오렌지 · 바닐라 · 몰트", "꿀 · 향신료 · 과일", "부드럽고 달콤한 몰트", "tone-ruby"],
  ["johnnie-walker-red", "조니워커 레드 라벨", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩30,000 – 45,000", "바닐라 · 사과 · 스모크", "캐러멜 · 후추 · 몰트", "가볍고 스파이시한 여운", "tone-ruby"],
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
  ["gentleman-jack", "젠틀맨 잭", "Jack Daniel's", "버번", "테네시 · 미국", 40, "₩52,000 – 72,000", "바닐라 · 시트러스 · 사과", "브라운슈가 · 시나몬 · 실키한 오크", "두 번 여과해 한층 깔끔한 피니시", "tone-blue"],
  ["jim-beam-white", "짐빔 화이트", "Jim Beam", "버번", "켄터키 · 미국", 40, "₩26,000 – 38,000", "바닐라 · 옥수수 단향 · 오크", "캐러멜 · 구운 곡물 · 가벼운 스파이스", "산뜻하고 경쾌한 여운", "tone-clear"],
  ["evan-williams-black", "에반 윌리엄스 블랙", "Evan Williams", "버번", "켄터키 · 미국", 43, "₩28,000 – 40,000", "바닐라 · 민트 · 브라운슈가", "캐러멜 · 사과 · 구운 오크", "부드럽고 달콤한 데일리 버번", "tone-clear"],
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
  "monkey-shoulder": "Monkey Shoulder Original",
  "johnnie-walker-red": "Johnnie Walker Red Label",
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
  "gentleman-jack": "Gentleman Jack Double Mellowed Tennessee Whiskey",
  "jim-beam-white": "Jim Beam Kentucky Straight Bourbon",
  "evan-williams-black": "Evan Williams Black Label Bourbon",
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
  "The Dalmore": ["Scotland_Alness_Dalmore_Distillery.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  Bowmore: ["Bowmore_Single_Malt_Scotch_Whisky_12_years_old.jpg", "Look Sharp! · CC BY-SA 3.0"],
  "The Singleton": ["Singleton_Single_Malt_Whisky_Aged_12_years.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  Auchentoshan: ["Auchentoshan_Family.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  Glenfarclas: ["Glenfarclas_15y_bottle.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  Cardhu: ["Whisky_Cardhu.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  "Teacher's": ["Teacher%27s_Highland_Cream_20cl_bottle_1.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  "Kirkland Signature": ["Bourbon_Kirkland.jpg", "Wikimedia Commons · CC BY-SA 4.0"],
  "The Famous Grouse": ["Famous_Grouse.JPG", "Wikimedia Commons · CC BY-SA 3.0"],
  "Grant's": ["Grant%27s_Whisky_01.jpg", "Wikimedia Commons · CC BY-SA 3.0"],
  "Bell's": ["Glass_of_Bell%27s.png", "Wikimedia Commons · CC BY-SA 3.0"],
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
let selectedType = "전체";
let selectedExploreType = "전체";
let selectedStoryCategory = "all";
let currentTab = "collection";
let activeWhiskyId = null;
let toastTimer;
let newWhiskyPhoto = "";
let newWhiskyPhotoSource = null;
let onlineLookupCandidates = [];

function loadWhiskies() {
  try {
    const stored = JSON.parse(localStorage.getItem(storageKey));
    if (Array.isArray(stored)) {
      const storedById = new Map(stored.map((whisky) => [whisky.id, whisky]));
      const seedIds = new Set(seedWhiskies.map((whisky) => whisky.id));
      const savedSeeds = seedWhiskies.map((seed) => {
        const saved = storedById.get(seed.id);
        const preserveUploadedPhoto = saved?.imageCredit === "내가 등록한 사진";
        return {
          ...seed,
          isSaved: Boolean(saved?.isSaved),
          addedAt: saved?.addedAt || null,
          userReview: { rating: 0, purchasePrice: "", openDate: "", personalNote: "", ...saved?.userReview },
          name: seed.name,
          nameEn: (saved?.nameEn && saved.nameEn !== seed.name) ? saved.nameEn : seed.nameEn,
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
        .map((whisky) => ({
          ...whisky,
          nameEn: whisky.nameEn || whisky.name || "",
        }));
      return [...savedSeeds, ...customWhiskies];
    }
  } catch (error) {
    console.warn("컬렉션 데이터를 불러오지 못했습니다.", error);
  }
  return seedWhiskies.map((whisky) => ({ ...whisky, isSaved: false, addedAt: null, userReview: { rating: 0, purchasePrice: "", openDate: "", personalNote: "" } }));
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
    .replace(/['’`\-_./]/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function matchesWhiskyQuery(whisky, rawQuery = "") {
  const trimmed = rawQuery.trim();
  if (!trimmed) return true;
  const rawHaystack = `${whisky.name || ""} ${whisky.nameEn || ""} ${whisky.distillery || ""} ${whisky.type || ""} ${whisky.region || ""} ${(whisky.id || "").replace(/-/g, " ")}`.toLocaleLowerCase("ko");
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
  const photo = whisky.imageUrl ? `<img class="bottle-photo" src="${escapeHtml(whisky.imageUrl)}"${fallbackAttr} alt="${escapeHtml(whisky.name)} (${escapeHtml(whisky.nameEn || whisky.name)}) 위스키 병" loading="lazy" decoding="async" onload="this.parentElement.classList.add('photo-loaded')" onerror="if(this.dataset.fallbackSrc && this.src !== this.dataset.fallbackSrc){this.src = this.dataset.fallbackSrc; return;} this.parentElement.classList.remove('photo-loaded'); this.remove()">` : "";
  const credit = whisky.imageCredit ? whisky.imagePage
    ? `<a class="photo-credit" href="${escapeHtml(whisky.imagePage)}" target="_blank" rel="noreferrer" aria-label="사진 출처: ${escapeHtml(whisky.imageCredit)}">${escapeHtml(whisky.imageCredit)}</a>`
    : `<span class="photo-credit">${escapeHtml(whisky.imageCredit)}</span>` : "";
  const changeButton = allowPhotoChange ? `<label class="photo-change-button" for="photoInput">사진 변경<input id="photoInput" type="file" accept="image/*" /></label>` : "";
  return `<div class="bottle-art ${whisky.tone || ""} ${extraClass}">${photo}${credit}${changeButton}<div class="bottle-shape"><span class="bottle-label">${escapeHtml(label)}</span></div></div>`;
}

function cardMarkup(whisky, isExplore = false) {
  const rating = Number(whisky.userReview?.rating || 0);
  const saved = Boolean(whisky.isSaved);
  return `<article class="whisky-card" data-open="${escapeHtml(whisky.id)}" tabindex="0" aria-label="${escapeHtml(whisky.name)} ${escapeHtml(whisky.nameEn || "")} 상세 정보">
    <div class="card-visual">${bottleArt(whisky)}
      ${isExplore ? `<button class="card-save ${saved ? "saved" : ""}" data-save="${escapeHtml(whisky.id)}" aria-label="${saved ? "보관함에서 제거" : "보관함에 추가"}" title="${saved ? "보관함에서 제거" : "보관함에 추가"}">${saved ? "♥" : "+"}</button>` : ""}
    </div>
    <div class="card-info"><p class="card-distillery">${escapeHtml(whisky.distillery)} <span>· ${escapeHtml(whisky.type)}</span></p>
      <h3 class="card-name">${escapeHtml(whisky.name)}</h3>
      <p class="card-name-en">${escapeHtml(whisky.nameEn || "")}</p>
      <div class="card-meta"><span>${whisky.abv}% ABV</span><span class="card-rating">${rating ? `★ ${rating.toFixed(1)}` : "☆ 평가 전"}</span></div>
      ${isExplore ? `<div class="card-price"><span>참고가</span>${escapeHtml(whisky.averagePrice)}</div>` : ""}
    </div>
  </article>`;
}

function renderFilters() {
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
  const sortBy = document.getElementById("sortSelect").value;
  const filtered = saved.filter((whisky) => selectedType === "전체" || whisky.type === selectedType);
  if (sortBy === "rating") filtered.sort((a, b) => Number(b.userReview?.rating || 0) - Number(a.userReview?.rating || 0));
  if (sortBy === "name") filtered.sort((a, b) => a.name.localeCompare(b.name, "ko") || (a.nameEn || "").localeCompare(b.nameEn || "", "en"));
  if (sortBy === "recent") filtered.sort((a, b) => (b.addedAt || 0) - (a.addedAt || 0));
  document.getElementById("savedCount").textContent = String(saved.length).padStart(2, "0");
  document.getElementById("featureCount").textContent = String(saved.length).padStart(2, "0");
  document.getElementById("collectionGrid").innerHTML = filtered.map((whisky) => cardMarkup(whisky)).join("");
  document.getElementById("collectionEmpty").classList.toggle("hidden", saved.length > 0);
  document.getElementById("collectionGrid").classList.toggle("hidden", filtered.length === 0);
  if (saved.length > 0 && filtered.length === 0) {
    document.getElementById("collectionGrid").classList.remove("hidden");
    document.getElementById("collectionGrid").innerHTML = `<p class="filter-empty">이 종류의 위스키가 아직 없어요.</p>`;
  }
}

function renderExplore() {
  const query = document.getElementById("searchInput").value;
  const result = whiskies.filter((whisky) => {
    const matchesType = selectedExploreType === "전체" || whisky.type === selectedExploreType;
    return matchesType && matchesWhiskyQuery(whisky, query);
  });
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

function toggleSaved(id) {
  const whisky = whiskies.find((item) => item.id === id);
  if (!whisky) return;
  whisky.isSaved = !whisky.isSaved;
  whisky.addedAt = whisky.isSaved ? Date.now() : null;
  persist();
  render();
  if (activeWhiskyId === id) renderDetail(id);
  showToast(whisky.isSaved ? "내 보관함에 담았어요." : "보관함에서 삭제했어요.");
}

function getReviewDraft() {
  return {
    nameEn: document.getElementById("detailEnglishName")?.value,
    purchasePrice: document.getElementById("purchasePrice")?.value || "",
    openDate: document.getElementById("openDate")?.value || "",
    personalNote: document.getElementById("personalNote")?.value || "",
  };
}

function renderDetail(id, draft = {}) {
  const whisky = whiskies.find((item) => item.id === id);
  if (!whisky) return;
  activeWhiskyId = id;
  const review = { rating: 0, purchasePrice: "", openDate: "", personalNote: "", ...whisky.userReview, ...draft };
  const currentNameEn = draft.nameEn !== undefined ? draft.nameEn : (whisky.nameEn || "");
  const stars = Array.from({ length: 5 }, (_, index) => `<button type="button" class="star-button ${index < Number(review.rating || 0) ? "active" : ""}" data-rating="${index + 1}" aria-label="${index + 1}점">★</button>`).join("");
  const naverSearchUrl = new URL("https://search.naver.com/search.naver");
  naverSearchUrl.searchParams.set("query", whisky.name);
  document.getElementById("detailContent").innerHTML = `
    <div class="detail-hero">${bottleArt(whisky, "", true)}<div><p class="detail-distillery">${escapeHtml(whisky.distillery.toUpperCase())}</p><h2 id="detailName">${escapeHtml(whisky.name)}</h2><p class="detail-name-en">${escapeHtml(currentNameEn)}</p><div class="detail-meta"><span>${escapeHtml(whisky.type)}</span><span>${whisky.abv}% ABV</span><span>${escapeHtml(whisky.region)}</span></div><p class="detail-price"><span>참고 가격</span>${escapeHtml(whisky.averagePrice)}</p><a class="naver-search-button" data-naver-search href="${escapeHtml(naverSearchUrl.href)}" target="_blank" rel="noopener noreferrer"><span class="search-icon" aria-hidden="true"></span><span>인터넷 검색</span><span class="naver-arrow" aria-hidden="true">↗</span></a></div></div>
    <section class="notes-section"><div class="detail-section-title"><h3>테이스팅 노트</h3><span>TASTING PROFILE</span></div><div class="note-groups"><div class="note-group"><span>AROMA</span><p>${escapeHtml(whisky.notes.aroma)}</p></div><div class="note-group"><span>TASTE</span><p>${escapeHtml(whisky.notes.taste)}</p></div><div class="note-group"><span>FINISH</span><p>${escapeHtml(whisky.notes.finish)}</p></div></div></section>
    <section class="review-section"><div class="detail-section-title"><h3>나의 기록</h3><span>PERSONAL JOURNAL</span></div>
      <div class="rating-row"><span class="field-label">나의 평점</span><div class="stars" role="group" aria-label="별점">${stars}<span class="rating-value">${Number(review.rating || 0) ? Number(review.rating).toFixed(1) : "—"}</span></div></div>
      <div class="review-fields"><div class="form-field note-field"><label for="detailEnglishName">영문 이름</label><input id="detailEnglishName" type="text" maxlength="100" placeholder="예: Johnnie Walker Black Label 12 Year Old" value="${escapeHtml(currentNameEn)}" /></div><div class="form-field"><label for="purchasePrice">구매 가격 (원)</label><input id="purchasePrice" type="number" inputmode="numeric" min="0" placeholder="예: 120000" value="${escapeHtml(review.purchasePrice || "")}" /></div><div class="form-field"><label for="openDate">개봉일</label><input id="openDate" type="date" value="${escapeHtml(review.openDate || "")}" /></div><div class="form-field note-field"><label for="personalNote">시음 메모</label><textarea id="personalNote" placeholder="오늘의 향과 맛, 함께한 순간을 기록해 보세요.">${escapeHtml(review.personalNote || "")}</textarea></div></div>
      <div class="detail-actions">${whisky.isSaved ? `<button class="remove-button" data-remove="${escapeHtml(id)}">보관함 삭제</button>` : ""}<button class="primary-button" id="saveReview">${whisky.isSaved ? "기록 저장하기" : "내 리스트에 담기"} <span aria-hidden="true">↗</span></button></div>
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
      <div class="new-photo-row"><div class="new-photo-preview" id="newPhotoPreview"><span aria-hidden="true">＋</span></div><div><strong>위스키 사진</strong><p>선택 사항 · 사진은 이 기기에 저장됩니다.</p><label class="photo-pick-button" for="newWhiskyPhotoInput">사진 선택<input id="newWhiskyPhotoInput" type="file" accept="image/*" /></label></div></div>
      <section class="internet-lookup" aria-label="인터넷 위스키 정보 검색">
        <label for="onlineWhiskyQuery">인터넷에서 위스키 찾기</label>
        <div class="lookup-input-row"><input id="onlineWhiskyQuery" type="search" autocomplete="off" placeholder="예: Ardbeg Uigeadail" /><button class="lookup-button" id="lookupWhiskyButton" type="button">검색</button></div>
        <p class="lookup-hint">Wikipedia와 Wikimedia Commons에서 찾습니다. 가격과 테이스팅 노트는 직접 확인해 주세요.</p>
        <div id="onlineLookupResults" class="lookup-results" aria-live="polite"></div>
      </section>
      <div class="review-fields">
        <div class="form-field"><label for="newName">위스키 이름 *</label><input id="newName" name="name" required maxlength="80" placeholder="예: 아드벡 우거다일" /></div>
        <div class="form-field"><label for="newEnglishName">영문 이름</label><input id="newEnglishName" name="nameEn" maxlength="100" placeholder="예: Ardbeg Uigeadail" /></div>
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
  if (whisky.isSaved) {
    showToast("이미 내 보관함에 있어요.");
    return;
  }
  whisky.isSaved = true;
  whisky.addedAt = Date.now();
  persist();
  render();
  closeDetail();
  showToast("기본 위스키 정보를 내 보관함에 담았어요.");
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
  const id = `custom-${crypto.randomUUID?.() || `${Date.now()}-${Math.random().toString(36).slice(2)}`}`;
  const whisky = {
    id,
    name,
    nameEn,
    distillery,
    type: formData.get("type"),
    abv: Number(formData.get("abv")),
    region: formData.get("region").trim() || "정보 없음",
    averagePrice: formData.get("averagePrice").trim() || "가격 정보 없음",
    priceValue: 0,
    tone: "tone-clear",
    imageUrl: newWhiskyPhoto,
    imagePage: newWhiskyPhotoSource?.page || "",
    imageCredit: newWhiskyPhotoSource?.credit || "",
    notes: {
      aroma: formData.get("aroma").trim() || "기록 없음",
      taste: formData.get("taste").trim() || "기록 없음",
      finish: formData.get("finish").trim() || "기록 없음",
    },
    isSaved: true,
    isCustom: true,
    addedAt: Date.now(),
    userReview: { rating: 0, purchasePrice: "", openDate: "", personalNote: "" },
  };
  whiskies.unshift(whisky);
  persist();
  render();
  closeDetail();
  showToast("새 위스키를 내 보관함에 추가했어요.");
}

function closeDetail() {
  document.getElementById("detailBackdrop").classList.add("hidden");
  document.body.style.overflow = "";
  activeWhiskyId = null;
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
  const filterButton = event.target.closest("[data-filter]");
  if (filterButton) { selectedType = filterButton.dataset.filter; render(); return; }
  const exploreFilter = event.target.closest("[data-explore-filter]");
  if (exploreFilter) { selectedExploreType = exploreFilter.dataset.exploreFilter; render(); return; }
  const storyFilter = event.target.closest("[data-story-filter]");
  if (storyFilter) { selectedStoryCategory = storyFilter.dataset.storyFilter; render(); return; }
  const saveButton = event.target.closest("[data-save]");
  if (saveButton) { event.stopPropagation(); toggleSaved(saveButton.dataset.save); return; }
  const starButton = event.target.closest("[data-rating]");
  if (starButton && activeWhiskyId) {
    const whisky = whiskies.find((item) => item.id === activeWhiskyId);
    whisky.userReview.rating = Number(starButton.dataset.rating);
    renderDetail(activeWhiskyId, getReviewDraft());
    return;
  }
  const removeButton = event.target.closest("[data-remove]");
  if (removeButton) { toggleSaved(removeButton.dataset.remove); closeDetail(); return; }
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
document.getElementById("sortSelect").addEventListener("change", renderCollection);
document.getElementById("closeDetail").addEventListener("click", closeDetail);
document.getElementById("profileButton").addEventListener("click", () => showToast(`${whiskies.filter((whisky) => whisky.isSaved).length}병을 보관 중이에요.`));
document.getElementById("detailContent").addEventListener("click", (event) => {
  if (event.target.id === "saveNewWhisky") return;
  if (event.target.id !== "saveReview") return;
  const whisky = whiskies.find((item) => item.id === activeWhiskyId);
  if (!whisky) return;
  const editedNameEn = document.getElementById("detailEnglishName")?.value.trim();
  if (editedNameEn) {
    whisky.nameEn = editedNameEn;
  }
  whisky.userReview = {
    ...whisky.userReview,
    purchasePrice: document.getElementById("purchasePrice").value,
    openDate: document.getElementById("openDate").value,
    personalNote: document.getElementById("personalNote").value,
  };
  if (!whisky.isSaved) {
    whisky.isSaved = true;
    whisky.addedAt = Date.now();
  }
  persist();
  render();
  closeDetail();
  showToast("나의 시음 기록을 저장했어요.");
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
