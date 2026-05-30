export type BadgeName =
  | "Divan Katibi"
  | "Saray Rehberi"
  | "Taşra Uzmanı"
  | "Veraset Bilgesi"
  | "KPSS Tuzak Avcısı"
  | "Kadı Adayı"
  | "Mahkeme Uzmanı"
  | "Hakkaniyet Bilgesi"
  | "Vakıf Kurucusu"
  | "Sosyal Kurum Hafızı"
  | "Seyfiye-İlmiye-Kalemiye Ustası"
  | "Hukuk ve Sosyal Hayat Uzmanı"
  | "Yeniçeri Adayı"
  | "Kapıkulu Uzmanı"
  | "Eyalet Askerleri Bilgesi"
  | "Donanma Reisi"
  | "Toprak Yönetimi Uzmanı"
  | "Dirlik Sistemi Ustası"
  | "Çifthane Bilgesi"
  | "Askeri ve Toprak KPSS Avcısı";

export type ChapterId =
  | "foundations"
  | "succession"
  | "prince"
  | "capitals"
  | "palaces"
  | "divan"
  | "provincial"
  | "province-system"
  | "traps"
  | "law-system"
  | "courts"
  | "qadi-duties"
  | "millet-system"
  | "equity-circle"
  | "waqf"
  | "social-institutions"
  | "administrator-groups"
  | "law-social-traps"
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
  | "mistakes";

export type PlayableChapterId = Exclude<ChapterId, "mistakes">;

export type GameMode =
  | "matching"
  | "timeline"
  | "divan"
  | "classification"
  | "palace"
  | "truefalse"
  | "review";

export interface ChapterDefinition {
  id: ChapterId;
  title: string;
  subtitle: string;
  mode: GameMode;
  badge?: BadgeName;
  tone: string;
}

export interface MatchPair {
  id: string;
  left: string;
  right: string;
  explanation: string;
}

export interface TimelineEvent {
  id: string;
  label: string;
  year?: number;
  detail: string;
  order: number;
}

export interface TimelineQuestion {
  id: string;
  title: string;
  prompt: string;
  events: TimelineEvent[];
  explanation: string;
}

export interface DivanScenario {
  id: string;
  prompt: string;
  answer: string;
  options: string[];
  explanation: string;
}

export interface ClassificationCategory {
  id: string;
  title: string;
  description: string;
}

export interface ClassificationItem {
  id: string;
  label: string;
  categoryId: string;
  explanation: string;
}

export interface TrueFalseQuestion {
  id: string;
  statement: string;
  answer: boolean;
  explanation: string;
}

export interface MatchingActivity {
  id: string;
  chapterId: PlayableChapterId;
  mode: "matching";
  title: string;
  description: string;
  pairs: MatchPair[];
}

export interface TimelineActivity {
  id: string;
  chapterId: PlayableChapterId;
  mode: "timeline";
  title: string;
  description: string;
  questions: TimelineQuestion[];
}

export interface DivanActivity {
  id: string;
  chapterId: PlayableChapterId;
  mode: "divan";
  title: string;
  description: string;
  scenarios: DivanScenario[];
}

export interface ClassificationActivity {
  id: string;
  chapterId: PlayableChapterId;
  mode: "classification" | "palace";
  title: string;
  description: string;
  categories: ClassificationCategory[];
  items: ClassificationItem[];
}

export interface TrueFalseActivity {
  id: string;
  chapterId: PlayableChapterId;
  mode: "truefalse";
  title: string;
  description: string;
  questions: TrueFalseQuestion[];
}

export type Activity =
  | MatchingActivity
  | TimelineActivity
  | DivanActivity
  | ClassificationActivity
  | TrueFalseActivity;

export interface ReviewQuestion {
  id: string;
  prompt: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
}

export interface ProgressState {
  xp: number;
  correct: number;
  wrong: number;
  streak: number;
  completedChapters: ChapterId[];
  badges: BadgeName[];
  mistakeIds: string[];
}

export interface AnswerResult {
  xpDelta: number;
  bonus: number;
  nextStreak: number;
}

export interface SessionStats {
  correct: number;
  wrong: number;
}
