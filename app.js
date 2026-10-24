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
  ["glenfiddich-18", "글렌피딕 18년 스몰 배치", "Glenfiddich", "싱글몰트", "스페이사이드 · 스코틀랜드", 40, "₩170,000 – 220,000", "사과 · 구운 오크 · 셰리", "말린 과일 · 베이킹 스파이스", "따뜻하고 균형 잡힌 오크", "tone-green"],
  ["balvenie-caribbean-cask-14", "발베니 14년 캐리비안 캐스크", "The Balvenie", "싱글몰트", "스페이사이드 · 스코틀랜드", 43, "₩140,000 – 185,000", "열대과일 · 토피 · 바닐라", "망고 · 꿀 · 부드러운 오크", "달콤한 럼 캐스크 여운", "tone-clear"],
  ["oban-14", "오반 14년", "Oban", "싱글몰트", "하이랜드 · 스코틀랜드", 43, "₩130,000 – 175,000", "오렌지 껍질 · 바다 · 연기", "무화과 · 꿀 · 몰트", "은은한 소금기와 스모크", "tone-blue"],
  ["caol-ila-12", "쿨일라 12년", "Caol Ila", "싱글몰트", "아일라 · 스코틀랜드", 43, "₩110,000 – 150,000", "레몬 · 바닷바람 · 피트", "사과 · 후추 · 스모크", "드라이하고 산뜻한 피트", "tone-blue"],
  ["springbank-10", "스프링뱅크 10년", "Springbank", "싱글몰트", "캠벨타운 · 스코틀랜드", 46, "₩140,000 – 190,000", "소금 · 과일 · 은은한 피트", "바닐라 · 맥아 · 향신료", "오일리하고 긴 여운", "tone-clear"],
  ["yamazaki-12", "야마자키 12년", "Suntory", "싱글몰트", "일본", 43, "₩250,000 – 350,000", "복숭아 · 파인애플 · 미즈나라", "꿀 · 코코넛 · 시나몬", "부드러운 과일과 오크", "tone-ruby"],
  ["hakushu-12", "하쿠슈 12년", "Suntory", "싱글몰트", "일본", 43, "₩220,000 – 310,000", "숲 · 민트 · 청사과", "시트러스 · 허브 · 은은한 스모크", "산뜻하고 깨끗한 피니시", "tone-green"],
  ["yoichi-single-malt", "요이치 싱글 몰트", "Nikka", "싱글몰트", "홋카이도 · 일본", 45, "₩130,000 – 180,000", "해풍 · 피트 · 구운 사과", "몰트 · 소금 · 오크", "묵직한 스모크와 후추", "tone-blue"],
  ["kavalan-classic", "카발란 클래식", "Kavalan", "싱글몰트", "대만", 40, "₩90,000 – 125,000", "열대과일 · 바닐라 · 코코넛", "망고 · 꿀 · 스파이스", "따뜻하고 달콤한 여운", "tone-clear"],
  ["monkey-shoulder", "몽키숄더 오리지널", "Monkey Shoulder", "블렌디드", "스코틀랜드", 40, "₩55,000 – 75,000", "오렌지 · 바닐라 · 몰트", "꿀 · 향신료 · 과일", "부드럽고 달콤한 몰트", "tone-ruby"],
  ["johnnie-walker-red", "조니워커 레드 라벨", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩30,000 – 45,000", "바닐라 · 사과 · 스모크", "캐러멜 · 후추 · 몰트", "가볍고 스파이시한 여운", "tone-ruby"],
  ["johnnie-walker-double-black", "조니워커 더블 블랙", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩55,000 – 75,000", "짙은 피트 · 포도 · 오크", "훈연 · 후추 · 바닐라", "깊고 묵직한 스모크", "tone-blue"],
  ["johnnie-walker-green-15", "조니워커 그린 라벨 15년", "Johnnie Walker", "블렌디드", "스코틀랜드", 43, "₩90,000 – 125,000", "허브 · 과수원 과일 · 오크", "몰트 · 후추 · 연기", "균형 잡힌 허브와 스모크", "tone-green"],
  ["johnnie-walker-blue", "조니워커 블루 라벨", "Johnnie Walker", "블렌디드", "스코틀랜드", 40, "₩250,000 – 350,000", "말린 과일 · 꿀 · 연기", "헤이즐넛 · 다크초콜릿 · 오크", "길고 부드러운 스모크", "tone-blue"],
  ["ballantines-finest", "발렌타인 파이니스트", "Ballantine's", "블렌디드", "스코틀랜드", 40, "₩25,000 – 38,000", "꿀 · 사과 · 꽃향기", "바닐라 · 초콜릿 · 오크", "부드럽고 가벼운 여운", "tone-clear"],
  ["ballantines-17", "발렌타인 17년", "Ballantine's", "블렌디드", "스코틀랜드", 40, "₩110,000 – 150,000", "사과 · 바닐라 · 오크", "꿀 · 향신료 · 은은한 스모크", "균형 잡힌 긴 여운", "tone-green"],
  ["chivas-12", "시바스 리갈 12년", "Chivas Regal", "블렌디드", "스코틀랜드", 40, "₩45,000 – 65,000", "사과 · 꿀 · 허브", "바닐라 · 버터스카치 · 헤이즐넛", "크리미하고 부드러운 여운", "tone-green"],
  ["chivas-mizunara", "시바스 리갈 미즈나라", "Chivas Regal", "블렌디드", "스코틀랜드 · 일본 오크", 40, "₩60,000 – 85,000", "배 · 꿀 · 꽃향기", "오렌지 · 헤이즐넛 · 시나몬", "은은한 미즈나라 오크", "tone-clear"],
  ["royal-salute-21", "로얄살루트 21년", "Royal Salute", "블렌디드", "스코틀랜드", 40, "₩180,000 – 240,000", "배 · 시트러스 · 꽃향기", "바닐라 · 오크 · 스파이스", "우아하고 긴 여운", "tone-ruby"],
  ["dewars-12", "듀어스 12년", "Dewar's", "블렌디드", "스코틀랜드", 40, "₩40,000 – 58,000", "꿀 · 사과 · 바닐라", "토피 · 시리얼 · 오크", "부드럽고 달콤한 피니시", "tone-clear"],
  ["jameson-irish", "제임슨 아이리시 위스키", "Jameson", "블렌디드", "아일랜드", 40, "₩35,000 – 50,000", "바닐라 · 과수원 과일", "견과류 · 향신료 · 셰리", "부드럽고 깔끔한 여운", "tone-green"],
  ["bushmills-black-bush", "부쉬밀 블랙 부쉬", "Bushmills", "블렌디드", "아일랜드", 40, "₩40,000 – 58,000", "셰리 · 말린 과일 · 견과류", "초콜릿 · 살구 · 향신료", "드라이하고 부드러운 여운", "tone-ruby"],
  ["suntory-toki", "산토리 토키", "Suntory", "블렌디드", "일본", 43, "₩45,000 – 65,000", "바질 · 청사과 · 꿀", "자몽 · 페퍼민트 · 타임", "가볍고 산뜻한 여운", "tone-clear"],
  ["nikka-from-the-barrel", "닛카 프롬 더 배럴", "Nikka", "블렌디드", "일본", 51.4, "₩75,000 – 105,000", "오렌지 · 향신료 · 오크", "캐러멜 · 사과 · 후추", "진하고 따뜻한 피니시", "tone-ruby"],
  ["hibiki-17", "히비키 17년", "Suntory", "블렌디드", "일본", 43, "₩700,000 – 1,000,000", "매실 · 말린 과일 · 오크", "다크초콜릿 · 꿀 · 향신료", "섬세하고 긴 미즈나라 여운", "tone-ruby"],
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
  "glenfiddich-18": "Glenfiddich 18 Year Old Small Batch Reserve",
  "balvenie-caribbean-cask-14": "The Balvenie 14 Year Old Caribbean Cask",
  "oban-14": "Oban 14 Year Old",
  "caol-ila-12": "Caol Ila 12 Year Old",
  "springbank-10": "Springbank 10 Year Old",
  "yamazaki-12": "Yamazaki 12 Year Old",
  "hakushu-12": "Hakushu 12 Year Old",
  "yoichi-single-malt": "Nikka Yoichi Single Malt",
  "kavalan-classic": "Kavalan Classic Single Malt",
  "monkey-shoulder": "Monkey Shoulder Original",
  "johnnie-walker-red": "Johnnie Walker Red Label",
  "johnnie-walker-double-black": "Johnnie Walker Double Black",
  "johnnie-walker-green-15": "Johnnie Walker Green Label 15 Year Old",
  "johnnie-walker-blue": "Johnnie Walker Blue Label",
  "ballantines-finest": "Ballantine's Finest",
  "ballantines-17": "Ballantine's 17 Year Old",
  "chivas-12": "Chivas Regal 12 Year Old",
  "chivas-mizunara": "Chivas Regal Mizunara",
  "royal-salute-21": "Royal Salute 21 Year Old Signature Blend",
  "dewars-12": "Dewar's 12 Year Old",
  "jameson-irish": "Jameson Irish Whiskey",
  "bushmills-black-bush": "Bushmills Black Bush",
  "suntory-toki": "Suntory Toki",
  "nikka-from-the-barrel": "Nikka From The Barrel",
  "hibiki-17": "Hibiki 17 Year Old",
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
  "johnnie-walker-blue": {
    imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/JW_Blue_Label.jpg/500px-JW_Blue_Label.jpg",
    fallbackImageUrl: "https://upload.wikimedia.org/wikipedia/commons/a/a3/JW_Blue_Label.jpg",
    imagePage: "https://commons.wikimedia.org/wiki/File:JW_Blue_Label.jpg",
    imageCredit: "Iceman7840 · CC BY-SA 3.0",
  },
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

const storageKey = "stillnote-whisky-collection-v1";
const types = ["전체", "싱글몰트", "버번", "블렌디드", "라이"];
let selectedType = "전체";
let selectedExploreType = "전체";
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
          ...saved,
          name: seed.name,
          nameEn: (saved?.nameEn && saved.nameEn !== seed.name) ? saved.nameEn : seed.nameEn,
          ...(preserveUploadedPhoto ? {} : {
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
    <div class="detail-hero">${bottleArt(whisky, "", true)}<div><p class="detail-distillery">${escapeHtml(whisky.distillery.toUpperCase())}</p><h2 id="detailName">${escapeHtml(whisky.name)}</h2><p class="detail-name-en">${escapeHtml(currentNameEn)}</p><div class="detail-meta"><span>${escapeHtml(whisky.type)}</span><span>${whisky.abv}% ABV</span><span>${escapeHtml(whisky.region)}</span></div><p class="detail-price"><span>참고 가격</span>${escapeHtml(whisky.averagePrice)}</p><a class="naver-search-button" data-naver-search href="${escapeHtml(naverSearchUrl.href)}" target="_blank" rel="noopener noreferrer"><span class="naver-mark" aria-hidden="true">N</span><span>네이버에서 검색</span><span class="naver-arrow" aria-hidden="true">↗</span></a></div></div>
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
  const encodedQuery = encodeURIComponent(query);
  return `intent://search?query=${encodedQuery}#Intent;scheme=naversearchapp;package=com.nhn.android.search;S.browser_fallback_url=${encodeURIComponent(fallbackUrl)};end`;
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

render();