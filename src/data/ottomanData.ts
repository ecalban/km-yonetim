import type {
  Activity,
  ChapterDefinition,
  ClassificationActivity,
  DivanActivity,
  MatchingActivity,
  PlayableChapterId,
  ReviewQuestion,
  TimelineActivity,
  TimelineEvent,
  TrueFalseActivity,
} from "../types";

export const chapterDefinitions: ChapterDefinition[] = [
  {
    id: "foundations",
    title: "Devletin Temelleri",
    subtitle: "Adlar, unsurlar ve hükümdar görevleri",
    mode: "matching",
    badge: "KPSS Tuzak Avcısı",
    tone: "border-amber-500/40 bg-amber-500/10 text-amber-100",
  },
  {
    id: "succession",
    title: "Hükümdar ve Veraset",
    subtitle: "Veraset değişikliklerini sırala",
    mode: "timeline",
    badge: "Veraset Bilgesi",
    tone: "border-rose-500/40 bg-rose-500/10 text-rose-100",
  },
  {
    id: "prince",
    title: "Şehzade Eğitimi",
    subtitle: "Sancak, lala ve süreklilik anlayışları",
    mode: "matching",
    badge: "Veraset Bilgesi",
    tone: "border-teal-500/40 bg-teal-500/10 text-teal-100",
  },
  {
    id: "capitals",
    title: "Başkentler ve İstanbul",
    subtitle: "Kuruluş dönemi merkezleri",
    mode: "timeline",
    badge: "Veraset Bilgesi",
    tone: "border-sky-500/40 bg-sky-500/10 text-sky-100",
  },
  {
    id: "palaces",
    title: "Saraylar ve Topkapı",
    subtitle: "Birun, Enderun ve Harem",
    mode: "palace",
    badge: "Saray Rehberi",
    tone: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-100",
  },
  {
    id: "divan",
    title: "Divan-ı Hümayun",
    subtitle: "Sorunu doğru görevliye götür",
    mode: "divan",
    badge: "Divan Katibi",
    tone: "border-orange-500/40 bg-orange-500/10 text-orange-100",
  },
  {
    id: "provincial",
    title: "Taşra Teşkilatı",
    subtitle: "Birim, adalet, güvenlik ve yönetici",
    mode: "matching",
    badge: "Taşra Uzmanı",
    tone: "border-lime-500/40 bg-lime-500/10 text-lime-100",
  },
  {
    id: "province-system",
    title: "Eyalet Sistemi",
    subtitle: "Salyaneli, salyanesiz ve imtiyazlı eyaletler",
    mode: "classification",
    badge: "Taşra Uzmanı",
    tone: "border-cyan-500/40 bg-cyan-500/10 text-cyan-100",
  },
  {
    id: "traps",
    title: "KPSS Tuzakları",
    subtitle: "Kritik doğru-yanlış bilgileri",
    mode: "truefalse",
    badge: "KPSS Tuzak Avcısı",
    tone: "border-red-500/40 bg-red-500/10 text-red-100",
  },
  {
    id: "mistakes",
    title: "Yanlışlarım",
    subtitle: "Yanlış yapılan soruları tekrar et",
    mode: "review",
    tone: "border-stone-400/40 bg-stone-400/10 text-stone-100",
  },
];

const foundationsActivity: MatchingActivity = {
  id: "activity-foundations",
  chapterId: "foundations",
  mode: "matching",
  title: "Eşleştirme Oyunu",
  description: "Kavramları nottaki karşılıklarıyla eşleştir.",
  pairs: [
    {
      id: "foundations-gaziler",
      left: "Gaziler",
      right: "Osmanlı Devleti'nin diğer adlarından biri",
      explanation: "Notta Gaziler, Osmanlı Devleti'nin diğer adları arasında yer alır.",
    },
    {
      id: "foundations-devleti-aliyye",
      left: "Devlet-i Aliyye",
      right: "Osmanlı için kullanılan adlardan biri",
      explanation: "Devlet-i Aliyye, Osmanlı Devleti'nin diğer adları arasında verilmiştir.",
    },
    {
      id: "foundations-halk",
      left: "Halk",
      right: "Devleti oluşturan etmenlerden biri",
      explanation: "Devleti oluşturan etmenler: halk, hakimiyet, ülke ve teşkilattır.",
    },
    {
      id: "foundations-hakimiyet",
      left: "Hakimiyet",
      right: "Devleti oluşturan egemenlik unsuru",
      explanation: "Hakimiyet, devleti oluşturan temel etmenlerden biridir.",
    },
    {
      id: "foundations-orta-asya",
      left: "Orta Asya Türk gelenekleri",
      right: "Klasik dönem kültür medeniyetini etkileyen kaynak",
      explanation: "Klasik dönem kültür medeniyetinde Orta Asya Türk gelenekleri etkili olmuştur.",
    },
    {
      id: "foundations-islamiyet",
      left: "İslamiyet bilgileri",
      right: "Kültür medeniyetinin oluşumunda etkili olan unsur",
      explanation: "Notta İslamiyet bilgileri, klasik dönem kültür medeniyetini etkileyen unsurlar arasında geçer.",
    },
    {
      id: "foundations-ferman",
      left: "Ferman",
      right: "Padişahın herhangi bir konuda yazılı emri",
      explanation: "Hükümdarın yazılı emir vermesi ferman ile ifade edilmiştir.",
    },
    {
      id: "foundations-hatti-humayun",
      left: "Hatt-ı Hümayun",
      right: "Padişahın herhangi bir konuda yazılı beyanı",
      explanation: "Notta yazılı beyanın karşılığı Hatt-ı Hümayun olarak verilmiştir.",
    },
    {
      id: "foundations-yasakname",
      left: "Yasakname",
      right: "Padişahın herhangi bir şeyi yasaklaması",
      explanation: "Yasakname, hükümdarın yasak koymasıyla ilgilidir.",
    },
    {
      id: "foundations-musadere",
      left: "Müsadere",
      right: "Herhangi bir memurun mallarına el koyma",
      explanation: "Müsadere, notta memurun mallarına el koyma yetkisi olarak açıklanır.",
    },
    {
      id: "foundations-kulluk",
      left: "Kulluk hakkı",
      right: "Herhangi bir devşirmeyi öldürebilme yetkisi",
      explanation: "Kulluk hakkı, notta devşirmeyi öldürebilme yetkisiyle ilişkilendirilmiştir.",
    },
    {
      id: "foundations-beratname",
      left: "Beratname",
      right: "Memuru görevden atma veya görevden alma",
      explanation: "Beratname, memuriyetle ilgili görevden alma/atma bilgisidir.",
    },
    {
      id: "foundations-adaletname",
      left: "Adaletname",
      right: "Bir bölgedeki haksızlığı giderme",
      explanation: "Adaletname, bölgedeki haksızlığı gidermeye yöneliktir.",
    },
    {
      id: "foundations-amanname",
      left: "Amanname",
      right: "Bir kişiyi himaye altına alma",
      explanation: "Amanname, bir kişiyi himaye altına alma bilgisidir.",
    },
  ],
};

const successionActivity: TimelineActivity = {
  id: "activity-succession",
  chapterId: "succession",
  mode: "timeline",
  title: "Zaman Sıralama Oyunu",
  description: "Veraset anlayışındaki değişimleri doğru sıraya koy.",
  questions: [
    {
      id: "timeline-succession",
      title: "Veraset Değişiklikleri",
      prompt: "Osmanlı veraset anlayışındaki değişimleri kronolojik sıraya diz.",
      explanation:
        "Notta veraset değişimi Osman Bey, I. Murat, Fatih Sultan Mehmet ve I. Ahmet sırasıyla verilmiştir.",
      events: [
        {
          id: "succession-osman",
          label: "Osman Bey",
          detail: "Ülke hükümdar ve ailesinin ortak malıdır.",
          order: 1,
        },
        {
          id: "succession-murat",
          label: "I. Murat",
          detail: "Ülke hükümdar ve oğullarına aittir. İlk değişikliktir.",
          order: 2,
        },
        {
          id: "succession-fatih",
          label: "Fatih Sultan Mehmet",
          detail: "Ülke padişahındır.",
          order: 3,
        },
        {
          id: "succession-ahmet",
          label: "I. Ahmet",
          detail: "Ülke en büyük ve en akıllı erkek üye tarafından yönetilir. Son değişikliktir.",
          order: 4,
        },
      ],
    },
  ],
};

const princeActivity: MatchingActivity = {
  id: "activity-prince",
  chapterId: "prince",
  mode: "matching",
  title: "Şehzade Eşleştirmesi",
  description: "Şehzade eğitimiyle ilgili bilgileri eşleştir.",
  pairs: [
    {
      id: "prince-seven",
      left: "7 yaş",
      right: "Şehzadenin eğitime başladığı yaş",
      explanation: "Notta şehzadelerin 7 yaşında eğitime başladığı yazılıdır.",
    },
    {
      id: "prince-twelve",
      left: "12 yaş",
      right: "Şehzadenin sancağa gönderildiği yaş",
      explanation: "Şehzadeler 12 yaşında sancağa gönderilir.",
    },
    {
      id: "prince-lala",
      left: "Lala",
      right: "Şehzadelerin başına verilen görevli",
      explanation: "Şehzadelerin başlarına Lala denilen görevliler verilmiştir.",
    },
    {
      id: "prince-celebi",
      left: "Çelebi Sultan",
      right: "Sancağa gönderilen şehzadenin aldığı unvan",
      explanation: "Sancağa gönderilen şehzadeler Çelebi Sultan unvanı almıştır.",
    },
    {
      id: "prince-devleti-ebed",
      left: "Devlet-i Ebed Müddet",
      right: "Devlet sürekliliği için uygulanan anlayış",
      explanation: "Notta Devlet-i Ebed Müddet, sürekliliği sağlama anlayışları arasında geçer.",
    },
    {
      id: "prince-nizami-alem",
      left: "Nizam-ı Alem",
      right: "Osmanlı'da sürekliliği sağlama anlayışlarından biri",
      explanation: "Nizam-ı Alem, devlet sürekliliğiyle ilgili anlayışlardan biridir.",
    },
    {
      id: "prince-kanuni-kadim",
      left: "Kanun-ı Kadim",
      right: "Süreklilik için uygulanan geleneksel düzen anlayışı",
      explanation: "Kanun-ı Kadim, notta süreklilik için uygulanan anlayışlar arasında yer alır.",
    },
    {
      id: "prince-manisa",
      left: "Manisa",
      right: "Manisa önemli bir şehzade sancağıdır",
      explanation: "Manisa, önemli şehzade sancakları arasında verilmiştir.",
    },
    {
      id: "prince-amasya",
      left: "Amasya",
      right: "Amasya önemli bir şehzade sancağıdır",
      explanation: "Amasya, nottaki önemli şehzade sancakları arasında geçer.",
    },
    {
      id: "prince-kefe",
      left: "Kefe",
      right: "Kefe, Kırım'daki önemli şehzade sancağıdır",
      explanation: "Kefe, notta Kırım vurgusuyla önemli şehzade sancakları arasında yer alır.",
    },
    {
      id: "prince-konya",
      left: "Konya",
      right: "Konya önemli bir şehzade sancağıdır",
      explanation: "Konya, nottaki önemli şehzade sancakları listesinde bulunur.",
    },
    {
      id: "prince-trabzon",
      left: "Trabzon",
      right: "Trabzon önemli bir şehzade sancağıdır",
      explanation: "Trabzon, notta hem şehzade sancağı hem de salyanesiz eyalet örneği olarak geçer.",
    },
  ],
};

const capitalsActivity: TimelineActivity = {
  id: "activity-capitals",
  chapterId: "capitals",
  mode: "timeline",
  title: "Başkent Kronolojisi",
  description: "Kuruluş dönemi başkentlerini doğru tarihle sırala.",
  questions: [
    {
      id: "timeline-capitals",
      title: "Kuruluş Dönemi Başkentleri",
      prompt: "Başkentleri nottaki kronolojik sıraya koy.",
      explanation:
        "Notta başkentler Karacahisar 1299, Bilecik 1302, İznik 1331, Bursa 1335, Edirne 1363 ve İstanbul 1453 şeklinde sıralanmıştır.",
      events: [
        {
          id: "capital-karacahisar",
          label: "Karacahisar",
          year: 1299,
          detail: "Kuruluş dönemi başkentlerinden ilkidir.",
          order: 1,
        },
        {
          id: "capital-bilecik",
          label: "Bilecik",
          year: 1302,
          detail: "Kuruluş dönemi başkentleri arasında ikinci sıradadır.",
          order: 2,
        },
        {
          id: "capital-iznik",
          label: "İznik",
          year: 1331,
          detail: "Nottaki sırada Bilecik'ten sonra gelir.",
          order: 3,
        },
        {
          id: "capital-bursa",
          label: "Bursa",
          year: 1335,
          detail: "Nottaki sırada İznik'ten sonra gelir.",
          order: 4,
        },
        {
          id: "capital-edirne",
          label: "Edirne",
          year: 1363,
          detail: "İstanbul'dan önceki merkezdir.",
          order: 5,
        },
        {
          id: "capital-istanbul",
          label: "İstanbul",
          year: 1453,
          detail: "Nottaki kuruluş dönemi başkentleri içinde son sıradadır.",
          order: 6,
        },
      ],
    },
  ],
};

const palaceActivity: ClassificationActivity = {
  id: "activity-palaces",
  chapterId: "palaces",
  mode: "palace",
  title: "Topkapı Sarayı Oyunu",
  description: "Bilgileri doğru saray bölümüne gönder.",
  categories: [
    {
      id: "birun",
      title: "Birun",
      description: "Topkapı Sarayı'nın dış kısmı.",
    },
    {
      id: "enderun",
      title: "Enderun",
      description: "Topkapı Sarayı'nın iç kısmı.",
    },
    {
      id: "harem",
      title: "Harem",
      description: "Padişah ve ailesinin özel yaşam alanı.",
    },
  ],
  items: [
    {
      id: "palace-birun-dis",
      label: "\"Dış\" anlamına gelir.",
      categoryId: "birun",
      explanation: "Birun, Topkapı Sarayı'nın dış kısmıdır.",
    },
    {
      id: "palace-birun-elci",
      label: "Dışarıdan devlet elçileri kabul edilmiştir.",
      categoryId: "birun",
      explanation: "Elçilerin kabulü Birun bölümünde yapılmıştır.",
    },
    {
      id: "palace-birun-divan",
      label: "Divan toplantılarının yapıldığı bölüm.",
      categoryId: "birun",
      explanation: "Divan toplantıları Topkapı Sarayı'nda Birun bölümünde yapılmıştır.",
    },
    {
      id: "palace-enderun-edirne",
      label: "İlk kez II. Murat döneminde Edirne Sarayı'nda kurulmuştur.",
      categoryId: "enderun",
      explanation: "Enderun ilk kez II. Murat döneminde Edirne Sarayı'nda kurulmuştur.",
    },
    {
      id: "palace-enderun-ic",
      label: "Kelime anlamı \"iç\"tir.",
      categoryId: "enderun",
      explanation: "Enderun kelime olarak iç anlamına gelir.",
    },
    {
      id: "palace-enderun-devsirme",
      label: "Devşirilen devlet yöneticileri yetiştirilmiştir.",
      categoryId: "enderun",
      explanation: "Enderun'da devşirilen devlet yöneticileri yetiştirilmiştir.",
    },
    {
      id: "palace-enderun-sadrazam",
      label: "Sadrazam ve vezir gibi üst düzey yöneticiler yetişmiştir.",
      categoryId: "enderun",
      explanation: "Enderun, üst düzey yöneticilerin yetiştiği bölümdür.",
    },
    {
      id: "palace-enderun-azaldi",
      label: "II. Mahmut döneminde önemi azalmıştır.",
      categoryId: "enderun",
      explanation: "Notta Enderun'un II. Mahmut döneminde öneminin azaldığı belirtilir.",
    },
    {
      id: "palace-harem-yasak",
      label: "Kelime anlamı \"yasak\"tır.",
      categoryId: "harem",
      explanation: "Harem kelime olarak yasak anlamına gelir.",
    },
    {
      id: "palace-harem-ozel",
      label: "Padişah ve ailesinin özel yaşam alanıdır.",
      categoryId: "harem",
      explanation: "Harem, padişah ve ailesinin özel yaşam alanıdır.",
    },
    {
      id: "palace-harem-okul",
      label: "Okuldur.",
      categoryId: "harem",
      explanation: "Notta Harem için okul bilgisi verilmiştir.",
    },
    {
      id: "palace-harem-statu",
      label: "Erkek çocuk doğuran kadın yüksek statü kazanır.",
      categoryId: "harem",
      explanation: "Bu bilgi Harem başlığı altında verilmiştir.",
    },
  ],
};

const divanActivity: DivanActivity = {
  id: "activity-divan",
  chapterId: "divan",
  mode: "divan",
  title: "Divan Simülasyonu",
  description: "Devlet sorununu doğru divan görevlisine yönlendir.",
  scenarios: [
    {
      id: "divan-budget",
      prompt: "Bütçe ve mali kayıtlar incelenecek.",
      answer: "Defterdar",
      options: ["Defterdar", "Nişancı", "Kazasker", "Reisülküttab"],
      explanation: "Defterdar maliye bakanıdır; hesap tutma ve bütçe yapma görevi vardır.",
    },
    {
      id: "divan-timar",
      prompt: "Tımar kayıtları düzenlenecek.",
      answer: "Nişancı",
      options: ["Nişancı", "Defterdar", "Kaptanderya", "Sadrazam"],
      explanation: "Nişancı, dirlik yani tımar topraklarının kayıtlarını tutar.",
    },
    {
      id: "divan-justice-education",
      prompt: "Eğitim ve adalet atamaları yapılacak.",
      answer: "Kazasker",
      options: ["Kazasker", "Şeyhülislam", "Nişancı", "Kubbealtı Veziri"],
      explanation: "Kazasker eğitim ve adalet işlerine bakar; müderris ataması yapar.",
    },
    {
      id: "divan-navy",
      prompt: "Donanma ile ilgili karar alınacak.",
      answer: "Kaptanderya",
      options: ["Kaptanderya", "Yeniçeri Ağası", "Defterdar", "Reisülküttab"],
      explanation: "Kaptanderya donanmanın başıdır.",
    },
    {
      id: "divan-fatwa",
      prompt: "Alınacak karar için fetva gerekiyor.",
      answer: "Şeyhülislam",
      options: ["Şeyhülislam", "Kazasker", "Sadrazam", "Taht Kadısı"],
      explanation: "Şeyhülislam'ın verdiği kararlara fetva denir.",
    },
    {
      id: "divan-seal",
      prompt: "Padişah mührü kullanılacak.",
      answer: "Sadrazam",
      options: ["Sadrazam", "Nişancı", "Defterdar", "Kaptanderya"],
      explanation: "Sadrazam padişah mührünü taşır.",
    },
    {
      id: "divan-foreign",
      prompt: "Dış ilişkiler ve yazışmalar görüşülecek.",
      answer: "Reisülküttab",
      options: ["Reisülküttab", "Nişancı", "Kazasker", "Mimarbaşı"],
      explanation: "Reisülküttab dış işlerinden sorumludur.",
    },
    {
      id: "divan-agenda",
      prompt: "Divan toplantı gündemi belirlenecek.",
      answer: "Reisülküttab",
      options: ["Reisülküttab", "Sadrazam", "Defterdar", "Şehremini"],
      explanation: "Reisülküttab divan toplantı gündemini belirler.",
    },
    {
      id: "divan-serdar",
      prompt: "Padişah sefere çıkmadı; orduya Serdar-ı Ekrem komuta edecek.",
      answer: "Sadrazam",
      options: ["Sadrazam", "Kubbealtı Veziri", "Yeniçeri Ağası", "Kaptanderya"],
      explanation: "Padişah sefere çıkmazsa Sadrazam Serdar-ı Ekrem olarak orduya komuta eder.",
    },
    {
      id: "divan-bosphorus",
      prompt: "İstanbul'da Boğazlar ile ilgili görev alanı gündemde.",
      answer: "Kaptanderya",
      options: ["Kaptanderya", "Taht Kadısı", "Şehremini", "Mimarbaşı"],
      explanation: "İstanbul'daki görevliler tablosunda Boğazlar görevlisi Kaptanderya'dır.",
    },
    {
      id: "divan-istanbul-justice",
      prompt: "İstanbul'da adalet işleri için görevli aranıyor.",
      answer: "Taht Kadısı",
      options: ["Taht Kadısı", "Kazasker", "Şeyhülislam", "Subaşı"],
      explanation: "İstanbul'da adalet görev alanının görevlisi Taht Kadısı'dır.",
    },
    {
      id: "divan-security",
      prompt: "İstanbul'da güvenlik işleri konuşulacak.",
      answer: "Yeniçeri Ağası",
      options: ["Yeniçeri Ağası", "Subaşı", "Kaptanderya", "Sadrazam"],
      explanation: "İstanbul'da güvenlik görevi Yeniçeri Ağası ile eşleştirilmiştir.",
    },
    {
      id: "divan-public-works",
      prompt: "İstanbul'da imar işleri yürütülecek.",
      answer: "Mimarbaşı",
      options: ["Mimarbaşı", "Şehremini", "Taht Kadısı", "Nişancı"],
      explanation: "İstanbul'da imar işleri Mimarbaşı'nın görev alanıdır.",
    },
    {
      id: "divan-municipal",
      prompt: "İstanbul'da belediye işleri düzenlenecek.",
      answer: "Şehremini",
      options: ["Şehremini", "Sadrazam", "Mimarbaşı", "Defterdar"],
      explanation: "İstanbul'da belediye işleri Şehremini ile eşleştirilmiştir.",
    },
  ],
};

const provincialActivity: MatchingActivity = {
  id: "activity-provincial",
  chapterId: "provincial",
  mode: "matching",
  title: "Taşra Eşleştirmesi",
  description: "1840'a kadar uygulanan vilayet nizamnamesindeki görevleri eşleştir.",
  pairs: [
    {
      id: "provincial-eyalet-adalet",
      left: "Eyalet - adalet",
      right: "Kadı (eyalet adaleti)",
      explanation: "Eyalette adalet görevlisi kadıdır.",
    },
    {
      id: "provincial-eyalet-guvenlik",
      left: "Eyalet - güvenlik",
      right: "Subaşı (eyalet güvenliği)",
      explanation: "Eyalette güvenlik görevlisi subaşıdır.",
    },
    {
      id: "provincial-eyalet-yonetici",
      left: "Eyalet - yönetici",
      right: "Beylerbeyi",
      explanation: "Eyaletin yöneticisi beylerbeyidir.",
    },
    {
      id: "provincial-sancak-adalet",
      left: "Sancak - adalet",
      right: "Kadı (sancak adaleti)",
      explanation: "Sancakta adalet görevlisi kadıdır.",
    },
    {
      id: "provincial-sancak-guvenlik",
      left: "Sancak - güvenlik",
      right: "Subaşı (sancak güvenliği)",
      explanation: "Sancakta güvenlik görevlisi subaşıdır.",
    },
    {
      id: "provincial-sancak-yonetici",
      left: "Sancak - yönetici",
      right: "Sancakbeyi",
      explanation: "Sancağın yöneticisi sancakbeyidir.",
    },
    {
      id: "provincial-kaza-adalet",
      left: "Kaza - adalet",
      right: "Kadı (kaza adaleti)",
      explanation: "Kazanın adalet görevlisi kadıdır.",
    },
    {
      id: "provincial-kaza-guvenlik",
      left: "Kaza - güvenlik",
      right: "Subaşı (kaza güvenliği)",
      explanation: "Kazanın güvenlik görevlisi subaşıdır.",
    },
    {
      id: "provincial-kaza-yonetici",
      left: "Kaza - yönetici",
      right: "Kadı (kaza yöneticisi)",
      explanation: "Kaza biriminde yönetici kadıdır.",
    },
    {
      id: "provincial-koy-adalet",
      left: "Köy - adalet",
      right: "Naib",
      explanation: "Köyde adalet görevlisi naibdir.",
    },
    {
      id: "provincial-koy-guvenlik",
      left: "Köy - güvenlik",
      right: "Yiğitbaşı",
      explanation: "Köyde güvenlik görevlisi yiğitbaşıdır.",
    },
    {
      id: "provincial-koy-yonetici",
      left: "Köy - yönetici",
      right: "Kethüda",
      explanation: "Köyün yöneticisi kethüdadır.",
    },
  ],
};

const provinceSystemActivity: ClassificationActivity = {
  id: "activity-province-system",
  chapterId: "province-system",
  mode: "classification",
  title: "Taşra Haritası",
  description: "Kartı doğru eyalet türüne gönder.",
  categories: [
    {
      id: "salyaneli",
      title: "Salyaneli",
      description: "Maaş ve iltizam vardır; tımar uygulanmaz.",
    },
    {
      id: "salyanesiz",
      title: "Salyanesiz",
      description: "Memurlara maaş yerine toprak verilir; tımar uygulanır.",
    },
    {
      id: "yurtluk-ocaklik",
      title: "Yurtluk-Ocaklık",
      description: "Aşiretlerin yoğun olduğu, iç işlerinde serbest bölgeler.",
    },
    {
      id: "imtiyazli",
      title: "İmtiyazlı",
      description: "Ayrıcalıklı bölgeler.",
    },
  ],
  items: [
    ...["Mısır", "Bağdat", "Tunus", "Cezayir", "Habeşistan", "Yemen", "Trablusgarp"].map(
      (label) => ({
        id: `province-salyaneli-${slug(label)}`,
        label,
        categoryId: "salyaneli",
        explanation: `${label}, notta salyaneli eyalet örnekleri arasında verilmiştir.`,
      }),
    ),
    ...[
      "Halep",
      "Sivas",
      "Musul",
      "Şam",
      "Kıbrıs",
      "Erzurum",
      "Urfa",
      "Kars",
      "Diyarbakır",
      "Karadağ",
      "Trabzon",
      "Temeşvar",
      "Anadolu",
      "Rumeli",
      "Karaman",
      "Kandiye",
      "Budin",
      "Bosna",
      "Silistre",
      "Mora",
      "Girit",
      "Van",
    ].map((label) => ({
      id: `province-salyanesiz-${slug(label)}`,
      label,
      categoryId: "salyanesiz",
      explanation: `${label}, notta salyanesiz eyalet örnekleri arasında verilmiştir.`,
    })),
    {
      id: "province-yurtluk-tribal",
      label: "Aşiretlerin yoğun olduğu yerler",
      categoryId: "yurtluk-ocaklik",
      explanation: "Yurtluk-Ocaklık bölgeler aşiretlerin yoğun olduğu yerlerdir.",
    },
    {
      id: "province-yurtluk-leaders",
      label: "Aşiret liderlerinin yönetimsel hakları vardır.",
      categoryId: "yurtluk-ocaklik",
      explanation: "Yurtluk-Ocaklık bölgelerde aşiret liderlerinin yönetimsel hakları vardır.",
    },
    {
      id: "province-yurtluk-free",
      label: "Kendi içlerinde serbesttirler.",
      categoryId: "yurtluk-ocaklik",
      explanation: "Yurtluk-Ocaklık bölgeler kendi içlerinde serbesttir.",
    },
    ...["Hicaz", "Kırım", "Eflak", "Boğdan", "Erdel"].map((label) => ({
      id: `province-imtiyazli-${slug(label)}`,
      label,
      categoryId: "imtiyazli",
      explanation: `${label}, notta imtiyazlı bölgeler arasında verilmiştir.`,
    })),
  ],
};

const trapsActivity: TrueFalseActivity = {
  id: "activity-traps",
  chapterId: "traps",
  mode: "truefalse",
  title: "Doğru / Yanlış: KPSS Tuzakları",
  description: "Nottaki kritik tuzak bilgileri hızlıca kontrol et.",
  questions: [
    {
      id: "trap-divan-orhan",
      statement: "Divan-ı Hümayun'u Orhan Bey kurmuştur.",
      answer: true,
      explanation: "Notta Divan-ı Hümayun'u Orhan Bey'in kurduğu belirtilir.",
    },
    {
      id: "trap-divan-mahmut",
      statement: "Divan-ı Hümayun'u II. Mahmut kaldırmıştır.",
      answer: true,
      explanation: "Notta Divan-ı Hümayun'un II. Mahmut tarafından kaldırıldığı yazılıdır.",
    },
    {
      id: "trap-first-sultan",
      statement: "İlk Sultan unvanını kullanan Orhan Bey'dir.",
      answer: true,
      explanation: "Notta ilk Sultan unvanını kullananın Orhan Bey olduğu belirtilir.",
    },
    {
      id: "trap-sultanul-guzat",
      statement: "İlk Sultanü'l Guzat unvanını kullanan I. Murat'tır.",
      answer: true,
      explanation: "Notta ilk Sultanü'l Guzat unvanını kullananın I. Murat olduğu geçer.",
    },
    {
      id: "trap-hicaz-tax-soldier",
      statement: "Hicaz vergi ve asker verir.",
      answer: false,
      explanation: "Notta Hicaz'ın ne vergi ne asker verdiği belirtilir.",
    },
    {
      id: "trap-enderun-ii-murat",
      statement: "Enderun ilk kez II. Murat döneminde Edirne Sarayı'nda kurulmuştur.",
      answer: true,
      explanation: "Bu bilgi Topkapı Sarayı / Enderun başlığında verilmiştir.",
    },
    {
      id: "trap-fatih-sadrazam",
      statement: "Fatih'ten sonra Divan-ı Hümayun'a Sadrazam başkanlık etmiştir.",
      answer: true,
      explanation: "Notta Fatih'e kadar padişah, Fatih'ten sonra Sadrazam başkanlık etmiştir.",
    },
    {
      id: "trap-hukum-muhimme",
      statement: "Divan'da alınan kararlara Hüküm, yazıldığı deftere Mühimme denmiştir.",
      answer: true,
      explanation: "Notta kararların Hüküm, yazıldığı defterin Mühimme olduğu belirtilir.",
    },
    {
      id: "trap-first-kaptanderya",
      statement: "İlk kaptanderya Barbaros Hayrettin Paşa'dır.",
      answer: false,
      explanation: "Notta ilk kaptanderyanın Karamürsel Alp, divana üye olan ilk kaptanderyanın Barbaros Hayrettin Paşa olduğu belirtilir.",
    },
    {
      id: "trap-kaptanderya-century",
      statement: "Kaptanderya XVI. yüzyılda Kanuni döneminde divana katılmıştır.",
      answer: true,
      explanation: "Kaptanderya, notta XVI. yüzyılda Kanuni döneminde divana katılan üye olarak geçer.",
    },
    {
      id: "trap-reisul-century",
      statement: "Reisülküttab XVII. yüzyılda divana sonradan üye olmuştur.",
      answer: true,
      explanation: "Notta divana sonradan üye olanlar arasında XVII. yüzyıl Reisülküttab bilgisi vardır.",
    },
    {
      id: "trap-seyhul-century",
      statement: "Şeyhülislam XVIII. yüzyılda divana sonradan üye olmuştur.",
      answer: true,
      explanation: "Notta XVIII. yüzyılda Şeyhülislam'ın divana üye olduğu verilmiştir.",
    },
    {
      id: "trap-yeniceri-every-rank",
      statement: "Yeniçeri Ağası rütbesi ne olursa olsun divan toplantılarına katılır.",
      answer: false,
      explanation: "Notta Yeniçeri Ağası'nın rütbesi vezirse divan toplantılarına katıldığı yazılıdır.",
    },
    {
      id: "trap-salyaneli-timar",
      statement: "Salyaneli eyaletlerde tımar sistemi uygulanır.",
      answer: false,
      explanation: "Notta salyaneli eyaletlerde tımar sisteminin uygulanmadığı belirtilir.",
    },
    {
      id: "trap-salyanesiz-land",
      statement: "Salyanesiz eyaletlerde memurlara maaş yerine toprak verilmiştir.",
      answer: true,
      explanation: "Salyanesiz eyaletlerde maaş yerine toprak verilmiş ve tımar uygulanmıştır.",
    },
    {
      id: "trap-eflak-bogdan",
      statement: "Eflak ve Boğdan Osmanlı Devleti'nde ilk özerk eyaletler kabul edilmektedir.",
      answer: true,
      explanation: "Bu bilgi notta imtiyazlı eyaletler bölümünde not olarak verilmiştir.",
    },
    {
      id: "trap-garp-ocaklari",
      statement: "Garp Ocakları Cezayir, Trablusgarp ve Tunus'tur.",
      answer: true,
      explanation: "Notta Garp Ocakları Cezayir, Trablusgarp ve Tunus olarak verilmiştir.",
    },
    {
      id: "trap-bey-sarayi",
      statement: "Bey Sarayı Bursa'da Orhan Bey döneminde açılan ilk saraydır.",
      answer: true,
      explanation: "Notta Bey Sarayı'nın Bursa'da Orhan Bey döneminde açılan ilk saray olduğu yazılıdır.",
    },
    {
      id: "trap-topkapi-fatih",
      statement: "Topkapı Sarayı Fatih Sultan Mehmet döneminde açılmıştır.",
      answer: true,
      explanation: "Topkapı Sarayı notta Fatih Sultan Mehmet döneminde açıldı bilgisiyle verilmiştir.",
    },
    {
      id: "trap-yildiz-abdulhamit",
      statement: "Yıldız Sarayı II. Abdülhamit'in yönetim merkezi olarak kullandığı saraydır.",
      answer: true,
      explanation: "Notta Yıldız Sarayı bu şekilde açıklanmıştır.",
    },
    {
      id: "trap-enderun-more-important",
      statement: "Enderun II. Mahmut döneminde daha da önem kazanmıştır.",
      answer: false,
      explanation: "Notta Enderun'un II. Mahmut döneminde öneminin azaldığı belirtilir.",
    },
    {
      id: "trap-ayak-divani",
      statement: "Ayak Divanı elçi ve yabancı konuklar için toplanır.",
      answer: false,
      explanation: "Ayak Divanı olağanüstü durumlarda; Galebe Divanı elçi ve yabancı konuklar için toplanır.",
    },
    {
      id: "trap-galebe",
      statement: "Galebe Divanı elçi ve yabancı konuklar için toplanır.",
      answer: true,
      explanation: "Notta Galebe Divanı bu şekilde tanımlanmıştır.",
    },
    {
      id: "trap-sefer",
      statement: "Sefer Divanı sefer sırasında toplanır.",
      answer: true,
      explanation: "Sefer Divanı notta sefer sırasında toplanan divan olarak verilmiştir.",
    },
    {
      id: "trap-ikindi",
      statement: "İkindi Divanı veziriazam öncülüğünde devlet işlerinin görüşüldüğü divandır.",
      answer: true,
      explanation: "Notta İkindi Divanı bu şekilde açıklanır.",
    },
    {
      id: "trap-hatti",
      statement: "Hatt-ı Hümayun padişahın yazılı beyanıdır.",
      answer: true,
      explanation: "Hatt-ı Hümayun, padişahın yazılı beyanı olarak verilmiştir.",
    },
    {
      id: "trap-yasakname-adalet",
      statement: "Yasakname bir bölgedeki haksızlığı gidermek için çıkarılır.",
      answer: false,
      explanation: "Yasakname yasak koymayla; Adaletname haksızlığı gidermeyle ilgilidir.",
    },
  ],
};

export const activities: Record<PlayableChapterId, Activity> = {
  foundations: foundationsActivity,
  succession: successionActivity,
  prince: princeActivity,
  capitals: capitalsActivity,
  palaces: palaceActivity,
  divan: divanActivity,
  provincial: provincialActivity,
  "province-system": provinceSystemActivity,
  traps: trapsActivity,
};

export const badges = [
  "Divan Katibi",
  "Saray Rehberi",
  "Taşra Uzmanı",
  "Veraset Bilgesi",
  "KPSS Tuzak Avcısı",
] as const;

export function stableShuffle<T>(items: T[], seed: string): T[] {
  return items
    .map((item, index) => ({
      item,
      sortKey: hash(`${seed}-${index}-${JSON.stringify(item)}`),
    }))
    .sort((a, b) => a.sortKey - b.sortKey)
    .map(({ item }) => item);
}

export function getChapter(id: string): ChapterDefinition | undefined {
  return chapterDefinitions.find((chapter) => chapter.id === id);
}

export function isPlayableChapterId(id: string): id is PlayableChapterId {
  return id in activities;
}

function buildReviewQuestions(): ReviewQuestion[] {
  const reviewQuestions: ReviewQuestion[] = [];

  Object.values(activities).forEach((activity) => {
    if (activity.mode === "matching") {
      const optionPool = activity.pairs.map((pair) => pair.right);

      activity.pairs.forEach((pair) => {
        reviewQuestions.push({
          id: pair.id,
          prompt: `${pair.left} hangi açıklamayla eşleşir?`,
          options: pickOptions(pair.right, optionPool, pair.id),
          correctAnswer: pair.right,
          explanation: pair.explanation,
        });
      });
    }

    if (activity.mode === "timeline") {
      activity.questions.forEach((question) => {
        reviewQuestions.push({
          id: question.id,
          prompt: question.prompt,
          options: makeTimelineOptions(question.events, question.id),
          correctAnswer: timelineLabel(question.events),
          explanation: question.explanation,
        });
      });
    }

    if (activity.mode === "divan") {
      activity.scenarios.forEach((scenario) => {
        reviewQuestions.push({
          id: scenario.id,
          prompt: scenario.prompt,
          options: stableShuffle(scenario.options, scenario.id),
          correctAnswer: scenario.answer,
          explanation: scenario.explanation,
        });
      });
    }

    if (activity.mode === "classification" || activity.mode === "palace") {
      activity.items.forEach((item) => {
        const category = activity.categories.find((candidate) => candidate.id === item.categoryId);

        if (!category) {
          return;
        }

        reviewQuestions.push({
          id: item.id,
          prompt: `${item.label} hangi kategoriye aittir?`,
          options: stableShuffle(
            activity.categories.map((candidate) => candidate.title),
            item.id,
          ),
          correctAnswer: category.title,
          explanation: item.explanation,
        });
      });
    }

    if (activity.mode === "truefalse") {
      activity.questions.forEach((question) => {
        reviewQuestions.push({
          id: question.id,
          prompt: question.statement,
          options: ["Doğru", "Yanlış"],
          correctAnswer: question.answer ? "Doğru" : "Yanlış",
          explanation: question.explanation,
        });
      });
    }
  });

  return reviewQuestions;
}

export const reviewQuestionBank = buildReviewQuestions();
export const reviewQuestionMap = new Map(reviewQuestionBank.map((question) => [question.id, question]));

export function getReviewQuestionsByIds(ids: string[]): ReviewQuestion[] {
  return ids
    .map((id) => reviewQuestionMap.get(id))
    .filter((question): question is ReviewQuestion => Boolean(question));
}

function pickOptions(correct: string, pool: string[], seed: string): string[] {
  const uniqueOptions = Array.from(new Set(pool));
  const distractors = stableShuffle(
    uniqueOptions.filter((option) => option !== correct),
    `${seed}-distractors`,
  ).slice(0, 3);

  return stableShuffle([correct, ...distractors], `${seed}-options`);
}

function timelineLabel(events: TimelineEvent[]): string {
  return sequenceLabel([...events].sort((a, b) => a.order - b.order));
}

function makeTimelineOptions(events: TimelineEvent[], seed: string): string[] {
  const ordered = [...events].sort((a, b) => a.order - b.order);
  const reversed = [...ordered].reverse();
  const swapped = [...ordered];
  [swapped[1], swapped[2]] = [swapped[2], swapped[1]];
  const rotated = [...ordered.slice(1), ordered[0]];

  return stableShuffle(
    Array.from(
      new Set([
        sequenceLabel(ordered),
        sequenceLabel(reversed),
        sequenceLabel(swapped),
        sequenceLabel(rotated),
      ]),
    ),
    `${seed}-timeline-options`,
  );
}

function sequenceLabel(events: TimelineEvent[]): string {
  return events.map((event) => `${event.label}${event.year ? ` (${event.year})` : ""}`).join(" → ");
}

function hash(value: string): number {
  let result = 0;

  for (let index = 0; index < value.length; index += 1) {
    result = (result << 5) - result + value.charCodeAt(index);
    result |= 0;
  }

  return Math.abs(result);
}

function slug(value: string): string {
  return value
    .toLocaleLowerCase("tr-TR")
    .replace(/ı/g, "i")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}
