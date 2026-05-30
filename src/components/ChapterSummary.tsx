import { Home, RotateCcw, Target, Trophy } from "lucide-react";
import type { BadgeName, SessionStats } from "../types";

interface ChapterSummaryProps {
  title: string;
  stats: SessionStats;
  badge?: BadgeName;
  mistakeCount: number;
  onRestart: () => void;
  onHome: () => void;
  onReview: () => void;
}

export function ChapterSummary({
  title,
  stats,
  badge,
  mistakeCount,
  onRestart,
  onHome,
  onReview,
}: ChapterSummaryProps) {
  return (
    <section className="mx-auto max-w-3xl space-y-6 rounded-lg border border-amber-500/25 bg-stone-950/80 p-6 shadow-glow">
      <div>
        <p className="text-sm font-semibold uppercase tracking-wide text-amber-300">Bölüm tamamlandı</p>
        <h2 className="mt-2 text-3xl font-bold text-stone-50">{title}</h2>
      </div>
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-emerald-500/25 bg-emerald-500/10 p-4">
          <p className="text-sm text-emerald-200">Doğru</p>
          <p className="mt-1 text-3xl font-bold text-emerald-100">{stats.correct}</p>
        </div>
        <div className="rounded-lg border border-red-500/25 bg-red-500/10 p-4">
          <p className="text-sm text-red-200">Yanlış</p>
          <p className="mt-1 text-3xl font-bold text-red-100">{stats.wrong}</p>
        </div>
        <div className="rounded-lg border border-amber-500/25 bg-amber-500/10 p-4">
          <p className="text-sm text-amber-200">Yanlışlarım</p>
          <p className="mt-1 text-3xl font-bold text-amber-100">{mistakeCount}</p>
        </div>
      </div>
      {badge && (
        <div className="flex items-center gap-3 rounded-lg border border-teal-400/30 bg-teal-500/10 p-4 text-teal-100">
          <Trophy className="h-6 w-6 shrink-0" />
          <span>
            Rozet kazanıldı: <strong>{badge}</strong>
          </span>
        </div>
      )}
      <div className="grid gap-3 sm:grid-cols-3">
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md bg-amber-400 px-4 py-3 text-sm font-semibold text-stone-950 transition hover:bg-amber-300"
          onClick={onRestart}
          type="button"
        >
          <RotateCcw className="h-4 w-4" />
          Tekrar oyna
        </button>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md border border-stone-700 bg-stone-900 px-4 py-3 text-sm font-semibold text-stone-100 transition hover:border-teal-300"
          onClick={onHome}
          type="button"
        >
          <Home className="h-4 w-4" />
          Ana menüye dön
        </button>
        <button
          className="inline-flex items-center justify-center gap-2 rounded-md border border-red-400/40 bg-red-500/10 px-4 py-3 text-sm font-semibold text-red-100 transition hover:border-red-300 disabled:cursor-not-allowed disabled:opacity-50"
          disabled={mistakeCount === 0}
          onClick={onReview}
          type="button"
        >
          <Target className="h-4 w-4" />
          Yanlışlarımı çalış
        </button>
      </div>
    </section>
  );
}
