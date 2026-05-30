import { ArrowLeft } from "lucide-react";
import { ChapterDefinition } from "../types";
import { ProgressBar } from "./ProgressBar";

interface GameHeaderProps {
  chapter: ChapterDefinition;
  title: string;
  description: string;
  progressValue: number;
  progressMax: number;
  onBack: () => void;
}

export function GameHeader({
  chapter,
  title,
  description,
  progressValue,
  progressMax,
  onBack,
}: GameHeaderProps) {
  return (
    <header className="space-y-5">
      <button
        className="inline-flex items-center gap-2 rounded-md border border-stone-700 bg-stone-900/80 px-3 py-2 text-sm text-stone-200 transition hover:border-amber-400 hover:text-amber-100"
        onClick={onBack}
        type="button"
      >
        <ArrowLeft className="h-4 w-4" />
        Ana menü
      </button>
      <div className={`rounded-lg border p-5 shadow-glow ${chapter.tone}`}>
        <p className="text-sm font-semibold uppercase tracking-wide text-stone-300">{chapter.title}</p>
        <h1 className="mt-2 text-2xl font-bold text-stone-50 sm:text-3xl">{title}</h1>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-300">{description}</p>
      </div>
      <ProgressBar value={progressValue} max={progressMax} label="Bölüm ilerlemesi" />
    </header>
  );
}
