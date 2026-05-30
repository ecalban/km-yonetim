import type {
  Activity,
  ChapterDefinition,
  ClassificationActivity,
  MatchingActivity,
  PlayableChapterId,
  TrueFalseActivity,
} from "../types";

type EconomyArtChapterId = Extract<
  PlayableChapterId,
  | "economy-concepts"
  | "taxes"
  | "money-banks"
  | "economy-decline"
  | "architecture"
  | "arts"
  | "language-literature"
  | "sports"
  | "remaining-traps"
>;

export const economyArtCultureChapters: ChapterDefinition[] = [
  {
    id: "economy-concepts",
    title: "Ekonomi Kavramları",
    subtitle: "Çarşıdan Sanata: ekonomi ve esnaf düzeni",
    mode: "matching",
    badge: "Çarşı Uzmanı",
    tone: "border-amber-500/40 bg-amber-500/10 text-amber-100",
  },
  {
    id: "taxes",
    title: "Vergiler",
    subtitle: "Şer'i ve örfi vergileri ayır",
    mode: "classification",
    badge: "Vergi Katibi",
    tone: "border-lime-500/40 bg-lime-500/10 text-lime-100",
  },
  {
    id: "money-banks",
    title: "Para ve Bankalar",
    subtitle: "Para türleri, darphaneler ve bankalar",
    mode: "matching",
    badge: "Para ve Banka Hafızı",
    tone: "border-emerald-500/40 bg-emerald-500/10 text-emerald-100",
  },
  {
    id: "economy-decline",
    title: "Ekonominin Bozulması",
    subtitle: "Bozulma nedenlerini ayırt et",
    mode: "truefalse",
    badge: "Çarşı Uzmanı",
    tone: "border-red-500/40 bg-red-500/10 text-red-100",
  },
  {
    id: "architecture",
    title: "Mimari",
    subtitle: "Camiler, Mimar Sinan ve Mostar",
    mode: "matching",
    badge: "Mimar Sinan Talebesi",
    tone: "border-orange-500/40 bg-orange-500/10 text-orange-100",
  },
  {
    id: "arts",
    title: "Sanat Dalları",
    subtitle: "Sanat, sanatçı, eser ve olay kartları",
    mode: "matching",
    badge: "Sanat Hafızı",
    tone: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-100",
  },
  {
    id: "language-literature",
    title: "Yazı, Dil ve Edebiyat",
    subtitle: "Divan, tasavvuf ve halk edebiyatı",
    mode: "classification",
    badge: "Edebiyat Ustası",
    tone: "border-violet-500/40 bg-violet-500/10 text-violet-100",
  },
  {
    id: "sports",
    title: "Spor",
    subtitle: "Güreş, okçuluk, binicilik ve olimpiyat",
    mode: "matching",
    badge: "Kemankeş",
    tone: "border-cyan-500/40 bg-cyan-500/10 text-cyan-100",
  },
  {
    id: "remaining-traps",
    title: "Kalan Konular KPSS Tuzakları",
    subtitle: "Ekonomi, mimari, sanat, edebiyat ve spor",
    mode: "truefalse",
    badge: "Kalan Konular KPSS Avcısı",
    tone: "border-blue-500/40 bg-blue-500/10 text-blue-100",
  },
];

const economyConceptsActivity: MatchingActivity = {
  id: "activity-economy-concepts",
  chapterId: "economy-concepts",
  mode: "matching",
  title: "Ekonomi Kavramları Eşleştirme Oyunu",
  description: "Ekonomi, lonca-esnaf ve tüketiciyi koruma kavramlarını açıklamalarıyla eşleştir.",
  pairs: [
    {
      id: "economy-iase",
      left: "İaşecilik / Provizyonizm",
      right: "Halkın refahı için piyasada yeterli miktarda ve istenen kalite-fiyatta mal bulundurulması",
      explanation: "İaşecilik, arz-talep dengesi gözetilerek piyasalarda yeterli kadar mal bulundurulması anlayışıdır.",
    },
    {
      id: "economy-gelenek",
      left: "Gelenekçilik",
      right: "Üretimin ne kadar ve nasıl olacağı ile malların topluma ulaştırılmasını ele alan anlayış",
      explanation: "Gelenekçilik üretim ve malların topluma ulaştırılmasıyla ilgili ekonomik anlayıştır.",
    },
    {
      id: "economy-fiskalizm",
      left: "Fiskalizm",
      right: "Devlet gelirlerini en üst düzeye, giderlerini en alt düzeye indirmeye çalışan anlayış",
      explanation: "Fiskalizm devlet gelirlerinin artırılıp giderlerin azaltılmasına yöneliktir.",
    },
    {
      id: "economy-merkantilizm",
      left: "Merkantilizm",
      right: "Avrupa'da gümüş ve altının zenginlik aracı sayıldığı ekonomik anlayış",
      explanation: "Merkantilizm 15. ve 16. yüzyılda Avrupa'da görülen ve Osmanlı ekonomisine zarar veren anlayıştır.",
    },
    {
      id: "economy-narh",
      left: "Narh Sistemi",
      right: "Eksik rekabet şartlarından dolayı devletin fiyatlara müdahalesi",
      explanation: "Narh Sistemi devletin fiyatlara müdahale etmesidir.",
    },
    {
      id: "economy-lonca",
      left: "Lonca Teşkilatı",
      right: "Ahiliğin devamı olan ve gayrimüslimlerin de girebildiği esnaf teşkilatı",
      explanation: "Lonca Teşkilatı ahiliğin devamıdır; gayrimüslimler de girebilir.",
    },
    {
      id: "economy-derbent",
      left: "Derbent Teşkilatı",
      right: "Geçitlerin bakım-onarımını yapan ve vergisini toplayan teşkilat",
      explanation: "Derbent Teşkilatı geçitlerin bakım-onarımını yapmış ve vergisini toplamıştır.",
    },
    {
      id: "economy-ehli-hiref",
      left: "Ehli Hiref Teşkilatı",
      right: "Osmanlı Devleti'nde küçük esnafın üye olduğu esnaf teşkilatı",
      explanation: "Ehli Hiref Teşkilatı küçük esnafın üye olduğu esnaf teşkilatıdır.",
    },
    {
      id: "economy-menzil",
      left: "Menzil Teşkilatı",
      right: "Kervanlar arasında haberleşmeyi sağlayan teşkilat",
      explanation: "Menzil Teşkilatı kervanlar arasında haberleşmeyi sağlamıştır.",
    },
    {
      id: "economy-mekkari",
      left: "Mekkarî Taifesi",
      right: "Günümüzün kargo veya nakliyat şirketleri",
      explanation: "Mekkar; at, eşek ve devenin ortak ismidir. Mekkarî Taifesi günümüzün kargo veya nakliyat şirketleri olarak verilmiştir.",
    },
    {
      id: "economy-gedik",
      left: "Gedik Hakkı",
      right: "İş yeri açma ruhsatı",
      explanation: "Gedik Hakkı iş yeri açma ruhsatıdır.",
    },
    {
      id: "economy-ehl-i-hibre",
      left: "Ehl-i Hibre",
      right: "Malın kalitesini kontrol eden görevli",
      explanation: "Ehl-i Hibre malın kalitesini kontrol eden görevlidir.",
    },
    {
      id: "economy-bezirgan",
      left: "Bezirgan",
      right: "Büyük tüccarlara verilen isim",
      explanation: "Bezirgan büyük tüccarlara verilen isimdir.",
    },
    {
      id: "economy-muhtesip",
      left: "Muhtesip",
      right: "Çarşı ve pazarı denetleyen görevli",
      explanation: "Muhtesip çarşı ve pazarı denetleyen görevlidir.",
    },
    {
      id: "economy-yigitbasi",
      left: "Yiğitbaşı",
      right: "Esnafı koruyan kişi",
      explanation: "Lonca içinde esnafı koruyanlara Yiğitbaşı denir.",
    },
    {
      id: "economy-kethuda",
      left: "Kethüda / Kahya",
      right: "Esnaf-devlet veya esnaf-halk ilişkilerini düzenleyen kişi",
      explanation: "Kethüda ya da Kahya, esnaf ile devlet veya halk arasındaki ilişkileri düzenler.",
    },
    {
      id: "economy-seyh-pir",
      left: "Şeyh / Pir",
      right: "Lonca teşkilatının başındaki kişi",
      explanation: "Lonca teşkilatının başındakilere Şeyh veya Pir adı verilmiştir.",
    },
    {
      id: "economy-standard",
      left: "Standardizasyon",
      right: "Sanayi ve tarım ürünlerinin aynı özellik ve kalitede tüketiciye ulaştırılması",
      explanation: "Standardizasyon, sanayi ve tarım ürünlerinin aynı özellik ve kalitede tüketiciye ulaştırılmasıdır.",
    },
    {
      id: "economy-kapan",
      left: "Kapan / Toptancı Halleri",
      right: "Şehre gelen tarım ürünlerinin tüketiciye sunulduğu yerler",
      explanation: "Şehre gelen tarım ürünleri kapan adı verilen yerlere getirilerek tüketiciye sunulmuştur.",
    },
  ],
};

const taxesActivity: ClassificationActivity = {
  id: "activity-taxes",
  chapterId: "taxes",
  mode: "classification",
  title: "Vergi Sınıflandırma Oyunu",
  description: "Vergi kartını doğru kategoriye at; açıklama her cevapta gösterilir.",
  categories: [
    {
      id: "seri",
      title: "Şer'i Vergiler",
      description: "Öşür, Haraç, Cizye ve Zekat.",
    },
    {
      id: "orfi",
      title: "Örfi Vergiler",
      description: "Ağnam, Avarız, Bac, Çifthane, Çiftbozan ve diğer örfi vergiler.",
    },
  ],
  items: [
    {
      id: "tax-osur",
      label: "Öşür",
      categoryId: "seri",
      explanation: "Öşür, Müslümanların ürünlerinden genellikle 1/10 oranında peşin alınan vergidir.",
    },
    {
      id: "tax-harac",
      label: "Haraç",
      categoryId: "seri",
      explanation: "Haraç, gayrimüslimlerin ürünlerinden genellikle 2/10 oranında alınan vergidir.",
    },
    {
      id: "tax-cizye",
      label: "Cizye",
      categoryId: "seri",
      explanation: "Cizye, gayrimüslimlerin askerlik yapmadıkları için ödedikleri vergidir.",
    },
    {
      id: "tax-zekat",
      label: "Zekat",
      categoryId: "seri",
      explanation: "Zekat, Müslümanlardan deniz ürünleri, madenler, zirai ürünler ve ticari gelirlerden 40/1 oranında alınan vergidir.",
    },
    {
      id: "tax-agnam",
      label: "Ağnam",
      categoryId: "orfi",
      explanation: "Ağnam küçükbaş hayvanlardan alınan vergidir.",
    },
    {
      id: "tax-avariz",
      label: "Avarız",
      categoryId: "orfi",
      explanation: "Avarız olağanüstü hallerde alınan vergidir.",
    },
    {
      id: "tax-bac",
      label: "Bac",
      categoryId: "orfi",
      explanation: "Bac pazar yeri vergisidir.",
    },
    {
      id: "tax-cifthane",
      label: "Çifthane",
      categoryId: "orfi",
      explanation: "Çifthane, bir köylünün bir çift öküz ile tarlayı sürdüğü kadar ödediği vergidir.",
    },
    {
      id: "tax-ciftbozan",
      label: "Çiftbozan",
      categoryId: "orfi",
      explanation: "Çiftbozan, iki veya üç yıl boyunca tarlayı ekmeyenlerden alınan vergidir.",
    },
    {
      id: "tax-iltizam",
      label: "İltizam",
      categoryId: "orfi",
      explanation: "İltizam, muaaccele bedelinin alındığı vergi olarak verilmiştir.",
    },
    {
      id: "tax-ispenc",
      label: "İspenç",
      categoryId: "orfi",
      explanation: "İspenç, gayrimüslimlerin ödediği toprak vergisidir.",
    },
    {
      id: "tax-imdadiye-seferiye",
      label: "İmdadiye Seferiye",
      categoryId: "orfi",
      explanation: "İmdadiye Seferiye sefer zamanında alınan vergidir.",
    },
    {
      id: "tax-imdadiye-hazariye",
      label: "İmdadiye Hazariye",
      categoryId: "orfi",
      explanation: "İmdadiye Hazariye barış zamanında alınan vergidir.",
    },
    {
      id: "tax-derbent",
      label: "Derbent",
      categoryId: "orfi",
      explanation: "Derbent geçitlerden ve köprülerden alınan vergidir.",
    },
    {
      id: "tax-izni-sefine",
      label: "İzni Sefine",
      categoryId: "orfi",
      explanation: "İzni Sefine boğazlardan geçen gemiler için alınan vergidir.",
    },
  ],
};

const moneyBanksActivity: MatchingActivity = {
  id: "activity-money-banks",
  chapterId: "money-banks",
  mode: "matching",
  title: "Para ve Bankalar Oyunu",
  description: "Para türlerini, darphaneleri ve bankaları nottaki karşılıklarıyla eşleştir.",
  pairs: [
    {
      id: "money-akce-mangir",
      left: "Akçe / Mangır",
      right: "Bakır para; Osman Bey",
      explanation: "Akçe/Mangır bakır para olarak Osman Bey ile verilmiştir.",
    },
    {
      id: "money-akce",
      left: "Akçe",
      right: "Gümüş para; Orhan Bey",
      explanation: "Akçe gümüş para olarak Orhan Bey ile verilmiştir.",
    },
    {
      id: "money-sultani",
      left: "Sikke-i Hasene / Sultani",
      right: "Altın para; Fatih Sultan Mehmet",
      explanation: "Sikke-i Hasene/Sultani altın para olarak Fatih Sultan Mehmet ile verilmiştir.",
    },
    {
      id: "money-kaime",
      left: "Kaime",
      right: "Kağıt para; Sultan Abdülmecit",
      explanation: "Kaime kağıt para olarak Sultan Abdülmecit ile verilmiştir.",
    },
    {
      id: "money-mecidiye",
      left: "Mecidiye / Guruş",
      right: "Demir para; Sultan Abdülmecit",
      explanation: "Mecidiye/Guruş demir para olarak Sultan Abdülmecit ile verilmiştir.",
    },
    {
      id: "money-metal",
      left: "XIX. yüzyıla kadar",
      right: "Madeni para kullanılmıştır",
      explanation: "Notta XIX. yüzyıla kadar madeni para kullanıldığı belirtilir.",
    },
    {
      id: "money-mints",
      left: "Darphaneler",
      right: "Üsküp, Selanik, Urfa ve Edirne",
      explanation: "Üsküp, Selanik, Urfa ve Edirne'de darphaneler açılmıştır.",
    },
    {
      id: "bank-dersaadet-first",
      left: "Bank-ı Dersaadet",
      right: "İlk açılan Osmanlı bankası",
      explanation: "Bank-ı Dersaadet ilk açılan Osmanlı bankasıdır.",
    },
    {
      id: "bank-dersaadet-galata",
      left: "Bank-ı Dersaadet (kuruluş)",
      right: "Galata bankerleri tarafından açılmıştır",
      explanation: "Bank-ı Dersaadet Galata bankerleri tarafından açılmıştır.",
    },
    {
      id: "bank-osmani",
      left: "Bank-ı Osmani-i Şahane",
      right: "Para basmaya yetkili not bankası",
      explanation: "Bank-ı Osmani-i Şahane para basmaya yetkili not bankasıdır.",
    },
    {
      id: "bank-memleket",
      left: "Memleket Sandıkları",
      right: "Çiftçiye ucuz kredi",
      explanation: "Memleket Sandıkları çiftçiye ucuz kredi verebilmek için kurulmuştur.",
    },
    {
      id: "bank-ziraat-1888",
      left: "Ziraat Bankası",
      right: "1888'de bu ismi almıştır",
      explanation: "Ziraat Bankası 1888'de bu ismi almıştır.",
    },
    {
      id: "bank-ziraat-mithat",
      left: "Ziraat Bankası (Mithat Paşa)",
      right: "Kurulmasında Mithat Paşa'nın rolü büyüktür",
      explanation: "Ziraat Bankası'nın kurulmasında Mithat Paşa'nın rolü büyüktür.",
    },
    {
      id: "bank-itibar-ittihat",
      left: "İtibar-ı Milli Osmanlı Bankası",
      right: "İttihatçıların bankası",
      explanation: "İtibar-ı Milli Osmanlı Bankası İttihatçıların bankasıdır.",
    },
    {
      id: "bank-itibar-is",
      left: "İtibar-ı Milli Osmanlı Bankası (1924)",
      right: "İş Bankası ile birleştirilmiştir",
      explanation: "İtibar-ı Milli Osmanlı Bankası 1924'te İş Bankası ile birleştirilmiştir.",
    },
  ],
};

const economyDeclineActivity: TrueFalseActivity = {
  id: "activity-economy-decline",
  chapterId: "economy-decline",
  mode: "truefalse",
  title: "Ekonominin Bozulma Nedenleri Oyunu",
  description: "Karttaki bilginin Osmanlı ekonomisinin bozulma nedeni olup olmadığını seç.",
  questions: [
    ...[
      ["Saray masraflarının artması ekonominin bozulma nedenidir.", "Saray masraflarının artması notta bozulma nedenleri arasında verilmiştir."],
      ["Savaşların uzun sürmesi ekonominin bozulma nedenidir.", "Savaşların uzun sürmesi bozulma nedenleri arasındadır."],
      ["Ganimet gelirlerinin azalması ekonominin bozulma nedenidir.", "Ganimet gelirlerinin azalması notta savaşların uzun sürmesiyle birlikte verilmiştir."],
      ["İpek ve Baharat Yolunun Coğrafi Keşifler sonucu önemini kaybetmesi ekonomiye zarar vermiştir.", "Bu bilgi bozulma nedenleri arasında yer alır."],
      ["Kapitülasyonların yaygınlaştırılması ekonominin bozulma nedenidir.", "Kapitülasyonların yaygınlaştırılması notta bozulma nedenleri arasındadır."],
      ["Avrupa'daki ekonomik antlaşmaların ülke ekonomisine zarar vermesi bozulma nedenidir.", "Bu ifade notta açıkça verilmiştir."],
      ["Sık padişah değişimi sonucunda cülus bahşişinin artması bozulma nedenidir.", "Sık padişah değişimi ve cülus bahşişi artışı bozulma nedenleri arasında verilmiştir."],
      ["Tımar sisteminin bozulması ekonominin bozulma nedenidir.", "Tımar sisteminin bozulması notta bozulma nedeni olarak geçer."],
      ["İltizam sisteminin yaygınlaşması ekonominin bozulma nedenidir.", "Notta tımar sisteminin bozulması iltizam sisteminin yaygınlaşmasıyla birlikte verilmiştir."],
      ["Rüşvet ve iltimasın artması ekonominin bozulma nedenidir.", "Rüşvet ve iltimasın artması bozulma nedenleri arasındadır."],
    ].map(([statement, explanation], index) => ({
      id: `economy-decline-true-${index}`,
      statement,
      answer: true,
      explanation,
    })),
    {
      id: "economy-decline-false-palace",
      statement: "Saray masraflarının azalması ekonominin bozulma nedeni olarak verilmiştir.",
      answer: false,
      explanation: "Notta saray masraflarının azalması değil, artması bozulma nedeni olarak verilmiştir.",
    },
    {
      id: "economy-decline-false-ganimet",
      statement: "Ganimet gelirlerinin artması ekonominin bozulma nedeni olarak verilmiştir.",
      answer: false,
      explanation: "Notta ganimet gelirlerinin azalması bozulma nedeni olarak verilmiştir.",
    },
  ],
};

const architectureActivity: MatchingActivity = {
  id: "activity-architecture",
  chapterId: "architecture",
  mode: "matching",
  title: "Mimari Eşleştirme Oyunu",
  description: "Mimari eserleri, mimarları ve Mimar Sinan kartlarını eşleştir.",
  pairs: [
    {
      id: "architecture-first-mosque",
      left: "İlk Osmanlı camisi",
      right: "İznik Hacı Özbek Camii",
      explanation: "Osmanlı Devleti'nin ilk camisi İznik'te yapılan Hacı Özbek Camii'dir.",
    },
    {
      id: "architecture-sinan-apprentice",
      left: "Mimar Sinan çıraklık eseri",
      right: "Şehzade Camii",
      explanation: "Şehzade Camii Mimar Sinan'ın çıraklık eseridir.",
    },
    {
      id: "architecture-sinan-journeyman",
      left: "Mimar Sinan kalfalık eseri",
      right: "Süleymaniye Camii",
      explanation: "Süleymaniye Camii Mimar Sinan'ın kalfalık eseridir.",
    },
    {
      id: "architecture-sinan-master",
      left: "Mimar Sinan ustalık eseri",
      right: "Selimiye Camii",
      explanation: "Selimiye Camii Mimar Sinan'ın ustalık eseridir.",
    },
    {
      id: "architecture-selimiye-unesco",
      left: "Selimiye Camii",
      right: "2011'de UNESCO tarafından koruma altına alınmıştır",
      explanation: "Selimiye Camii 2011'de UNESCO tarafından koruma altına alınmıştır.",
    },
    {
      id: "architecture-six-minarets",
      left: "İlk altı minareli cami",
      right: "Sultanahmet Camii",
      explanation: "Osmanlı Devleti'nin ilk altı minareli camisi Sultanahmet Camii'dir.",
    },
    {
      id: "architecture-sultanahmet-architect",
      left: "Sultanahmet Camii mimarı",
      right: "Sedefkar Mehmet Ağa",
      explanation: "Sultanahmet Camii'nin mimarı Sedefkar Mehmet Ağa'dır.",
    },
    {
      id: "architecture-blue-mosque",
      left: "Mavi Cami",
      right: "Sultanahmet Camii",
      explanation: "Sultanahmet Camii süslemelerindeki mavi çinilerden dolayı Mavi Cami olarak bilinir.",
    },
    {
      id: "architecture-nuruosmaniye",
      left: "İlk Batı tarzı cami",
      right: "Nuruosmaniye Camii",
      explanation: "İlk Batı tarzında yapılan cami Nuruosmaniye Camii'dir.",
    },
    {
      id: "architecture-mostar",
      left: "Mostar Köprüsü mimarı",
      right: "Mimar Hayreddin",
      explanation: "Mostar Köprüsü'nün mimarı Mimar Sinan'ın öğrencisi Mimar Hayreddin'dir.",
    },
    {
      id: "architecture-selatin",
      left: "Selatin Camileri",
      right: "Padişahların yaptırdığı ve genellikle kendi isimleriyle anılan camiler",
      explanation: "Fatih, Selimiye, Süleymaniye gibi camiler Selatin Camileri kapsamındadır.",
    },
    {
      id: "architecture-sinan-birth",
      left: "Mimar Sinan (1490)",
      right: "Kayseri Ağırnas'ta doğmuştur",
      explanation: "Mimar Sinan 1490'da Kayseri'nin Ağırnas köyünde doğmuştur.",
    },
    {
      id: "architecture-sinan-devsirme",
      left: "Mimar Sinan (1512)",
      right: "Devşirme sistemiyle Acemi Oğlanlar Ocağı'na verilmiştir",
      explanation: "Mimar Sinan 1512'de devşirme sistemiyle Acemi Oğlanlar Ocağı'na verilmiştir.",
    },
    {
      id: "architecture-sinan-chief",
      left: "Mimar Sinan (1539)",
      right: "Mimarbaşı olmuştur",
      explanation: "Mimar Sinan 1539'da mimarbaşılığa getirilmiştir.",
    },
    {
      id: "architecture-sinan-periods",
      left: "Mimar Sinan'ın yaşadığı dönemler",
      right: "II. Bayezid, I. Selim, I. Süleyman, II. Selim ve III. Murat",
      explanation: "Mimar Sinan bu padişahlar dönemlerinde yaşamıştır.",
    },
  ],
};

const artsActivity: MatchingActivity = {
  id: "activity-arts",
  chapterId: "arts",
  mode: "matching",
  title: "Sanat Dalları ve Sanatçı Kartları",
  description: "Sanat dallarını, sanatçıları, eserleri ve olayları eşleştir.",
  pairs: [
    {
      id: "art-hat",
      left: "Hat",
      right: "Şeyh Hamdullah, Ahmet Karahisari, Kazasker Mustafa İzzet, Yeserizade Mustafa İzzet ve Hafız Osman ile ilişkilidir",
      explanation: "Bu isimler notta önemli hattatlar arasında verilmiştir.",
    },
    {
      id: "art-minyatur",
      left: "Minyatür",
      right: "Tasvir sanatı; uğraşanlara musavvir veya nakkaş denir",
      explanation: "Minyatür tasvir sanatıdır; sanatçılarına musavvir veya nakkaş denir.",
    },
    {
      id: "art-tezhip",
      left: "Tezhip",
      right: "Uğraşana müzehhip denir; Kara Mehmet en ünlü temsilcisidir",
      explanation: "Tezhip sanatçısına müzehhip denir; Kara Mehmet en ünlü temsilcisidir.",
    },
    {
      id: "art-resim",
      left: "Resim",
      right: "Fatih, II. Mahmut, Mekteb-i Osmani, Şeker Ahmet Paşa, Osman Hamdi Bey ve Mihri Müşfik bilgileriyle geçer",
      explanation: "Resim başlığında bu padişah, kurum ve ressam bilgileri verilmiştir.",
    },
    {
      id: "art-muzik",
      left: "Müzik",
      right: "Mehterhane, Itri, Donizetti kardeşler, Mızıka-yı Hümayun ve Suzidilara makamı",
      explanation: "Müzik başlığında bu bilgiler yer alır.",
    },
    {
      id: "art-kalem",
      left: "Kalem işi",
      right: "Duvar süsleme sanatı",
      explanation: "Kalem işi duvar süsleme sanatıdır.",
    },
    {
      id: "art-cini",
      left: "Çinicilik",
      right: "İstanbul, İznik, Kütahya ve Diyarbakır önemli merkezlerdir",
      explanation: "Çiniciliğin önemli merkezleri İstanbul, İznik, Kütahya ve Diyarbakır'dır.",
    },
    {
      id: "art-hali",
      left: "Halıcılık",
      right: "Uşak, Bünyan, Isparta ve Hereke önemli merkezlerdir",
      explanation: "Halıcılığın önemli merkezleri Uşak, Bünyan, Isparta ve Hereke'dir.",
    },
    {
      id: "art-telkari",
      left: "Telkari",
      right: "Gümüş işlemeciliği",
      explanation: "Telkari gümüş işlemeciliğidir.",
    },
    {
      id: "art-malakari",
      left: "Malakâri",
      right: "Duvar süsleme sanatı",
      explanation: "Malakâri duvar süsleme sanatıdır.",
    },
    {
      id: "art-vitray",
      left: "Vitray",
      right: "Cam süsleme sanatı",
      explanation: "Vitray cam süsleme sanatıdır.",
    },
    {
      id: "art-tombak",
      left: "Tombak",
      right: "Eşyaların altın ile kaplanması",
      explanation: "Eşyaların altın ile kaplanması işlemine Tombak denir.",
    },
    {
      id: "art-heykel",
      left: "Heykel",
      right: "Heykelini yaptıran tek Osmanlı padişahı Sultan Abdülaziz'dir",
      explanation: "Sultan Abdülaziz heykelini yaptıran tek Osmanlı padişahıdır.",
    },
    {
      id: "art-opera",
      left: "Opera",
      right: "Osmanlı döneminde başlamış ve Milli Osmanlı Operet Kumpanyası kurulmuştur",
      explanation: "Opera Osmanlı döneminde başlamış, Milli Osmanlı Operet Kumpanyası kurulmuştur.",
    },
    {
      id: "art-ebru",
      left: "Ebru",
      right: "Bulut veya bulutlanmak anlamına gelir; uğraşana ebrüzen denir",
      explanation: "Ebru kelime olarak bulut veya bulutlanmak anlamındadır; uğraşana ebrüzen denir.",
    },
    {
      id: "art-ahsap",
      left: "Ahşap İşlemeciliği",
      right: "Rahle, mihrap ve vaaz kürsülerinde uygulanmıştır",
      explanation: "Ahşap işlemeciliği rahle, mihrap ve vaaz kürsülerinde uygulanmıştır.",
    },
    {
      id: "art-ciftcilik-ciltcilik",
      left: "Çiftçilik / Ciltçilik",
      right: "Uğraşana mücellite adı verilmiştir",
      explanation: "Notta bu sanat dalı için uğraşana mücellite adı verildiği belirtilir.",
    },
    {
      id: "artist-seyh-hamdullah",
      left: "Şeyh Hamdullah",
      right: "En büyük Osmanlı hattatı",
      explanation: "Hibetullah'ın unvanı Şeyh Hamdullah'tır ve en büyük Osmanlı hattatı olarak verilmiştir.",
    },
    {
      id: "artist-ahmet-karahisari",
      left: "Ahmet Karahisari",
      right: "Hattat",
      explanation: "Ahmet Karahisari önemli hattatlar arasında verilmiştir.",
    },
    {
      id: "artist-kazasker",
      left: "Kazasker Mustafa İzzet",
      right: "Hattat",
      explanation: "Kazasker Mustafa İzzet önemli hattatlar arasındadır.",
    },
    {
      id: "artist-yeserizade",
      left: "Yeserizade Mustafa İzzet",
      right: "Hattat",
      explanation: "Yeserizade Mustafa İzzet önemli hattatlar arasındadır.",
    },
    {
      id: "artist-hafiz-osman",
      left: "Hafız Osman",
      right: "Hattat",
      explanation: "Hafız Osman önemli hattatlar arasında verilmiştir.",
    },
    {
      id: "artist-ii-mustafa",
      left: "II. Mustafa",
      right: "Hatları günümüze ulaşan tek Osmanlı padişahı",
      explanation: "Hatları günümüze ulaşan tek Osmanlı padişahı II. Mustafa'dır.",
    },
    {
      id: "artist-levni",
      left: "Levni",
      right: "Minyatür",
      explanation: "Levni önemli minyatür sanatçıları arasında verilmiştir.",
    },
    {
      id: "artist-nakkas-osman",
      left: "Nakkaş Osman",
      right: "Surname",
      explanation: "Nakkaş Osman, Surname bilgisiyle minyatür sanatçıları arasında verilmiştir.",
    },
    {
      id: "artist-matrakci",
      left: "Matrakçı Nasuh",
      right: "Beyan-ı Menazil-i Sefer-i Irakeyn",
      explanation: "Matrakçı Nasuh bu eserle minyatür sanatçıları arasında verilmiştir.",
    },
    {
      id: "artist-sinan-bey",
      left: "Nakkaş Sinan Bey",
      right: "Gül Koklayan Fatih",
      explanation: "Nakkaş Sinan Bey Gül Koklayan Fatih eseriyle minyatürü portre görünümüne geçirmiştir.",
    },
    {
      id: "artist-kara-mehmet",
      left: "Kara Mehmet",
      right: "Tezhip",
      explanation: "Kara Mehmet tezhibin en ünlü temsilcisidir.",
    },
    {
      id: "artist-fatih-resim",
      left: "Fatih Sultan Mehmet",
      right: "Resmini yaptıran ilk Osmanlı padişahı",
      explanation: "Resmini yaptıran ilk Osmanlı padişahı Fatih Sultan Mehmet'tir.",
    },
    {
      id: "artist-ii-mahmut",
      left: "II. Mahmut",
      right: "Resmi devlet dairesine astıran padişah",
      explanation: "Resmi devlet dairesine astıran Osmanlı padişahı II. Mahmut'tur.",
    },
    {
      id: "artist-mekteb-osmani",
      left: "Mekteb-i Osmani",
      right: "Paris'te ressam yetiştirmek için açılmıştır",
      explanation: "Osmanlı Devleti ressam yetiştirmek için Paris'te Mekteb-i Osmani'yi açmıştır.",
    },
    {
      id: "artist-seker",
      left: "Şeker Ahmet Paşa",
      right: "İlk resim sergisi",
      explanation: "İlk resim sergisini Şeker Ahmet Paşa açmıştır.",
    },
    {
      id: "artist-osman-hamdi",
      left: "Osman Hamdi Bey",
      right: "Kaplumbağa Terbiyecisi",
      explanation: "Osman Hamdi Bey Kaplumbağa Terbiyecisi gibi tablolarıyla ünlenmiştir.",
    },
    {
      id: "artist-mihri",
      left: "Mihri Müşfik",
      right: "İlk kadın ressam",
      explanation: "Osmanlı Devleti'nin ilk kadın ressamı Mihri Müşfik'tir.",
    },
    {
      id: "artist-itri",
      left: "Itri",
      right: "Müzik ilminin şeyhi",
      explanation: "Itri müzik ilminin şeyhi olarak verilmiştir.",
    },
    {
      id: "artist-donizetti",
      left: "Donizetti kardeşler",
      right: "Mızıka-yı Hümayun",
      explanation: "II. Mahmut zamanında Donizetti kardeşler tarafından Mızıka-yı Hümayun kurulmuştur.",
    },
    {
      id: "artist-abdulmecit",
      left: "Sultan Abdülmecit",
      right: "Batı tarzında müzik dersi alan ilk padişah",
      explanation: "Osmanlı'da Batı tarzında müzik dersi alan ilk padişah Sultan Abdülmecit'tir.",
    },
    {
      id: "artist-iii-selim",
      left: "III. Selim",
      right: "Suzidilara makamı",
      explanation: "III. Selim Suzidilara makamını bulmuştur.",
    },
    {
      id: "artist-abdulaziz",
      left: "Sultan Abdülaziz",
      right: "Heykelini yaptıran tek Osmanlı padişahı",
      explanation: "Heykelini yaptıran tek Osmanlı padişahı Sultan Abdülaziz'dir.",
    },
  ],
};

const languageLiteratureActivity: ClassificationActivity = {
  id: "activity-language-literature",
  chapterId: "language-literature",
  mode: "classification",
  title: "Edebiyat Sınıflandırma Oyunu",
  description: "Şair ve yazarları doğru edebiyat türüne yerleştir.",
  categories: [
    {
      id: "divan",
      title: "Divan Edebiyatı",
      description: "Baki, Fuzuli, Nabi, Ruhi, Nefi ve Naili.",
    },
    {
      id: "tasavvuf",
      title: "Tasavvuf Edebiyatı",
      description: "Pir Sultan Abdal, Akşemseddin, Eşrefoğlu Rumi ve diğerleri.",
    },
    {
      id: "halk",
      title: "Halk Edebiyatı",
      description: "Köroğlu, Dadaloğlu, Karacaoğlan ve diğerleri.",
    },
  ],
  items: [
    ...["Baki", "Fuzuli", "Nabi", "Ruhi", "Nefi", "Naili"].map((label) => ({
      id: `literature-divan-${slug(label)}`,
      label,
      categoryId: "divan",
      explanation: `${label}, notta Divan Edebiyatı altında verilmiştir.`,
    })),
    ...["Pir Sultan Abdal", "Akşemseddin", "Eşrefoğlu Rumi", "Hacı Bayram Veli", "Kaygusuz Abdal", "Ümmi Kemal"].map(
      (label) => ({
        id: `literature-tasavvuf-${slug(label)}`,
        label,
        categoryId: "tasavvuf",
        explanation: `${label}, notta Tasavvuf Edebiyatı altında verilmiştir.`,
      }),
    ),
    ...["Köroğlu", "Öksüz Dede", "Dadaloğlu", "Karacaoğlan", "Gevheri", "Aşık Ömer"].map((label) => ({
      id: `literature-halk-${slug(label)}`,
      label,
      categoryId: "halk",
      explanation: `${label}, notta Halk Edebiyatı altında verilmiştir.`,
    })),
  ],
};

const sportsActivity: MatchingActivity = {
  id: "activity-sports",
  chapterId: "sports",
  mode: "matching",
  title: "Spor Bilgisi Oyunu",
  description: "Spor bilgilerini ve kavramlarını eşleştir.",
  pairs: [
    {
      id: "sport-gures-tekkesi",
      left: "Orhan Bey dönemi",
      right: "İlk defa güreş tekkeleri açılmıştır",
      explanation: "Orhan Bey döneminde ilk defa güreş tekkeleri açılmıştır.",
    },
    {
      id: "sport-kirkpinar",
      left: "I. Murat dönemi",
      right: "Edirne'de Kırkpınar Yağlı Güreşleri başlamıştır",
      explanation: "I. Murat döneminde Edirne'de Kırkpınar Yağlı Güreşleri başlamıştır.",
    },
    {
      id: "sport-v-murat-abdulaziz",
      left: "V. Murat ve Sultan Abdülaziz",
      right: "Güreş ile uğraşmışlardır",
      explanation: "V. Murat ve Sultan Abdülaziz güreşle uğraşmıştır.",
    },
    {
      id: "sport-wrestlers",
      left: "Adalı Halil ve Koca Yusuf",
      right: "Ünlü Osmanlı güreşçileri",
      explanation: "Adalı Halil ve Koca Yusuf ünlü Osmanlı güreşçilerindendir.",
    },
    {
      id: "sport-kemankes",
      left: "Kemankeş",
      right: "Okçulukla uğraşan kişi",
      explanation: "Okçuluk ile uğraşanlara Kemankeş denilmiştir.",
    },
    {
      id: "sport-cundi",
      left: "Cündi",
      right: "Hünerli at binicisi",
      explanation: "Osmanlı Devleti'nde hünerli at binicilerine Cündi adı verilmiştir.",
    },
    {
      id: "sport-gymnastics",
      left: "Müfredata giren ilk beden eğitimi dersi",
      right: "Jimnastik",
      explanation: "İlk kez ders müfredatına giren beden eğitimi dersi jimnastiktir.",
    },
    {
      id: "sport-faik",
      left: "Mehmet Faik Üstündağ",
      right: "Jimnastik dersini veren eğitimci",
      explanation: "Jimnastik dersini veren eğitimci Mehmet Faik Üstündağ'dır.",
    },
    {
      id: "sport-olympic",
      left: "Selim Sırrı Tarcan",
      right: "Osmanlı Milli Olimpiyat Komitesini kurmuştur",
      explanation: "Osmanlı Milli Olimpiyat Komitesini Selim Sırrı Tarcan kurmuştur.",
    },
  ],
};

const remainingTrapsActivity: TrueFalseActivity = {
  id: "activity-remaining-traps",
  chapterId: "remaining-traps",
  mode: "truefalse",
  title: "KPSS Tuzakları Doğru-Yanlış Oyunu",
  description: "Ekonomi, mimari, sanat, edebiyat ve spor tuzaklarını çöz.",
  questions: [
    {
      id: "remaining-trap-iase",
      statement: "İaşecilik halkın refahı için piyasada yeterli mal bulundurulmasıdır.",
      answer: true,
      explanation: "İaşecilik piyasalarda yeterli kadar mal bulundurulması anlayışıdır.",
    },
    {
      id: "remaining-trap-fiskalizm",
      statement: "Fiskalizm devlet gelirlerini artırıp giderleri azaltmaya çalışır.",
      answer: true,
      explanation: "Fiskalizm devlet gelirlerini üst düzeye, giderleri en alt düzeye indirmeye çalışır.",
    },
    {
      id: "remaining-trap-gedik",
      statement: "Gedik Hakkı iş yeri açma ruhsatıdır.",
      answer: true,
      explanation: "Gedik Hakkı iş yeri açma ruhsatıdır.",
    },
    {
      id: "remaining-trap-cizye",
      statement: "Cizye Müslümanlardan alınır.",
      answer: false,
      explanation: "Cizye gayrimüslimlerin askerlik yapmadıkları için ödedikleri vergidir.",
    },
    {
      id: "remaining-trap-agnam",
      statement: "Ağnam küçükbaş hayvan vergisidir.",
      answer: true,
      explanation: "Ağnam küçükbaş hayvanlardan alınan vergidir.",
    },
    {
      id: "remaining-trap-narh",
      statement: "Narh fiyatlara müdahale sistemidir.",
      answer: true,
      explanation: "Narh Sistemi devletin fiyatlara müdahalesidir.",
    },
    {
      id: "remaining-trap-bank",
      statement: "İlk Osmanlı bankası Bank-ı Dersaadet'tir.",
      answer: true,
      explanation: "Bank-ı Dersaadet ilk açılan Osmanlı bankasıdır.",
    },
    {
      id: "remaining-trap-first-mosque",
      statement: "İlk Osmanlı camisi Hacı Özbek Camii'dir.",
      answer: true,
      explanation: "İlk Osmanlı camisi İznik'te yapılan Hacı Özbek Camii'dir.",
    },
    {
      id: "remaining-trap-sinan-wrong",
      statement: "Mimar Sinan'ın ustalık eseri Süleymaniye Camii'dir.",
      answer: false,
      explanation: "Süleymaniye Camii kalfalık; Selimiye Camii ustalık eseridir.",
    },
    {
      id: "remaining-trap-selimiye",
      statement: "Selimiye Camii Mimar Sinan'ın ustalık eseridir.",
      answer: true,
      explanation: "Selimiye Camii Mimar Sinan'ın ustalık eseridir.",
    },
    {
      id: "remaining-trap-six-minaret",
      statement: "İlk altı minareli cami Sultanahmet Camii'dir.",
      answer: true,
      explanation: "Osmanlı Devleti'nin ilk altı minareli camisi Sultanahmet Camii'dir.",
    },
    {
      id: "remaining-trap-nuruosmaniye",
      statement: "İlk Batı tarzı cami Nuruosmaniye Camii'dir.",
      answer: true,
      explanation: "İlk Batı tarzında yapılan cami Nuruosmaniye Camii'dir.",
    },
    {
      id: "remaining-trap-minyatur",
      statement: "Minyatür sanatçılarına musavvir veya nakkaş denir.",
      answer: true,
      explanation: "Minyatürle uğraşanlara musavvir veya nakkaş denir.",
    },
    {
      id: "remaining-trap-tezhip",
      statement: "Tezhip sanatçısına ebrüzen denir.",
      answer: false,
      explanation: "Tezhiple uğraşana müzehhip; ebru ile uğraşana ebrüzen denir.",
    },
    {
      id: "remaining-trap-ebru",
      statement: "Ebru yapan kişiye ebrüzen denir.",
      answer: true,
      explanation: "Ebru ile uğraşana ebrüzen adı verilmiştir.",
    },
    {
      id: "remaining-trap-fatih-painting",
      statement: "Resmini yaptıran ilk Osmanlı padişahı Fatih Sultan Mehmet'tir.",
      answer: true,
      explanation: "Resmini yaptıran ilk Osmanlı padişahı Fatih Sultan Mehmet'tir.",
    },
    {
      id: "remaining-trap-mihri",
      statement: "İlk kadın ressam Mihri Müşfik'tir.",
      answer: true,
      explanation: "Osmanlı Devleti'nin ilk kadın ressamı Mihri Müşfik'tir.",
    },
    {
      id: "remaining-trap-karaca-divan",
      statement: "Divan edebiyatında Karacaoğlan vardır.",
      answer: false,
      explanation: "Karacaoğlan notta Halk Edebiyatı altında verilmiştir.",
    },
    {
      id: "remaining-trap-karaca-halk",
      statement: "Halk edebiyatında Karacaoğlan vardır.",
      answer: true,
      explanation: "Karacaoğlan Halk Edebiyatı başlığı altında verilmiştir.",
    },
    {
      id: "remaining-trap-kemankes",
      statement: "Okçulukla uğraşanlara Kemankeş denir.",
      answer: true,
      explanation: "Okçuluk ile uğraşanlara Kemankeş denilmiştir.",
    },
    {
      id: "remaining-trap-cundi",
      statement: "Hünerli at binicilerine Cündi denir.",
      answer: true,
      explanation: "Hünerli at binicilerine Cündi adı verilmiştir.",
    },
  ],
};

export const economyArtCultureActivities: Record<EconomyArtChapterId, Activity> = {
  "economy-concepts": economyConceptsActivity,
  taxes: taxesActivity,
  "money-banks": moneyBanksActivity,
  "economy-decline": economyDeclineActivity,
  architecture: architectureActivity,
  arts: artsActivity,
  "language-literature": languageLiteratureActivity,
  sports: sportsActivity,
  "remaining-traps": remainingTrapsActivity,
};

export const economyArtCultureBadges = [
  "Çarşı Uzmanı",
  "Vergi Katibi",
  "Para ve Banka Hafızı",
  "Mimar Sinan Talebesi",
  "Sanat Hafızı",
  "Edebiyat Ustası",
  "Kemankeş",
  "Kalan Konular KPSS Avcısı",
] as const;

function slug(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
