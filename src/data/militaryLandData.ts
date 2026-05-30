import type {
  Activity,
  ChapterDefinition,
  ClassificationActivity,
  MatchingActivity,
  PlayableChapterId,
  TrueFalseActivity,
} from "../types";

type MilitaryLandChapterId = Extract<
  PlayableChapterId,
  | "ottoman-army"
  | "kapikulu-infantry"
  | "kapikulu-cavalry"
  | "provincial-soldiers"
  | "naval-forces"
  | "army-features"
  | "land-types"
  | "miri-land"
  | "dirlik-system"
  | "military-land-traps"
>;

export const militaryLandChapters: ChapterDefinition[] = [
  {
    id: "ottoman-army",
    title: "Osmanlı Ordusu",
    subtitle: "Birlikleri doğru askerî sınıfa yerleştir",
    mode: "classification",
    badge: "Kapıkulu Uzmanı",
    tone: "border-red-500/40 bg-red-500/10 text-red-100",
  },
  {
    id: "kapikulu-infantry",
    title: "Kapıkulu Piyadeleri",
    subtitle: "Piyade ocakları ve görevleri",
    mode: "matching",
    badge: "Yeniçeri Adayı",
    tone: "border-orange-500/40 bg-orange-500/10 text-orange-100",
  },
  {
    id: "kapikulu-cavalry",
    title: "Kapıkulu Süvarileri",
    subtitle: "Süvari bölüklerini görevleriyle eşleştir",
    mode: "matching",
    badge: "Kapıkulu Uzmanı",
    tone: "border-yellow-500/40 bg-yellow-500/10 text-yellow-100",
  },
  {
    id: "provincial-soldiers",
    title: "Eyalet Askerleri",
    subtitle: "Eyalet birlikleri ve nottaki görevleri",
    mode: "matching",
    badge: "Eyalet Askerleri Bilgesi",
    tone: "border-lime-500/40 bg-lime-500/10 text-lime-100",
  },
  {
    id: "naval-forces",
    title: "Deniz Kuvvetleri",
    subtitle: "Donanma, tersaneler ve ünlü denizciler",
    mode: "matching",
    badge: "Donanma Reisi",
    tone: "border-cyan-500/40 bg-cyan-500/10 text-cyan-100",
  },
  {
    id: "army-features",
    title: "Ordu Özellikleri",
    subtitle: "Kapıkulu, ulufe, cülus ve Gülbank",
    mode: "truefalse",
    badge: "Askeri ve Toprak KPSS Avcısı",
    tone: "border-rose-500/40 bg-rose-500/10 text-rose-100",
  },
  {
    id: "land-types",
    title: "Toprak Çeşitleri",
    subtitle: "Mülk, miri ve vakıf araziyi ayır",
    mode: "classification",
    badge: "Toprak Yönetimi Uzmanı",
    tone: "border-emerald-500/40 bg-emerald-500/10 text-emerald-100",
  },
  {
    id: "miri-land",
    title: "Miri Arazi",
    subtitle: "Miri toprak türleri ve Çifthane",
    mode: "matching",
    badge: "Çifthane Bilgesi",
    tone: "border-teal-500/40 bg-teal-500/10 text-teal-100",
  },
  {
    id: "dirlik-system",
    title: "Dirlik Sistemi",
    subtitle: "Has, Zeamet ve Tımar bilgileri",
    mode: "matching",
    badge: "Dirlik Sistemi Ustası",
    tone: "border-blue-500/40 bg-blue-500/10 text-blue-100",
  },
  {
    id: "military-land-traps",
    title: "Askeri ve Toprak KPSS Tuzakları",
    subtitle: "Ordu ve arazi bilgilerini doğru-yanlış çöz",
    mode: "truefalse",
    badge: "Askeri ve Toprak KPSS Avcısı",
    tone: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-100",
  },
];

const armyClassificationActivity: ClassificationActivity = {
  id: "activity-ottoman-army",
  chapterId: "ottoman-army",
  mode: "classification",
  title: "Ordu Sınıflandırma Oyunu",
  description: "Birlikleri doğru askerî kategoriye yerleştir.",
  categories: [
    {
      id: "kapikulu-infantry",
      title: "Kapıkulu Piyadeleri",
      description: "Acemi Ocağı, Yeniçeriler ve piyade ocakları.",
    },
    {
      id: "kapikulu-cavalry",
      title: "Kapıkulu Süvarileri",
      description: "Silahdar, Sipahi, Ulufeci ve Garip bölükleri.",
    },
    {
      id: "provincial-soldiers",
      title: "Eyalet Askerleri",
      description: "Tımarlı Sipahi ve eyalet birlikleri.",
    },
    {
      id: "auxiliary-forces",
      title: "Yardımcı Kuvvetler",
      description: "Bağlı devlet ve beyliklerin gönderdiği kuvvetler.",
    },
    {
      id: "naval-forces",
      title: "Deniz Kuvvetleri",
      description: "Donanma ve leventler.",
    },
  ],
  items: [
    ...[
      "Acemi Ocağı",
      "Yeniçeriler",
      "Cebeciler",
      "Topçular",
      "Humbaracılar",
      "Lağımcılar",
      "Bostancı",
    ].map((label) => ({
      id: `army-infantry-${slug(label)}`,
      label,
      categoryId: "kapikulu-infantry",
      explanation: `${label}, notta Kapıkulu Piyadeleri arasında verilmiştir.`,
    })),
    ...[
      "Silahdarlar",
      "Sipahiler",
      "Sağ Ulufeciler",
      "Sol Ulufeciler",
      "Sağ Garipler",
      "Sol Garipler",
    ].map((label) => ({
      id: `army-cavalry-${slug(label)}`,
      label,
      categoryId: "kapikulu-cavalry",
      explanation: `${label}, notta Kapıkulu Süvarileri arasında verilmiştir.`,
    })),
    ...[
      "Tımarlı Sipahiler",
      "Azaplar",
      "Turnalar",
      "Deliler",
      "Yörükler",
      "Akıncılar",
      "Yayalar ve Müsellemler",
      "Sakalar",
      "Tatarlar",
      "Derbentçi",
      "Voynuk",
    ].map((label) => ({
      id: `army-provincial-${slug(label)}`,
      label,
      categoryId: "provincial-soldiers",
      explanation: `${label}, notta Eyalet Askerleri arasında verilmiştir.`,
    })),
    {
      id: "army-auxiliary-dependent",
      label: "Bağlı devlet ve beyliklerin gönderdiği kuvvetler",
      categoryId: "auxiliary-forces",
      explanation: "Yardımcı Kuvvetler bağlı devlet ve beyliklerin gönderdiği kuvvetlerdir.",
    },
    {
      id: "army-naval-donanma",
      label: "Donanma",
      categoryId: "naval-forces",
      explanation: "Deniz Kuvvetleri notta Donanma başlığıyla verilmiştir.",
    },
    {
      id: "army-naval-levent",
      label: "Levent",
      categoryId: "naval-forces",
      explanation: "Donanma askerine levent denilmiştir.",
    },
  ],
};

const kapikuluInfantryActivity: MatchingActivity = {
  id: "activity-kapikulu-infantry",
  chapterId: "kapikulu-infantry",
  mode: "matching",
  title: "Görev Eşleştirme Oyunu",
  description: "Kapıkulu piyadelerini nottaki görev veya bilgiyle eşleştir.",
  pairs: [
    {
      id: "infantry-acemi",
      left: "Acemi Ocağı",
      right: "Usta birliklerine geçişte kapıya çıkma veya bedergah bilgisiyle ilişkilidir",
      explanation: "Acemioğlanlar Ocağı'ndan usta birliklerine geçmeye kapıya çıkma ya da bedergah denmiştir.",
    },
    {
      id: "infantry-yeniceri",
      left: "Yeniçeriler",
      right: "Sefere çıkmadan önce Gülbank okuyan askerler",
      explanation: "Yeniçerilerin sefere çıkmadan önce okudukları duaya Gülbank denmiştir.",
    },
    {
      id: "infantry-cebeci",
      left: "Cebeciler",
      right: "Silah bakımı",
      explanation: "Notta Cebeciler silah bakımı bilgisiyle verilmiştir.",
    },
    {
      id: "infantry-bostanci",
      left: "Bostancı",
      right: "Aseslik",
      explanation: "Notta Bostancı için aseslik bilgisi verilmiştir.",
    },
    {
      id: "infantry-topcu",
      left: "Topçular",
      right: "Kapıkulu Piyadeleri arasında yer alan topçu ocağı",
      explanation: "Topçular, Kapıkulu Piyadeleri listesinde geçer.",
    },
    {
      id: "infantry-humbaraci",
      left: "Humbaracılar",
      right: "Kapıkulu Piyadeleri arasında yer alan humbaracı ocağı",
      explanation: "Humbaracılar, Kapıkulu Piyadeleri listesinde geçer.",
    },
    {
      id: "infantry-lagimci",
      left: "Lağımcılar",
      right: "Kapıkulu Piyadeleri arasında yer alan lağımcı ocağı",
      explanation: "Lağımcılar, Kapıkulu Piyadeleri listesinde geçer.",
    },
  ],
};

const kapikuluCavalryActivity: MatchingActivity = {
  id: "activity-kapikulu-cavalry",
  chapterId: "kapikulu-cavalry",
  mode: "matching",
  title: "Görev Eşleştirme Oyunu",
  description: "Kapıkulu süvari bölüklerini savaş görevleriyle eşleştir.",
  pairs: [
    {
      id: "cavalry-silahdar",
      left: "Silahdarlar",
      right: "Savaş sırasında padişahı korur",
      explanation: "Notta silahdarlar ve sipahilerin savaş sırasında padişahı koruduğu belirtilir.",
    },
    {
      id: "cavalry-sipahi",
      left: "Sipahiler",
      right: "Savaş sırasında padişahı koruyan süvari bölüğü",
      explanation: "Notta silahdarlar ve sipahilerin savaş sırasında padişahı koruduğu belirtilir.",
    },
    {
      id: "cavalry-sag-ulufeci",
      left: "Sağ Ulufeciler",
      right: "Savaşta sancakları korur",
      explanation: "Sağ ve sol ulufeciler savaşta sancakları korur.",
    },
    {
      id: "cavalry-sol-ulufeci",
      left: "Sol Ulufeciler",
      right: "Savaşta sancakları koruyan süvari bölüğü",
      explanation: "Sağ ve sol ulufeciler savaşta sancakları korur.",
    },
    {
      id: "cavalry-sag-garip",
      left: "Sağ Garipler",
      right: "Ordunun ağırlıkları ve hazineyi muhafaza eder",
      explanation: "Sağ ve sol garipler ordunun ağırlıkları ve hazineyi muhafaza eder.",
    },
    {
      id: "cavalry-sol-garip",
      left: "Sol Garipler",
      right: "Ordunun ağırlıkları ve hazineyi koruyan süvari bölüğü",
      explanation: "Sağ ve sol garipler ordunun ağırlıkları ve hazineyi muhafaza eder.",
    },
  ],
};

const provincialSoldiersActivity: MatchingActivity = {
  id: "activity-provincial-soldiers",
  chapterId: "provincial-soldiers",
  mode: "matching",
  title: "Görev Eşleştirme Oyunu",
  description: "Eyalet askerlerini nottaki görev ve özellikleriyle eşleştir.",
  pairs: [
    {
      id: "prov-sipahi",
      left: "Tımarlı Sipahiler",
      right: "Sınırdaki kaleleri korur",
      explanation: "Notta Tımarlı Sipahiler için sınırdaki kaleleri korur bilgisi verilmiştir.",
    },
    {
      id: "prov-azap",
      left: "Azaplar",
      right: "Bekar erkeklerdir",
      explanation: "Azaplar notta bekar erkekler olarak açıklanmıştır.",
    },
    {
      id: "prov-turna",
      left: "Turnalar",
      right: "Habercidir",
      explanation: "Turnalar notta haberci olarak verilmiştir.",
    },
    {
      id: "prov-deliler",
      left: "Deliler",
      right: "Cesaretlidir",
      explanation: "Deliler notta cesaretli olarak açıklanmıştır.",
    },
    {
      id: "prov-yoruk",
      left: "Yörükler",
      right: "Yol açar",
      explanation: "Yörükler notta yol açarlar bilgisiyle verilmiştir.",
    },
    {
      id: "prov-akinci",
      left: "Akıncılar",
      right: "Sınırda oturur",
      explanation: "Akıncılar notta sınırda otururlar bilgisiyle geçer.",
    },
    {
      id: "prov-yaya-musellem",
      left: "Yayalar ve Müsellemler",
      right: "Atlı birliklerdir",
      explanation: "Yayalar ve Müsellemler notta atlı birlikler olarak verilmiştir.",
    },
    {
      id: "prov-saka",
      left: "Sakalar",
      right: "Su taşır",
      explanation: "Sakalar notta su taşır bilgisiyle verilmiştir.",
    },
    {
      id: "prov-tatar",
      left: "Tatarlar",
      right: "Postacıdır",
      explanation: "Tatarlar notta postacıdırlar bilgisiyle verilmiştir.",
    },
    {
      id: "prov-derbentci",
      left: "Derbentçi",
      right: "Köprüleri korur",
      explanation: "Derbentçi notta köprüleri korur bilgisiyle verilmiştir.",
    },
    {
      id: "prov-voynuk",
      left: "Voynuk",
      right: "Hıristiyan hizmet erbabı",
      explanation: "Voynuk notta Hıristiyan hizmet erbabı olarak verilmiştir.",
    },
    {
      id: "prov-sekban-sarica",
      left: "Sekban veya Sarıca",
      right: "17. yüzyıldan sonra devletin aldığı ücretli asker",
      explanation: "Notta 17. yüzyıldan sonra devletin aldığı ücretli askere Sekban veya Sarıca dendiği belirtilir.",
    },
    {
      id: "prov-redif",
      left: "Redif Birlikleri",
      right: "19. yüzyılda tımar sisteminin kaldırılmasıyla kurulan birlikler",
      explanation: "19. yüzyılda tımar sisteminin kaldırılmasıyla Redif Birlikleri kurulmuştur.",
    },
  ],
};

const navalForcesActivity: MatchingActivity = {
  id: "activity-naval-forces",
  chapterId: "naval-forces",
  mode: "matching",
  title: "Deniz Kuvvetleri Oyunu",
  description: "Denizcilik bilgilerini, tersaneleri ve ünlü denizcileri eşleştir.",
  pairs: [
    {
      id: "naval-karesi",
      left: "Karesioğullarının alınması",
      right: "Denizcilik faaliyetlerinin başlaması",
      explanation: "Denizcilik faaliyetleri Karesioğullarının alınmasıyla başlamıştır.",
    },
    {
      id: "naval-kaptanderya",
      left: "Kaptanderya",
      right: "Donanma komutanı",
      explanation: "Donanma komutanına kaptanderya denilmiştir.",
    },
    {
      id: "naval-levent",
      left: "Levent",
      right: "Donanma askeri",
      explanation: "Donanma askerine levent denilmiştir.",
    },
    {
      id: "naval-karamursel",
      left: "Karamürsel",
      right: "Orhan Bey döneminde ilk dönemlerde tersane açılan yer",
      explanation: "İlk dönemlerde Karamürsel'de Orhan Bey döneminde tersane açılmıştır.",
    },
    {
      id: "naval-shipyards",
      left: "Tersane açılan yerler",
      right: "Edirne, İzmit, İznik, Kefe, İstanbul, Gelibolu, Sinop, Samsun ve Antalya",
      explanation: "Notta tersane açılan yerler Edirne, İzmit, İznik, Kefe, İstanbul, Gelibolu, Sinop, Samsun ve Antalya olarak verilmiştir.",
    },
    ...[
      "Ece Halil",
      "Hacı İlbeyi",
      "Kemal Reis",
      "Çalı Bey",
      "Saruca Paşa",
      "Baltaoğlu Süleyman Paşa",
      "Barbaros Hayreddin Paşa",
      "Evrenos",
      "Piyale Paşa",
      "Seydi Ali Reis",
      "Turgut Alp",
      "Oruç Reis",
      "Piri Reis",
    ].map((label) => ({
      id: `naval-sailor-${slug(label)}`,
      left: label,
      right: `Yetişen ünlü denizciler listesinde ${label} adıyla yer alır`,
      explanation: `${label}, notta yetişen ünlü denizciler arasında geçer.`,
    })),
  ],
};

const armyFeaturesActivity: TrueFalseActivity = {
  id: "activity-army-features",
  chapterId: "army-features",
  mode: "truefalse",
  title: "Ordu Bilgisi Doğru-Yanlış Oyunu",
  description: "Osmanlı ordusunun özellikleriyle ilgili kritik bilgileri çöz.",
  questions: [
    {
      id: "army-feature-first-army",
      statement: "İlk orduyu Orhan Bey Yaya ve Müsellem adıyla kurmuştur.",
      answer: true,
      explanation: "Notta ilk orduyu Orhan Bey'in Yaya ve Müsellem adıyla kurduğu belirtilir.",
    },
    {
      id: "army-feature-kapikulu-murat",
      statement: "I. Murat Kapıkulu Ocağı'nı Edirne'de kurmuştur.",
      answer: true,
      explanation: "Notta I. Murat'ın Kapıkulu Ocağı'nı Edirne'de kurduğu yazılıdır.",
    },
    {
      id: "army-feature-central",
      statement: "Kapıkulu askerleri merkez ordusudur.",
      answer: true,
      explanation: "Kapıkulu ordusunun özellikleri arasında merkez ordusu olması verilmiştir.",
    },
    {
      id: "army-feature-devsirme",
      statement: "Kapıkulu askerleri devşirme çocuklardan oluşmuştur.",
      answer: true,
      explanation: "Kapıkulu askerleri devşirme çocuklardan oluşmuştur.",
    },
    {
      id: "army-feature-monthly-ulufe",
      statement: "Kapıkulu askerleri her ay ulufe almıştır.",
      answer: false,
      explanation: "Notta Kapıkulu askerlerinin üç ayda bir ulufe aldığı belirtilir.",
    },
    {
      id: "army-feature-quarter-ulufe",
      statement: "Kapıkulu askerleri üç ayda bir ulufe almıştır.",
      answer: true,
      explanation: "Kapıkulu askerleri üç ayda bir ulufe almıştır.",
    },
    {
      id: "army-feature-culus",
      statement: "Her taht değişikliğinde cülus bahşişi almışlardır.",
      answer: true,
      explanation: "Kapıkulu askerleri her taht değişikliğinde cülus bahşişi almıştır.",
    },
    {
      id: "army-feature-gulbank",
      statement: "Yeniçerilerin sefere çıkmadan önce okudukları duaya Gülbank denir.",
      answer: true,
      explanation: "Gülbank, Yeniçerilerin sefere çıkmadan önce okudukları duadır.",
    },
    {
      id: "army-feature-bedergah",
      statement: "Acemioğlanlar Ocağı'ndan usta birliklerine geçmeye kapıya çıkma veya bedergah denir.",
      answer: true,
      explanation: "Notta bu geçişe kapıya çıkma ya da bedergah dendiği belirtilir.",
    },
    {
      id: "army-feature-redif",
      statement: "19. yüzyılda tımar sisteminin kaldırılmasıyla Redif Birlikleri kurulmuştur.",
      answer: true,
      explanation: "Notta tımar sisteminin kaldırılmasıyla Redif Birlikleri'nin kurulduğu yazılıdır.",
    },
    {
      id: "army-feature-ocak-state",
      statement: "Kapıkulu askerleri XVI. yüzyıla kadar 'Ocak devlet içindir' anlayışıyla hareket etmiştir.",
      answer: true,
      explanation: "Bu bilgi notta Kapıkulu ordusunun özellikleri arasında verilmiştir.",
    },
    {
      id: "army-feature-third-murat",
      statement: "Kapıkulu askerleri III. Murat'tan itibaren bozulmaya başlamıştır.",
      answer: true,
      explanation: "Notta III. Murat'tan itibaren bozulmaya başladıkları belirtilir.",
    },
    {
      id: "army-feature-eyalet-crowded",
      statement: "Eyalet askerleri ordunun en kalabalık kısmıdır.",
      answer: true,
      explanation: "Notta Eyalet Askerleri için ordunun en kalabalık kısmıdır bilgisi vardır.",
    },
    {
      id: "army-feature-eyalet-timar-income",
      statement: "Eyalet askerleri geçimlerini tımardan sağlarlar.",
      answer: true,
      explanation: "Eyalet askerlerinin geçimlerini tımardan sağladığı belirtilmiştir.",
    },
  ],
};

const landTypesActivity: ClassificationActivity = {
  id: "activity-land-types",
  chapterId: "land-types",
  mode: "classification",
  title: "Toprak Sınıflandırma Oyunu",
  description: "Toprak türlerini doğru ana arazi kategorisine yerleştir.",
  categories: [
    {
      id: "mulk",
      title: "Mülk Arazi",
      description: "Öşri ve Haraci topraklar.",
    },
    {
      id: "miri",
      title: "Miri Arazi",
      description: "Paşmaklık, Mukataa, Malikane, Yurtluk, Ocaklık ve dirlik türleri.",
    },
    {
      id: "vakif",
      title: "Vakıf Arazi",
      description: "Kamu yararı ve sosyal amaçlı kuruluşlar için ayrılan topraklar.",
    },
  ],
  items: [
    ...["Öşri", "Haraci"].map((label) => ({
      id: `land-mulk-${slug(label)}`,
      label,
      categoryId: "mulk",
      explanation: `${label}, notta Mülk Arazi altında verilmiştir.`,
    })),
    ...[
      "Paşmaklık",
      "Mukataa",
      "Malikane",
      "Yurtluk",
      "Ocaklık",
      "Metruk",
      "Arpalık",
      "Dirlik",
      "Has",
      "Zeamet",
      "Tımar",
    ].map((label) => ({
      id: `land-miri-${slug(label)}`,
      label,
      categoryId: "miri",
      explanation: `${label}, notta Miri Arazi veya miri toprak açıklamaları içinde verilmiştir.`,
    })),
    {
      id: "land-vakif-public",
      label: "Kamu yararı için ayrılan topraklar",
      categoryId: "vakif",
      explanation: "Vakıf araziler kamu yararı için ayrılan topraklardır.",
    },
    {
      id: "land-vakif-social",
      label: "Sosyal amaçlı kuruluşların masraflarının karşılandığı araziler",
      categoryId: "vakif",
      explanation: "Vakıf araziler hayırsever mülk sahiplerinin gelirleriyle sosyal amaçlı kuruluşların masraflarını karşılamak için vakfedilmiştir.",
    },
  ],
};

const miriLandActivity: MatchingActivity = {
  id: "activity-miri-land",
  chapterId: "miri-land",
  mode: "matching",
  title: "Miri Arazi Eşleştirme Oyunu",
  description: "Miri toprak türlerini ve Çifthane senaryolarını doğru kavramla eşleştir.",
  pairs: [
    {
      id: "miri-pasmaklik",
      left: "Paşmaklık",
      right: "Geliri padişahın annesi ve kızlarına ayrılmıştır",
      explanation: "Paşmaklık geliri padişahın annesi ve kızlarına ayrılmıştır.",
    },
    {
      id: "miri-mukataa",
      left: "Mukataa",
      right: "Geliri doğrudan hazineye ayrılan topraklardır",
      explanation: "Mukataa gelirleri doğrudan hazineye ayrılır; bu toprak çeşidinde iltizam sistemi uygulanarak vergi toplanmıştır.",
    },
    {
      id: "miri-malikane",
      left: "Malikane",
      right: "Geliri devlete yararlılık gösterenlere ayrılmıştır",
      explanation: "Malikane geliri devlete yararlılık gösterenlere ayrılan topraklardır.",
    },
    {
      id: "miri-yurtluk",
      left: "Yurtluk",
      right: "Geliri sınır boylarında oturanlara ayrılmıştır",
      explanation: "Yurtluk geliri sınır boylarında oturanlara ayrılan topraklardır.",
    },
    {
      id: "miri-ocaklik",
      left: "Ocaklık",
      right: "Kale muhafızlarına ve tersanecilere ayrılmıştır",
      explanation: "Ocaklık kale muhafızlarına ve tersanecilere ayrılan topraklardır.",
    },
    {
      id: "miri-metruk",
      left: "Metruk",
      right: "Halkın ortaklaşa kullandığı otlak, yaylak gibi topraklardır",
      explanation: "Metruk halkın ortaklaşa kullandığı otlak, yaylak gibi topraklardır.",
    },
    {
      id: "miri-arpalik",
      left: "Arpalık",
      right: "Saray adamlarına ve ilmiye sınıfından bazı yüksek rütbeli kişilere maaşa ek verilen arazilerdir",
      explanation: "Arpalık, saray adamlarına ve ilmiye sınıfından bazı yüksek rütbeli kişilere maaşlarına ek olarak verilen arazilerdir.",
    },
    {
      id: "miri-dirlik",
      left: "Dirlik",
      right: "Geliri devlet memurlarına ve komutanlara ayrılan topraklardır",
      explanation: "Dirlik gelirleri devlet memurlarına ve komutanlara ayrılmıştır.",
    },
    {
      id: "miri-cifthane-definition",
      left: "Köylü aileye bir çift öküzün işleyebileceği kadar miri arazinin kiraya verilmesi",
      right: "Çifthane",
      explanation: "Osmanlı Devleti köylü bir aileye bir çift öküzün işleyebileceği kadar miri araziyi belirli şartlarda kiraya vermiştir; bu sisteme Çifthane denmiştir.",
    },
    {
      id: "miri-cifthane-purpose",
      left: "Büyük çiftliklerin oluşmasını ve tarımın belirli ailelerde toplanmasını engelleme amacı",
      right: "Çifthane sisteminin amacı",
      explanation: "Çifthane, büyük çiftliklerin oluşmasını ve tarımın belirli ailelerde yani feodalitede toplanmasını engellemeye yöneliktir.",
    },
  ],
};

const dirlikSystemActivity: MatchingActivity = {
  id: "activity-dirlik-system",
  chapterId: "dirlik-system",
  mode: "matching",
  title: "Dirlik Sistemi Oyunu",
  description: "Has, Zeamet ve Tımar bilgilerini doğru karşılıklarla eşleştir.",
  pairs: [
    {
      id: "dirlik-has-income",
      left: "Has (gelir)",
      right: "Geliri 100.000 akçeden fazla olan topraklar",
      explanation: "Has geliri 100.000 akçeden fazla olan topraklardır.",
    },
    {
      id: "dirlik-has-people",
      left: "Has (ayrılanlar)",
      right: "Padişah ve divan üyelerine ayrılmıştır",
      explanation: "Has padişah ve divan üyelerine ayrılmıştır.",
    },
    {
      id: "dirlik-zeamet-income",
      left: "Zeamet (gelir)",
      right: "Geliri 20.000 ile 100.000 akçe arasındadır",
      explanation: "Zeamet geliri 20.000 akçe ile 100.000 akçe arasındaki topraklardır.",
    },
    {
      id: "dirlik-zeamet-people",
      left: "Zeamet (ayrılanlar)",
      right: "Müderris, tabip ve müdirlere ayrılmıştır",
      explanation: "Zeamet müderris, tabip ve müdirlere ayrılmıştır.",
    },
    {
      id: "dirlik-timar",
      left: "Tımar",
      right: "Geliri en alt düzeydeki memurlar ve askerlere ayrılmıştır",
      explanation: "Tımar geliri en alt düzeydeki memurlar ve askerlere ayrılmıştır.",
    },
    {
      id: "dirlik-three",
      left: "Dirliğin statü bakımından ayrıldığı türler",
      right: "Has, Zeamet ve Tımar",
      explanation: "Dirlik statü bakımından Has, Zeamet ve Tımar olarak üçe ayrılmıştır.",
    },
  ],
};

const militaryLandTrapsActivity: TrueFalseActivity = {
  id: "activity-military-land-traps",
  chapterId: "military-land-traps",
  mode: "truefalse",
  title: "Doğru / Yanlış: Askeri ve Toprak KPSS Tuzakları",
  description: "Ordu ve toprak yönetimiyle ilgili tuzak bilgileri çöz.",
  questions: [
    {
      id: "military-trap-cebeci",
      statement: "Cebeciler silah bakımıyla ilişkilidir.",
      answer: true,
      explanation: "Notta Cebeciler için silah bakımı bilgisi verilmiştir.",
    },
    {
      id: "military-trap-bostanci",
      statement: "Bostancı aseslik bilgisiyle verilmiştir.",
      answer: true,
      explanation: "Notta Bostancı için aseslik yazılıdır.",
    },
    {
      id: "military-trap-garip",
      statement: "Sağ ve sol garipler savaşta sancakları korur.",
      answer: false,
      explanation: "Sağ ve sol ulufeciler sancakları korur; sağ ve sol garipler ordunun ağırlıkları ve hazineyi muhafaza eder.",
    },
    {
      id: "military-trap-ulufeci",
      statement: "Sağ ve sol ulufeciler savaşta sancakları korur.",
      answer: true,
      explanation: "Notta sağ ve sol ulufecilerin savaşta sancakları koruduğu belirtilir.",
    },
    {
      id: "military-trap-deniz-karesi",
      statement: "Osmanlı denizcilik faaliyetleri Karesioğullarının alınmasıyla başlamıştır.",
      answer: true,
      explanation: "Denizcilik faaliyetleri Karesioğullarının alınmasıyla başlamıştır.",
    },
    {
      id: "military-trap-kaptanderya",
      statement: "Donanma komutanına kaptanderya denir.",
      answer: true,
      explanation: "Notta donanma komutanına kaptanderya dendiği yazılıdır.",
    },
    {
      id: "military-trap-levent",
      statement: "Donanma askerine levent denir.",
      answer: true,
      explanation: "Donanma askerine levent denilmiştir.",
    },
    {
      id: "land-trap-osri",
      statement: "Öşri topraklar Müslümanlara ait mülk topraklardır.",
      answer: true,
      explanation: "Öşri, Müslümanlara ait mülk topraklardır.",
    },
    {
      id: "land-trap-haraci",
      statement: "Haraci topraklar gayrimüslimlere ait mülk topraklardır.",
      answer: true,
      explanation: "Haraci, gayrimüslimlere ait mülk topraklardır.",
    },
    {
      id: "land-trap-mulk-rights",
      statement: "Mülk araziler alınabilir, satılabilir, kiraya verilebilir ve miras bırakılabilir.",
      answer: true,
      explanation: "Notta mülk arazilerin alınabileceği, satılabileceği, kiraya verilebileceği veya miras bırakılabileceği belirtilir.",
    },
    {
      id: "land-trap-mukataa-pasmaklik",
      statement: "Mukataa gelirleri padişahın annesi ve kızlarına ayrılmıştır.",
      answer: false,
      explanation: "Mukataa gelirleri doğrudan hazineye ayrılır; padişahın annesi ve kızlarına ayrılan Paşmaklık'tır.",
    },
    {
      id: "land-trap-pasmaklik",
      statement: "Paşmaklık gelirleri padişahın annesi ve kızlarına ayrılmıştır.",
      answer: true,
      explanation: "Paşmaklık geliri padişahın annesi ve kızlarına ayrılmıştır.",
    },
    {
      id: "land-trap-metruk",
      statement: "Metruk topraklar halkın ortak kullandığı topraklardır.",
      answer: true,
      explanation: "Metruk, halkın ortaklaşa kullandığı otlak ve yaylak gibi topraklardır.",
    },
    {
      id: "land-trap-vakif",
      statement: "Vakıf araziler kamu yararı için ayrılmıştır.",
      answer: true,
      explanation: "Vakıf araziler kamu yararı için ayrılan topraklardır.",
    },
    {
      id: "land-trap-dirlik",
      statement: "Dirlik gelirleri devlet memurlarına ve komutanlara ayrılmıştır.",
      answer: true,
      explanation: "Dirlik geliri devlet memurlarına ve komutanlara ayrılan topraklardır.",
    },
    {
      id: "land-trap-cifthane-feudal",
      statement: "Çifthane sistemi feodaliteyi engellemeye yöneliktir.",
      answer: true,
      explanation: "Çifthane, tarımın belirli ailelerde toplanmasını yani feodaliteyi engellemeye yöneliktir.",
    },
    {
      id: "land-trap-has",
      statement: "Has geliri 100.000 akçeden fazla olan topraklardır.",
      answer: true,
      explanation: "Has geliri 100.000 akçeden fazla olan topraklardır.",
    },
    {
      id: "land-trap-zeamet-range",
      statement: "Zeamet geliri 20.000 akçe ile 100.000 akçe arasındaki topraklardır.",
      answer: true,
      explanation: "Zeamet geliri 20.000 akçe ile 100.000 akçe arasındaki topraklardır.",
    },
    {
      id: "land-trap-timar-high",
      statement: "Tımar padişah ve divan üyelerine ayrılmıştır.",
      answer: false,
      explanation: "Padişah ve divan üyelerine ayrılan Has'tır; Tımar en alt düzeydeki memurlar ve askerlere ayrılmıştır.",
    },
  ],
};

export const militaryLandActivities: Record<MilitaryLandChapterId, Activity> = {
  "ottoman-army": armyClassificationActivity,
  "kapikulu-infantry": kapikuluInfantryActivity,
  "kapikulu-cavalry": kapikuluCavalryActivity,
  "provincial-soldiers": provincialSoldiersActivity,
  "naval-forces": navalForcesActivity,
  "army-features": armyFeaturesActivity,
  "land-types": landTypesActivity,
  "miri-land": miriLandActivity,
  "dirlik-system": dirlikSystemActivity,
  "military-land-traps": militaryLandTrapsActivity,
};

export const militaryLandBadges = [
  "Yeniçeri Adayı",
  "Kapıkulu Uzmanı",
  "Eyalet Askerleri Bilgesi",
  "Donanma Reisi",
  "Toprak Yönetimi Uzmanı",
  "Dirlik Sistemi Ustası",
  "Çifthane Bilgesi",
  "Askeri ve Toprak KPSS Avcısı",
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
