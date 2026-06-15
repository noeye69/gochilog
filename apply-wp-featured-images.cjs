const fs = require("fs");
const path = require("path");

const postsDir = path.join(process.cwd(), "src", "content", "posts");

const featuredImages = [
  {
    "id": "806",
    "title": "自己紹介",
    "post_name": "self-introduction",
    "thumbnail_id": "1824",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/08/IMG_7511.jpeg",
    "heroImage": "/images/wp/2018/08/IMG_7511.jpeg",
    "slug": "self-introduction-806"
  },
  {
    "id": "808",
    "title": "よっしゃ入居や",
    "post_name": "nyuukyo",
    "thumbnail_id": "1901",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/08/a0208742_10152647.jpeg",
    "heroImage": "/images/wp/2018/08/a0208742_10152647.jpeg",
    "slug": "nyuukyo-808"
  },
  {
    "id": "809",
    "title": "サウンドバーってなんなんだ",
    "post_name": "soundbar",
    "thumbnail_id": "1455",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/12/a0208742_17200305.jpg",
    "heroImage": "/images/wp/2018/12/a0208742_17200305.jpg",
    "slug": "soundbar-809"
  },
  {
    "id": "812",
    "title": "ボトルブレンダーでおいしいコーヒーを淹れつつ、お好み焼きを焼こう",
    "post_name": "bottle-blender",
    "thumbnail_id": "1775",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/10/b99e8964-5c81-4de5-9b99-993df61c4308.jpg",
    "heroImage": "/images/wp/2018/10/b99e8964-5c81-4de5-9b99-993df61c4308.jpg",
    "slug": "bottle-blender-812"
  },
  {
    "id": "814",
    "title": "年齢に抗う",
    "post_name": "anti-aging",
    "thumbnail_id": "1750",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/10/shutterstock_230614915-689x488.jpg",
    "heroImage": "/images/wp/2018/10/shutterstock_230614915-689x488.jpg",
    "slug": "anti-aging-814"
  },
  {
    "id": "817",
    "title": "ジントニックにハマった",
    "post_name": "gin",
    "thumbnail_id": "1729",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/10/9fbd4281-4616-479c-97ea-c8ad893f501d.jpg",
    "heroImage": "/images/wp/2018/10/9fbd4281-4616-479c-97ea-c8ad893f501d.jpg",
    "slug": "gin-817"
  },
  {
    "id": "819",
    "title": "月報　2018年10月版",
    "post_name": "geppou-201810",
    "thumbnail_id": "1564",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/11/73d4e8de-bf50-4935-a079-8d5d10acaef8.jpg",
    "heroImage": "/images/wp/2018/11/73d4e8de-bf50-4935-a079-8d5d10acaef8.jpg",
    "slug": "geppou-201810-819"
  },
  {
    "id": "826",
    "title": "ごっちは彼女と結婚し嫁や息子がいる？カップは？出身高校や大学はどこ？",
    "post_name": "more-info",
    "thumbnail_id": "1824",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/08/IMG_7511.jpeg",
    "heroImage": "/images/wp/2018/08/IMG_7511.jpeg",
    "slug": "more-info-826"
  },
  {
    "id": "828",
    "title": "牡蠣×燻製×オリーブオイル=",
    "post_name": "smoked-oyster",
    "thumbnail_id": "1549",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/11/37605187-0e8c-4cb2-b6a0-e0c86ae22cba.jpg",
    "heroImage": "/images/wp/2018/11/37605187-0e8c-4cb2-b6a0-e0c86ae22cba.jpg",
    "slug": "smoked-oyster-828"
  },
  {
    "id": "833",
    "title": "買ってよかったもの 2018年版",
    "post_name": "katteyokatta-2018",
    "thumbnail_id": "1526",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/12/657aac12-20bb-4585-b2b4-1f139517c192.jpg",
    "heroImage": "/images/wp/2018/12/657aac12-20bb-4585-b2b4-1f139517c192.jpg",
    "slug": "katteyokatta-2018-833"
  },
  {
    "id": "834",
    "title": "Amazonサイバーマンデーセールで買ったもの",
    "post_name": "cyber-monday-2018",
    "thumbnail_id": "1405",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/12/package.jpg",
    "heroImage": "/images/wp/2018/12/package.jpg",
    "slug": "cyber-monday-2018-834"
  },
  {
    "id": "835",
    "title": "サイバーマンデーセールでPanasonicのスチーマーEH-SA69-P買ったんでとりあえず使用2回目レビュー",
    "post_name": "steamer",
    "thumbnail_id": "1398",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/12/R0006207.jpg",
    "heroImage": "/images/wp/2018/12/R0006207.jpg",
    "slug": "steamer-835"
  },
  {
    "id": "837",
    "title": "BRIEFINGが高すぎるのでBRIEFING風のバッグ買った",
    "post_name": "anti-briefing",
    "thumbnail_id": "1534",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/12/c4135fa5-d6b4-4ed9-83bf-5473aeaa38e4-1.jpg",
    "heroImage": "/images/wp/2018/12/c4135fa5-d6b4-4ed9-83bf-5473aeaa38e4-1.jpg",
    "slug": "anti-briefing-837"
  },
  {
    "id": "838",
    "title": "glo吸ってみた",
    "post_name": "glo",
    "thumbnail_id": "1387",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/12/7927cfff-fc37-483b-8cbc-637e99735a5e.jpg",
    "heroImage": "/images/wp/2018/12/7927cfff-fc37-483b-8cbc-637e99735a5e.jpg",
    "slug": "glo-838"
  },
  {
    "id": "840",
    "title": "月報 2018年12月版",
    "post_name": "geppou-201812",
    "thumbnail_id": "2765",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/01/1471940986.png",
    "heroImage": "/images/wp/2019/01/1471940986.png",
    "slug": "geppou-201812-840"
  },
  {
    "id": "841",
    "title": "ZOZO前澤さんの一連の企画を見ていて思ったこととか",
    "post_name": "mz",
    "thumbnail_id": "2679",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/01/DwJrGtfU8AIi9ry.jpg",
    "heroImage": "/images/wp/2019/01/DwJrGtfU8AIi9ry.jpg",
    "slug": "mz-841"
  },
  {
    "id": "844",
    "title": "gloが壊れたので交換してもらった",
    "post_name": "glo-broken",
    "thumbnail_id": "1840",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/01/IMG_3481.jpg",
    "heroImage": "/images/wp/2019/01/IMG_3481.jpg",
    "slug": "glo-broken-844"
  },
  {
    "id": "848",
    "title": "月報　2019年1月版",
    "post_name": "geppou-201901",
    "thumbnail_id": "2744",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/02/Dx7W-OVUwAAw0cH.jpg",
    "heroImage": "/images/wp/2019/02/Dx7W-OVUwAAw0cH.jpg",
    "slug": "geppou-201901-848"
  },
  {
    "id": "851",
    "title": "ポストマンシューズ新調した",
    "post_name": "new-postman-shoes",
    "thumbnail_id": "2690",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/02/73D17E01-203E-4F5A-990A-E5B22A45E12C.jpg",
    "heroImage": "/images/wp/2019/02/73D17E01-203E-4F5A-990A-E5B22A45E12C.jpg",
    "slug": "new-postman-shoes-851"
  },
  {
    "id": "854",
    "title": "オーバードライブ界の堺雅人、TS-808 WEED mod. 買った",
    "post_name": "ts-808-weed-mod",
    "thumbnail_id": "3738",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/2019022111353310f.jpg",
    "heroImage": "/images/wp/2019/03/2019022111353310f.jpg",
    "slug": "ts-808-weed-mod-854"
  },
  {
    "id": "859",
    "title": "3年使っているエレハモ soul food JHS mod. レビュー",
    "post_name": "soul-food-jhs-mod",
    "thumbnail_id": "2697",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/02/F218008B-4F1D-438E-9B08-C715DCFDA717.jpg",
    "heroImage": "/images/wp/2019/02/F218008B-4F1D-438E-9B08-C715DCFDA717.jpg",
    "slug": "soul-food-jhs-mod-859"
  },
  {
    "id": "860",
    "title": "会社でGoogleカレンダーを導入したら誰も壁掛けカレンダーを見なくなった",
    "post_name": "google-calendar",
    "thumbnail_id": "1380",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/02/gcal8.jpg",
    "heroImage": "/images/wp/2019/02/gcal8.jpg",
    "slug": "google-calendar-860"
  },
  {
    "id": "861",
    "title": "月報　2019年2月版",
    "post_name": "geppou-201902",
    "thumbnail_id": "2714",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/02/8e51dec8-3a7d-493f-9aa8-841265e6d470.jpg",
    "heroImage": "/images/wp/2019/02/8e51dec8-3a7d-493f-9aa8-841265e6d470.jpg",
    "slug": "geppou-201902-861"
  },
  {
    "id": "862",
    "title": "ANKERのイヤホンとスピーカーがめっちゃいい",
    "post_name": "sound-of-anker",
    "thumbnail_id": "1372",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/9E0F33AF-3292-4E28-BC40-5A1176E6D3AB.jpg",
    "heroImage": "/images/wp/2019/03/9E0F33AF-3292-4E28-BC40-5A1176E6D3AB.jpg",
    "slug": "sound-of-anker-862"
  },
  {
    "id": "863",
    "title": "ヤマトの荷物の受け取りにはクロネコメンバーズが便利",
    "post_name": "kuroneko-members",
    "thumbnail_id": "3836",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/kuroneko.png",
    "heroImage": "/images/wp/2019/03/kuroneko.png",
    "slug": "kuroneko-members-863"
  },
  {
    "id": "864",
    "title": "Wi-Fiを受信できないPCでWi-Fiを受信できるようにした",
    "post_name": "wi-fi",
    "thumbnail_id": "2653",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/tplink2.jpg",
    "heroImage": "/images/wp/2019/03/tplink2.jpg",
    "slug": "wi-fi-864"
  },
  {
    "id": "865",
    "title": "まだOfficeで消耗してるの？",
    "post_name": "wasting-time-by-office",
    "thumbnail_id": "1367",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/20190310095612b1a.jpg",
    "heroImage": "/images/wp/2019/03/20190310095612b1a.jpg",
    "slug": "wasting-time-by-office-865"
  },
  {
    "id": "866",
    "title": "iDとedy、めっちゃ聞き間違えられるのがストレスなのでQUICPAYと楽天ペイ使うことにした",
    "post_name": "quicpay",
    "thumbnail_id": "1363",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/rakupei.jpg",
    "heroImage": "/images/wp/2019/03/rakupei.jpg",
    "slug": "quicpay-866"
  },
  {
    "id": "868",
    "title": "【怖すぎ】ストーカーされてた【追記あり】",
    "post_name": "google-stalking",
    "thumbnail_id": "1357",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/IMG-4272.png",
    "heroImage": "/images/wp/2019/03/IMG-4272.png",
    "slug": "google-stalking-868"
  },
  {
    "id": "869",
    "title": "使いたい印鑑と使いたくない印鑑があるので、使いたくない印鑑を1つ減らした",
    "post_name": "throw-away-stamp",
    "thumbnail_id": "2668",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/C2CACADE-339C-4002-A56B-4E13FB75DA4D.jpg",
    "heroImage": "/images/wp/2019/03/C2CACADE-339C-4002-A56B-4E13FB75DA4D.jpg",
    "slug": "throw-away-stamp-869"
  },
  {
    "id": "870",
    "title": "春になったので洗濯槽クリーナーで洗濯機掃除した",
    "post_name": "cleaning-of-washing-machine",
    "thumbnail_id": "1347",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/sentakucleaner.jpg",
    "heroImage": "/images/wp/2019/03/sentakucleaner.jpg",
    "slug": "cleaning-of-washing-machine-870"
  },
  {
    "id": "871",
    "title": "家でギター練習するならYAMAHA THR5で十分",
    "post_name": "yamaha-thr5",
    "thumbnail_id": "3821",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/26858562-B4CA-44FB-8130-594A943975A0.jpg",
    "heroImage": "/images/wp/2019/03/26858562-B4CA-44FB-8130-594A943975A0.jpg",
    "slug": "yamaha-thr5-871"
  },
  {
    "id": "874",
    "title": "乗り遅れたけどGR3所感",
    "post_name": "first-impression-of-gr3",
    "thumbnail_id": "1250",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/A999357D-3090-429A-8F94-9C9D3D943AF7.jpg",
    "heroImage": "/images/wp/2019/03/A999357D-3090-429A-8F94-9C9D3D943AF7.jpg",
    "slug": "first-impression-of-gr3-874"
  },
  {
    "id": "875",
    "title": "今更メルカリデビューして、いらない物売った。あと写真の加工とか",
    "post_name": "mercari-debut",
    "thumbnail_id": "3803",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/download.png",
    "heroImage": "/images/wp/2019/03/download.png",
    "slug": "mercari-debut-875"
  },
  {
    "id": "876",
    "title": "GR3のケースと互換バッテリーと充電器買ったった",
    "post_name": "accessory-of-gr3",
    "thumbnail_id": "1232",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/0B7D3F0B-7167-4917-8C10-855CAFBC721D-1.jpg",
    "heroImage": "/images/wp/2019/03/0B7D3F0B-7167-4917-8C10-855CAFBC721D-1.jpg",
    "slug": "accessory-of-gr3-876"
  },
  {
    "id": "877",
    "title": "京都でGR3使ってみた、ライブしてきた",
    "post_name": "gr3-in-kyoto",
    "thumbnail_id": "3785",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/R0002426.jpg",
    "heroImage": "/images/wp/2019/03/R0002426.jpg",
    "slug": "gr3-in-kyoto-877"
  },
  {
    "id": "879",
    "title": "旅行用充電セットを見直した",
    "post_name": "batteries-for-trip",
    "thumbnail_id": "3752",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/03/B5A0BCCC-305C-4CF1-BD1D-7A614BC5457F.jpg",
    "heroImage": "/images/wp/2019/03/B5A0BCCC-305C-4CF1-BD1D-7A614BC5457F.jpg",
    "slug": "batteries-for-trip-879"
  },
  {
    "id": "881",
    "title": "月報 2019年3月版",
    "post_name": "geppou-201903",
    "thumbnail_id": "2677",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/D3MvYP5UUAMevhk.jpg",
    "heroImage": "/images/wp/2019/04/D3MvYP5UUAMevhk.jpg",
    "slug": "geppou-201903-881"
  },
  {
    "id": "884",
    "title": "会社で面談を導入した",
    "post_name": "1on1",
    "thumbnail_id": "1216",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/IMG-4676.jpg",
    "heroImage": "/images/wp/2019/04/IMG-4676.jpg",
    "slug": "1on1-884"
  },
  {
    "id": "885",
    "title": "glo、壊れやすいけど製品登録してたら無料で交換してもらえるから最高",
    "post_name": "glo-exchange-free",
    "thumbnail_id": "1846",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/547806C3-98BA-4168-AFBF-1720F6543161.jpg",
    "heroImage": "/images/wp/2019/04/547806C3-98BA-4168-AFBF-1720F6543161.jpg",
    "slug": "glo-exchange-free-885"
  },
  {
    "id": "886",
    "title": "Ploom TECH＋微妙だった",
    "post_name": "ploom-tech-plus",
    "thumbnail_id": "3669",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/C9AAB173-D90E-4A28-9487-F16D57C951A2.jpg",
    "heroImage": "/images/wp/2019/04/C9AAB173-D90E-4A28-9487-F16D57C951A2.jpg",
    "slug": "ploom-tech-plus-886"
  },
  {
    "id": "887",
    "title": "クレジットカードをAmazonと楽天の2つに絞った",
    "post_name": "creditcard",
    "thumbnail_id": "1212",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/IMG_4889.jpg",
    "heroImage": "/images/wp/2019/04/IMG_4889.jpg",
    "slug": "creditcard-887"
  },
  {
    "id": "889",
    "title": "オシャレな照明の下で暮らしたい",
    "post_name": "%e3%82%aa%e3%82%b7%e3%83%a3%e3%83%ac%e3%81%aa%e7%85%a7%e6%98%8e%e3%81%ae%e4%b8%8b%e3%81%a7%e6%9a%ae%e3%82%89%e3%81%97%e3%81%9f%e3%81%84",
    "thumbnail_id": "1906",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/08/IMG_0878.jpg",
    "heroImage": "/images/wp/2018/08/IMG_0878.jpg",
    "slug": "%e3%82%aa%e3%82%b7%e3%83%a3%e3%83%ac%e3%81%aa%e7%85%a7%e6%98%8e%e3%81%ae%e4%b8%8b%e3%81%a7%e6%9a%ae%e3%82%89%e3%81%97%e3%81%9f%e3%81%84-889"
  },
  {
    "id": "890",
    "title": "コードレス掃除機とルンバで1年中部屋をきれいに保って、さらに年間休日を増やそう",
    "post_name": "makita-and-roomba",
    "thumbnail_id": "2897",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/08/53879B0D-AF31-40ED-B29A-E3D5E8AD52D9.jpg",
    "heroImage": "/images/wp/2018/08/53879B0D-AF31-40ED-B29A-E3D5E8AD52D9.jpg",
    "slug": "makita-and-roomba-890"
  },
  {
    "id": "891",
    "title": "燻製もっと普及してもいいと思う",
    "post_name": "smoke",
    "thumbnail_id": "1817",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/09/IMG_0908.jpg",
    "heroImage": "/images/wp/2018/09/IMG_0908.jpg",
    "slug": "smoke-891"
  },
  {
    "id": "895",
    "title": "フリック入力を練習している",
    "post_name": "flick",
    "thumbnail_id": "3634",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/IMG-5035.png",
    "heroImage": "/images/wp/2019/04/IMG-5035.png",
    "slug": "flick-895"
  },
  {
    "id": "896",
    "title": "免許証はキーケースに入れるのが僕の最適解",
    "post_name": "keycase-tsuchiyakaban",
    "thumbnail_id": "2015",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/49A9C4F6-1063-49A6-AE30-008F39F78BA4.jpg",
    "heroImage": "/images/wp/2019/04/49A9C4F6-1063-49A6-AE30-008F39F78BA4.jpg",
    "slug": "keycase-tsuchiyakaban-896"
  },
  {
    "id": "897",
    "title": "小さい財布買った",
    "post_name": "chiisai-saihu",
    "thumbnail_id": "1800",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/09/423de49f-7e8d-4686-b767-0e2bf1405d5c.jpg",
    "heroImage": "/images/wp/2018/09/423de49f-7e8d-4686-b767-0e2bf1405d5c.jpg",
    "slug": "chiisai-saihu-897"
  },
  {
    "id": "899",
    "title": "デスクマット新調した",
    "post_name": "deskmat",
    "thumbnail_id": "3567",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/FCF05511-1A3C-4831-8BA1-9BBE8C2E751A.jpg",
    "heroImage": "/images/wp/2019/04/FCF05511-1A3C-4831-8BA1-9BBE8C2E751A.jpg",
    "slug": "deskmat-899"
  },
  {
    "id": "900",
    "title": "会社の浄水器をクリンスイに替えた",
    "post_name": "kurinsui",
    "thumbnail_id": "3556",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/04/8AECA2A6-7355-4626-8E21-7EECE90F9A45.jpg",
    "heroImage": "/images/wp/2019/04/8AECA2A6-7355-4626-8E21-7EECE90F9A45.jpg",
    "slug": "kurinsui-900"
  },
  {
    "id": "901",
    "title": "月報　2019年4月版",
    "post_name": "geppou-201904",
    "thumbnail_id": "1083",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/07/R0003030.jpg",
    "heroImage": "/images/wp/2019/07/R0003030.jpg",
    "slug": "geppou-201904-901"
  },
  {
    "id": "904",
    "title": "THE TEAMの著者である麻野耕司さんに会いに行った",
    "post_name": "the-team-asanokoji",
    "thumbnail_id": "1209",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/05/IMG_5178.jpg",
    "heroImage": "/images/wp/2019/05/IMG_5178.jpg",
    "slug": "the-team-asanokoji-904"
  },
  {
    "id": "905",
    "title": "サコッシュがめちゃ便利なことに気づいた",
    "post_name": "sacoche",
    "thumbnail_id": "3472",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/05/R0006321.jpg",
    "heroImage": "/images/wp/2019/05/R0006321.jpg",
    "slug": "sacoche-905"
  },
  {
    "id": "907",
    "title": "新しいチャリをゲットしたので、ブラックで統一した",
    "post_name": "my-new-bicycle",
    "thumbnail_id": "2500",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/05/B3452919-5744-4DD9-B949-C823FD2BEFE1.jpg",
    "heroImage": "/images/wp/2019/05/B3452919-5744-4DD9-B949-C823FD2BEFE1.jpg",
    "slug": "my-new-bicycle-907"
  },
  {
    "id": "908",
    "title": "いびきと歯ぎしり対策をした",
    "post_name": "sleeping-noise",
    "thumbnail_id": "1075",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/07/001l.jpg",
    "heroImage": "/images/wp/2019/07/001l.jpg",
    "slug": "sleeping-noise-908"
  },
  {
    "id": "911",
    "title": "Googleのローカルガイドに参加した",
    "post_name": "google-local-guide",
    "thumbnail_id": "1190",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/05/ro-karugaido.jpg",
    "heroImage": "/images/wp/2019/05/ro-karugaido.jpg",
    "slug": "google-local-guide-911"
  },
  {
    "id": "916",
    "title": "名刺入れと小銭入れを兼ねた製品を探すのを諦めた",
    "post_name": "meishiire-kozeniire",
    "thumbnail_id": "3414",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/05/IMG-8179.jpg",
    "heroImage": "/images/wp/2019/05/IMG-8179.jpg",
    "slug": "meishiire-kozeniire-916"
  },
  {
    "id": "917",
    "title": "月報 2019年5月版",
    "post_name": "geppou-201905",
    "thumbnail_id": "1162",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/R0003441.jpg",
    "heroImage": "/images/wp/2019/06/R0003441.jpg",
    "slug": "geppou-201905-917"
  },
  {
    "id": "918",
    "title": "X-T30を買ったのでアクセサリー類を揃えた",
    "post_name": "x-t30-accessory",
    "thumbnail_id": "1139",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/R0004719.jpg",
    "heroImage": "/images/wp/2019/06/R0004719.jpg",
    "slug": "x-t30-accessory-918"
  },
  {
    "id": "920",
    "title": "【HAKUBA】プラスシェル シティ04 メッセンジャー いいカメラバッグなのにレビューが少ないので全力で紹介する",
    "post_name": "hakuba-messenger",
    "thumbnail_id": "2021",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/R0004762.jpg",
    "heroImage": "/images/wp/2019/06/R0004762.jpg",
    "slug": "hakuba-messenger-920"
  },
  {
    "id": "921",
    "title": "尾道のベラビスタ スパ＆マリーナに宿泊してきた",
    "post_name": "onomichi-bella-vista",
    "thumbnail_id": "2422",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/638F8E78-4F53-4162-9D83-5D89453E7997-9459-000006DAD33B8CDB.jpg",
    "heroImage": "/images/wp/2019/06/638F8E78-4F53-4162-9D83-5D89453E7997-9459-000006DAD33B8CDB.jpg",
    "slug": "onomichi-bella-vista-921"
  },
  {
    "id": "922",
    "title": "尾道旅行で行った場所まとめ",
    "post_name": "onomichi-trip",
    "thumbnail_id": "2372",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/535BF73D-CF30-4660-9AE2-B6F83CADA62A-9459-000006D9DED6A620.jpg",
    "heroImage": "/images/wp/2019/06/535BF73D-CF30-4660-9AE2-B6F83CADA62A-9459-000006D9DED6A620.jpg",
    "slug": "onomichi-trip-922"
  },
  {
    "id": "923",
    "title": "会社のホームページ用の写真を撮影してもらった",
    "post_name": "shooting-for-homepage",
    "thumbnail_id": "3394",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/xfsOAzBd5dMBedU1560731372.jpg",
    "heroImage": "/images/wp/2019/06/xfsOAzBd5dMBedU1560731372.jpg",
    "slug": "shooting-for-homepage-923"
  },
  {
    "id": "925",
    "title": "京都でレンタサイクルPiPPA(ピッパ)使ってみた",
    "post_name": "pippa",
    "thumbnail_id": "2367",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/IMG_9240.png",
    "heroImage": "/images/wp/2019/06/IMG_9240.png",
    "slug": "pippa-925"
  },
  {
    "id": "927",
    "title": "THE LIGHT AT SPLIT SECOND vol.19",
    "post_name": "the-light-at-split-second-vol-19",
    "thumbnail_id": "2334",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/06/DSCF1198.jpg",
    "heroImage": "/images/wp/2019/06/DSCF1198.jpg",
    "slug": "the-light-at-split-second-vol-19-927"
  },
  {
    "id": "928",
    "title": "ミドリ安全の安全靴 MPW10が鋼の先芯入りのガチなやつなのに安全靴っぽくなくていい感じ",
    "post_name": "midorianzen-mpw10",
    "thumbnail_id": "3321",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/07/R0005962.jpg",
    "heroImage": "/images/wp/2019/07/R0005962.jpg",
    "slug": "midorianzen-mpw10-928"
  },
  {
    "id": "929",
    "title": "4度目の正直でやっとGoogle Adsenseの審査に通ったので、その時の状況とか",
    "post_name": "google-adsense",
    "thumbnail_id": "2303",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/07/eyecatch_googleadsense_1.png",
    "heroImage": "/images/wp/2019/07/eyecatch_googleadsense_1.png",
    "slug": "google-adsense-929"
  },
  {
    "id": "931",
    "title": "テーブルに熱いものを置いた時にできた白い跡を綺麗に消す方法",
    "post_name": "shiroiato",
    "thumbnail_id": "3322",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/07/IMG_9608.jpg",
    "heroImage": "/images/wp/2019/07/IMG_9608.jpg",
    "slug": "shiroiato-931"
  },
  {
    "id": "934",
    "title": "サーキュレーターを使って夏を乗り切る",
    "post_name": "circulator-for-summer",
    "thumbnail_id": "1023",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/07/R0006020.jpg",
    "heroImage": "/images/wp/2019/07/R0006020.jpg",
    "slug": "circulator-for-summer-934"
  },
  {
    "id": "937",
    "title": "自宅のwi-fiが遅すぎるので月100GB3,000円の格安SIM chat wifiを導入したら快適になった",
    "post_name": "chat-wifi",
    "thumbnail_id": "2261",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/07/R0006373.jpg",
    "heroImage": "/images/wp/2019/07/R0006373.jpg",
    "slug": "chat-wifi-937"
  },
  {
    "id": "942",
    "title": "月報 2019年7月版",
    "post_name": "geppou-201907",
    "thumbnail_id": "2132",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/08/20190810170611303.jpg",
    "heroImage": "/images/wp/2019/08/20190810170611303.jpg",
    "slug": "geppou-201907-942"
  },
  {
    "id": "943",
    "title": "通算4度目のぎっくり腰",
    "post_name": "4th-times-gikkurigoshi",
    "thumbnail_id": "2234",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/08/201908081156503e5.jpg",
    "heroImage": "/images/wp/2019/08/201908081156503e5.jpg",
    "slug": "4th-times-gikkurigoshi-943"
  },
  {
    "id": "946",
    "title": "今年も天橋立で海パーン！してきた",
    "post_name": "umi-paaan-2019",
    "thumbnail_id": "2128",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/08/DSCF2401.jpg",
    "heroImage": "/images/wp/2019/08/DSCF2401.jpg",
    "slug": "umi-paaan-2019-946"
  },
  {
    "id": "952",
    "title": "2019年10月からの増税対策として、kyash導入した",
    "post_name": "anti-tax-by-kyash",
    "thumbnail_id": "2003",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/08/R0006601.jpg",
    "heroImage": "/images/wp/2019/08/R0006601.jpg",
    "slug": "anti-tax-by-kyash-952"
  },
  {
    "id": "953",
    "title": "ガラケーからGalaxy S10に機種変したら人はどうなるのか",
    "post_name": "from-garake-to-galaxys10",
    "thumbnail_id": "986",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/IMG_0038.jpg",
    "heroImage": "/images/wp/2019/09/IMG_0038.jpg",
    "slug": "from-garake-to-galaxys10-953"
  },
  {
    "id": "954",
    "title": "腰痛対策として職場に電動昇降デスク FLEXISPOT導入した",
    "post_name": "flexispot",
    "thumbnail_id": "2511",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/IMG_0134.jpg",
    "heroImage": "/images/wp/2019/09/IMG_0134.jpg",
    "slug": "flexispot-954"
  },
  {
    "id": "1171",
    "title": "新しいノートPC何がいいかなと検索してたら、くそ面白いブログに出会った",
    "post_name": "think-about-new-pc",
    "thumbnail_id": "1191",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/05/huawei-matebook-13-1.jpg",
    "heroImage": "/images/wp/2019/05/huawei-matebook-13-1.jpg",
    "slug": "think-about-new-pc-1171"
  },
  {
    "id": "1860",
    "title": "【ゆる募】いいお皿情報",
    "post_name": "iiosara",
    "thumbnail_id": "1881",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/R0006695.jpg",
    "heroImage": "/images/wp/2019/09/R0006695.jpg",
    "slug": "iiosara-1860"
  },
  {
    "id": "1992",
    "title": "「うおじま」のうな重がうまい",
    "post_name": "uojima-unaju-okayama",
    "thumbnail_id": "1995",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/R0006694.jpg",
    "heroImage": "/images/wp/2019/09/R0006694.jpg",
    "slug": "uojima-unaju-okayama-1992"
  },
  {
    "id": "2037",
    "title": "月報 2019年8月版",
    "post_name": "geppou-201908",
    "thumbnail_id": "2052",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/IMG_0012.jpg",
    "heroImage": "/images/wp/2019/09/IMG_0012.jpg",
    "slug": "geppou-201908-2037"
  },
  {
    "id": "2152",
    "title": "チキン南蛮とかいう神を作ってしまった",
    "post_name": "chikinnamban-kami",
    "thumbnail_id": "2182",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/R0006793.jpg",
    "heroImage": "/images/wp/2019/09/R0006793.jpg",
    "slug": "chikinnamban-kami-2152"
  },
  {
    "id": "2272",
    "title": "月報 2019年6月版",
    "post_name": "geppou-201906",
    "thumbnail_id": "2273",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/DSCF0908.jpg",
    "heroImage": "/images/wp/2019/09/DSCF0908.jpg",
    "slug": "geppou-201906-2272"
  },
  {
    "id": "2778",
    "title": "月報 2018年11月版",
    "post_name": "geppou-201811",
    "thumbnail_id": "2812",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/12/2aa7c0b6-1e79-4744-b002-405f235bacc9.jpg",
    "heroImage": "/images/wp/2018/12/2aa7c0b6-1e79-4744-b002-405f235bacc9.jpg",
    "slug": "geppou-201811-2778"
  },
  {
    "id": "2825",
    "title": "iPhone 11よりGoogle Pixel 4がほしい",
    "post_name": "google-pixel4",
    "thumbnail_id": "2833",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/pixel4-w1280.jpg",
    "heroImage": "/images/wp/2019/09/pixel4-w1280.jpg",
    "slug": "google-pixel4-2825"
  },
  {
    "id": "3007",
    "title": "買ってよかった生活小物",
    "post_name": "seikatsu-komono",
    "thumbnail_id": "3012",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2018/10/IMG_1272.jpg",
    "heroImage": "/images/wp/2018/10/IMG_1272.jpg",
    "slug": "seikatsu-komono-3007"
  },
  {
    "id": "3599",
    "title": "成田屋中店のほうがいい説",
    "post_name": "naritaya-nakaten",
    "thumbnail_id": "3604",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/IMG_0428.jpg",
    "heroImage": "/images/wp/2019/09/IMG_0428.jpg",
    "slug": "naritaya-nakaten-3599"
  },
  {
    "id": "3925",
    "title": "会社で月例会が始まった",
    "post_name": "getsureikai-with-spread-sheet",
    "thumbnail_id": "795",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/business-3370832.jpg",
    "heroImage": "/images/wp/2019/09/business-3370832.jpg",
    "slug": "getsureikai-with-spread-sheet-3925"
  },
  {
    "id": "3993",
    "title": "徳島の大塚国際美術館のコンセプトが素晴らしいなと思った話",
    "post_name": "otsuka-museum",
    "thumbnail_id": "3994",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/09/2D6D05F1-9E67-439F-BA3D-89E9E0D16AC2-751-0000007B305D51C4.jpg",
    "heroImage": "/images/wp/2019/09/2D6D05F1-9E67-439F-BA3D-89E9E0D16AC2-751-0000007B305D51C4.jpg",
    "slug": "otsuka-museum-3993"
  },
  {
    "id": "4048",
    "title": "月報 2019年9月版",
    "post_name": "geppou-201909",
    "thumbnail_id": "4055",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/DSCF4314.jpg",
    "heroImage": "/images/wp/2019/10/DSCF4314.jpg",
    "slug": "geppou-201909-4048"
  },
  {
    "id": "4066",
    "title": "徳島のモアナコーストに宿泊してきた",
    "post_name": "moana-coast",
    "thumbnail_id": "4137",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/CA4951D6-55AB-4898-8AC8-89204243DAB9-751-0000007BEA98104F.jpg",
    "heroImage": "/images/wp/2019/10/CA4951D6-55AB-4898-8AC8-89204243DAB9-751-0000007BEA98104F.jpg",
    "slug": "moana-coast-4066"
  },
  {
    "id": "4067",
    "title": "リアル会議を減らそうとしている",
    "post_name": "reduce-real-meeting",
    "thumbnail_id": "4124",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/0_ce3e498.jpg",
    "heroImage": "/images/wp/2019/10/0_ce3e498.jpg",
    "slug": "reduce-real-meeting-4067"
  },
  {
    "id": "4088",
    "title": "glo proがシンプルに最高！もう普通のgloには戻れない",
    "post_name": "glo-pro",
    "thumbnail_id": "4092",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/R0006919.jpg",
    "heroImage": "/images/wp/2019/10/R0006919.jpg",
    "slug": "glo-pro-4088"
  },
  {
    "id": "4178",
    "title": "徳島旅行で行った場所まとめ",
    "post_name": "tokushima-trip",
    "thumbnail_id": "4187",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/IMG_0469.jpg",
    "heroImage": "/images/wp/2019/10/IMG_0469.jpg",
    "slug": "tokushima-trip-4178"
  },
  {
    "id": "4211",
    "title": "今はこんなに安くて使えるPCがあるのか。Lenovo Chromebook S330買った",
    "post_name": "lenovo-chromebook-s330",
    "thumbnail_id": "4213",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/DSCF4415.jpg",
    "heroImage": "/images/wp/2019/10/DSCF4415.jpg",
    "slug": "lenovo-chromebook-s330-4211"
  },
  {
    "id": "4265",
    "title": "もはやイヤホンではなく持ち歩ける防音室。 ソニーのWF-1000XM3がやっと届いた",
    "post_name": "wf-1000xm3",
    "thumbnail_id": "4279",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/R0006910.jpg",
    "heroImage": "/images/wp/2019/10/R0006910.jpg",
    "slug": "wf-1000xm3-4265"
  },
  {
    "id": "4300",
    "title": "備前焼まつりに行ってきた",
    "post_name": "bizenyaki-matsuri-2019",
    "thumbnail_id": "4373",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/E47208B8-A67C-4AC4-9244-40F104F6DFB9-2221-000001F1C33A89B4.jpg",
    "heroImage": "/images/wp/2019/10/E47208B8-A67C-4AC4-9244-40F104F6DFB9-2221-000001F1C33A89B4.jpg",
    "slug": "bizenyaki-matsuri-2019-4300"
  },
  {
    "id": "4302",
    "title": "早速glo proが壊れたから交換してもらった",
    "post_name": "glo-pro-broken",
    "thumbnail_id": "4307",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/R0007075.jpg",
    "heroImage": "/images/wp/2019/10/R0007075.jpg",
    "slug": "glo-pro-broken-4302"
  },
  {
    "id": "4316",
    "title": "なんとか一人でできたけどiPhone XからSIMフリー版Pixel 4に乗り換えたときにめんどくさかったこと3つ",
    "post_name": "from-iphonex-to-pixel4",
    "thumbnail_id": "4328",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/2019_1024_00134000.jpg",
    "heroImage": "/images/wp/2019/10/2019_1024_00134000.jpg",
    "slug": "from-iphonex-to-pixel4-4316"
  },
  {
    "id": "4384",
    "title": "ベーコンまつりを開催した",
    "post_name": "bacon-fes",
    "thumbnail_id": "4417",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/10/IMG_20191027_184449.jpg",
    "heroImage": "/images/wp/2019/10/IMG_20191027_184449.jpg",
    "slug": "bacon-fes-4384"
  },
  {
    "id": "4445",
    "title": "Pixel 4にして始めたこと3つ",
    "post_name": "3-things-for-pixel-4",
    "thumbnail_id": "4532",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/IMG_20191106_124610.jpg",
    "heroImage": "/images/wp/2019/11/IMG_20191106_124610.jpg",
    "slug": "3-things-for-pixel-4-4445"
  },
  {
    "id": "4454",
    "title": "月報 2019年10月版",
    "post_name": "geppou-201910",
    "thumbnail_id": "4461",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/00100lrPORTRAIT_00100_BURST20191030191215114_COVER.jpg",
    "heroImage": "/images/wp/2019/11/00100lrPORTRAIT_00100_BURST20191030191215114_COVER.jpg",
    "slug": "geppou-201910-4454"
  },
  {
    "id": "4534",
    "title": "入荷量と在庫量で見る会社の健康状態",
    "post_name": "health-of-company",
    "thumbnail_id": "4535",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/ec84edd163ac24323b18bca40428031d.jpg",
    "heroImage": "/images/wp/2019/11/ec84edd163ac24323b18bca40428031d.jpg",
    "slug": "health-of-company-4534"
  },
  {
    "id": "4540",
    "title": "400℃ pizzaでピザを食おう",
    "post_name": "400do-pizza",
    "thumbnail_id": "4634",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/00100trPORTRAIT_00100_BURST20191109120906708_COVER-scaled.jpg",
    "heroImage": "/images/wp/2019/11/00100trPORTRAIT_00100_BURST20191109120906708_COVER-scaled.jpg",
    "slug": "400do-pizza-4540"
  },
  {
    "id": "4601",
    "title": "会議室にディスプレイ導入した",
    "post_name": "display-at-meeting-room",
    "thumbnail_id": "4605",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/IMG_20191114_201028-scaled.jpg",
    "heroImage": "/images/wp/2019/11/IMG_20191114_201028-scaled.jpg",
    "slug": "display-at-meeting-room-4601"
  },
  {
    "id": "4665",
    "title": "iriのライブ見に行ったら終始泣いていた",
    "post_name": "iri",
    "thumbnail_id": "4666",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/689-191023-1.png",
    "heroImage": "/images/wp/2019/11/689-191023-1.png",
    "slug": "iri-4665"
  },
  {
    "id": "4734",
    "title": "自宅にモニターアームとDellの27インチ4kディスプレイを導入した",
    "post_name": "27inch-4k-display-on-monitor-arm",
    "thumbnail_id": "4756",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/IMG_20191121_192705-scaled.jpg",
    "heroImage": "/images/wp/2019/11/IMG_20191121_192705-scaled.jpg",
    "slug": "27inch-4k-display-on-monitor-arm-4734"
  },
  {
    "id": "4774",
    "title": "やってよかったこと2019年版：職場へのG Suite導入",
    "post_name": "yatteyokattakoto2019-gsuite",
    "thumbnail_id": "4833",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/images-2.jpeg",
    "heroImage": "/images/wp/2019/11/images-2.jpeg",
    "slug": "yatteyokattakoto2019-gsuite-4774"
  },
  {
    "id": "4785",
    "title": "GR3を売却した",
    "post_name": "goodbye-gr3",
    "thumbnail_id": "4801",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/11/00100trPORTRAIT_00100_BURST20191115223558882_COVER-1-scaled.jpg",
    "heroImage": "/images/wp/2019/11/00100trPORTRAIT_00100_BURST20191115223558882_COVER-1-scaled.jpg",
    "slug": "goodbye-gr3-4785"
  },
  {
    "id": "4848",
    "title": "月報 2019年11月版",
    "post_name": "geppou-201911",
    "thumbnail_id": "4905",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/00100lrPORTRAIT_00100_BURST20191127143150744_COVER-scaled.jpg",
    "heroImage": "/images/wp/2019/12/00100lrPORTRAIT_00100_BURST20191127143150744_COVER-scaled.jpg",
    "slug": "geppou-201911-4848"
  },
  {
    "id": "4851",
    "title": "Pixelbook goのcore i5モデルがアメリカから届いた",
    "post_name": "import-pixelbook-go",
    "thumbnail_id": "4867",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/DSCF4733-scaled.jpg",
    "heroImage": "/images/wp/2019/12/DSCF4733-scaled.jpg",
    "slug": "import-pixelbook-go-4851"
  },
  {
    "id": "4910",
    "title": "勤怠管理システム「ジョブカン」を導入した",
    "post_name": "jobcan",
    "thumbnail_id": "5121",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/Screenshot_20191217-003031-e1576539050937.png",
    "heroImage": "/images/wp/2019/12/Screenshot_20191217-003031-e1576539050937.png",
    "slug": "jobcan-4910"
  },
  {
    "id": "4912",
    "title": "会社PCのセキュリティー対策としてやったこと3つ",
    "post_name": "network-security-for-corporation",
    "thumbnail_id": "4914",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/00100trPORTRAIT_00100_BURST20191105151936415_COVER-1-scaled.jpg",
    "heroImage": "/images/wp/2019/12/00100trPORTRAIT_00100_BURST20191105151936415_COVER-1-scaled.jpg",
    "slug": "network-security-for-corporation-4912"
  },
  {
    "id": "4962",
    "title": "買ってよかったもの2019年版",
    "post_name": "katteyokatta-2019-2",
    "thumbnail_id": "5085",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/IMG_20191212_003850.jpg",
    "heroImage": "/images/wp/2019/12/IMG_20191212_003850.jpg",
    "slug": "katteyokatta-2019-2-4962"
  },
  {
    "id": "4973",
    "title": "Pixelbook goを使ってみた。あと揃えたものとか",
    "post_name": "first-impression-of-pixelbook-go",
    "thumbnail_id": "4993",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/DSCF4744-scaled.jpg",
    "heroImage": "/images/wp/2019/12/DSCF4744-scaled.jpg",
    "slug": "first-impression-of-pixelbook-go-4973"
  },
  {
    "id": "5039",
    "title": "高松のホテルTHE CHELSEA BREATHはラウンジで飲み放題で最高",
    "post_name": "the-chelsea-breath",
    "thumbnail_id": "5678",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/00100trPORTRAIT_00100_BURST20191130171002052_COVER-scaled.jpg",
    "heroImage": "/images/wp/2019/12/00100trPORTRAIT_00100_BURST20191130171002052_COVER-scaled.jpg",
    "slug": "the-chelsea-breath-5039"
  },
  {
    "id": "5129",
    "title": "ランニングなどの運動にはうどん型のイヤホンは向かないのかもしれない",
    "post_name": "udon-dame",
    "thumbnail_id": "5146",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/00100lrPORTRAIT_00100_BURST20191217233300323_COVER-1-scaled.jpg",
    "heroImage": "/images/wp/2019/12/00100lrPORTRAIT_00100_BURST20191217233300323_COVER-1-scaled.jpg",
    "slug": "udon-dame-5129"
  },
  {
    "id": "5157",
    "title": "LINEモバイルが遅すぎるからワイモバイルに乗り換えた",
    "post_name": "linemobile-to-ymobile",
    "thumbnail_id": "5175",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/IMG_20191224_110015-scaled-e1577152959403.jpg",
    "heroImage": "/images/wp/2019/12/IMG_20191224_110015-scaled-e1577152959403.jpg",
    "slug": "linemobile-to-ymobile-5157"
  },
  {
    "id": "5181",
    "title": "400℃ pizzaでクリスマスピザパーティしよう",
    "post_name": "400do-pizza-again",
    "thumbnail_id": "5183",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/00100lrPORTRAIT_00100_BURST20191224190707423_COVER-scaled.jpg",
    "heroImage": "/images/wp/2019/12/00100lrPORTRAIT_00100_BURST20191224190707423_COVER-scaled.jpg",
    "slug": "400do-pizza-again-5181"
  },
  {
    "id": "5194",
    "title": "引っ越しました",
    "post_name": "hikkosi-2019",
    "thumbnail_id": "5198",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/IMG_20191231_230506-scaled.jpg",
    "heroImage": "/images/wp/2019/12/IMG_20191231_230506-scaled.jpg",
    "slug": "hikkosi-2019-5194"
  },
  {
    "id": "5210",
    "title": "月報 2019年12月版",
    "post_name": "geppou-201912",
    "thumbnail_id": "4927",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2019/12/1password-4.png",
    "heroImage": "/images/wp/2019/12/1password-4.png",
    "slug": "geppou-201912-5210"
  },
  {
    "id": "5213",
    "title": "2019年の抱負の振り返りと2020年の抱負3つ",
    "post_name": "2019-to-2020",
    "thumbnail_id": "5215",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/00100trPORTRAIT_00100_BURST20200104124735813_COVER-scaled.jpg",
    "heroImage": "/images/wp/2020/01/00100trPORTRAIT_00100_BURST20200104124735813_COVER-scaled.jpg",
    "slug": "2019-to-2020-5213"
  },
  {
    "id": "5218",
    "title": "PFU HHKB professional HYBRID Type-Sの打ち心地が最高。professional BTと全然違う",
    "post_name": "pfu-hhkb-professional-hybrid-type-s",
    "thumbnail_id": "5625",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/DSCF4947-scaled.jpg",
    "heroImage": "/images/wp/2020/01/DSCF4947-scaled.jpg",
    "slug": "pfu-hhkb-professional-hybrid-type-s-5218"
  },
  {
    "id": "5231",
    "title": "ノートPCを4kディスプレイへ接続する際はハブをかまさない方がいい",
    "post_name": "4k60hz-type-c-to-dp",
    "thumbnail_id": "5246",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/DSCF4793.jpg",
    "heroImage": "/images/wp/2020/01/DSCF4793.jpg",
    "slug": "4k60hz-type-c-to-dp-5231"
  },
  {
    "id": "5258",
    "title": "リンナイのガステーブル Vamo.導入！オシャレな上に掃除しやすくていい感じ",
    "post_name": "vamo",
    "thumbnail_id": "5271",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/DSCF4825.jpg",
    "heroImage": "/images/wp/2020/01/DSCF4825.jpg",
    "slug": "vamo-5258"
  },
  {
    "id": "5290",
    "title": "ドラム式洗濯機を導入したら謎の水漏れ発生！対策しました",
    "post_name": "drum-mizumore",
    "thumbnail_id": "5292",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/IMG_20191230_123150-1.jpg",
    "heroImage": "/images/wp/2020/01/IMG_20191230_123150-1.jpg",
    "slug": "drum-mizumore-5290"
  },
  {
    "id": "5493",
    "title": "ダイニチの加湿器HD-RX518-Tでインフルエンザ対策",
    "post_name": "dainichi-kashitsuki-hd-rx518-t",
    "thumbnail_id": "5494",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/DSCF4851.jpg",
    "heroImage": "/images/wp/2020/01/DSCF4851.jpg",
    "slug": "dainichi-kashitsuki-hd-rx518-t-5493"
  },
  {
    "id": "5526",
    "title": "自宅のwi-fiルーターをGoogle NEST Wifiと拡張ポイントにした",
    "post_name": "google-nest-wifi",
    "thumbnail_id": "5527",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/DSCF4866.jpg",
    "heroImage": "/images/wp/2020/01/DSCF4866.jpg",
    "slug": "google-nest-wifi-5526"
  },
  {
    "id": "5548",
    "title": "Panasonicの食洗機NP-TCR4-Wを導入した",
    "post_name": "panasonic-np-tcr4-w",
    "thumbnail_id": "5549",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/DSCF4881.jpg",
    "heroImage": "/images/wp/2020/01/DSCF4881.jpg",
    "slug": "panasonic-np-tcr4-w-5548"
  },
  {
    "id": "5571",
    "title": "ノートPCのUSB type-Cポートの劣化が怖いのでMagSafeで対策した",
    "post_name": "magsafe",
    "thumbnail_id": "5607",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/01/DSCF4907.jpg",
    "heroImage": "/images/wp/2020/01/DSCF4907.jpg",
    "slug": "magsafe-5571"
  },
  {
    "id": "5712",
    "title": "月報 2020年1月版",
    "post_name": "geppou-202001",
    "thumbnail_id": "5720",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/02/share.jpg",
    "heroImage": "/images/wp/2020/02/share.jpg",
    "slug": "geppou-202001-5712"
  },
  {
    "id": "5728",
    "title": "自作PCをつくるぞ！準備編",
    "post_name": "hajimete-no-jisaku-pc",
    "thumbnail_id": "5759",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/02/IMG_20200206_110821-scaled-e1580955092512.jpg",
    "heroImage": "/images/wp/2020/02/IMG_20200206_110821-scaled-e1580955092512.jpg",
    "slug": "hajimete-no-jisaku-pc-5728"
  },
  {
    "id": "5839",
    "title": "自作PCをつくるぞ！組立編",
    "post_name": "hajimete-no-jisaku-pc-2",
    "thumbnail_id": "5864",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/02/DSCF5084-scaled.jpg",
    "heroImage": "/images/wp/2020/02/DSCF5084-scaled.jpg",
    "slug": "hajimete-no-jisaku-pc-2-5839"
  },
  {
    "id": "5908",
    "title": "ギターのチューナーを新調した",
    "post_name": "tuner",
    "thumbnail_id": "5921",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/02/DSCF5052-1-scaled.jpg",
    "heroImage": "/images/wp/2020/02/DSCF5052-1-scaled.jpg",
    "slug": "tuner-5908"
  },
  {
    "id": "5987",
    "title": "YouTubeデビューしてみた",
    "post_name": "youtube",
    "thumbnail_id": "5998",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/03/DSCF5547-scaled.jpg",
    "heroImage": "/images/wp/2020/03/DSCF5547-scaled.jpg",
    "slug": "youtube-5987"
  },
  {
    "id": "6005",
    "title": "【YouTube更新】マザボとケースの入れ替えと、簡易水冷化【自作PC沼】",
    "post_name": "change-of-motherboard-case-watercooling",
    "thumbnail_id": "6014",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/03/Screenshot_20200324-110933.png",
    "heroImage": "/images/wp/2020/03/Screenshot_20200324-110933.png",
    "slug": "change-of-motherboard-case-watercooling-6005"
  },
  {
    "id": "6032",
    "title": "【YouTube更新】Pixelbook goを3か月使ってみて",
    "post_name": "pixelbook-go-review-on-youtube",
    "thumbnail_id": "6045",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/04/4c85c234076325c638e2c305400f29d6-scaled.jpg",
    "heroImage": "/images/wp/2020/04/4c85c234076325c638e2c305400f29d6-scaled.jpg",
    "slug": "pixelbook-go-review-on-youtube-6032"
  },
  {
    "id": "6046",
    "title": "月報 2020年3月版",
    "post_name": "geppou-202003",
    "thumbnail_id": "6047",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/04/IMG_20200406_183204-scaled.jpg",
    "heroImage": "/images/wp/2020/04/IMG_20200406_183204-scaled.jpg",
    "slug": "geppou-202003-6046"
  },
  {
    "id": "6049",
    "title": "坊主のデスク環境を紹介します",
    "post_name": "around-desk-2020",
    "thumbnail_id": "6064",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/04/c44d27a52349a48d7ee3d33d88f7f238.jpg",
    "heroImage": "/images/wp/2020/04/c44d27a52349a48d7ee3d33d88f7f238.jpg",
    "slug": "around-desk-2020-6049"
  },
  {
    "id": "6098",
    "title": "会社のカウンターにビニールカーテンを設置した",
    "post_name": "vinyl-curtain-for-counter",
    "thumbnail_id": "6104",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/04/IMG_20200427_193532-scaled.jpg",
    "heroImage": "/images/wp/2020/04/IMG_20200427_193532-scaled.jpg",
    "slug": "vinyl-curtain-for-counter-6098"
  },
  {
    "id": "6113",
    "title": "wi-fi回線に不満があるのでメッシュwi-fiに変更した。ついでに中継器も導入",
    "post_name": "yahari-mesh-wifi",
    "thumbnail_id": "6116",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/04/00100trPORTRAIT_00100_BURST20200417193919359_COVER-scaled.jpg",
    "heroImage": "/images/wp/2020/04/00100trPORTRAIT_00100_BURST20200417193919359_COVER-scaled.jpg",
    "slug": "yahari-mesh-wifi-6113"
  },
  {
    "id": "6128",
    "title": "FUJIFILM X-T4買った。X-T30との比較も",
    "post_name": "fujifilm-x-t4",
    "thumbnail_id": "6147",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/05/00100trPORTRAIT_00100_BURST20200430194052228_COVER-scaled.jpg",
    "heroImage": "/images/wp/2020/05/00100trPORTRAIT_00100_BURST20200430194052228_COVER-scaled.jpg",
    "slug": "fujifilm-x-t4-6128"
  },
  {
    "id": "6153",
    "title": "家のベランダでBBQしてカフェオレを飲もう",
    "post_name": "ouchi-time",
    "thumbnail_id": "6176",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/05/DSCF5778-scaled.jpg",
    "heroImage": "/images/wp/2020/05/DSCF5778-scaled.jpg",
    "slug": "ouchi-time-6153"
  },
  {
    "id": "6212",
    "title": "月報 2020年4月版",
    "post_name": "geppou-202004",
    "thumbnail_id": "6217",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/05/00100trPORTRAIT_00100_BURST20200506190258472_COVER-scaled.jpg",
    "heroImage": "/images/wp/2020/05/00100trPORTRAIT_00100_BURST20200506190258472_COVER-scaled.jpg",
    "slug": "geppou-202004-6212"
  },
  {
    "id": "6220",
    "title": "QUIC Pay、全然使わなくなった。最近よく使ってる電子マネー3つとクレカ1つ",
    "post_name": "electronic-money-2020",
    "thumbnail_id": "6223",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/05/DSCF5848-scaled.jpg",
    "heroImage": "/images/wp/2020/05/DSCF5848-scaled.jpg",
    "slug": "electronic-money-2020-6220"
  },
  {
    "id": "6236",
    "title": "RyzenでPC組むぞ",
    "post_name": "ryzen-pc-1",
    "thumbnail_id": "6251",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/05/ryzen73700X.jpg",
    "heroImage": "/images/wp/2020/05/ryzen73700X.jpg",
    "slug": "ryzen-pc-1-6236"
  },
  {
    "id": "6295",
    "title": "zoomの背景を固定したいのでサイドテーブルを導入した",
    "post_name": "sidetable-for-zoom",
    "thumbnail_id": "6302",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/05/DSCF5987-scaled.jpg",
    "heroImage": "/images/wp/2020/05/DSCF5987-scaled.jpg",
    "slug": "sidetable-for-zoom-6295"
  },
  {
    "id": "6309",
    "title": "自作スピーカーキット「talbot one」を組み立てた！",
    "post_name": "talbotone",
    "thumbnail_id": "6318",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/05/4c85c234076325c638e2c305400f29d6-scaled.jpg",
    "heroImage": "/images/wp/2020/05/4c85c234076325c638e2c305400f29d6-scaled.jpg",
    "slug": "talbotone-6309"
  },
  {
    "id": "6330",
    "title": "月報 2020年5月版",
    "post_name": "geppou-202005",
    "thumbnail_id": "6340",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/06/00100trPORTRAIT_00100_BURST20200605150317036_COVER-scaled.jpg",
    "heroImage": "/images/wp/2020/06/00100trPORTRAIT_00100_BURST20200605150317036_COVER-scaled.jpg",
    "slug": "geppou-202005-6330"
  },
  {
    "id": "6348",
    "title": "新しいkyash cardがやっと届いた。これまでのkyash card Liteとの違いとか",
    "post_name": "new-kyash",
    "thumbnail_id": "6355",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/06/4c85c234076325c638e2c305400f29d6-scaled.jpg",
    "heroImage": "/images/wp/2020/06/4c85c234076325c638e2c305400f29d6-scaled.jpg",
    "slug": "new-kyash-6348"
  },
  {
    "id": "6377",
    "title": "glo hyper、これまで以上に掃除が大事かも",
    "post_name": "necessity-of-cleaning-for-glo-hyper",
    "thumbnail_id": "6385",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/06/DSCF6112-scaled.jpg",
    "heroImage": "/images/wp/2020/06/DSCF6112-scaled.jpg",
    "slug": "necessity-of-cleaning-for-glo-hyper-6377"
  },
  {
    "id": "6398",
    "title": "会社の共用PCを格安chromebookからMacBook Air2020年モデルに新調する",
    "post_name": "macbook-air-2020",
    "thumbnail_id": "6399",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/06/macbook-air-space-gray-select-201810.jpg",
    "heroImage": "/images/wp/2020/06/macbook-air-space-gray-select-201810.jpg",
    "slug": "macbook-air-2020-6398"
  },
  {
    "id": "6424",
    "title": "ゆうちょ銀行の使用を辞めた",
    "post_name": "datsu-yuucho",
    "thumbnail_id": "6426",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/06/10man458a9684_TP_V.jpg",
    "heroImage": "/images/wp/2020/06/10man458a9684_TP_V.jpg",
    "slug": "datsu-yuucho-6424"
  },
  {
    "id": "6466",
    "title": "【リモート審査とか】最近のこと【冷蔵庫買い換えとか】",
    "post_name": "recent-days-202007",
    "thumbnail_id": "6468",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/07/00100trPORTRAIT_00100_BURST20200614183744740_COVER-scaled.jpg",
    "heroImage": "/images/wp/2020/07/00100trPORTRAIT_00100_BURST20200614183744740_COVER-scaled.jpg",
    "slug": "recent-days-202007-6466"
  },
  {
    "id": "6481",
    "title": "買ってよかったもの2020年版",
    "post_name": "katteyokattamono-2020",
    "thumbnail_id": "6669",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/11/DSCF7090-scaled.jpg",
    "heroImage": "/images/wp/2020/11/DSCF7090-scaled.jpg",
    "slug": "katteyokattamono-2020-6481"
  },
  {
    "id": "6643",
    "title": "やってよかったこと2020年版",
    "post_name": "yatteyokattakoto2020-youtube",
    "thumbnail_id": "6719",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/12/yt_1200.png",
    "heroImage": "/images/wp/2020/12/yt_1200.png",
    "slug": "yatteyokattakoto2020-youtube-6643"
  },
  {
    "id": "6925",
    "title": "友だちのPCを作ることになった",
    "post_name": "kawabata-pc",
    "thumbnail_id": "7027",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2021/01/PKSMIMGL4903_TP_V.jpg",
    "heroImage": "/images/wp/2021/01/PKSMIMGL4903_TP_V.jpg",
    "slug": "kawabata-pc-6925"
  },
  {
    "id": "7049",
    "title": "最近のあれこれ",
    "post_name": "about-mini-itx-case",
    "thumbnail_id": "6717",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2020/12/dogatschoolDSC_86020141_TP_V.jpg",
    "heroImage": "/images/wp/2020/12/dogatschoolDSC_86020141_TP_V.jpg",
    "slug": "about-mini-itx-case-7049"
  },
  {
    "id": "7261",
    "title": "2021年に買ってよかったもの30選",
    "post_name": "katteyokatta-2021",
    "thumbnail_id": "7456",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2021/12/33fb179d5a9adeb0dcd46ad136a74959.png",
    "heroImage": "/images/wp/2021/12/33fb179d5a9adeb0dcd46ad136a74959.png",
    "slug": "katteyokatta-2021-7261"
  },
  {
    "id": "7543",
    "title": "ライブっていいな",
    "post_name": "%e3%83%a9%e3%82%a4%e3%83%96%e3%81%a3%e3%81%a6%e3%81%84%e3%81%84%e3%81%aa",
    "thumbnail_id": "7545",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2024/10/20241019_182554-scaled.jpg",
    "heroImage": "/images/wp/2024/10/20241019_182554-scaled.jpg",
    "slug": "%e3%83%a9%e3%82%a4%e3%83%96%e3%81%a3%e3%81%a6%e3%81%84%e3%81%84%e3%81%aa-7543"
  },
  {
    "id": "7563",
    "title": "アッテネーター(もどき)を使えば、自室で真空管アンプを鳴らせることが判明",
    "post_name": "%e3%82%a2%e3%83%83%e3%83%86%e3%83%8d%e3%83%bc%e3%82%bf%e3%83%bc%e3%82%82%e3%81%a9%e3%81%8d%e3%82%92%e4%bd%bf%e3%81%88%e3%81%b0%e3%80%81%e8%87%aa%e5%ae%a4%e3%81%a7%e7%9c%9f%e7%a9%ba%e7%ae%a1%e3%82%a2",
    "thumbnail_id": "7577",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2024/12/20241201_211826-scaled.jpg",
    "heroImage": "/images/wp/2024/12/20241201_211826-scaled.jpg",
    "slug": "%e3%82%a2%e3%83%83%e3%83%86%e3%83%8d%e3%83%bc%e3%82%bf%e3%83%bc%e3%82%82%e3%81%a9%e3%81%8d%e3%82%92%e4%bd%bf%e3%81%88%e3%81%b0%e3%80%81%e8%87%aa%e5%ae%a4%e3%81%a7%e7%9c%9f%e7%a9%ba%e7%ae%a1%e3%82%a2-7563"
  },
  {
    "id": "7734",
    "title": "サブギターが欲しくなってきたので妄想をメモ",
    "post_name": "%e3%82%b5%e3%83%96%e3%82%ae%e3%82%bf%e3%83%bc%e3%81%8c%e6%ac%b2%e3%81%97%e3%81%8f%e3%81%aa%e3%81%a3%e3%81%a6%e3%81%8d%e3%81%9f%e3%81%ae%e3%81%a7%e5%a6%84%e6%83%b3%e3%82%92%e3%83%a1%e3%83%a2",
    "thumbnail_id": "7736",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2024/12/umedaLightroom_MG_3733_TP_V-1.png",
    "heroImage": "/images/wp/2024/12/umedaLightroom_MG_3733_TP_V-1.png",
    "slug": "%e3%82%b5%e3%83%96%e3%82%ae%e3%82%bf%e3%83%bc%e3%81%8c%e6%ac%b2%e3%81%97%e3%81%8f%e3%81%aa%e3%81%a3%e3%81%a6%e3%81%8d%e3%81%9f%e3%81%ae%e3%81%a7%e5%a6%84%e6%83%b3%e3%82%92%e3%83%a1%e3%83%a2-7734"
  },
  {
    "id": "7763",
    "title": "懐古厨",
    "post_name": "%e6%87%90%e5%8f%a4%e5%8e%a8",
    "thumbnail_id": "7779",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2025/05/578.jpg",
    "heroImage": "/images/wp/2025/05/578.jpg",
    "slug": "%e6%87%90%e5%8f%a4%e5%8e%a8-7763"
  },
  {
    "id": "9981",
    "title": "【Python】旧ブログのエキサイトブログから8年分685件の記事のサルベージに成功",
    "post_name": "%e6%97%a7%e3%83%96%e3%83%ad%e3%82%b0%e3%81%ae%e3%82%a8%e3%82%ad%e3%82%b5%e3%82%a4%e3%83%88%e3%83%96%e3%83%ad%e3%82%b0%e3%81%8b%e3%82%898%e5%b9%b4%e5%88%86685%e4%bb%b6%e3%81%ae%e8%a8%98%e4%ba%8b",
    "thumbnail_id": "10001",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2025/10/photo-1649180556628-9ba704115795-scaled.jpg",
    "heroImage": "/images/wp/2025/10/photo-1649180556628-9ba704115795-scaled.jpg",
    "slug": "%e6%97%a7%e3%83%96%e3%83%ad%e3%82%b0%e3%81%ae%e3%82%a8%e3%82%ad%e3%82%b5%e3%82%a4%e3%83%88%e3%83%96%e3%83%ad%e3%82%b0%e3%81%8b%e3%82%898%e5%b9%b4%e5%88%86685%e4%bb%b6%e3%81%ae%e8%a8%98%e4%ba%8b-9981"
  },
  {
    "id": "10044",
    "title": "Make Excuses vol.12@難波ベアーズ",
    "post_name": "makeexcusesvol12",
    "thumbnail_id": "10056",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2025/11/20251108_145835-scaled.jpg",
    "heroImage": "/images/wp/2025/11/20251108_145835-scaled.jpg",
    "slug": "makeexcusesvol12-10044"
  },
  {
    "id": "10143",
    "title": "VOX AC10HWR1を買いました",
    "post_name": "vox-ac10hwr1",
    "thumbnail_id": "10146",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2026/04/DSC02103.jpg",
    "heroImage": "/images/wp/2026/04/DSC02103.jpg",
    "slug": "vox-ac10hwr1-10143"
  },
  {
    "id": "10192",
    "title": "これまでコピーしたバンド",
    "post_name": "copyband",
    "thumbnail_id": "10200",
    "thumbnail_url": "https://noeye69.com/wp-content/uploads/2026/05/IMG_1261.jpg",
    "heroImage": "/images/wp/2026/05/IMG_1261.jpg",
    "slug": "copyband-10192"
  }
];

const byId = new Map(featuredImages.map(item => [String(item.id), item]));
let updated = 0;
let skipped = 0;
let missing = 0;

function getFrontmatter(text) {
  const match = text.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!match) return null;
  return { full: match[0], body: match[1], rest: text.slice(match[0].length) };
}

function getValue(frontmatter, key) {
  const re = new RegExp(`^${key}:\\s*["']?([^"'\\r\\n]+)["']?\\s*$`, "m");
  const match = frontmatter.match(re);
  return match ? match[1].trim() : "";
}

for (const file of fs.readdirSync(postsDir)) {
  if (!file.endsWith(".md") && !file.endsWith(".mdx")) continue;

  const fullPath = path.join(postsDir, file);
  let text = fs.readFileSync(fullPath, "utf8");
  const parsed = getFrontmatter(text);
  if (!parsed) {
    skipped++;
    continue;
  }

  const slug = getValue(parsed.body, "slug");
  const idMatch = slug.match(/-(\d+)$/) || file.match(/-(\d+)\.mdx?$/);
  if (!idMatch) {
    skipped++;
    continue;
  }

  const postId = idMatch[1];
  const item = byId.get(postId);
  if (!item) {
    missing++;
    continue;
  }

  let fm = parsed.body;

  // heroImageは使わず、ogImageをWordPressの本当のアイキャッチ画像に直す
  fm = fm.replace(/^heroImage:.*\r?\n?/gm, "");

  if (/^ogImage:/m.test(fm)) {
    fm = fm.replace(/^ogImage:.*$/m, `ogImage: "${item.heroImage}"`);
  } else {
    fm = fm.replace(/^description:.*$/m, match => `${match}\nogImage: "${item.heroImage}"`);
  }

  const next = `---\n${fm.trim()}\n---\n\n${parsed.rest.replace(/^\s+/, "")}`;
  fs.writeFileSync(fullPath, next, "utf8");
  console.log(`updated ${file} -> ${item.heroImage}`);
  updated++;
}

console.log(`\nDone. updated=${updated}, skipped=${skipped}, no_thumbnail=${missing}`);
