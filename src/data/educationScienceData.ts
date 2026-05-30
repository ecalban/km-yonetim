import type {
  Activity,
  ChapterDefinition,
  ClassificationActivity,
  MatchingActivity,
  PlayableChapterId,
  TrueFalseActivity,
} from "../types";

type EducationScienceChapterId = Extract<
  PlayableChapterId,
  | "education-system"
  | "formal-education"
  | "palace-education"
  | "military-education"
  | "madrasas"
  | "madrasas-decline"
  | "specialized-madrasas"
  | "academic-career"
  | "scientists"
  | "education-science-traps"
>;

export const educationScienceChapters: ChapterDefinition[] = [
  {
    id: "education-system",
    title: "Eğitim Sistemi",
    subtitle: "Medreseden Rasathaneye: eğitim türlerini ayır",
    mode: "classification",
    badge: "Sıbyan Talebesi",
    tone: "border-amber-500/40 bg-amber-500/10 text-amber-100",
  },
  {
    id: "formal-education",
    title: "Örgün Eğitim",
    subtitle: "Sıbyan Mektebi, Medrese ve temel kavramlar",
    mode: "matching",
    badge: "Medrese Âlimi",
    tone: "border-orange-500/40 bg-orange-500/10 text-orange-100",
  },
  {
    id: "palace-education",
    title: "Saray Eğitimi",
    subtitle: "Enderun, Harem ve Şehzadegan Mektebi",
    mode: "matching",
    badge: "Eğitim ve Bilim KPSS Uzmanı",
    tone: "border-fuchsia-500/40 bg-fuchsia-500/10 text-fuchsia-100",
  },
  {
    id: "military-education",
    title: "Askerî Eğitim",
    subtitle: "Acemioğlanlar, Donanma ve Yeniçeri Ocağı",
    mode: "matching",
    badge: "Sıbyan Talebesi",
    tone: "border-red-500/40 bg-red-500/10 text-red-100",
  },
  {
    id: "madrasas",
    title: "Medreseler",
    subtitle: "İznik'ten Süleymaniye'ye medrese bilgisi",
    mode: "truefalse",
    badge: "Sahn-ı Seman Uzmanı",
    tone: "border-emerald-500/40 bg-emerald-500/10 text-emerald-100",
  },
  {
    id: "madrasas-decline",
    title: "Medreselerin Bozulması",
    subtitle: "Bozulma nedenlerini ayırt et",
    mode: "truefalse",
    badge: "Medrese Âlimi",
    tone: "border-rose-500/40 bg-rose-500/10 text-rose-100",
  },
  {
    id: "specialized-madrasas",
    title: "İhtisas Medreseleri",
    subtitle: "Darüttıp, Darülhadis, Darülkurra ve Darülhendese",
    mode: "matching",
    badge: "İhtisas Medresesi Bilgesi",
    tone: "border-teal-500/40 bg-teal-500/10 text-teal-100",
  },
  {
    id: "academic-career",
    title: "Akademik Kariyer Basamakları",
    subtitle: "Softa'dan Müderris'e unvanlar",
    mode: "matching",
    badge: "Akademik Basamak Ustası",
    tone: "border-cyan-500/40 bg-cyan-500/10 text-cyan-100",
  },
  {
    id: "scientists",
    title: "Bilim İnsanları",
    subtitle: "Dönem, eser ve özellik kartları",
    mode: "matching",
    badge: "Bilim İnsanları Hafızı",
    tone: "border-violet-500/40 bg-violet-500/10 text-violet-100",
  },
  {
    id: "education-science-traps",
    title: "Eğitim ve Bilim KPSS Tuzakları",
    subtitle: "Eğitim kurumları, medreseler ve bilim insanları",
    mode: "truefalse",
    badge: "Eser Avcısı",
    tone: "border-blue-500/40 bg-blue-500/10 text-blue-100",
  },
];

const educationSystemActivity: ClassificationActivity = {
  id: "activity-education-system",
  chapterId: "education-system",
  mode: "classification",
  title: "Eğitim Türü Sınıflandırma Oyunu",
  description: "Kurumları nottaki eğitim türlerine yerleştir.",
  categories: [
    {
      id: "orgun",
      title: "Örgün",
      description: "Sıbyan Mektebi ve Medrese.",
    },
    {
      id: "saray",
      title: "Saray",
      description: "Enderun, Harem ve Şehzadegan Mektebi.",
    },
    {
      id: "yaygin",
      title: "Yaygın",
      description: "Halk eğitimi şeklindeki eğitim.",
    },
    {
      id: "askeri",
      title: "Askerî",
      description: "Acemioğlanlar Ocağı, Donanma ve Yeniçeri Ocağı.",
    },
    {
      id: "meslek",
      title: "Meslek",
      description: "Meslek sahibi yetiştirmeye yönelik eğitim.",
    },
  ],
  items: [
    {
      id: "education-system-sibyan",
      label: "Sıbyan Mektebi",
      categoryId: "orgun",
      explanation: "Sıbyan Mektebi notta örgün eğitim altında verilmiştir.",
    },
    {
      id: "education-system-medrese",
      label: "Medrese",
      categoryId: "orgun",
      explanation: "Medrese notta örgün eğitim kurumları arasında yer alır.",
    },
    {
      id: "education-system-enderun",
      label: "Enderun",
      categoryId: "saray",
      explanation: "Enderun saray eğitimi başlığı altında verilmiştir.",
    },
    {
      id: "education-system-harem",
      label: "Harem",
      categoryId: "saray",
      explanation: "Harem saray eğitimi başlığı altında verilmiştir.",
    },
    {
      id: "education-system-sehzadegan",
      label: "Şehzadegan Mektebi",
      categoryId: "saray",
      explanation: "Şehzadegan Mektebi saray eğitimi içinde verilmiştir.",
    },
    {
      id: "education-system-acemi",
      label: "Acemioğlanlar Ocağı",
      categoryId: "askeri",
      explanation: "Acemioğlanlar Ocağı askeri eğitim başlığı altında geçer.",
    },
    {
      id: "education-system-donanma",
      label: "Donanma",
      categoryId: "askeri",
      explanation: "Donanma askeri eğitim başlığı altında denizcilik eğitimiyle verilmiştir.",
    },
    {
      id: "education-system-yeniceri",
      label: "Yeniçeri Ocağı",
      categoryId: "askeri",
      explanation: "Yeniçeri Ocağı askeri eğitim verilen kurumdur.",
    },
    {
      id: "education-system-yaygin",
      label: "Halk eğitimi",
      categoryId: "yaygin",
      explanation: "Yaygın eğitim halk eğitimi şeklindeki eğitimdir.",
    },
    {
      id: "education-system-meslek",
      label: "Meslek sahibi yetiştirmeye yönelik eğitim",
      categoryId: "meslek",
      explanation: "Meslek eğitimi meslek sahibi yetiştirmeye yönelik eğitimdir.",
    },
  ],
};

const formalEducationActivity: MatchingActivity = {
  id: "activity-formal-education",
  chapterId: "formal-education",
  mode: "matching",
  title: "Eğitim Kurumu Eşleştirme Oyunu",
  description: "Örgün ve temel eğitim kavramlarını nottaki açıklamalarıyla eşleştir.",
  pairs: [
    {
      id: "formal-sibyan-first",
      left: "Sıbyan Mektebi (basamak)",
      right: "Eğitimin ilk basamağı",
      explanation: "Sıbyan Mektebi eğitimin ilk basamağıdır.",
    },
    {
      id: "formal-sibyan-age",
      left: "Sıbyan Mektebi (yaş)",
      right: "4 yaşındaki çocukların gittiği okul",
      explanation: "Notta 4 yaşındaki çocukların Sıbyan Mektebi'ne gittiği belirtilir.",
    },
    {
      id: "formal-amin",
      left: "Âmin Alayı",
      right: "Okulun ilk gününe yapılan tören",
      explanation: "Okulun ilk gününe yapılan törene Âmin Alayı adı verilmiştir.",
    },
    {
      id: "formal-medrese",
      left: "Medrese",
      right: "Dinî ve pozitif bilimlerin okutulduğu kurum",
      explanation: "Medrese dinî ve pozitif bilimlerin okutulduğu eğitim kurumudur.",
    },
    {
      id: "formal-yaygin",
      left: "Yaygın eğitim",
      right: "Halk eğitimi",
      explanation: "Yaygın eğitim halk eğitimi şeklindeki eğitimdir.",
    },
    {
      id: "formal-meslek",
      left: "Meslek eğitimi",
      right: "Meslek sahibi yetiştirmeye yönelik eğitim",
      explanation: "Meslek eğitimi meslek sahibi yetiştirmeye yönelik eğitimdir.",
    },
  ],
};

const palaceEducationActivity: MatchingActivity = {
  id: "activity-palace-education",
  chapterId: "palace-education",
  mode: "matching",
  title: "Saray Eğitimi Eşleştirme Oyunu",
  description: "Saray eğitim kurumlarını açıklamalarıyla eşleştir.",
  pairs: [
    {
      id: "palace-enderun-boys",
      left: "Enderun (öğrenci)",
      right: "Erkek çocukların eğitim gördüğü saray okulu",
      explanation: "Enderun'da erkek çocukları eğitim görmüştür.",
    },
    {
      id: "palace-enderun-state",
      left: "Enderun (amaç)",
      right: "Devlet memuru yetiştirmek amacıyla kurulmuştur",
      explanation: "Enderun devlet memuru yetiştirmek amacıyla kurulmuştur.",
    },
    {
      id: "palace-harem-girls",
      left: "Harem (öğrenci)",
      right: "Kız çocuklarının eğitim gördüğü yer",
      explanation: "Harem'de kız çocukları eğitim görmüştür.",
    },
    {
      id: "palace-harem-origin",
      left: "Harem (alınanlar)",
      right: "Devşirme kökenli ve zamanla Türk kızlarının da alındığı bölüm",
      explanation: "Harem'e devşirme kökenli ve zamanla Türk kızları da alınmıştır.",
    },
    {
      id: "palace-sehzadegan",
      left: "Şehzadegan Mektebi",
      right: "7 yaşına gelen şehzadelerin eğitim aldığı yer",
      explanation: "7 yaşına gelen şehzadeler Şehzadegan Mektebi'nde eğitim almıştır.",
    },
    {
      id: "palace-bed-besmele",
      left: "Bed-i Besmele",
      right: "Şehzadegan Mektebi'nde yapılan ilk ders",
      explanation: "Şehzadegan Mektebi'nde yapılan ilk derse Bed-i Besmele denilmiştir.",
    },
  ],
};

const militaryEducationActivity: MatchingActivity = {
  id: "activity-military-education",
  chapterId: "military-education",
  mode: "matching",
  title: "Askerî Eğitim Eşleştirme Oyunu",
  description: "Askerî eğitim kurumlarını görevleriyle eşleştir.",
  pairs: [
    {
      id: "military-education-acemi",
      left: "Acemioğlanlar Ocağı",
      right: "Devşirme çocukların eğitim aldığı ocak",
      explanation: "Acemioğlanlar Ocağı devşirme çocukların eğitim aldığı ocaktır.",
    },
    {
      id: "military-education-donanma",
      left: "Donanma",
      right: "Denizcilik eğitimi",
      explanation: "Donanmada denizcilik eğitimi verilmiştir.",
    },
    {
      id: "military-education-yeniceri",
      left: "Yeniçeri Ocağı",
      right: "Askerî eğitim",
      explanation: "Yeniçeri Ocağı'nda askerî eğitim verilmiştir.",
    },
  ],
};

const madrasasActivity: TrueFalseActivity = {
  id: "activity-madrasas",
  chapterId: "madrasas",
  mode: "truefalse",
  title: "Medrese Bilgi Oyunu",
  description: "Medreselerle ilgili temel bilgileri doğru-yanlış çöz.",
  questions: [
    {
      id: "madrasas-iznik",
      statement: "İlk medrese Orhan Bey döneminde açılan İznik Medresesi'dir.",
      answer: true,
      explanation: "Notta ilk medresenin Orhan Bey döneminde açılan İznik Medresesi olduğu belirtilir.",
    },
    {
      id: "madrasas-suleyman-pasa",
      statement: "Günümüze kadar gelen en eski medrese Süleyman Paşa Medresesi'dir.",
      answer: true,
      explanation: "Günümüze kadar gelen en eski medrese Süleyman Paşa Medresesi'dir.",
    },
    {
      id: "madrasas-first-muderris",
      statement: "İlk müderris Davud-u Kayseri'dir.",
      answer: true,
      explanation: "Medreseye atanan ilk müderris Davud-u Kayseri'dir.",
    },
    {
      id: "madrasas-sahn-fatih",
      statement: "Fatih döneminde Sahn-ı Seman Medreseleri açılmıştır.",
      answer: true,
      explanation: "Fatih döneminde Sahn-ı Seman Medreseleri açılmıştır.",
    },
    {
      id: "madrasas-suleymaniye-kanuni",
      statement: "Kanuni döneminde Süleymaniye Medreseleri açılmıştır.",
      answer: true,
      explanation: "Süleymaniye Medreseleri Kanuni döneminde açılmıştır.",
    },
    {
      id: "madrasas-akli-nakli",
      statement: "XVI. yüzyıla kadar aklî ve naklî bilimler birlikte okutulmuştur.",
      answer: true,
      explanation: "Notta XVI. yüzyıla kadar aklî ve naklî bilimlerin birlikte okutulduğu yazılıdır.",
    },
    {
      id: "madrasas-akli-reduced",
      statement: "XVI. yüzyıldan itibaren aklî bilimlerden bazıları kaldırılmış veya ders süreleri azaltılmıştır.",
      answer: true,
      explanation: "Bu bilgi medreselerin özellikleri başlığı altında verilmiştir.",
    },
    {
      id: "madrasas-degree",
      statement: "Medreselerin başında 20, 30, 40, 50, 60 gibi derece alan müderrisler görev yapmıştır.",
      answer: true,
      explanation: "Notta medreselerin başında bu dereceleri alan müderrislerin görev yaptığı belirtilir.",
    },
    {
      id: "madrasas-jobs",
      statement: "Medreseyi bitiren kadı, müid, müderris, hekim ve mühendis olabilir.",
      answer: true,
      explanation: "Medreseyi bitiren kişi notta kadı, müid, müderris, hekim ve mühendis olabilir şeklinde verilmiştir.",
    },
    {
      id: "madrasas-tasraya",
      statement: "Başarısız öğrenciye Taşraya cezası verilmiştir.",
      answer: true,
      explanation: "Medreselerde başarısız öğrenciye Taşraya cezası verilmiştir.",
    },
    {
      id: "madrasas-cerre",
      statement: "Öğrencinin doğduğu yere gidip halka ders anlatmasına Cerre Çıkmak denmiştir.",
      answer: true,
      explanation: "Cerre Çıkmak, öğrencinin doğduğu yere gidip halka ders anlatmasıdır.",
    },
    {
      id: "madrasas-sahn-kanuni",
      statement: "Sahn-ı Seman Medreseleri Kanuni döneminde açılmıştır.",
      answer: false,
      explanation: "Sahn-ı Seman Medreseleri Fatih döneminde; Süleymaniye Medreseleri Kanuni döneminde açılmıştır.",
    },
  ],
};

const madrasasDeclineActivity: TrueFalseActivity = {
  id: "activity-madrasas-decline",
  chapterId: "madrasas-decline",
  mode: "truefalse",
  title: "Medrese Bozulma Nedenleri Oyunu",
  description: "Karttaki bilginin medrese bozulma nedeni olup olmadığını seç.",
  questions: [
    {
      id: "decline-support",
      statement: "Yöneticilerin bilim alanındaki çalışmalara desteğinin azalması medreselerin bozulma nedenlerindendir.",
      answer: true,
      explanation: "Bu ifade notta medreselerin bozulma nedenleri arasında geçer.",
    },
    {
      id: "decline-curriculum",
      statement: "Medreselerin kendi iç müfredatını geliştirmeyi zorlaştırması bozulma nedenidir.",
      answer: true,
      explanation: "Medreselerin kendi iç müfredatını geliştirmeyi zorlaştırması notta bozulma nedeni olarak verilmiştir.",
    },
    {
      id: "decline-akli",
      statement: "Ulemanın aklî bilimleri gereksiz görmesi bozulma nedenidir.",
      answer: true,
      explanation: "Notta ulemanın aklî bilimleri gereksiz görmesi nedenler arasında yer alır.",
    },
    {
      id: "decline-rusvet",
      statement: "Rüşvet ve iltimasın artması medreselerin bozulma nedenlerindendir.",
      answer: true,
      explanation: "Rüşvet ve iltimasın artması notta açıkça verilmiştir.",
    },
    {
      id: "decline-besik",
      statement: "Beşik ulema geleneğinin getirilmesi bozulma nedenidir.",
      answer: true,
      explanation: "Beşik ulema geleneğinin getirilmesi medreselerin bozulma nedenleri arasındadır.",
    },
    {
      id: "decline-new-schools",
      statement: "XIX. yüzyılda yeni eğitim kurumlarının açılması medreselerin bozulma nedenleri arasında verilmiştir.",
      answer: true,
      explanation: "Bu bilgi nottaki nedenler arasında yer alır.",
    },
    {
      id: "decline-europe",
      statement: "Avrupa'daki gelişmelerin takip edilememesi bozulma nedenidir.",
      answer: true,
      explanation: "Avrupa'daki gelişmelerin takip edilememesi notta bozulma nedeni olarak geçer.",
    },
    {
      id: "decline-migration",
      statement: "Göçler sonucunda kentlere gelen nüfusun medreselerde barındırılması bozulma nedenidir.",
      answer: true,
      explanation: "Notta göçler sonucunda kentlere gelen nüfusun medreselerde barındırılması ve medreselerin hayır kurumları gibi görev yapmaya başlaması birlikte verilmiştir.",
    },
    {
      id: "decline-charity",
      statement: "Medreselerin hayır kurumları gibi görev yapmaya başlaması bozulma nedenidir.",
      answer: true,
      explanation: "Medreselerin hayır kurumları gibi görev yapmaya başlaması notta nedenler arasında geçer.",
    },
    {
      id: "decline-support-increase",
      statement: "Yöneticilerin bilim alanındaki çalışmalara desteğinin artması medreselerin bozulma nedenidir.",
      answer: false,
      explanation: "Notta destek artışı değil, desteğin azalması bozulma nedeni olarak verilmiştir.",
    },
    {
      id: "decline-europe-followed",
      statement: "Avrupa'daki gelişmelerin düzenli takip edilmesi medreselerin bozulma nedenidir.",
      answer: false,
      explanation: "Notta Avrupa'daki gelişmelerin takip edilememesi bozulma nedeni olarak verilmiştir.",
    },
  ],
};

const specializedMadrasasActivity: MatchingActivity = {
  id: "activity-specialized-madrasas",
  chapterId: "specialized-madrasas",
  mode: "matching",
  title: "İhtisas Medreseleri Oyunu",
  description: "İhtisas medreselerini yetiştirdiği görevle eşleştir.",
  pairs: [
    {
      id: "special-daruttip",
      left: "Darüttıp",
      right: "Hekim",
      explanation: "Darüttıp hekim yetiştiren ihtisas medresesidir.",
    },
    {
      id: "special-darulhadis",
      left: "Darülhadis",
      right: "Hadis öğreticisi",
      explanation: "Darülhadis hadis öğreticisi yetiştirir.",
    },
    {
      id: "special-darulkurra",
      left: "Darülkurra",
      right: "Kur'an öğreticisi",
      explanation: "Darülkurra Kur'an öğreticisi yetiştirir.",
    },
    {
      id: "special-darulhendese",
      left: "Darülhendese",
      right: "Mühendis",
      explanation: "Darülhendese mühendis yetiştirir.",
    },
  ],
};

const academicCareerActivity: MatchingActivity = {
  id: "activity-academic-career",
  chapterId: "academic-career",
  mode: "matching",
  title: "Akademik Kariyer Oyunu",
  description: "Medrese kariyer unvanlarını açıklamalarıyla eşleştir.",
  pairs: [
    {
      id: "career-muderris",
      left: "Müderris",
      right: "Öğretmen",
      explanation: "Müderris notta öğretmen olarak verilmiştir.",
    },
    {
      id: "career-mulazim",
      left: "Mülazım",
      right: "Atama bekleyen",
      explanation: "Mülazım atama bekleyen kişidir.",
    },
    {
      id: "career-muid",
      left: "Müid",
      right: "Mezun",
      explanation: "Müid notta mezun olarak verilmiştir.",
    },
    {
      id: "career-danismend",
      left: "Danişmend",
      right: "Bilgili öğrenci",
      explanation: "Danişmend bilgili öğrencidir.",
    },
    {
      id: "career-softa",
      left: "Softa",
      right: "Yeni başlayan öğrenci",
      explanation: "Softa yeni başlayan öğrencidir.",
    },
  ],
};

const scientistsActivity: MatchingActivity = {
  id: "activity-scientists",
  chapterId: "scientists",
  mode: "matching",
  title: "Bilim İnsanı Kart Oyunu",
  description: "Bilim insanlarını dönem, eser ve ayırt edici özellikleriyle eşleştir.",
  pairs: [
    {
      id: "scientist-yahsi-period",
      left: "Yahşi Fakih (dönem)",
      right: "Kuruluş dönemi",
      explanation: "Yahşi Fakih notta Kuruluş dönemi bilim insanı olarak geçer.",
    },
    {
      id: "scientist-yahsi-work",
      left: "Yahşi Fakih (eser)",
      right: "Yahşi Fakih Menakıbnamesi",
      explanation: "Yahşi Fakih, Osmanlı hakkında ilk tarihî bilgileri veren Yahşi Fakih Menakıbnamesi'ni yazmıştır.",
    },
    {
      id: "scientist-yahsi-feature",
      left: "Yahşi Fakih (özellik)",
      right: "Osmanlı hakkında ilk tarihî bilgileri vermiştir",
      explanation: "Notta Yahşi Fakih'in Osmanlı hakkında ilk tarihî bilgileri verdiği belirtilir.",
    },
    {
      id: "scientist-ahmedi-period",
      left: "Ahmedi (dönem)",
      right: "Kuruluş dönemi",
      explanation: "Ahmedi Kuruluş dönemi başlığında verilmiştir.",
    },
    {
      id: "scientist-ahmedi-work",
      left: "Ahmedi (eser)",
      right: "İskendername",
      explanation: "Ahmedi, Osmanlı Devleti'nin kuruluşu ile ilgili en eski kaynaklardan olan İskendername'yi yazmıştır.",
    },
    {
      id: "scientist-ahmedi-feature",
      left: "Ahmedi (özellik)",
      right: "Osmanlı kuruluşu hakkında en eski kaynaklardan birini yazmıştır",
      explanation: "Notta Ahmedi'nin Osmanlı kuruluşu hakkında bilgi veren en eski kaynaklardan birini yazdığı belirtilir.",
    },
    {
      id: "scientist-kadizade-period",
      left: "Kadızade-i Rumi (dönem)",
      right: "Kuruluş / Yükselme dönemi",
      explanation: "Kadızade-i Rumi Kuruluş / Yükselme dönemi başlığında verilmiştir.",
    },
    {
      id: "scientist-kadizade-teacher",
      left: "Kadızade-i Rumi (hocalık)",
      right: "Uluğ Bey ve Ali Kuşçu'nun hocasıdır",
      explanation: "Kadızade-i Rumi, Uluğ Bey ve Ali Kuşçu'nun hocasıdır.",
    },
    {
      id: "scientist-kadizade-field",
      left: "Kadızade-i Rumi (alan)",
      right: "Matematik ve astronomiyle ilgilenmiştir",
      explanation: "Kadızade-i Rumi matematik ve astronomi ile ilgilenmiştir.",
    },
    {
      id: "scientist-davud-period",
      left: "Davud-u Kayseri (dönem)",
      right: "Orhan Bey dönemi",
      explanation: "Davud-u Kayseri Orhan Bey döneminde verilmiştir.",
    },
    {
      id: "scientist-davud-feature",
      left: "Davud-u Kayseri (özellik)",
      right: "İlk müderris",
      explanation: "Davud-u Kayseri Osmanlı Devleti'nin ilk müderrisidir.",
    },
    {
      id: "scientist-molla-period",
      left: "Molla Fenari (dönem)",
      right: "II. Murat dönemi",
      explanation: "Molla Fenari II. Murat döneminde verilmiştir.",
    },
    {
      id: "scientist-molla-feature",
      left: "Molla Fenari (özellik)",
      right: "İlk şeyhülislam",
      explanation: "Molla Fenari Osmanlı Devleti'nin ilk şeyhülislamıdır.",
    },
    {
      id: "scientist-altuncuzade-period",
      left: "Altuncuzade (dönem)",
      right: "Fatih Sultan Mehmet dönemi",
      explanation: "Altuncuzade Fatih Sultan Mehmet dönemi başlığında verilmiştir.",
    },
    {
      id: "scientist-altuncuzade-feature",
      left: "Altuncuzade (özellik)",
      right: "İdrar yolları hastalıklarıyla ilgilenmiştir",
      explanation: "Altuncuzade idrar yolları hastalıkları ve tedavisi ile uğraşmıştır.",
    },
    {
      id: "scientist-aksemseddin-period",
      left: "Akşemseddin (dönem)",
      right: "Fatih Sultan Mehmet dönemi",
      explanation: "Akşemseddin Fatih Sultan Mehmet dönemi başlığında verilmiştir.",
    },
    {
      id: "scientist-aksemseddin-work",
      left: "Akşemseddin (eser)",
      right: "Risaletü'n Nuriye ve Maddetü'l Hayat",
      explanation: "Akşemseddin'in Risaletü'n Nuriye ve Maddetü'l Hayat adlı eserleri vardır.",
    },
    {
      id: "scientist-aksemseddin-microbe",
      left: "Akşemseddin (özellik)",
      right: "Mikrop teorisini bulan ilk araştırmacı ve Mikrobiyolojinin Babası",
      explanation: "Akşemseddin mikrop teorisini bulan ilk araştırmacı ve Mikrobiyolojinin Babası olarak verilmiştir.",
    },
    {
      id: "scientist-sabuncu-period",
      left: "Sabuncuoğlu Şerafettin (dönem)",
      right: "Fatih Sultan Mehmet dönemi",
      explanation: "Sabuncuoğlu Şerafettin Fatih Sultan Mehmet döneminde verilmiştir.",
    },
    {
      id: "scientist-sabuncu-work",
      left: "Sabuncuoğlu Şerafettin (eser)",
      right: "Kitabü'l Cerrahiyyetü'l Haniyye ve Mücerrebname",
      explanation: "Sabuncuoğlu Şerafettin bu iki eseri yazmıştır.",
    },
    {
      id: "scientist-sabuncu-feature",
      left: "Sabuncuoğlu Şerafettin (özellik)",
      right: "Türk Plastik Cerrahisinin Babası ve ilk/en ünlü Osmanlı cerrahı",
      explanation: "Notta Türk Plastik Cerrahisinin Babası kabul edildiği ve ilk/en ünlü Osmanlı cerrahı olduğu belirtilir.",
    },
    {
      id: "scientist-ali-period",
      left: "Ali Kuşçu (dönem)",
      right: "Fatih Sultan Mehmet dönemi",
      explanation: "Ali Kuşçu Fatih Sultan Mehmet döneminde verilmiştir.",
    },
    {
      id: "scientist-ali-work",
      left: "Ali Kuşçu (eser)",
      right: "er-Risaletü'l Fethiyye",
      explanation: "Ali Kuşçu Fatih'e er-Risaletü'l Fethiyye adlı eserini sunmuştur.",
    },
    {
      id: "scientist-ali-feature",
      left: "Ali Kuşçu (özellik)",
      right: "Türk astronomu ve matematikçi; İstanbul'un enlem ve boylamını hesaplamıştır",
      explanation: "Ali Kuşçu Türk astronomu ve matematikçidir; İstanbul'un enlem ve boylamını hesaplamıştır.",
    },
    {
      id: "scientist-piri-period",
      left: "Piri Reis (dönem)",
      right: "Yavuz Sultan Selim dönemi",
      explanation: "Piri Reis Yavuz Sultan Selim döneminde verilmiştir.",
    },
    {
      id: "scientist-piri-work",
      left: "Piri Reis (eser)",
      right: "Kitab-ı Bahriye",
      explanation: "Piri Reis Kitab-ı Bahriye'yi yazmıştır.",
    },
    {
      id: "scientist-piri-feature",
      left: "Piri Reis (özellik)",
      right: "İlk dünya haritasını çizmiştir",
      explanation: "Piri Reis ilk dünya haritasını çizmiştir.",
    },
    {
      id: "scientist-seydi-period",
      left: "Seydi Ali Reis (dönem)",
      right: "Kanuni Sultan Süleyman dönemi",
      explanation: "Seydi Ali Reis Kanuni Sultan Süleyman döneminde verilmiştir.",
    },
    {
      id: "scientist-seydi-work",
      left: "Seydi Ali Reis (eser)",
      right: "Miratü'l Memalik ve Kitabü'l Muhit",
      explanation: "Seydi Ali Reis Miratü'l Memalik ve Kitabü'l Muhit adlı eserleri yazmıştır.",
    },
    {
      id: "scientist-seydi-feature",
      left: "Seydi Ali Reis (özellik)",
      right: "Denizcilik ve coğrafya eserleri yazmıştır",
      explanation: "Seydi Ali Reis'in eserleri denizcilik ve coğrafya alanıyla ilişkilidir.",
    },
    {
      id: "scientist-ebu-period",
      left: "Ebu Suud Efendi (dönem)",
      right: "Kanuni Sultan Süleyman dönemi",
      explanation: "Ebu Suud Efendi Kanuni Sultan Süleyman döneminde verilmiştir.",
    },
    {
      id: "scientist-ebu-feature",
      left: "Ebu Suud Efendi (özellik)",
      right: "En ünlü şeyhülislam; fıkıhla ilgilenmiştir",
      explanation: "Ebu Suud Efendi Osmanlı Devleti'nin en ünlü şeyhülislamıdır ve fıkıhla ilgilenmiştir.",
    },
    {
      id: "scientist-takiyuddin-period",
      left: "Takiyüddin Mehmet (dönem)",
      right: "III. Murat dönemi",
      explanation: "Takiyüddin Mehmet III. Murat döneminde verilmiştir.",
    },
    {
      id: "scientist-takiyuddin-work",
      left: "Takiyüddin Mehmet (eser)",
      right: "Sidretü'l Münteha fi Tashihi'l Eflak",
      explanation: "Takiyüddin Mehmet bu eserde Güneş ve Ay cetvellerini ihtiva etmiştir.",
    },
    {
      id: "scientist-takiyuddin-feature",
      left: "Takiyüddin Mehmet (özellik)",
      right: "İlk rasathaneyi kurmuş; otomatik makineler, mekanik saatler ve astronomiyle ilgilenmiştir",
      explanation: "Takiyüddin Mehmet ilk rasathaneyi kurmuş ve otomatik makineler, mekanik saatler, astronomiyle ilgilenmiştir.",
    },
    {
      id: "scientist-evliya-period",
      left: "Evliya Çelebi (dönem)",
      right: "XVII. yüzyıl",
      explanation: "Evliya Çelebi XVII. yüzyıl başlığında verilmiştir.",
    },
    {
      id: "scientist-evliya-work",
      left: "Evliya Çelebi (eser)",
      right: "Seyahatname",
      explanation: "Evliya Çelebi Seyahatname'yi yazmıştır.",
    },
    {
      id: "scientist-evliya-feature",
      left: "Evliya Çelebi (özellik)",
      right: "En önemli seyyah",
      explanation: "Evliya Çelebi Osmanlı Devleti'nin en önemli seyyahıdır.",
    },
    {
      id: "scientist-katip-period",
      left: "Katip Çelebi (dönem)",
      right: "XVII. yüzyıl",
      explanation: "Katip Çelebi XVII. yüzyıl başlığında verilmiştir.",
    },
    {
      id: "scientist-katip-work",
      left: "Katip Çelebi (eser)",
      right: "Keşfü'z Zünun ve Cihannüma",
      explanation: "Katip Çelebi'nin Keşfü'z Zünun ve Cihannüma adlı eserleri vardır.",
    },
    {
      id: "scientist-katip-feature",
      left: "Katip Çelebi (özellik)",
      right: "Bibliyograf, seyyah ve coğrafyacı",
      explanation: "Katip Çelebi bibliyograf, seyyah ve coğrafyacıdır.",
    },
    {
      id: "scientist-yanyali-period",
      left: "Yanyalı Esat Efendi (dönem)",
      right: "XVIII. yüzyıl",
      explanation: "Yanyalı Esat Efendi XVIII. yüzyıl başlığında verilmiştir.",
    },
    {
      id: "scientist-yanyali-feature",
      left: "Yanyalı Esat Efendi (özellik)",
      right: "Muallim-i Salis",
      explanation: "Dönemin alimleri Yanyalı Esat Efendi'ye Muallim-i Salis demiştir.",
    },
    {
      id: "scientist-hezarfen-period",
      left: "Hezarfen Ahmet Çelebi (dönem)",
      right: "IV. Murat dönemi",
      explanation: "Hezarfen Ahmet Çelebi IV. Murat döneminde verilmiştir.",
    },
    {
      id: "scientist-hezarfen-feature",
      left: "Hezarfen Ahmet Çelebi (özellik)",
      right: "İlk başarılı uçuş",
      explanation: "Hezarfen Ahmet Çelebi insanlık tarihinin ilk başarılı uçuşunu yapmıştır.",
    },
    {
      id: "scientist-lagari-period",
      left: "Lagari Hasan Çelebi (dönem)",
      right: "IV. Murat dönemi",
      explanation: "Lagari Hasan Çelebi IV. Murat döneminde verilmiştir.",
    },
    {
      id: "scientist-lagari-feature",
      left: "Lagari Hasan Çelebi (özellik)",
      right: "Roketle uçan ilk insan",
      explanation: "Lagari Hasan Çelebi dünya tarihinin roketle uçan ilk insanıdır.",
    },
    {
      id: "scientist-koci-period",
      left: "Koçi Bey (dönem)",
      right: "IV. Murat dönemi",
      explanation: "Koçi Bey IV. Murat döneminde verilmiştir.",
    },
    {
      id: "scientist-koci-work",
      left: "Koçi Bey (eser)",
      right: "Risale",
      explanation: "Koçi Bey IV. Murat'a devletin gidişatıyla ilgili ünlü risalesini sunmuştur.",
    },
    {
      id: "scientist-naima-period",
      left: "Naima (dönem)",
      right: "XVIII. yüzyıl",
      explanation: "Naima XVIII. yüzyıl başlığında verilmiştir.",
    },
    {
      id: "scientist-naima-feature",
      left: "Naima (özellik)",
      right: "İlk resmî tarih yazarı / vakanuvis",
      explanation: "Naima ilk resmî tarih yazarıdır, yani vakanuvistir.",
    },
    {
      id: "scientist-erzurumlu-period",
      left: "Erzurumlu İbrahim Hakkı (dönem)",
      right: "XVIII. yüzyıl",
      explanation: "Erzurumlu İbrahim Hakkı XVIII. yüzyıl başlığında verilmiştir.",
    },
    {
      id: "scientist-erzurumlu-work",
      left: "Erzurumlu İbrahim Hakkı (eser)",
      right: "Marifetname",
      explanation: "Erzurumlu İbrahim Hakkı Marifetname adlı eseri yazmıştır.",
    },
    {
      id: "scientist-erzurumlu-feature",
      left: "Erzurumlu İbrahim Hakkı (özellik)",
      right: "Matematik, astronomi ve astroloji",
      explanation: "Erzurumlu İbrahim Hakkı matematik, astronomi ve astroloji ile uğraşmıştır.",
    },
    {
      id: "scientist-humbaraci-period",
      left: "Humbaracı Ahmet Paşa (dönem)",
      right: "I. Mahmut dönemi",
      explanation: "Humbaracı Ahmet Paşa I. Mahmut döneminde verilmiştir.",
    },
    {
      id: "scientist-humbaraci-feature",
      left: "Humbaracı Ahmet Paşa (özellik)",
      right: "Batı'dan getirilen ilk teknik uzman",
      explanation: "Humbaracı Ahmet Paşa Batı'dan getirilen ilk teknik uzmandır.",
    },
    {
      id: "scientist-fatin-period",
      left: "Mehmet Fatin Gökmen (dönem)",
      right: "XIX / XX. yüzyıl",
      explanation: "Mehmet Fatin Gökmen XIX. / XX. yüzyıl başlığında verilmiştir.",
    },
    {
      id: "scientist-fatin-feature",
      left: "Mehmet Fatin Gökmen (özellik)",
      right: "Takvim çalışmaları",
      explanation: "Mehmet Fatin Gökmen takvim çalışmaları ile ünlüdür.",
    },
    {
      id: "scientist-behcet-period",
      left: "Mustafa Behçet Efendi (dönem)",
      right: "XIX. yüzyıl",
      explanation: "Mustafa Behçet Efendi XIX. yüzyıl başlığında verilmiştir.",
    },
    {
      id: "scientist-behcet-feature",
      left: "Mustafa Behçet Efendi (özellik)",
      right: "Tıbbiye-i Şahane başhekimi",
      explanation: "Mustafa Behçet Efendi Tıbbiye-i Şahane'nin başhekimliğini yapmıştır.",
    },
    {
      id: "scientist-cevdet-period",
      left: "Ahmet Cevdet Paşa (dönem)",
      right: "Sultan Abdülmecit dönemi",
      explanation: "Ahmet Cevdet Paşa Sultan Abdülmecit döneminde verilmiştir.",
    },
    {
      id: "scientist-cevdet-work",
      left: "Ahmet Cevdet Paşa (eser)",
      right: "Kısas-ı Enbiya, Mecelle ve Tarih-i Cevdet",
      explanation: "Ahmet Cevdet Paşa'nın Kısas-ı Enbiya, Mecelle ve Tarih-i Cevdet adlı eserleri vardır.",
    },
    {
      id: "scientist-cevdet-feature",
      left: "Ahmet Cevdet Paşa (özellik)",
      right: "Mecelle ve Tarih-i Cevdet yazarı",
      explanation: "Ahmet Cevdet Paşa Mecelle ve Tarih-i Cevdet yazarıdır.",
    },
  ],
};

const educationScienceTrapsActivity: TrueFalseActivity = {
  id: "activity-education-science-traps",
  chapterId: "education-science-traps",
  mode: "truefalse",
  title: "KPSS Tuzakları Doğru-Yanlış Oyunu",
  description: "Eğitim ve bilim insanlarıyla ilgili kritik tuzakları çöz.",
  questions: [
    {
      id: "edu-trap-sibyan",
      statement: "Sıbyan Mektebi eğitimin ilk basamağıdır.",
      answer: true,
      explanation: "Sıbyan Mektebi eğitimin ilk basamağıdır.",
    },
    {
      id: "edu-trap-amin",
      statement: "Âmin Alayı okulun ilk gününe yapılan törendir.",
      answer: true,
      explanation: "Okulun ilk gününe yapılan törene Âmin Alayı denmiştir.",
    },
    {
      id: "edu-trap-bed-besmele",
      statement: "Bed-i Besmele şehzadelerin yaptığı ilk derstir.",
      answer: true,
      explanation: "Şehzadegan Mektebi'nde yapılan ilk derse Bed-i Besmele denmiştir.",
    },
    {
      id: "edu-trap-first-medrese",
      statement: "İlk medrese İznik Medresesi'dir.",
      answer: true,
      explanation: "İlk medrese Orhan Bey döneminde açılan İznik Medresesi'dir.",
    },
    {
      id: "edu-trap-first-muderris",
      statement: "İlk müderris Davud-u Kayseri'dir.",
      answer: true,
      explanation: "Medreseye atanan ilk müderris Davud-u Kayseri'dir.",
    },
    {
      id: "edu-trap-sahn-kanuni",
      statement: "Sahn-ı Seman Medreseleri Kanuni döneminde açılmıştır.",
      answer: false,
      explanation: "Sahn-ı Seman Medreseleri Fatih döneminde açılmıştır.",
    },
    {
      id: "edu-trap-suleymaniye",
      statement: "Süleymaniye Medreseleri Kanuni döneminde açılmıştır.",
      answer: true,
      explanation: "Süleymaniye Medreseleri Kanuni döneminde açılmıştır.",
    },
    {
      id: "edu-trap-darulhendese",
      statement: "Darülhendese hekim yetiştirir.",
      answer: false,
      explanation: "Darülhendese mühendis; Darüttıp hekim yetiştirir.",
    },
    {
      id: "edu-trap-daruttip",
      statement: "Darüttıp hekim yetiştirir.",
      answer: true,
      explanation: "Darüttıp hekim yetiştirir.",
    },
    {
      id: "edu-trap-muderris",
      statement: "Müderris öğretmendir.",
      answer: true,
      explanation: "Müderris notta öğretmen olarak verilmiştir.",
    },
    {
      id: "edu-trap-softa",
      statement: "Softa atama bekleyen kişidir.",
      answer: false,
      explanation: "Softa yeni başlayan öğrenci; Mülazım atama bekleyendir.",
    },
    {
      id: "edu-trap-yahsi",
      statement: "Yahşi Fakih, Yahşi Fakih Menakıbnamesi'ni yazmıştır.",
      answer: true,
      explanation: "Yahşi Fakih Menakıbnamesi Yahşi Fakih'e aittir.",
    },
    {
      id: "edu-trap-ahmedi",
      statement: "Ahmedi, İskendername'yi yazmıştır.",
      answer: true,
      explanation: "Ahmedi İskendername'yi yazmıştır.",
    },
    {
      id: "edu-trap-molla",
      statement: "Molla Fenari ilk şeyhülislamdır.",
      answer: true,
      explanation: "Molla Fenari Osmanlı Devleti'nin ilk şeyhülislamıdır.",
    },
    {
      id: "edu-trap-aksemseddin",
      statement: "Akşemseddin Mikrobiyolojinin Babasıdır.",
      answer: true,
      explanation: "Notta Akşemseddin Mikrobiyolojinin Babası olarak verilmiştir.",
    },
    {
      id: "edu-trap-sabuncu",
      statement: "Sabuncuoğlu Şerafettin Türk Plastik Cerrahisinin Babası kabul edilir.",
      answer: true,
      explanation: "Notta Sabuncuoğlu Şerafettin bu şekilde verilmiştir.",
    },
    {
      id: "edu-trap-ali",
      statement: "Ali Kuşçu İstanbul'un enlem ve boylamını hesaplamıştır.",
      answer: true,
      explanation: "Ali Kuşçu İstanbul'un enlem ve boylamını hesaplamıştır.",
    },
    {
      id: "edu-trap-piri",
      statement: "Piri Reis Kitab-ı Bahriye'yi yazmıştır.",
      answer: true,
      explanation: "Piri Reis Kitab-ı Bahriye'yi yazmıştır.",
    },
    {
      id: "edu-trap-takiyuddin",
      statement: "Takiyüddin Mehmet ilk rasathaneyi kurmuştur.",
      answer: true,
      explanation: "Takiyüddin Mehmet Osmanlı Devleti'nin ilk rasathanesini kurmuştur.",
    },
    {
      id: "edu-trap-evliya",
      statement: "Evliya Çelebi Seyahatname'yi yazmıştır.",
      answer: true,
      explanation: "Evliya Çelebi Seyahatname'yi yazmıştır.",
    },
    {
      id: "edu-trap-naima",
      statement: "Naima ilk resmî tarih yazarıdır.",
      answer: true,
      explanation: "Naima ilk resmî tarih yazarıdır, yani vakanuvistir.",
    },
    {
      id: "edu-trap-last-vakanuvis",
      statement: "Son vakanuvis Abdurrahman Şeref Efendi'dir.",
      answer: true,
      explanation: "Notta son vakanuvisin Abdurrahman Şeref Efendi olduğu belirtilir.",
    },
    {
      id: "edu-trap-humbaraci",
      statement: "Humbaracı Ahmet Paşa'nın gerçek adı Comte de Bonneval'dir.",
      answer: true,
      explanation: "Humbaracı Ahmet Paşa'nın gerçek adı Comte de Bonneval'dir.",
    },
    {
      id: "edu-trap-cevdet",
      statement: "Ahmet Cevdet Paşa Mecelle'yi yazmıştır.",
      answer: true,
      explanation: "Ahmet Cevdet Paşa'nın eserleri arasında Mecelle yer alır.",
    },
  ],
};

export const educationScienceActivities: Record<EducationScienceChapterId, Activity> = {
  "education-system": educationSystemActivity,
  "formal-education": formalEducationActivity,
  "palace-education": palaceEducationActivity,
  "military-education": militaryEducationActivity,
  madrasas: madrasasActivity,
  "madrasas-decline": madrasasDeclineActivity,
  "specialized-madrasas": specializedMadrasasActivity,
  "academic-career": academicCareerActivity,
  scientists: scientistsActivity,
  "education-science-traps": educationScienceTrapsActivity,
};

export const educationScienceBadges = [
  "Sıbyan Talebesi",
  "Medrese Âlimi",
  "Sahn-ı Seman Uzmanı",
  "İhtisas Medresesi Bilgesi",
  "Akademik Basamak Ustası",
  "Bilim İnsanları Hafızı",
  "Eser Avcısı",
  "Eğitim ve Bilim KPSS Uzmanı",
] as const;
