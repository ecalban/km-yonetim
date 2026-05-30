import { BookOpen, CheckCircle2, Flame, RotateCcw, ShieldCheck, Trophy, XCircle } from "lucide-react";
import { badges, chapterDefinitions } from "../data/ottomanData";
import type { ChapterId, ProgressState } from "../types";
import { ProgressBar } from "./ProgressBar";

interface HomeScreenProps {
  progress: ProgressState;
  level: number;
  levelProgress: number;
  onSelectChapter: (chapterId: ChapterId) => void;
  onReset: () => void;
}

export function HomeScreen({ progress, level, levelProgress, onSelectChapter, onReset }: HomeScreenProps) {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-7xl flex-col gap-8 px-4 py-6 sm:px-6 lg:px-8">
      <section className="grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-lg border border-amber-500/25 bg-stone-950/80 p-6 shadow-glow">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-md border border-amber-400/30 bg-amber-400/10 px-3 py-1 text-sm font-semibold text-amber-200">
              KPSS Osmanlı Kültür ve Medeniyeti
            </span>
            <span className="rounded-md border border-teal-400/30 bg-teal-400/10 px-3 py-1 text-sm text-teal-100">
              Tarayıcıda çalışır
            </span>
          </div>
          <h1 className="mt-5 text-4xl font-black tracking-normal text-stone-50 sm:text-5xl">
            Payitaht Akademisi
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-7 text-stone-300">
            Notlardaki Osmanlı devlet yönetimi bilgilerini eşleştirme, sıralama, görevli bulma ve tekrar
            sistemiyle çalış.
          </p>
        </div>

        <div className="rounded-lg border border-stone-700 bg-stone-950/80 p-5 shadow-glow">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm text-stone-400">Seviye</p>
              <p className="text-3xl font-bold text-stone-50">{level}</p>
            </div>
            <ShieldCheck className="h-10 w-10 text-amber-300" />
          </div>
          <div className="mt-5">
            <ProgressBar value={levelProgress} max={100} label="Sonraki seviye" />
          </div>
          <div className="mt-5 grid grid-cols-2 gap-3">
            <Stat icon={<Trophy className="h-4 w-4" />} label="XP" value={progress.xp} />
            <Stat icon={<Flame className="h-4 w-4" />} label="Seri" value={progress.streak} />
            <Stat icon={<CheckCircle2 className="h-4 w-4" />} label="Doğru" value={progress.correct} />
            <Stat icon={<XCircle className="h-4 w-4" />} label="Yanlış" value={progress.wrong} />
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {chapterDefinitions.map((chapter) => {
          const isCompleted = progress.completedChapters.includes(chapter.id);
          const mistakeCount = chapter.id === "mistakes" ? progress.mistakeIds.length : undefined;

          return (
            <button
              className={`group min-h-40 rounded-lg border p-5 text-left shadow-glow transition hover:-translate-y-0.5 hover:border-amber-300 ${chapter.tone}`}
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              type="button"
            >
              <div className="flex items-start justify-between gap-4">
                <BookOpen className="h-7 w-7 shrink-0 text-stone-100 transition group-hover:text-amber-200" />
                <span className="rounded-md border border-stone-500/30 bg-stone-950/50 px-2 py-1 text-xs font-semibold uppercase tracking-wide text-stone-300">
                  {chapter.mode === "review" ? `${mistakeCount ?? 0} yanlış` : isCompleted ? "Tamamlandı" : "Başla"}
                </span>
              </div>
              <h2 className="mt-5 text-xl font-bold text-stone-50">{chapter.title}</h2>
              <p className="mt-2 text-sm leading-6 text-stone-300">{chapter.subtitle}</p>
              {chapter.badge && (
                <p className="mt-4 text-xs font-semibold uppercase tracking-wide text-amber-200">
                  Rozet: {chapter.badge}
                </p>
              )}
            </button>
          );
        })}
      </section>

      <section className="rounded-lg border border-stone-700 bg-stone-950/70 p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-stone-400">Rozetler</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {badges.map((badge) => (
                <span
                  className={`rounded-md border px-3 py-2 text-sm ${
                    progress.badges.includes(badge)
                      ? "border-amber-400/50 bg-amber-400/10 text-amber-100"
                      : "border-stone-700 bg-stone-900 text-stone-500"
                  }`}
                  key={badge}
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>
          <button
            className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-700 bg-stone-900 px-4 py-3 text-sm font-semibold text-stone-100 transition hover:border-red-300 hover:text-red-100"
            onClick={onReset}
            type="button"
          >
            <RotateCcw className="h-4 w-4" />
            İlerlemeyi sıfırla
          </button>
        </div>
      </section>
    </main>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: number }) {
  return (
    <div className="rounded-lg border border-stone-700 bg-stone-900/80 p-3">
      <div className="flex items-center gap-2 text-stone-400">
        {icon}
        <span className="text-xs font-semibold uppercase tracking-wide">{label}</span>
      </div>
      <p className="mt-2 text-2xl font-bold text-stone-50">{value}</p>
    </div>
  );
}
